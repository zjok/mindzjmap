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
  hexToRgba(hex, alpha) {
    const h = hex.replace("#", "");
    const r = parseInt(h.substring(0, 2), 16);
    const g = parseInt(h.substring(2, 4), 16);
    const b = parseInt(h.substring(4, 6), 16);
    if (isNaN(r) || isNaN(g) || isNaN(b))
      return `rgba(59,130,246,${alpha})`;
    return `rgba(${r},${g},${b},${alpha})`;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL01pbmRNYXBWaWV3LnRzIiwgInNyYy90eXBlcy50cyIsICJzcmMvaTE4bi50cyIsICJzcmMvU3R5bGVQYW5lbFZpZXcudHMiLCAic3JjL1NldHRpbmdzVGFiLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBzcmMvbWFpbi50c1xyXG5pbXBvcnQgeyBQbHVnaW4sIFdvcmtzcGFjZUxlYWYsIFRGb2xkZXIsIE1lbnUgfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuaW1wb3J0IHsgTWluZE1hcFZpZXcgfSBmcm9tIFwiLi9NaW5kTWFwVmlld1wiO1xyXG5pbXBvcnQgeyBTdHlsZVBhbmVsVmlldyB9IGZyb20gXCIuL1N0eWxlUGFuZWxWaWV3XCI7XHJcbmltcG9ydCB7IE1pbmRNYXBTZXR0aW5nVGFiIH0gZnJvbSBcIi4vU2V0dGluZ3NUYWJcIjtcclxuaW1wb3J0IHsgc2V0TGFuZywgdCB9IGZyb20gXCIuL2kxOG5cIjtcclxuaW1wb3J0IHtcclxuICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgVklFV19UWVBFX01JTkRNQVBfU1RZTEUsXHJcbiAgICBNSU5ETUFQX0ZJTEVfRVhURU5TSU9OLFxyXG4gICAgTWluZE1hcFN0eWxlLFxyXG4gICAgUGx1Z2luU2V0dGluZ3MsXHJcbiAgICBERUZBVUxUX1NFVFRJTkdTLFxyXG4gICAgREVGQVVMVF9TVFlMRSxcclxuICAgIERFRkFVTFRfS0VZQklORElOR1MsXHJcbiAgICBUb29sYmFyVGhlbWVDb2xvcnMsXHJcbiAgICBERUZBVUxUX1RPT0xCQVJfTElHSFQsXHJcbiAgICBERUZBVUxUX1RPT0xCQVJfREFSSyxcclxufSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuaW50ZXJmYWNlIE1lbnVXaXRoSXRlbXMgZXh0ZW5kcyBNZW51IHtcclxuICAgIGl0ZW1zOiBBcnJheTx7IHNlY3Rpb24/OiBzdHJpbmc7IHRpdGxlRWw/OiBIVE1MRWxlbWVudDsgdGl0bGU/OiBzdHJpbmcgfT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmROb2RlUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcclxuICAgIHNldHRpbmdzOiBQbHVnaW5TZXR0aW5ncyA9IHtcclxuICAgICAgICAuLi5ERUZBVUxUX1NFVFRJTkdTLFxyXG4gICAgICAgIHN0eWxlOiB7IC4uLkRFRkFVTFRfU1RZTEUgfSxcclxuICAgICAgICBrZXlCaW5kaW5nczogeyAuLi5ERUZBVUxUX0tFWUJJTkRJTkdTIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIG9ubG9hZCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG4gICAgICAgIHNldExhbmcodGhpcy5zZXR0aW5ncy5sYW5ndWFnZSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV4dGVuc2lvbnMoW01JTkRNQVBfRklMRV9FWFRFTlNJT05dLCBWSUVXX1RZUEVfTUlORE1BUCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclZpZXcoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgICAgICAgICAobGVhZikgPT4gbmV3IE1pbmRNYXBWaWV3KGxlYWYsIHRoaXMpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclZpZXcoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQX1NUWUxFLFxyXG4gICAgICAgICAgICAobGVhZikgPT4gbmV3IFN0eWxlUGFuZWxWaWV3KGxlYWYsIHRoaXMpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBNaW5kTWFwU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG4gICAgICAgIHRoaXMuYWRkUmliYm9uSWNvbihcIm5ldHdvcmtcIiwgXCJOZXcgTWluZFpKXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdm9pZCB0aGlzLmNyZWF0ZU5ldygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgICAgICAgIGlkOiBcImNyZWF0ZS1uZXdcIixcclxuICAgICAgICAgICAgbmFtZTogXCJOZXcgbWluZCBtYXBcIixcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHZvaWQgdGhpcy5jcmVhdGVOZXcoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbihcImZpbGUtbWVudVwiLCAobWVudSwgZmlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsZSBpbnN0YW5jZW9mIFRGb2xkZXIpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUoXCJOZXcgTWluZFpKXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJY29uKFwibmV0d29ya1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIHRoaXMuY3JlYXRlSW5Gb2xkZXIoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG0gPSBtZW51IGFzIHVua25vd24gYXMgTWVudVdpdGhJdGVtcztcclxuICAgICAgICAgICAgICAgIGlmIChtLml0ZW1zPy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXpqID0gbS5pdGVtcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobXpqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IG0uaXRlbXMuZmluZEluZGV4KChpdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHh0ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0LnRpdGxlRWw/LnRleHRDb250ZW50ID8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQudGl0bGUgPz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQgPT09IFwibmV3IGZvbGRlclwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID09PSBcIlx1NjVCMFx1NUVGQVx1NjU4N1x1NEVGNlx1NTkzOVwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0LmluY2x1ZGVzKFwibmV3IGZvbGRlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXpqLnNlY3Rpb24gPSBtLml0ZW1zW2lkeF0uc2VjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uaXRlbXMuc3BsaWNlKGlkeCArIDEsIDAsIG16aik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLml0ZW1zLnVuc2hpZnQobXpqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbnVubG9hZCgpOiB2b2lkIHtcclxuICAgICAgICAvKiBubyBjbGVhbnVwIG5lZWRlZCAqL1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcclxuICAgICAgICBjb25zdCBkID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICAgIGlmIChkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyAuLi5ERUZBVUxUX1NUWUxFLCAuLi4oZC5zdHlsZSA/PyB7fSkgfSxcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBkLmxhbmd1YWdlID8/IFwiZW5cIixcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBkLnRoZW1lID8/IFwibGlnaHRcIixcclxuICAgICAgICAgICAgICAgIHNob3dUb29sYmFyOiBkLnNob3dUb29sYmFyID8/IHRydWUsXHJcbiAgICAgICAgICAgICAgICBrZXlCaW5kaW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLkRFRkFVTFRfS0VZQklORElOR1MsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uKGQua2V5QmluZGluZ3MgPz8ge30pLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRldmVsb3Blck1vZGU6IGQuZGV2ZWxvcGVyTW9kZSA/PyBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVkaXRPbkNyZWF0ZTogZC5lZGl0T25DcmVhdGUgPz8gdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHR5cGVUb0VkaXQ6IGQudHlwZVRvRWRpdCA/PyB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tTm9kZU5hbWVzOiBkLmN1c3RvbU5vZGVOYW1lcyA/PyB7fSxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJTdHlsZUxpZ2h0OiBkLnRvb2xiYXJTdHlsZUxpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhclN0eWxlRGFyazogZC50b29sYmFyU3R5bGVEYXJrLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCB2YWxpZCA9IFtcclxuICAgICAgICAgICAgICAgIFwiYmV6aWVyXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0cmFpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBcImN1cnZlZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGVwXCIsXHJcbiAgICAgICAgICAgICAgICBcImJyYWNrZXRcIixcclxuICAgICAgICAgICAgICAgIFwibG9vc2VcIixcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZC5pbmNsdWRlcyh0aGlzLnNldHRpbmdzLnN0eWxlLmNvbm5lY3Rpb25TdHlsZSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnN0eWxlLmNvbm5lY3Rpb25TdHlsZSA9IFwiYmV6aWVyXCI7XHJcbiAgICAgICAgICAgIC8vIFVwZ3JhZGU6IGFwcGx5IHRoZW1lLWFwcHJvcHJpYXRlIHRvb2xiYXIgY29sb3JzIHdoZW5cclxuICAgICAgICAgICAgLy8gcGVyLXRoZW1lIHNuYXBzaG90cyBoYXZlbid0IGJlZW4gc2F2ZWQgeWV0IChlLmcuIHVzZXJcclxuICAgICAgICAgICAgLy8gdXBncmFkZWQgZnJvbSBhIHZlcnNpb24gdGhhdCBkaWRuJ3QgcGVyc2lzdCB0aGVtKS5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudGhlbWUgPT09IFwiZGFya1wiICYmICFkLnRvb2xiYXJTdHlsZURhcmspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUb29sYmFyQ29sb3JzKERFRkFVTFRfVE9PTEJBUl9EQVJLKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgdXBkYXRlU3R5bGUocDogUGFydGlhbDxNaW5kTWFwU3R5bGU+KSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zdHlsZSA9IHsgLi4udGhpcy5zZXR0aW5ncy5zdHlsZSwgLi4ucCB9O1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XHJcbiAgICB9XHJcbiAgICBnZXRTdHlsZSgpOiBNaW5kTWFwU3R5bGUge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMuc2V0dGluZ3Muc3R5bGUgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRvb2xiYXJDb2xvcnMoKTogVG9vbGJhclRoZW1lQ29sb3JzIHtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy5zZXR0aW5ncy5zdHlsZTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b29sYmFyQmdDb2xvcjogcy50b29sYmFyQmdDb2xvcixcclxuICAgICAgICAgICAgdG9vbGJhckJ0bkJnQ29sb3I6IHMudG9vbGJhckJ0bkJnQ29sb3IsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdG5Cb3JkZXJTdHlsZTogcy50b29sYmFyQnRuQm9yZGVyU3R5bGUsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdG5Cb3JkZXJDb2xvcjogcy50b29sYmFyQnRuQm9yZGVyQ29sb3IsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdG5UZXh0Q29sb3I6IHMudG9vbGJhckJ0blRleHRDb2xvcixcclxuICAgICAgICAgICAgdG9vbGJhckJvcmRlckNvbG9yOiBzLnRvb2xiYXJCb3JkZXJDb2xvcixcclxuICAgICAgICAgICAgdG9vbGJhckJvcmRlcldpZHRoOiBzLnRvb2xiYXJCb3JkZXJXaWR0aCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhcHBseVRvb2xiYXJDb2xvcnModGM6IFRvb2xiYXJUaGVtZUNvbG9ycykge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zZXR0aW5ncy5zdHlsZSwgdGMpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3dpdGNoVGhlbWUobmV3VGhlbWU6IFwibGlnaHRcIiB8IFwiZGFya1wiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudGhlbWUgPT09IFwibGlnaHRcIilcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy50b29sYmFyU3R5bGVMaWdodCA9IHRoaXMuZ2V0VG9vbGJhckNvbG9ycygpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5zZXR0aW5ncy50b29sYmFyU3R5bGVEYXJrID0gdGhpcy5nZXRUb29sYmFyQ29sb3JzKCk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50aGVtZSA9IG5ld1RoZW1lO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc3R5bGUuY2FudmFzQmcgPVxyXG4gICAgICAgICAgICBuZXdUaGVtZSA9PT0gXCJkYXJrXCIgPyBcIiMxZTFlMWVcIiA6IFwiI2ZmZmZmZlwiO1xyXG4gICAgICAgIHRoaXMuYXBwbHlUb29sYmFyQ29sb3JzKFxyXG4gICAgICAgICAgICBuZXdUaGVtZSA9PT0gXCJsaWdodFwiXHJcbiAgICAgICAgICAgICAgICA/ICh0aGlzLnNldHRpbmdzLnRvb2xiYXJTdHlsZUxpZ2h0ID8/IERFRkFVTFRfVE9PTEJBUl9MSUdIVClcclxuICAgICAgICAgICAgICAgIDogKHRoaXMuc2V0dGluZ3MudG9vbGJhclN0eWxlRGFyayA/PyBERUZBVUxUX1RPT0xCQVJfREFSSyksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZVRvQWxsVmlld3ModGhpcy5zZXR0aW5ncy5zdHlsZSk7XHJcbiAgICB9XHJcbiAgICBnZXRSb290TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLnNldHRpbmdzLmN1c3RvbU5vZGVOYW1lc1t0aGlzLnNldHRpbmdzLmxhbmd1YWdlXTtcclxuICAgICAgICByZXR1cm4gbj8ucm9vdCB8fCB0KFwiZGVmLnJvb3RcIik7XHJcbiAgICB9XHJcbiAgICBnZXRDaGlsZE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBuID0gdGhpcy5zZXR0aW5ncy5jdXN0b21Ob2RlTmFtZXNbdGhpcy5zZXR0aW5ncy5sYW5ndWFnZV07XHJcbiAgICAgICAgcmV0dXJuIG4/LmNoaWxkIHx8IHQoXCJkZWYuY2hpbGRcIik7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoQWxsVmlld3MoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBsZWFmIG9mIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgICAgICkpXHJcbiAgICAgICAgICAgIGlmIChsZWFmLnZpZXcgaW5zdGFuY2VvZiBNaW5kTWFwVmlldykgbGVhZi52aWV3LnJlZnJlc2hVSSgpO1xyXG4gICAgfVxyXG4gICAgYXBwbHlTdHlsZVRvQWxsVmlld3MoczogTWluZE1hcFN0eWxlKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBsZWFmIG9mIHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoXHJcbiAgICAgICAgICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgICAgICkpXHJcbiAgICAgICAgICAgIGlmIChsZWFmLnZpZXcgaW5zdGFuY2VvZiBNaW5kTWFwVmlldylcclxuICAgICAgICAgICAgICAgIGxlYWYudmlldy5hcHBseVN0eWxlKHsgLi4ucyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuUGx1Z2luU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICBjb25zdCBhcHBSZWMgPSB0aGlzLmFwcCBhcyB1bmtub3duIGFzIFJlY29yZDxcclxuICAgICAgICAgICAgc3RyaW5nLFxyXG4gICAgICAgICAgICB7IG9wZW4oKTogdm9pZDsgb3BlblRhYkJ5SWQoaWQ6IHN0cmluZyk6IHZvaWQgfVxyXG4gICAgICAgID47XHJcbiAgICAgICAgaWYgKGFwcFJlYy5zZXR0aW5nKSB7XHJcbiAgICAgICAgICAgIGFwcFJlYy5zZXR0aW5nLm9wZW4oKTtcclxuICAgICAgICAgICAgYXBwUmVjLnNldHRpbmcub3BlblRhYkJ5SWQodGhpcy5tYW5pZmVzdC5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkZWZhdWx0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvb3ROb2RlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuZ2V0Um9vdE5hbWUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1Jvb3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDIsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdW5pUGF0aChmb2xkZXI6IFRGb2xkZXIsIGJhc2U6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGV4dCA9IE1JTkRNQVBfRklMRV9FWFRFTlNJT04sXHJcbiAgICAgICAgICAgIHByZSA9IGZvbGRlci5wYXRoID09PSBcIi9cIiA/IFwiXCIgOiBmb2xkZXIucGF0aCArIFwiL1wiO1xyXG4gICAgICAgIGxldCBwID0gYCR7cHJlfSR7YmFzZX0uJHtleHR9YCxcclxuICAgICAgICAgICAgbiA9IDE7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwKSkge1xyXG4gICAgICAgICAgICBwID0gYCR7cHJlfSR7YmFzZX0gJHtufS4ke2V4dH1gO1xyXG4gICAgICAgICAgICBuKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhc3luYyBjcmVhdGVOZXcoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVJbkZvbGRlcihcclxuICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKT8ucGFyZW50ID8/XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXRSb290KCksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXN5bmMgY3JlYXRlSW5Gb2xkZXIoZm9sZGVyOiBURm9sZGVyKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIHRoaXMudW5pUGF0aChmb2xkZXIsIFwiVW50aXRsZWQgTWluZFpKXCIpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0RGF0YSgpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBsZWFmID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIik7XHJcbiAgICAgICAgICAgIGF3YWl0IGxlYWYub3BlbkZpbGUoZik7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5zZXRBY3RpdmVMZWFmKGxlYWYsIHsgZm9jdXM6IHRydWUgfSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIC8qIGZpbGUgY3JlYXRpb24gbWF5IGZhaWwgKi9cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBvcGVuU3R5bGVQYW5lbCgpIHtcclxuICAgICAgICBjb25zdCBscyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX01JTkRNQVBfU1RZTEUpO1xyXG4gICAgICAgIGxldCBsOiBXb3Jrc3BhY2VMZWFmO1xyXG4gICAgICAgIGlmIChscy5sZW5ndGgpIGwgPSBsc1swXTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbCA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0UmlnaHRMZWFmKGZhbHNlKSA/P1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLmdldExlYWYodHJ1ZSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGwuc2V0Vmlld1N0YXRlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFZJRVdfVFlQRV9NSU5ETUFQX1NUWUxFLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLnJldmVhbExlYWYobCk7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8vIHNyYy9NaW5kTWFwVmlldy50c1xyXG5pbXBvcnQgeyBUZXh0RmlsZVZpZXcsIFdvcmtzcGFjZUxlYWYsIE1lbnUgfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuaW1wb3J0IHtcclxuICAgIFZJRVdfVFlQRV9NSU5ETUFQLFxyXG4gICAgQm9yZGVyU3R5bGUsXHJcbiAgICBNaW5kTm9kZURhdGEsXHJcbiAgICBNaW5kTWFwU3R5bGUsXHJcbiAgICBERUZBVUxUX1NUWUxFLFxyXG4gICAgREVGQVVMVF9UT09MQkFSX0xJR0hULFxyXG4gICAgREVGQVVMVF9UT09MQkFSX0RBUkssXHJcbiAgICBSQUlOQk9XX1BBTEVUVEVTLFxyXG4gICAgRk9OVF9MSVNULFxyXG4gICAgQ09OTkVDVElPTl9TVFlMRVMsXHJcbiAgICBLZXlCaW5kaW5ncyxcclxufSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyB0IH0gZnJvbSBcIi4vaTE4blwiO1xyXG5pbXBvcnQgdHlwZSBNaW5kTm9kZVBsdWdpbiBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG50eXBlIExheW91dE5vZGUgPSBNaW5kTm9kZURhdGEgJiB7IF9zaD86IG51bWJlciB9O1xyXG5cclxuaW50ZXJmYWNlIFJvb3REcmFnIHtcclxuICAgIGlzUm9vdERyYWc6IHRydWU7XHJcbiAgICBub2RlSWQ6IHN0cmluZztcclxuICAgIHN0YXJ0WDogbnVtYmVyO1xyXG4gICAgc3RhcnRZOiBudW1iZXI7XHJcbiAgICBuc3g6IG51bWJlcjtcclxuICAgIG5zeTogbnVtYmVyO1xyXG4gICAgcGVlcnM/OiB7IGlkOiBzdHJpbmc7IHN4OiBudW1iZXI7IHN5OiBudW1iZXIgfVtdO1xyXG59XHJcbmludGVyZmFjZSBDaGlsZERyYWcge1xyXG4gICAgaXNSb290RHJhZzogZmFsc2U7XHJcbiAgICBub2RlSWQ6IHN0cmluZztcclxuICAgIHN0YXJ0WDogbnVtYmVyO1xyXG4gICAgc3RhcnRZOiBudW1iZXI7XHJcbiAgICBnaG9zdEVsOiBTVkdFbGVtZW50IHwgbnVsbDtcclxuICAgIGluZGljYXRvckVsOiBTVkdSZWN0RWxlbWVudCB8IG51bGw7XHJcbiAgICBzbmFwOiBzdHJpbmc7XHJcbn1cclxudHlwZSBEcmFnU3RhdGUgPSAoeyBpc0RyYWdnaW5nOiBib29sZWFuIH0gJiAoUm9vdERyYWcgfCBDaGlsZERyYWcpKSB8IG51bGw7XHJcblxyXG5leHBvcnQgY2xhc3MgTWluZE1hcFZpZXcgZXh0ZW5kcyBUZXh0RmlsZVZpZXcge1xyXG4gICAgcHJpdmF0ZSBzdmdFbCE6IFNWR1NWR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGdFbCE6IFNWR0dFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBlZGdlc0chOiBTVkdHRWxlbWVudDtcclxuICAgIHByaXZhdGUgbm9kZXNHITogU1ZHR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG92ZXJsYXlHITogU1ZHR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNjITogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHN2Z0N0ITogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG1kQ3QhOiBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0YkVsITogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGRldkVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwYW5YID0gMDtcclxuICAgIHByaXZhdGUgcGFuWSA9IDA7XHJcbiAgICBwcml2YXRlIHpvb20gPSAxO1xyXG4gICAgcHJpdmF0ZSBzcGFjZURvd24gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZHJhZ0N2ID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHNteCA9IDA7XHJcbiAgICBwcml2YXRlIHNteSA9IDA7XHJcbiAgICBwcml2YXRlIHNlbElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgbXVsdGlTZWwgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIHByaXZhdGUgZWRpdElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgcm9vdHM6IE1pbmROb2RlRGF0YVtdID0gW107XHJcbiAgICBwcml2YXRlIGxjdCA9IDA7XHJcbiAgICBwcml2YXRlIGxjbmlkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgY29tbWl0RWRpdDogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVuZG9TOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZWRvUzogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBzdHlsZTogTWluZE1hcFN0eWxlID0geyAuLi5ERUZBVUxUX1NUWUxFIH07XHJcbiAgICBwcml2YXRlIGRzOiBEcmFnU3RhdGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwbHVnaW46IE1pbmROb2RlUGx1Z2luO1xyXG4gICAgcHJpdmF0ZSB1aU9rID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGJveFNlbCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBic3ggPSAwO1xyXG4gICAgcHJpdmF0ZSBic3kgPSAwO1xyXG4gICAgcHJpdmF0ZSBiY3ggPSAwO1xyXG4gICAgcHJpdmF0ZSBiY3kgPSAwO1xyXG4gICAgcHJpdmF0ZSBib3hTaGlmdCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBib3hFbDogU1ZHUmVjdEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgcG9wQ2xvc2U6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtZE1vZGUgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgbWRCdG46IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNsaXBib2FyZDogeyBkYXRhOiBzdHJpbmc7IGlzUm9vdDogYm9vbGVhbjsgY3V0OiBib29sZWFuIH0gfCBudWxsID1cclxuICAgICAgICBudWxsO1xyXG4gICAgcHJpdmF0ZSBhY3RpdmVNZW51OiBNZW51IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNlYXJjaEJhcjogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgc2VhcmNoUmVzdWx0czogTWluZE5vZGVEYXRhW10gPSBbXTtcclxuICAgIHByaXZhdGUgc2VhcmNoSWR4ID0gMDtcclxuICAgIHByaXZhdGUgb2xkUG9zID0gbmV3IE1hcDxzdHJpbmcsIHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4oKTtcclxuICAgIHByaXZhdGUgYW5pbUlkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgbGl2ZVRBOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIG1kU25hcHNob3Q6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB6b29tTGFiZWw6IEhUTUxTcGFuRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwcm94eVRBOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBNaW5kTm9kZVBsdWdpbikge1xyXG4gICAgICAgIHN1cGVyKGxlYWYpO1xyXG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSBwbHVnaW4uZ2V0U3R5bGUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0IGtiKCk6IEtleUJpbmRpbmdzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW4uc2V0dGluZ3Mua2V5QmluZGluZ3M7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFJhaW5ib3coKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLnN0eWxlLnJhaW5ib3dQYWxldHRlO1xyXG4gICAgICAgIGlmICh0aGlzLnN0eWxlLmN1c3RvbVJhaW5ib3dzPy5bcF0pIHJldHVybiB0aGlzLnN0eWxlLmN1c3RvbVJhaW5ib3dzW3BdO1xyXG4gICAgICAgIHJldHVybiBSQUlOQk9XX1BBTEVUVEVTW3BdIHx8IFJBSU5CT1dfUEFMRVRURVMuY2xhc3NpYztcclxuICAgIH1cclxuICAgIHByaXZhdGUgaGV4VG9SZ2JhKGhleDogc3RyaW5nLCBhbHBoYTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBoID0gaGV4LnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoLnN1YnN0cmluZygwLCAyKSwgMTYpO1xyXG4gICAgICAgIGNvbnN0IGcgPSBwYXJzZUludChoLnN1YnN0cmluZygyLCA0KSwgMTYpO1xyXG4gICAgICAgIGNvbnN0IGIgPSBwYXJzZUludChoLnN1YnN0cmluZyg0LCA2KSwgMTYpO1xyXG4gICAgICAgIGlmIChpc05hTihyKSB8fCBpc05hTihnKSB8fCBpc05hTihiKSlcclxuICAgICAgICAgICAgcmV0dXJuIGByZ2JhKDU5LDEzMCwyNDYsJHthbHBoYX0pYDtcclxuICAgICAgICByZXR1cm4gYHJnYmEoJHtyfSwke2d9LCR7Yn0sJHthbHBoYX0pYDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgbWtSb290KHR4dDogc3RyaW5nKTogTWluZE5vZGVEYXRhIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcclxuICAgICAgICAgICAgdGV4dDogdHh0LFxyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5jYWxjVyh0eHQsIHRydWUpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuY2FsY0godHh0LCB0cnVlKSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICBpc1Jvb3Q6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldFZpZXdUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiBWSUVXX1RZUEVfTUlORE1BUDtcclxuICAgIH1cclxuICAgIGdldERpc3BsYXlUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGUgPyB0aGlzLmZpbGUuYmFzZW5hbWUgOiBcIk1pbmRaSlwiO1xyXG4gICAgfVxyXG4gICAgZ2V0SWNvbigpIHtcclxuICAgICAgICByZXR1cm4gXCJuZXR3b3JrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Vmlld0RhdGEoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5lZGl0SWQgJiYgdGhpcy5saXZlVEEpIHtcclxuICAgICAgICAgICAgY29uc3QgbmQgPSB0aGlzLmZBbGwodGhpcy5lZGl0SWQpO1xyXG4gICAgICAgICAgICBpZiAobmQpIG5kLnRleHQgPSB0aGlzLmxpdmVUQS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHsgcm9vdE5vZGVzOiB0aGlzLnJvb3RzIH0sIG51bGwsIDIpO1xyXG4gICAgfVxyXG4gICAgc2V0Vmlld0RhdGEoZGF0YTogc3RyaW5nLCBjbGVhcjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjbGVhcikge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3RzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuc2VsSWQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMudW5kb1MgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5yZWRvUyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3RzID1cclxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocC5yb290Tm9kZXMpICYmIHAucm9vdE5vZGVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgID8gcC5yb290Tm9kZXNcclxuICAgICAgICAgICAgICAgICAgICA6IFt0aGlzLm1rUm9vdCh0aGlzLnBsdWdpbi5nZXRSb290TmFtZSgpKV07XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdHMgPSBbdGhpcy5ta1Jvb3QodGhpcy5wbHVnaW4uZ2V0Um9vdE5hbWUoKSldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yb290cy5sZW5ndGggJiYgIXRoaXMuc2VsSWQpIHRoaXMuc2VsSWQgPSB0aGlzLnJvb3RzWzBdLmlkO1xyXG4gICAgICAgIGlmICh0aGlzLnVpT2spIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWRNb2RlKSB0aGlzLnJlbmRlck1kKCk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5maXRBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnJvb3RzID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubXVsdGlTZWwuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9TYXZlKCkge1xyXG4gICAgICAgIHRoaXMucmVxdWVzdFNhdmUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZml0QWxsKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYyB8fCAhdGhpcy5yb290cy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBjb25zdCByYyA9IHRoaXMuY2MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgLy8gR3VhcmQ6IGNvbnRhaW5lciBub3QgeWV0IGxhaWQgb3V0IFx1MjAxNCByZXRyeSBvbiBuZXh0IGZyYW1lXHJcbiAgICAgICAgaWYgKHJjLndpZHRoIDwgMSB8fCByYy5oZWlnaHQgPCAxKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmZpdEFsbCgpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kb0xheW91dChyKTtcclxuICAgICAgICBsZXQgeDEgPSBJbmZpbml0eSxcclxuICAgICAgICAgICAgeDIgPSAtSW5maW5pdHksXHJcbiAgICAgICAgICAgIHkxID0gSW5maW5pdHksXHJcbiAgICAgICAgICAgIHkyID0gLUluZmluaXR5O1xyXG4gICAgICAgIGNvbnN0IHZpcyA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgeDEgPSBNYXRoLm1pbih4MSwgbi54IC0gbi53aWR0aCAvIDIpO1xyXG4gICAgICAgICAgICB4MiA9IE1hdGgubWF4KHgyLCBuLnggKyBuLndpZHRoIC8gMik7XHJcbiAgICAgICAgICAgIHkxID0gTWF0aC5taW4oeTEsIG4ueSAtIG4uaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIHkyID0gTWF0aC5tYXgoeTIsIG4ueSArIG4uaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB2aXMoYyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdmlzKHIpO1xyXG4gICAgICAgIHRoaXMuem9vbSA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICBNYXRoLm1pbihyYy53aWR0aCAvICh4MiAtIHgxICsgMTAwKSwgcmMuaGVpZ2h0IC8gKHkyIC0geTEgKyAxMDApKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICghaXNGaW5pdGUodGhpcy56b29tKSB8fCB0aGlzLnpvb20gPD0gMCkgdGhpcy56b29tID0gMTtcclxuICAgICAgICB0aGlzLnBhblggPSByYy53aWR0aCAvIDIgLSAoKHgxICsgeDIpIC8gMikgKiB0aGlzLnpvb207XHJcbiAgICAgICAgdGhpcy5wYW5ZID0gcmMuaGVpZ2h0IC8gMiAtICgoeTEgKyB5MikgLyAyKSAqIHRoaXMuem9vbTtcclxuICAgICAgICB0aGlzLnVwZFR4KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZm9jdXNOb2RlKG5kOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2MpIHJldHVybjtcclxuICAgICAgICBjb25zdCByID0gdGhpcy5jYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB0aGlzLnBhblggPSByLndpZHRoIC8gMiAtIG5kLnggKiB0aGlzLnpvb20gLSByLndpZHRoICogMC4xNztcclxuICAgICAgICB0aGlzLnBhblkgPSByLmhlaWdodCAvIDIgLSBuZC55ICogdGhpcy56b29tIC0gci5oZWlnaHQgKiAwLjA1O1xyXG4gICAgICAgIHRoaXMudXBkVHgoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZWZyZXNoVUkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVpT2spIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy50YkVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGJFbC5lbXB0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkVGIodGhpcy50YkVsKTtcclxuICAgICAgICAgICAgdGhpcy5hcHBseVRvb2xiYXJTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVRvb2xiYXJWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgdGhpcy5hcHBseUNhbnZhc0JnKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXZQYW5lbCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9yZXF1aXJlLWF3YWl0XHJcbiAgICBhc3luYyBvbk9wZW4oKSB7XHJcbiAgICAgICAgY29uc3QgY3QgPSB0aGlzLmNvbnRhaW5lckVsLmNoaWxkcmVuWzFdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGN0LmVtcHR5KCk7XHJcbiAgICAgICAgY3QuYWRkQ2xhc3MoXCJtei12aWV3LWN0XCIpO1xyXG4gICAgICAgIC8vIHBhZGRpbmcgb3ZlcnJpZGUgbW92ZWQgdG8gc3R5bGVzLmNzc1xyXG4gICAgICAgIHRoaXMudGJFbCA9IGN0LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlUb29sYmFyU3R5bGUoKTtcclxuICAgICAgICB0aGlzLmJ1aWxkVGIodGhpcy50YkVsKTtcclxuICAgICAgICB0aGlzLnN2Z0N0ID0gY3QuY3JlYXRlRWwoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICBhdHRyOiB7IHRhYmluZGV4OiBcIjBcIiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3ZnQ3QuYWRkQ2xhc3MoXCJtei1zdmctY3RcIik7XHJcbiAgICAgICAgdGhpcy5jYyA9IHRoaXMuc3ZnQ3Q7XHJcbiAgICAgICAgLy8gRklYOiBwcmV2ZW50IGJyb3dzZXIgZnJvbSBzY3JvbGxpbmcgdGhlIGNvbnRhaW5lciBcdTIwMTQgcGFubmluZyB1c2VzIENTUyB0cmFuc2Zvcm0gb25seVxyXG4gICAgICAgIHRoaXMuc3ZnQ3QuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnQ3QhLnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnQ3QhLnNjcm9sbExlZnQgPSAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYXBwbHlDYW52YXNCZygpO1xyXG4gICAgICAgIHRoaXMuc3ZnRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgXCJzdmdcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc3ZnRWwuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gICAgICAgIHRoaXMuc3ZnRWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKTtcclxuICAgICAgICAvLyBTVkcgZGlzcGxheSBibG9jayBpcyBkZWZhdWx0XHJcbiAgICAgICAgdGhpcy5jYy5hcHBlbmRDaGlsZCh0aGlzLnN2Z0VsKTtcclxuICAgICAgICB0aGlzLmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcclxuICAgICAgICB0aGlzLnN2Z0VsLmFwcGVuZENoaWxkKHRoaXMuZ0VsKTtcclxuICAgICAgICB0aGlzLmVkZ2VzRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICBcImdcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ0VsLmFwcGVuZENoaWxkKHRoaXMuZWRnZXNHKTtcclxuICAgICAgICB0aGlzLm5vZGVzRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICBcImdcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ0VsLmFwcGVuZENoaWxkKHRoaXMubm9kZXNHKTtcclxuICAgICAgICB0aGlzLm92ZXJsYXlHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgIFwiZ1wiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5nRWwuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5Ryk7XHJcbiAgICAgICAgdGhpcy5tZEN0ID0gY3QuY3JlYXRlRWwoXCJ0ZXh0YXJlYVwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgICAgIHRoaXMubWRDdC5hZGRDbGFzcyhcIm16LW1kLXRhXCIpO1xyXG4gICAgICAgIHRoaXMubWRDdC5hZGRDbGFzcyhcIm16LWhpZGRlblwiKTtcclxuICAgICAgICB0aGlzLmJpbmRFdnRzKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2tkLCB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuX2t1LCB0cnVlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5fbXUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMudWlPayA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb29sYmFyVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGV2UGFuZWwoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm9vdHMubGVuZ3RoKSB0aGlzLmZpdEFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNjPy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3JlcXVpcmUtYXdhaXRcclxuICAgIGFzeW5jIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbWl0RWRpdCkgdGhpcy5jb21taXRFZGl0KCk7XHJcbiAgICAgICAgdGhpcy5jbGVhclByb3h5KCk7XHJcbiAgICAgICAgdGhpcy51aU9rID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcGFjZURvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRyYWdDdiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGl2ZVRBID0gbnVsbDtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5fa2QsIHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5fa3UsIHRydWUpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLl9tdSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbUlkKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcHBseUNhbnZhc0JnKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN2Z0N0KVxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh7IFwiLS1tei1jYW52YXMtYmdcIjogdGhpcy5zdHlsZS5jYW52YXNCZyB9KS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgKFtrLCB2XSkgPT4gdGhpcy5zdmdDdC5zdHlsZS5zZXRQcm9wZXJ0eShrLCB2KSxcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXBwbHlUb29sYmFyU3R5bGUoKSB7XHJcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuc3R5bGU7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcy50b29sYmFyUG9zaXRpb24gPT09IFwiYm90dG9tXCIgPyAyIDogMDtcclxuICAgICAgICBjb25zdCBib3JkZXJTaWRlID0gcy50b29sYmFyUG9zaXRpb24gPT09IFwiYm90dG9tXCIgPyBcInRvcFwiIDogXCJib3R0b21cIjtcclxuICAgICAgICBjb25zdCBiZHJDID0gcy50b29sYmFyQm9yZGVyQ29sb3IgfHwgXCIjZTBlMGUwXCI7XHJcbiAgICAgICAgY29uc3QgYmRyVyA9IHMudG9vbGJhckJvcmRlcldpZHRoID8/IDE7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIC0tIGR5bmFtaWMgdG9vbGJhciBjb2xvcnMgcmVxdWlyZSBpbmxpbmUgc3R5bGVcclxuICAgICAgICB0aGlzLnRiRWwuc3R5bGUuY3NzVGV4dCA9IGBoZWlnaHQ6NDJweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo2cHg7ZmxleC1zaHJpbms6MDtwYWRkaW5nOiR7cy50b29sYmFyUGFkVG9wfXB4ICR7cy50b29sYmFyUGFkUmlnaHR9cHggJHtzLnRvb2xiYXJQYWRCb3R0b219cHggJHtzLnRvb2xiYXJQYWRMZWZ0fXB4O2JhY2tncm91bmQ6JHtzLnRvb2xiYXJCZ0NvbG9yfTtib3JkZXItJHtib3JkZXJTaWRlfToke2Jkcld9cHggc29saWQgJHtiZHJDfTtvcmRlcjoke3Bvc307YDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlVG9vbGJhclZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGJFbClcclxuICAgICAgICAgICAgdGhpcy50YkVsLnRvZ2dsZUNsYXNzKFxyXG4gICAgICAgICAgICAgICAgXCJtei1oaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICF0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93VG9vbGJhcixcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNTZWwoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbElkID09PSBpZCB8fCB0aGlzLm11bHRpU2VsLmhhcyhpZCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNsclNlbCgpIHtcclxuICAgICAgICB0aGlzLnNlbElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLm11bHRpU2VsLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNlbDEoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubXVsdGlTZWwuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLnNlbElkID0gaWQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHRvZ1NlbChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGlTZWwuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkID09PSBpZClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsSWQgPSB0aGlzLm11bHRpU2VsLnNpemUgPyBbLi4udGhpcy5tdWx0aVNlbF1bMF0gOiBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkICYmICF0aGlzLm11bHRpU2VsLmhhcyh0aGlzLnNlbElkKSlcclxuICAgICAgICAgICAgICAgIHRoaXMubXVsdGlTZWwuYWRkKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICB0aGlzLm11bHRpU2VsLmFkZChpZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsSWQgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFsbFNlbCgpOiBTZXQ8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgcyA9IG5ldyBTZXQodGhpcy5tdWx0aVNlbCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsSWQpIHMuYWRkKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc011bHRpKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbFNlbCgpLnNpemUgPiAxO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjbG9zZVBvcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3BDbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvcENsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wQ2xvc2UgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlRGV2UGFuZWwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZlbG9wZXJNb2RlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldkVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldkVsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZFbCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuZGV2RWwgJiYgdGhpcy5zdmdDdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRldkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdGhpcy5kZXZFbC5hZGRDbGFzcyhcIm16LWRldi1wYW5lbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5zdmdDdC5hcHBlbmRDaGlsZCh0aGlzLmRldkVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGV2RWwpIHtcclxuICAgICAgICAgICAgY29uc3QgbmQgPSB0aGlzLnNlbElkID8gdGhpcy5mQWxsKHRoaXMuc2VsSWQpIDogbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5kZXZFbC50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbDogdGhpcy5zZWxJZD8uc3Vic3RyaW5nKDAsIDgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRJZDogdGhpcy5lZGl0SWQ/LnN1YnN0cmluZygwLCA4KSxcclxuICAgICAgICAgICAgICAgICAgICB6b29tOiArdGhpcy56b29tLnRvRml4ZWQoMyksXHJcbiAgICAgICAgICAgICAgICAgICAgcGFuOiBbK3RoaXMucGFuWC50b0ZpeGVkKDApLCArdGhpcy5wYW5ZLnRvRml4ZWQoMCldLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RzOiB0aGlzLnJvb3RzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICBub2RlOiBuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbmQudGV4dC5zdWJzdHJpbmcoMCwgMjApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiArbmQueC50b0ZpeGVkKDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiArbmQueS50b0ZpeGVkKDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogbmQuY2hpbGRyZW4ubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkVGIodGI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGIuZW1wdHkoKTtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy5zdHlsZTtcclxuICAgICAgICBjb25zdCBidG5CZyA9IHMudG9vbGJhckJ0bkJnQ29sb3I7XHJcbiAgICAgICAgY29uc3QgYnRuQmRyID0gcy50b29sYmFyQnRuQm9yZGVyQ29sb3I7XHJcbiAgICAgICAgY29uc3QgYnRuQmRyUyA9IHMudG9vbGJhckJ0bkJvcmRlclN0eWxlO1xyXG4gICAgICAgIGNvbnN0IGJ0blR4ID0gcy50b29sYmFyQnRuVGV4dENvbG9yO1xyXG4gICAgICAgIGNvbnN0IGJ0biA9ICh0eHQ6IHN0cmluZywgdGlwOiBzdHJpbmcsIGZuOiAoKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSB0Yi5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRpdGxlOiB0aXAgfSk7XHJcbiAgICAgICAgICAgIGIuYWRkQ2xhc3MoXCJtei10Yi1idG5cIik7XHJcbiAgICAgICAgICAgIGIuc3R5bGUuYm9yZGVyID0gYDFweCAke2J0bkJkclN9ICR7YnRuQmRyfWA7XHJcbiAgICAgICAgICAgIGIuc3R5bGUuYmFja2dyb3VuZCA9IGJ0bkJnO1xyXG4gICAgICAgICAgICBiLnN0eWxlLmNvbG9yID0gYnRuVHg7XHJcbiAgICAgICAgICAgIGIuaW5uZXJUZXh0ID0gdHh0O1xyXG4gICAgICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmbik7XHJcbiAgICAgICAgICAgIGIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT5cclxuICAgICAgICAgICAgICAgIGIuYWRkQ2xhc3MoXCJtei10Yi1idG4taG92ZXJcIiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT5cclxuICAgICAgICAgICAgICAgIGIucmVtb3ZlQ2xhc3MoXCJtei10Yi1idG4taG92ZXJcIiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuKHQoXCJ0Yi5yb290XCIpLCB0KFwidGIubmV3Um9vdFwiKSwgKCkgPT4gdGhpcy5hZGRSb290KCkpO1xyXG4gICAgICAgIGJ0bih0KFwidGIudW5kb1wiKSwgdChcInRiLnRpcFVuZG9cIiksICgpID0+IHRoaXMudW5kbygpKTtcclxuICAgICAgICBidG4odChcInRiLnJlZG9cIiksIHQoXCJ0Yi50aXBSZWRvXCIpLCAoKSA9PiB0aGlzLnJlZG8oKSk7XHJcbiAgICAgICAgY29uc3Qgc2VwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkID0gdGIuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGQuYWRkQ2xhc3MoXCJtei10Yi1zZXBcIik7XHJcbiAgICAgICAgICAgIGQuc3R5bGUuc2V0UHJvcGVydHkoXCItLW16LXNlcC1jb2xvclwiLCBidG5CZHIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2VwKCk7XHJcbiAgICAgICAgdGhpcy5tZEJ0biA9IGJ0bih0KFwidGIubWRcIiksIHQoXCJ0Yi50aXBNZFwiKSwgKCkgPT4gdGhpcy50b2dnbGVNZCgpKTtcclxuICAgICAgICBidG4odChcInRiLnN0eWxlXCIpLCB0KFwidGIudGlwU3R5bGVcIiksICgpID0+IHRoaXMuc2hvd1N0eWxlTW9kYWwoKSk7XHJcbiAgICAgICAgYnRuKFwiXHVEODNEXHVEQzUzIFwiICsgdChcInRiLmZvY3VzXCIpLCB0KFwidGIudGlwRm9jdXNcIiksICgpID0+IHRoaXMuZm9jdXNTZWwoKSk7XHJcbiAgICAgICAgYnRuKFwiXHVEODNEXHVERDBEIFwiICsgdChcInRiLnNlYXJjaFwiKSwgdChcInRiLnRpcFNlYXJjaFwiKSwgKCkgPT5cclxuICAgICAgICAgICAgdGhpcy50b2dnbGVTZWFyY2goKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGJ0bih0KFwidGIuc2V0dGluZ3NcIiksIHQoXCJ0Yi50aXBTZXR0aW5nc1wiKSwgKCkgPT5cclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4ub3BlblBsdWdpblNldHRpbmdzKCksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXAoKTtcclxuICAgICAgICBidG4oXCJcdTIyMTJcIiwgdChcInRiLnpvb21PdXRcIiksICgpID0+IHRoaXMuem9vbUJ5KDAuOSkpO1xyXG4gICAgICAgIHRoaXMuem9vbUxhYmVsID0gdGIuY3JlYXRlRWwoXCJzcGFuXCIpO1xyXG4gICAgICAgIHRoaXMuem9vbUxhYmVsLmFkZENsYXNzKFwibXotdGItem9vbVwiKTtcclxuICAgICAgICB0aGlzLnpvb21MYWJlbC5pbm5lclRleHQgPSBNYXRoLnJvdW5kKHRoaXMuem9vbSAqIDEwMCkgKyBcIiVcIjtcclxuICAgICAgICB0aGlzLnpvb21MYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy56b29tVG8oMSkpO1xyXG4gICAgICAgIGJ0bihcIitcIiwgdChcInRiLnpvb21JblwiKSwgKCkgPT4gdGhpcy56b29tQnkoMS4xKSk7XHJcbiAgICAgICAgY29uc3QgaCA9IHRiLmNyZWF0ZUVsKFwic3BhblwiKTtcclxuICAgICAgICBoLmFkZENsYXNzKFwibXotdGItaGVscFwiKTtcclxuICAgICAgICBoLmlubmVyVGV4dCA9IHQoXCJ0Yi5oZWxwXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmb2N1c1NlbCgpIHtcclxuICAgICAgICBsZXQgbmQ6IE1pbmROb2RlRGF0YSB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbElkKSBuZCA9IHRoaXMuZkFsbCh0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoIW5kICYmIHRoaXMucm9vdHMubGVuZ3RoKSBuZCA9IHRoaXMucm9vdHNbdGhpcy5yb290cy5sZW5ndGggLSAxXTtcclxuICAgICAgICBpZiAobmQpIHtcclxuICAgICAgICAgICAgdGhpcy5mb2N1c05vZGUobmQpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgdG9nZ2xlTWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWRNb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWRNb2RlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1kQnRuKSB0aGlzLm1kQnRuLmlubmVyVGV4dCA9IHQoXCJ0Yi5tZFwiKTtcclxuICAgICAgICAgICAgLy8gUmVzdG9yZSBmcm9tIHNuYXBzaG90IGlmIHRleHQgdW5jaGFuZ2VkLCBlbHNlIHBhcnNlXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01kID0gdGhpcy5tZEN0LnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBvbGRNZCA9IHRoaXMubWRTbmFwc2hvdCA/IHRoaXMucm9vdHMybWRGcm9tU25hcCgpIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKG9sZE1kICYmIG5ld01kID09PSBvbGRNZCkge1xyXG4gICAgICAgICAgICAgICAgLyogbm8gY2hhbmdlcywga2VlcCBvcmlnaW5hbCByb290cyAqL1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJzZU1kKG5ld01kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1kU25hcHNob3QgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm1kQ3QudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnQ3QudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kb0xheW91dChyKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21taXRFZGl0KSB0aGlzLmNvbW1pdEVkaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5tZE1vZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tZEJ0bikgdGhpcy5tZEJ0bi5pbm5lclRleHQgPSB0KFwidGIubWFwXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm1kU25hcHNob3QgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnJvb3RzKTtcclxuICAgICAgICAgICAgdGhpcy5zdmdDdC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5tZEN0LnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5tZEN0LnZhbHVlID0gdGhpcy5yb290czJtZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgcm9vdHMybWRGcm9tU25hcCgpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgICAgICBpZiAoIXRoaXMubWRTbmFwc2hvdCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcnMgPSBKU09OLnBhcnNlKHRoaXMubWRTbmFwc2hvdCkgYXMgTWluZE5vZGVEYXRhW107XHJcbiAgICAgICAgICAgIGxldCBtID0gXCJcIjtcclxuICAgICAgICAgICAgY29uc3QgZm10UmlnaHQgPSAoXHJcbiAgICAgICAgICAgICAgICBuZDogTWluZE5vZGVEYXRhLFxyXG4gICAgICAgICAgICAgICAgZGVwdGg6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIHNpYklkeDogbnVtYmVyLFxyXG4gICAgICAgICAgICApOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHggPSBuZC50ZXh0LnJlcGxhY2UoL1xcbi9nLCBcIiBcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlcHRoID09PSAxKSBsaW5lID0gXCIjIyBcIiArIHR4O1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVwdGggPT09IDIpIGxpbmUgPSBcIiMjIyBcIiArIHR4O1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVwdGggPT09IDMpIGxpbmUgPSBcIiMjIyMjIFwiICsgdHg7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZXB0aCA9PT0gNCkgbGluZSA9IFwiXFx0XCIgKyAoc2liSWR4ICsgMSkgKyBcIi4gXCIgKyB0eDtcclxuICAgICAgICAgICAgICAgIGVsc2UgbGluZSA9IFwiXFx0XCIucmVwZWF0KGRlcHRoIC0gMykgKyBcIi0gXCIgKyB0eDtcclxuICAgICAgICAgICAgICAgIGxldCByID0gbGluZSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5kLmNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHIgKz0gZm10UmlnaHQobmQuY2hpbGRyZW5baV0sIGRlcHRoICsgMSwgaSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgZm10TGVmdCA9IChuZDogTWluZE5vZGVEYXRhLCBkZXB0aDogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4ID0gbmQudGV4dC5yZXBsYWNlKC9cXG4vZywgXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IFwiXFx0XCIucmVwZWF0KGRlcHRoIC0gMSkgKyBcIi8gXCIgKyB0eDtcclxuICAgICAgICAgICAgICAgIGxldCByID0gbGluZSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgbmQuY2hpbGRyZW4pIHIgKz0gZm10TGVmdChjLCBkZXB0aCArIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Q2ggPSByLmNoaWxkcmVuLmZpbHRlcigoYykgPT4gYy5zaWRlICE9PSBcImxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0Q2ggPSByLmNoaWxkcmVuLmZpbHRlcigoYykgPT4gYy5zaWRlID09PSBcImxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBtICs9IFwiIyBcIiArIHIudGV4dC5yZXBsYWNlKC9cXG4vZywgXCIgXCIpICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmlnaHRDaC5sZW5ndGg7IGorKylcclxuICAgICAgICAgICAgICAgICAgICBtICs9IGZtdFJpZ2h0KHJpZ2h0Q2hbal0sIDEsIGopO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGxlZnRDaCkgbSArPSBmbXRMZWZ0KGMsIDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCBycy5sZW5ndGggLSAxKSBtICs9IFwiXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG07XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgcm9vdHMybWQoKSB7XHJcbiAgICAgICAgbGV0IG0gPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb290cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCByID0gdGhpcy5yb290c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHRDaCA9IHIuY2hpbGRyZW4uZmlsdGVyKChjKSA9PiBjLnNpZGUgIT09IFwibGVmdFwiKTtcclxuICAgICAgICAgICAgY29uc3QgbGVmdENoID0gci5jaGlsZHJlbi5maWx0ZXIoKGMpID0+IGMuc2lkZSA9PT0gXCJsZWZ0XCIpO1xyXG4gICAgICAgICAgICBtICs9IFwiIyBcIiArIHIudGV4dC5yZXBsYWNlKC9cXG4vZywgXCIgXCIpICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByaWdodENoLmxlbmd0aDsgaisrKVxyXG4gICAgICAgICAgICAgICAgbSArPSB0aGlzLm4ybWRSaWdodChyaWdodENoW2pdLCAxLCBqKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGxlZnRDaCkgbSArPSB0aGlzLm4ybWRMZWZ0KGMsIDEpO1xyXG4gICAgICAgICAgICBpZiAoaSA8IHRoaXMucm9vdHMubGVuZ3RoIC0gMSkgbSArPSBcIlxcblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgbjJtZFJpZ2h0KG5kOiBNaW5kTm9kZURhdGEsIGRlcHRoOiBudW1iZXIsIHNpYklkeDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCB0eCA9IG5kLnRleHQucmVwbGFjZSgvXFxuL2csIFwiIFwiKTtcclxuICAgICAgICBsZXQgbGluZTogc3RyaW5nO1xyXG4gICAgICAgIGlmIChkZXB0aCA9PT0gMSkgbGluZSA9IFwiIyMgXCIgKyB0eDtcclxuICAgICAgICBlbHNlIGlmIChkZXB0aCA9PT0gMikgbGluZSA9IFwiIyMjIFwiICsgdHg7XHJcbiAgICAgICAgZWxzZSBpZiAoZGVwdGggPT09IDMpIGxpbmUgPSBcIiMjIyMjIFwiICsgdHg7XHJcbiAgICAgICAgZWxzZSBpZiAoZGVwdGggPT09IDQpIGxpbmUgPSBcIlxcdFwiICsgKHNpYklkeCArIDEpICsgXCIuIFwiICsgdHg7XHJcbiAgICAgICAgZWxzZSBsaW5lID0gXCJcXHRcIi5yZXBlYXQoZGVwdGggLSAzKSArIFwiLSBcIiArIHR4O1xyXG4gICAgICAgIGxldCByID0gbGluZSArIFwiXFxuXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZC5jaGlsZHJlbi5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgciArPSB0aGlzLm4ybWRSaWdodChuZC5jaGlsZHJlbltpXSwgZGVwdGggKyAxLCBpKTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgbjJtZExlZnQobmQ6IE1pbmROb2RlRGF0YSwgZGVwdGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgdHggPSBuZC50ZXh0LnJlcGxhY2UoL1xcbi9nLCBcIiBcIik7XHJcbiAgICAgICAgY29uc3QgbGluZSA9IFwiXFx0XCIucmVwZWF0KGRlcHRoIC0gMSkgKyBcIi8gXCIgKyB0eDtcclxuICAgICAgICBsZXQgciA9IGxpbmUgKyBcIlxcblwiO1xyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBuZC5jaGlsZHJlbikgciArPSB0aGlzLm4ybWRMZWZ0KGMsIGRlcHRoICsgMSk7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlbmRlck1kKCkge1xyXG4gICAgICAgIHRoaXMubWRDdC52YWx1ZSA9IHRoaXMucm9vdHMybWQoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcGFyc2VNZCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsKSA9PiBsLnRyaW0oKSk7XHJcbiAgICAgICAgaWYgKCFsaW5lcy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBjb25zdCBucjogTWluZE5vZGVEYXRhW10gPSBbXTtcclxuICAgICAgICBsZXQgY3VyOiBNaW5kTm9kZURhdGEgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBjb25zdCBzdGs6IFtudW1iZXIsIE1pbmROb2RlRGF0YV1bXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xyXG4gICAgICAgICAgICBsZXQgZGVwdGg6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IHR4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICBsZXQgc2lkZTogXCJsZWZ0XCIgfCBcInJpZ2h0XCIgPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgIC8vIEhlYWRpbmcgZm9ybWF0OiAjID0gcm9vdCwgIyMgPSBkZXB0aDEsICMjIyA9IGRlcHRoMiwgNCsgIyA9IGRlcHRoM1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nTSA9IGxpbmUubWF0Y2goL14oI3sxLH0pXFxzKyguKikvKTtcclxuICAgICAgICAgICAgaWYgKGhlYWRpbmdNKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZXZlbCA9IGhlYWRpbmdNWzFdLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHR4dCA9IGhlYWRpbmdNWzJdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJvb3Qgbm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMubWtSb290KHR4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5yLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXIueCA9IG5yW25yLmxlbmd0aCAtIDFdLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ci55ID0gbnJbbnIubGVuZ3RoIC0gMV0ueSArIDIwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbnIucHVzaChjdXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ay5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ay5wdXNoKFswLCBjdXJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICMjID0gZGVwdGgxLCAjIyMgPSBkZXB0aDIsICMjIyMrID0gZGVwdGgzXHJcbiAgICAgICAgICAgICAgICBkZXB0aCA9IE1hdGgubWluKGxldmVsIC0gMSwgMyk7XHJcbiAgICAgICAgICAgICAgICBzaWRlID0gXCJyaWdodFwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gTGVmdC1zaWRlIG1hcmtlcjogL1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdE0gPSBsaW5lLm1hdGNoKC9eKFxcdCopXFwvICguKikvKTtcclxuICAgICAgICAgICAgICAgIGlmIChsZWZ0TSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoID0gbGVmdE1bMV0ubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB0eHQgPSBsZWZ0TVsyXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZSA9IFwibGVmdFwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOdW1iZXJlZCBsaXN0IChkZXB0aCA0KTogXFx0MS4gdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bU0gPSBsaW5lLm1hdGNoKC9eKFxcdCspXFxkK1xcLlxccysoLiopLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bU0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGggPSBudW1NWzFdLmxlbmd0aCArIDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dCA9IG51bU1bMl0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlID0gXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1bGxldCBsaXN0IChkZXB0aCA1Kyk6IFxcdFxcdC0gdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidWxsZXRNID0gbGluZS5tYXRjaCgvXihcXHQrKS1cXHMrKC4qKS8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnVsbGV0TSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGggPSBidWxsZXRNWzFdLmxlbmd0aCArIDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQgPSBidWxsZXRNWzJdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZGUgPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMZWdhY3k6IG9sZCAtIG9yICogbWFya2VycyAoYmFja3dhcmQgY29tcGF0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkTSA9IGxpbmUubWF0Y2goL14oXFx0KikoWy0qXSlcXHMrKC4qKS8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZE0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXB0aCA9IG9sZE1bMV0ubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQgPSBvbGRNWzNdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWRlID0gb2xkTVsyXSA9PT0gXCIqXCIgPyBcImxlZnRcIiA6IFwicmlnaHRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxhaW4gdGV4dCA9IHJvb3QgKGxlZ2FjeSBmb3JtYXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gbGluZS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0eHQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMubWtSb290KHR4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5yLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXIueCA9IG5yW25yLmxlbmd0aCAtIDFdLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ci55ID0gbnJbbnIubGVuZ3RoIC0gMV0ueSArIDIwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnIucHVzaChjdXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ay5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ay5wdXNoKFswLCBjdXJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBuZDogTWluZE5vZGVEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB0eHQsXHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmNhbGNXKHR4dCwgZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmNhbGNIKHR4dCwgZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICAgICAgc2lkZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgd2hpbGUgKHN0ay5sZW5ndGggJiYgc3RrW3N0ay5sZW5ndGggLSAxXVswXSA+PSBkZXB0aCkgc3RrLnBvcCgpO1xyXG4gICAgICAgICAgICBpZiAoc3RrLmxlbmd0aCkgc3RrW3N0ay5sZW5ndGggLSAxXVsxXS5jaGlsZHJlbi5wdXNoKG5kKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoY3VyKSBjdXIuY2hpbGRyZW4ucHVzaChuZCk7XHJcbiAgICAgICAgICAgIHN0ay5wdXNoKFtkZXB0aCwgbmRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5yLmxlbmd0aCkgdGhpcy5yb290cyA9IG5yO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkUm9vdCh0ZXh0Pzogc3RyaW5nLCB4PzogbnVtYmVyLCB5PzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlUygpO1xyXG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLm1rUm9vdCh0ZXh0ID8/IHRoaXMucGx1Z2luLmdldFJvb3ROYW1lKCkpO1xyXG4gICAgICAgIGNvbnN0IGxhc3QgPSB0aGlzLnJvb3RzW3RoaXMucm9vdHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgLy8gQ29tcHV0ZSBib3R0b20tbW9zdCBZIGluY2x1ZGluZyBhbGwgZGVzY2VuZGFudHMgb2YgbGFzdCByb290XHJcbiAgICAgICAgbGV0IG1heFkgPSAwO1xyXG4gICAgICAgIGlmIChsYXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9MYXlvdXQobGFzdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmRNYXhZID0gKG5kOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvdCA9IG5kLnkgKyBuZC5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvdCA+IG1heFkpIG1heFkgPSBib3Q7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgbmQuY2hpbGRyZW4pIGZpbmRNYXhZKGMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmaW5kTWF4WShsYXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbi54ID0geCA/PyAobGFzdCA/IGxhc3QueCA6IDApO1xyXG4gICAgICAgIG4ueSA9IHkgPz8gKGxhc3QgPyBtYXhZICsgODAgOiAwKTtcclxuICAgICAgICB0aGlzLnJvb3RzLnB1c2gobik7XHJcbiAgICAgICAgdGhpcy5zZWwxKG4uaWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5lZGl0T25DcmVhdGUpIHRoaXMuZWRpdElkID0gbi5pZDtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNOb2RlKG4pO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2F2ZVMoKSB7XHJcbiAgICAgICAgdGhpcy51bmRvUy5wdXNoKEpTT04uc3RyaW5naWZ5KHRoaXMucm9vdHMpKTtcclxuICAgICAgICBpZiAodGhpcy51bmRvUy5sZW5ndGggPiA1MCkgdGhpcy51bmRvUy5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMucmVkb1MgPSBbXTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdW5kbygpIHtcclxuICAgICAgICBpZiAoIXRoaXMudW5kb1MubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5yZWRvUy5wdXNoKEpTT04uc3RyaW5naWZ5KHRoaXMucm9vdHMpKTtcclxuICAgICAgICB0aGlzLnJvb3RzID0gSlNPTi5wYXJzZSh0aGlzLnVuZG9TLnBvcCgpISk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsSWQgJiYgIXRoaXMuZkFsbCh0aGlzLnNlbElkKSkgdGhpcy5zZWxJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tdWx0aVNlbC5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMucmVjYWxjQWxsU2l6ZXMoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlZG8oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlZG9TLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudW5kb1MucHVzaChKU09OLnN0cmluZ2lmeSh0aGlzLnJvb3RzKSk7XHJcbiAgICAgICAgdGhpcy5yb290cyA9IEpTT04ucGFyc2UodGhpcy5yZWRvUy5wb3AoKSEpO1xyXG4gICAgICAgIHRoaXMucmVjYWxjQWxsU2l6ZXMoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcbiAgICAvKiogUmUtbWVhc3VyZSBldmVyeSBub2RlJ3Mgd2lkdGgvaGVpZ2h0IGJhc2VkIG9uIGN1cnJlbnQgc3R5bGUgc28gdGhhdFxyXG4gICAgICogIHRleHQgbmV2ZXIgZ2V0cyBjbGlwcGVkIG9yIGZvcmNlLXdyYXBwZWQgYWZ0ZXIgdW5kby9yZWRvLiAqL1xyXG4gICAgcHJpdmF0ZSByZWNhbGNBbGxTaXplcygpIHtcclxuICAgICAgICBjb25zdCB3YWxrID0gKG46IE1pbmROb2RlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1IgPSAhIW4uaXNSb290O1xyXG4gICAgICAgICAgICBuLndpZHRoID0gdGhpcy5jYWxjVyhuLnRleHQsIGlzUik7XHJcbiAgICAgICAgICAgIG4uaGVpZ2h0ID0gdGhpcy5jYWxjSChuLnRleHQsIGlzUik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB3YWxrKGMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHdhbGsocik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZBbGwoaWQ6IHN0cmluZyk6IE1pbmROb2RlRGF0YSB8IG51bGwge1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLmZOKGlkLCByKTtcclxuICAgICAgICAgICAgaWYgKGYpIHJldHVybiBmO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhcHBseVN0eWxlKHA6IFBhcnRpYWw8TWluZE1hcFN0eWxlPikge1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSB7IC4uLnRoaXMuc3R5bGUsIC4uLnAgfTtcclxuICAgICAgICB0aGlzLnBsdWdpbi51cGRhdGVTdHlsZShwKTtcclxuICAgICAgICB0aGlzLmFwcGx5Q2FudmFzQmcoKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHAudG9vbGJhclBvc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC50b29sYmFyUGFkVG9wICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC50b29sYmFyUGFkUmlnaHQgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJQYWRCb3R0b20gIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJQYWRMZWZ0ICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC50b29sYmFyQmdDb2xvciAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhckJvcmRlckNvbG9yICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC50b29sYmFyQm9yZGVyV2lkdGggIT09IHVuZGVmaW5lZFxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgdGhpcy5hcHBseVRvb2xiYXJTdHlsZSgpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgcC50b29sYmFyQnRuQmdDb2xvciAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAudG9vbGJhckJ0bkJvcmRlclN0eWxlICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC50b29sYmFyQnRuQm9yZGVyQ29sb3IgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnRvb2xiYXJCdG5UZXh0Q29sb3IgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnRiRWwuZW1wdHkoKTtcclxuICAgICAgICAgICAgdGhpcy5idWlsZFRiKHRoaXMudGJFbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlUb29sYmFyU3R5bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVjYWxjdWxhdGUgYWxsIG5vZGUgc2l6ZXMgd2hlbiBmb250L2xheW91dCByZWxhdGVkIHN0eWxlcyBjaGFuZ2VcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHAubm9kZUZvbnRTaXplICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC5yb290Rm9udFNpemUgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLm5vZGVGb250RmFtaWx5ICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC5yb290Rm9udEZhbWlseSAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHAubm9kZU1pbldpZHRoICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC5ub2RlTWluSGVpZ2h0ICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC5yb290TWluV2lkdGggIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLnJvb3RNaW5IZWlnaHQgIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwLm5vZGVQYWRYICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgcC5ub2RlTGluZUhlaWdodCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjYWxjQWxsTm9kZVNpemVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlY2FsY0FsbE5vZGVTaXplcygpIHtcclxuICAgICAgICBjb25zdCB2aXNpdCA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNSID0gISFuLmlzUm9vdDtcclxuICAgICAgICAgICAgbi53aWR0aCA9IHRoaXMuY2FsY1cobi50ZXh0IHx8IFwiIFwiLCBpc1IpO1xyXG4gICAgICAgICAgICBuLmhlaWdodCA9IHRoaXMuY2FsY0gobi50ZXh0IHx8IFwiIFwiLCBpc1IpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgdmlzaXQoYyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdmlzaXQocik7XHJcbiAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzc2lnblJhaW5ib3dDb2xvcihwYXJlbnQ6IE1pbmROb2RlRGF0YSwgY2hpbGQ6IE1pbmROb2RlRGF0YSkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdHlsZS5jb25uZWN0aW9uUmFpbmJvdyB8fCAhcGFyZW50LmlzUm9vdCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghY2hpbGQuY29ubmVjdGlvbkNvbG9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJiID0gdGhpcy5nZXRSYWluYm93KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcclxuICAgICAgICAgICAgY2hpbGQuY29ubmVjdGlvbkNvbG9yID1cclxuICAgICAgICAgICAgICAgIHJiWyhpZHggPj0gMCA/IGlkeCA6IHBhcmVudC5jaGlsZHJlbi5sZW5ndGgpICUgcmIubGVuZ3RoXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG1hdGNoS2V5KGU6IEtleWJvYXJkRXZlbnQsIGNvbWJvOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IGNvbWJvLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIrXCIpO1xyXG4gICAgICAgIGNvbnN0IG5lZWRDdHJsID0gcGFydHMuaW5jbHVkZXMoXCJjdHJsXCIpO1xyXG4gICAgICAgIGNvbnN0IG5lZWRTaGlmdCA9IHBhcnRzLmluY2x1ZGVzKFwic2hpZnRcIik7XHJcbiAgICAgICAgY29uc3QgbmVlZEFsdCA9IHBhcnRzLmluY2x1ZGVzKFwiYWx0XCIpO1xyXG4gICAgICAgIGNvbnN0IG1haW5LZXkgPVxyXG4gICAgICAgICAgICBwYXJ0cy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAocCkgPT4gcCAhPT0gXCJjdHJsXCIgJiYgcCAhPT0gXCJzaGlmdFwiICYmIHAgIT09IFwiYWx0XCIsXHJcbiAgICAgICAgICAgIClbMF0gfHwgXCJcIjtcclxuICAgICAgICBpZiAobmVlZEN0cmwgIT09IChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChuZWVkU2hpZnQgIT09IGUuc2hpZnRLZXkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobmVlZEFsdCAhPT0gZS5hbHRLZXkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBjb25zdCBlS2V5ID0gZS5rZXkgPT09IFwiIFwiID8gXCJzcGFjZVwiIDogZS5rZXkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBlQ29kZSA9IGUuY29kZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIC8vIE1hcCBlLmNvZGUgdG8gYmFzZSB1bnNoaWZ0ZWQga2V5IGZvciByZWxpYWJsZSBtYXRjaGluZ1xyXG4gICAgICAgIGNvbnN0IGNvZGVNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgICAgICAgICAgIGVxdWFsOiBcIj1cIixcclxuICAgICAgICAgICAgbWludXM6IFwiLVwiLFxyXG4gICAgICAgICAgICBkaWdpdDA6IFwiMFwiLFxyXG4gICAgICAgICAgICBkaWdpdDE6IFwiMVwiLFxyXG4gICAgICAgICAgICBkaWdpdDI6IFwiMlwiLFxyXG4gICAgICAgICAgICBkaWdpdDM6IFwiM1wiLFxyXG4gICAgICAgICAgICBkaWdpdDQ6IFwiNFwiLFxyXG4gICAgICAgICAgICBkaWdpdDU6IFwiNVwiLFxyXG4gICAgICAgICAgICBkaWdpdDY6IFwiNlwiLFxyXG4gICAgICAgICAgICBkaWdpdDc6IFwiN1wiLFxyXG4gICAgICAgICAgICBkaWdpdDg6IFwiOFwiLFxyXG4gICAgICAgICAgICBkaWdpdDk6IFwiOVwiLFxyXG4gICAgICAgICAgICBicmFja2V0bGVmdDogXCJbXCIsXHJcbiAgICAgICAgICAgIGJyYWNrZXRyaWdodDogXCJdXCIsXHJcbiAgICAgICAgICAgIHNlbWljb2xvbjogXCI7XCIsXHJcbiAgICAgICAgICAgIHF1b3RlOiBcIidcIixcclxuICAgICAgICAgICAgYmFja3F1b3RlOiBcImBcIixcclxuICAgICAgICAgICAgY29tbWE6IFwiLFwiLFxyXG4gICAgICAgICAgICBwZXJpb2Q6IFwiLlwiLFxyXG4gICAgICAgICAgICBzbGFzaDogXCIvXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBiYXNlS2V5ID0gY29kZU1hcFtlQ29kZV0gfHwgXCJcIjtcclxuICAgICAgICByZXR1cm4gZUtleSA9PT0gbWFpbktleSB8fCBlQ29kZSA9PT0gbWFpbktleSB8fCBiYXNlS2V5ID09PSBtYWluS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFx1MjU1MFx1MjU1MFx1MjU1MCBNb2RhbHMgLSBhbGwgY2xvc2Ugb24gRXNjIFx1MjU1MFx1MjU1MFx1MjU1MFxyXG4gICAgcHJpdmF0ZSBzaG93U3R5bGVNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLmNsb3NlUG9wKCk7XHJcbiAgICAgICAgY29uc3Qgb3YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG92LmFkZENsYXNzKFwibXotbW9kYWwtb3ZlcmxheVwiKTtcclxuICAgICAgICBjb25zdCBtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBtLmFkZENsYXNzKFwibXotbW9kYWxcIik7XHJcbiAgICAgICAgbS5jcmVhdGVFbChcImgzXCIsIHsgdGV4dDogdChcInNtLnRpdGxlXCIpIH0pLmFkZENsYXNzKFwibXotbW9kYWwtdGl0bGVcIik7XHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIG92LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBtLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcENsb3NlID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucG9wQ2xvc2UgPSBjbG9zZTtcclxuICAgICAgICBvdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xyXG4gICAgICAgIG0uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJrZXlkb3duXCIsXHJcbiAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2VjID0gKGljb246IHN0cmluZywgdGl0bGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzID0gbS5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgcy5hZGRDbGFzcyhcIm16LW1vZGFsLXNlY1wiKTtcclxuICAgICAgICAgICAgcy5jcmVhdGVFbChcImRpdlwiLCB7IHRleHQ6IGljb24gKyBcIiBcIiArIHRpdGxlIH0pLmFkZENsYXNzKFxyXG4gICAgICAgICAgICAgICAgXCJtei1tb2RhbC1zZWMtaGRyXCIsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBzO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgUiA9IChcclxuICAgICAgICAgICAgcDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgICAgIGw6IHN0cmluZyxcclxuICAgICAgICAgICAgazoga2V5b2YgTWluZE1hcFN0eWxlLFxyXG4gICAgICAgICAgICB0cDogc3RyaW5nLFxyXG4gICAgICAgICAgICBvPzoge1xyXG4gICAgICAgICAgICAgICAgbWluPzogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgbWF4PzogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz86IHN0cmluZ1tdO1xyXG4gICAgICAgICAgICAgICAgc3RlcD86IG51bWJlcjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gcC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgcm93LmFkZENsYXNzKFwibXotbW9kYWwtcm93XCIpO1xyXG4gICAgICAgICAgICByb3cuY3JlYXRlRWwoXCJsYWJlbFwiLCB7IHRleHQ6IGwgfSkuYWRkQ2xhc3MoXCJtei1tb2RhbC1sYmxcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGN2ID0gdGhpcy5zdHlsZVtrXTtcclxuICAgICAgICAgICAgaWYgKHRwID09PSBcImNvbG9yXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSByb3cuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaS50eXBlID0gXCJjb2xvclwiO1xyXG4gICAgICAgICAgICAgICAgaS52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGN2ID09PSBcInN0cmluZ1wiICYmIGN2LnN0YXJ0c1dpdGgoXCJ2YXJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFN0cmluZyhjdik7XHJcbiAgICAgICAgICAgICAgICBpLmFkZENsYXNzKFwibXotbW9kYWwtY29sb3JcIik7XHJcbiAgICAgICAgICAgICAgICBpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoeyBba106IGkudmFsdWUgfSBhcyBQYXJ0aWFsPE1pbmRNYXBTdHlsZT4pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0cCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IHJvdy5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBpLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgICAgICAgICAgaS5taW4gPSBTdHJpbmcobz8ubWluID8/IDApO1xyXG4gICAgICAgICAgICAgICAgaS5tYXggPSBTdHJpbmcobz8ubWF4ID8/IDk5OSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobz8uc3RlcCkgaS5zdGVwID0gU3RyaW5nKG8uc3RlcCk7XHJcbiAgICAgICAgICAgICAgICBpLnZhbHVlID0gU3RyaW5nKGN2KTtcclxuICAgICAgICAgICAgICAgIGkuYWRkQ2xhc3MoXCJtei1tb2RhbC1udW1cIik7XHJcbiAgICAgICAgICAgICAgICBpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBba106IE51bWJlcihpLnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPiksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRwID09PSBcInNlbGVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gcm93LmNyZWF0ZUVsKFwic2VsZWN0XCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgcy5hZGRDbGFzcyhcIm16LW1vZGFsLXNlbFwiKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdiBvZiBvPy5vcHRpb25zID8/IFtdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wLnZhbHVlID0gdjtcclxuICAgICAgICAgICAgICAgICAgICBvcC50ZXh0ID0gdjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodiA9PT0gU3RyaW5nKGN2KSkgb3Auc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHMuYXBwZW5kQ2hpbGQob3ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHsgW2tdOiBzLnZhbHVlIH0gYXMgUGFydGlhbDxNaW5kTWFwU3R5bGU+KSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHAgPT09IFwidG9nZ2xlXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNiID0gcm93LmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGNiLnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgICAgICAgICBjYi5jaGVja2VkID0gISFjdjtcclxuICAgICAgICAgICAgICAgIGNiLmFkZENsYXNzKFwibXotbW9kYWwtY2hrXCIpO1xyXG4gICAgICAgICAgICAgICAgY2IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtrXTogY2IuY2hlY2tlZCxcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPiksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBzMSA9IHNlYyhcIlx1RDgzRFx1RENFNlwiLCB0KFwic20uY2hpbGRcIikpO1xyXG4gICAgICAgIFIoczEsIHQoXCJzbS5iZ1wiKSwgXCJub2RlQmdDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczEsIHQoXCJzbS50ZXh0XCIpLCBcIm5vZGVUZXh0Q29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHMxLCB0KFwic20uZm9udFNpemVcIiksIFwibm9kZUZvbnRTaXplXCIsIFwibnVtYmVyXCIsIHsgbWluOiAxMCwgbWF4OiAzMiB9KTtcclxuICAgICAgICBSKHMxLCB0KFwic20uZm9udFwiKSwgXCJub2RlRm9udEZhbWlseVwiLCBcInNlbGVjdFwiLCB7IG9wdGlvbnM6IEZPTlRfTElTVCB9KTtcclxuICAgICAgICBSKHMxLCB0KFwic20uYm9yZGVyU3R5bGVcIiksIFwibm9kZUJvcmRlclN0eWxlXCIsIFwic2VsZWN0XCIsIHtcclxuICAgICAgICAgICAgb3B0aW9uczogW1wic29saWRcIiwgXCJkYXNoZWRcIiwgXCJkb3R0ZWRcIiwgXCJkb3VibGVcIiwgXCJub25lXCJdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczEsIHQoXCJzbS5ib3JkZXJDb2xvclwiKSwgXCJub2RlQm9yZGVyQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHMxLCB0KFwic20uYm9yZGVyV2lkdGhcIiksIFwibm9kZUJvcmRlcldpZHRoXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBtYXg6IDgsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMSwgdChcInNtLmJvcmRlclJhZGl1c1wiKSwgXCJub2RlQm9yZGVyUmFkaXVzXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBtYXg6IDMyLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczEsIHQoXCJzbS5taW5XaWR0aFwiKSwgXCJub2RlTWluV2lkdGhcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDMwLFxyXG4gICAgICAgICAgICBtYXg6IDQwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMxLCB0KFwic20ubWluSGVpZ2h0XCIpLCBcIm5vZGVNaW5IZWlnaHRcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDIwLFxyXG4gICAgICAgICAgICBtYXg6IDIwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzMiA9IHNlYyhcIlx1RDgzQ1x1REZFMFwiLCB0KFwic20ucm9vdFwiKSk7XHJcbiAgICAgICAgUihzMiwgdChcInNtLmJnXCIpLCBcInJvb3RCZ0NvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzMiwgdChcInNtLnRleHRcIiksIFwicm9vdFRleHRDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS5mb250U2l6ZVwiKSwgXCJyb290Rm9udFNpemVcIiwgXCJudW1iZXJcIiwgeyBtaW46IDEwLCBtYXg6IDMyIH0pO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS5mb250XCIpLCBcInJvb3RGb250RmFtaWx5XCIsIFwic2VsZWN0XCIsIHsgb3B0aW9uczogRk9OVF9MSVNUIH0pO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS5ib3JkZXJTdHlsZVwiKSwgXCJyb290Qm9yZGVyU3R5bGVcIiwgXCJzZWxlY3RcIiwge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBbXCJzb2xpZFwiLCBcImRhc2hlZFwiLCBcImRvdHRlZFwiLCBcImRvdWJsZVwiLCBcIm5vbmVcIl0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMiwgdChcInNtLmJvcmRlckNvbG9yXCIpLCBcInJvb3RCb3JkZXJDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS5ib3JkZXJXaWR0aFwiKSwgXCJyb290Qm9yZGVyV2lkdGhcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIG1heDogOCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMyLCB0KFwic20uYm9yZGVyUmFkaXVzXCIpLCBcInJvb3RCb3JkZXJSYWRpdXNcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIG1heDogMzIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzMiwgdChcInNtLm1pbldpZHRoXCIpLCBcInJvb3RNaW5XaWR0aFwiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogNTAsXHJcbiAgICAgICAgICAgIG1heDogNDAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczIsIHQoXCJzbS5taW5IZWlnaHRcIiksIFwicm9vdE1pbkhlaWdodFwiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogMjAsXHJcbiAgICAgICAgICAgIG1heDogMjAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHMzID0gc2VjKFwiXHVEODNEXHVERDE3XCIsIHQoXCJzbS5jb25uXCIpKTtcclxuICAgICAgICBSKHMzLCB0KFwic20udHlwZVwiKSwgXCJjb25uZWN0aW9uU3R5bGVcIiwgXCJzZWxlY3RcIiwge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBDT05ORUNUSU9OX1NUWUxFUyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMzLCB0KFwic20uY29sb3JcIiksIFwiY29ubmVjdGlvbkNvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzMywgdChcInNtLndpZHRoXCIpLCBcImNvbm5lY3Rpb25XaWR0aFwiLCBcIm51bWJlclwiLCB7IG1pbjogMSwgbWF4OiA4IH0pO1xyXG4gICAgICAgIFIoczMsIHQoXCJzbS5jb25uTGVuZ3RoXCIpLCBcImNvbm5lY3Rpb25MZW5ndGhcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDMwLFxyXG4gICAgICAgICAgICBtYXg6IDMwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMzLCB0KFwic20ubm9kZURpclwiKSwgXCJub2RlRGlyZWN0aW9uXCIsIFwic2VsZWN0XCIsIHtcclxuICAgICAgICAgICAgb3B0aW9uczogW1wicmlnaHRcIiwgXCJsZWZ0XCIsIFwiYm90aFwiXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHMzLCB0KFwic20ubm9kZUdhcFlcIiksIFwibm9kZUdhcFlcIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDgsXHJcbiAgICAgICAgICAgIG1heDogODAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gUmFpbmJvdzogbGlzdCB3aXRoIHJlYWwgY29sb3IgZG90cywgZGVsZXRlIGJ1dHRvbnMsIG5vIG1vZGFsIHJlb3BlblxyXG4gICAgICAgIGNvbnN0IGN0Um93ID0gczMuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgY3RSb3cuYWRkQ2xhc3MoXCJtei1yYWluYm93LWN0XCIpO1xyXG4gICAgICAgIGN0Um93XHJcbiAgICAgICAgICAgIC5jcmVhdGVFbChcImxhYmVsXCIsIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IHQoXCJzbS5yYWluYm93XCIpLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJtei1yYWluYm93LWxibFwiKTtcclxuICAgICAgICBjb25zdCBhbGxQYWxzOiB7IFtrOiBzdHJpbmddOiBzdHJpbmdbXSB9ID0ge1xyXG4gICAgICAgICAgICAuLi5SQUlOQk9XX1BBTEVUVEVTLFxyXG4gICAgICAgICAgICAuLi4odGhpcy5zdHlsZS5jdXN0b21SYWluYm93cyB8fCB7fSksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgY3VyUGFsID0gdGhpcy5zdHlsZS5jb25uZWN0aW9uUmFpbmJvd1xyXG4gICAgICAgICAgICA/IHRoaXMuc3R5bGUucmFpbmJvd1BhbGV0dGVcclxuICAgICAgICAgICAgOiBcIm9mZlwiO1xyXG4gICAgICAgIGNvbnN0IGxpc3RXcmFwID0gY3RSb3cuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgbGlzdFdyYXAuYWRkQ2xhc3MoXCJtei1yYWluYm93LWxpc3RcIik7XHJcbiAgICAgICAgY29uc3QgcmVidWlsZExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3RXcmFwLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWQgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5SQUlOQk9XX1BBTEVUVEVTLFxyXG4gICAgICAgICAgICAgICAgLi4uKHRoaXMuc3R5bGUuY3VzdG9tUmFpbmJvd3MgfHwge30pLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBta0l0ZW0gPSAoXHJcbiAgICAgICAgICAgICAgICBrZXk6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IHN0cmluZ1tdIHwgbnVsbCxcclxuICAgICAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdCA9IGxpc3RXcmFwLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgaXQuYWRkQ2xhc3MoXCJtei1yYWluYm93LWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBpdC50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiLCBrZXkgPT09IGN1clBhbCk7XHJcbiAgICAgICAgICAgICAgICBpdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gY3VyUGFsKSBpdC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdC50b2dnbGVDbGFzcyhcIm16LXJhaW5ib3ctaG92ZXJcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBubSA9IGl0LmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IGxhYmVsIH0pO1xyXG4gICAgICAgICAgICAgICAgbm0uYWRkQ2xhc3MoXCJtei1yYWluYm93LWl0ZW0tbGJsXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbG9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvdHMgPSBpdC5jcmVhdGVFbChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG90cy5hZGRDbGFzcyhcIm16LXJhaW5ib3ctZG90c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgY29sb3JzLnNsaWNlKDAsIDEwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkID0gZG90cy5jcmVhdGVFbChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuYWRkQ2xhc3MoXCJtei1yYWluYm93LWRvdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoeyBcIi0tbXotZG90LWNvbG9yXCI6IGMgfSkuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChbaywgdl0pID0+IGQuc3R5bGUuc2V0UHJvcGVydHkoaywgdiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFsLWRlbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwib2ZmXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHsgY29ubmVjdGlvblJhaW5ib3c6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJQYWwgPSBcIm9mZlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uUmFpbmJvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhaW5ib3dQYWxldHRlOiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJQYWwgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYnVpbGRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBidXR0b24gKG5vdCBmb3IgU29saWQgb3IgYnVpbHQtaW4gcGFsZXR0ZXMpXHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBcIm9mZlwiICYmICFSQUlOQk9XX1BBTEVUVEVTW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWwgPSBpdC5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBcIlx1MjcxNVwiIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbC5jbGFzc05hbWUgPSBcInBhbC1kZWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWwuYWRkQ2xhc3MoXCJtei1yZXNldC1idG5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyID0geyAuLi4odGhpcy5zdHlsZS5jdXN0b21SYWluYm93cyB8fCB7fSkgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNyW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7IGN1c3RvbVJhaW5ib3dzOiBjciB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1clBhbCA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJQYWwgPSBcIm9mZlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHsgY29ubmVjdGlvblJhaW5ib3c6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYnVpbGRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG1rSXRlbShcIm9mZlwiLCBcIlNvbGlkXCIsIG51bGwpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb2xvcnNdIG9mIE9iamVjdC5lbnRyaWVzKHVwZGF0ZWQpKVxyXG4gICAgICAgICAgICAgICAgbWtJdGVtKG5hbWUsIG5hbWUsIGNvbG9ycyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZWJ1aWxkTGlzdCgpO1xyXG4gICAgICAgIC8vIEFkZCBjdXN0b20gcGFsZXR0ZVxyXG4gICAgICAgIGNvbnN0IGFkZFJvdyA9IGN0Um93LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGFkZFJvdy5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3RcIik7XHJcbiAgICAgICAgY29uc3QgYWRkQnRuID0gYWRkUm93LmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcclxuICAgICAgICAgICAgdGV4dDogdChcInNtLmN1c3RvbVJhaW5ib3dcIiksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWRkQnRuLmFkZENsYXNzKFwibXotbW9kYWwtYnRuXCIsIFwibXotbW9kYWwtYnRuLXNlY29uZGFyeVwiKTtcclxuICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgYWRkQnRuLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCBlZCA9IGFkZFJvdy5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgZWQuYWRkQ2xhc3MoXCJtei1yYWluYm93LWN0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lSW5wID0gZWQuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBuYW1lSW5wLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgbmFtZUlucC5wbGFjZWhvbGRlciA9IFwiUGFsZXR0ZSBuYW1lXCI7XHJcbiAgICAgICAgICAgIG5hbWVJbnAudmFsdWUgPSBcIkN1c3RvbVwiO1xyXG4gICAgICAgICAgICBuYW1lSW5wLmFkZENsYXNzKFwibXotcmFpbmJvdy1jci1uYW1lXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMgPSBbXHJcbiAgICAgICAgICAgICAgICBcIiNmZjAwMDBcIixcclxuICAgICAgICAgICAgICAgIFwiIzAwZmYwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCIjMDAwMGZmXCIsXHJcbiAgICAgICAgICAgICAgICBcIiNmZmZmMDBcIixcclxuICAgICAgICAgICAgICAgIFwiI2ZmMDBmZlwiLFxyXG4gICAgICAgICAgICAgICAgXCIjMDBmZmZmXCIsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIGNvbnN0IGNEaXYgPSBlZC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgY0Rpdi5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3Itcm93XCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZWJ1aWxkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaSA9IGNEaXYuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNpLnR5cGUgPSBcImNvbG9yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2kudmFsdWUgPSBjb2xvcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2kuYWRkQ2xhc3MoXCJtei1yYWluYm93LWNyLWlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnNbaV0gPSBjaS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFiID0gY0Rpdi5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiK1wiIH0pO1xyXG4gICAgICAgICAgICAgICAgYWIuYWRkQ2xhc3MoXCJtei1yYWluYm93LWNyLWlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcnMucHVzaChcIiM4ODg4ODhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVidWlsZCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlYnVpbGQoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2F2ZUJ0biA9IGVkLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJcdTI3MTMgU2F2ZVwiIH0pO1xyXG4gICAgICAgICAgICBzYXZlQnRuLmFkZENsYXNzKFwibXotcmFpbmJvdy1jci1idG5cIiwgXCJtei1yYWluYm93LWNyLXNhdmVcIik7XHJcbiAgICAgICAgICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBubSA9IG5hbWVJbnAudmFsdWUudHJpbSgpIHx8IFwiQ3VzdG9tXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuc3R5bGUuY3VzdG9tUmFpbmJvd3MgfHwge307XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3Rpbmdbbm1dIHx8IFJBSU5CT1dfUEFMRVRURVNbbm1dKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmdbbm0gKyBcIiBcIiArIGldIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJBSU5CT1dfUEFMRVRURVNbbm0gKyBcIiBcIiArIGldXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgbm0gPSBubSArIFwiIFwiICsgaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NSID0geyAuLi5leGlzdGluZywgW25tXTogWy4uLmNvbG9yc10gfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tUmFpbmJvd3M6IG5ld0NSLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25SYWluYm93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhaW5ib3dQYWxldHRlOiBubSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY3VyUGFsID0gbm07XHJcbiAgICAgICAgICAgICAgICBlZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGFkZEJ0bi50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZWJ1aWxkTGlzdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzM2IgPSBzZWMoXCJcdUQ4M0RcdURDRERcIiwgdChcInNtLnRleHRBbGlnblwiKSk7XHJcbiAgICAgICAgUihzM2IsIHQoXCJzbS50ZXh0QWxpZ25cIiksIFwidGV4dEFsaWduXCIsIFwic2VsZWN0XCIsIHtcclxuICAgICAgICAgICAgb3B0aW9uczogW1wibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHM0ID0gc2VjKFwiXHUyNzA1XCIsIHQoXCJzbS5zZWxcIikpO1xyXG4gICAgICAgIFIoczQsIHQoXCJzbS5zZWxDb2xvclwiKSwgXCJzZWxlY3Rpb25Db2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczQsIHQoXCJzbS5zZWxXaWR0aFwiKSwgXCJzZWxlY3Rpb25XaWR0aFwiLCBcIm51bWJlclwiLCB7IG1pbjogMSwgbWF4OiA4IH0pO1xyXG4gICAgICAgIFIoczQsIHQoXCJzbS5zZWxPZmZzZXRcIiksIFwic2VsZWN0aW9uT3V0bGluZU9mZnNldFwiLCBcIm51bWJlclwiLCB7XHJcbiAgICAgICAgICAgIG1pbjogLTUsXHJcbiAgICAgICAgICAgIG1heDogMjAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzNCwgdChcInNtLmVkaXRPdXRsaW5lXCIpLCBcImVkaXRPdXRsaW5lQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHM0LCB0KFwic20uZWRpdE91dGxpbmVXaWR0aFwiKSwgXCJlZGl0T3V0bGluZVdpZHRoXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBtYXg6IDgsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzNCwgdChcInNtLmJveFNlbENvbG9yXCIpLCBcImJveFNlbGVjdGlvbkNvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgY29uc3QgczUgPSBzZWMoXCJcdUQ4M0RcdUREQkNcdUZFMEZcIiwgdChcInNtLmNhbnZhc0JnXCIpKTtcclxuICAgICAgICBSKHM1LCB0KFwic20uY2FudmFzQmdcIiksIFwiY2FudmFzQmdcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBjb25zdCBzNiA9IHNlYyhcIlx1RDgzRFx1REQyN1wiLCB0KFwic20uc2hvd1Rvb2xiYXJcIikpO1xyXG4gICAgICAgIGNvbnN0IHRiUm93ID0gczYuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgdGJSb3cuYWRkQ2xhc3MoXCJtei1tb2RhbC1yb3dcIik7XHJcbiAgICAgICAgdGJSb3dcclxuICAgICAgICAgICAgLmNyZWF0ZUVsKFwibGFiZWxcIiwgeyB0ZXh0OiB0KFwic20uc2hvd1Rvb2xiYXJcIikgfSlcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwibXotbW9kYWwtbGJsXCIpO1xyXG4gICAgICAgIGNvbnN0IHRiQ2IgPSB0YlJvdy5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGJDYi50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIHRiQ2IuY2hlY2tlZCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dUb29sYmFyO1xyXG4gICAgICAgIHRiQ2IuYWRkQ2xhc3MoXCJtei1tb2RhbC1jaGtcIik7XHJcbiAgICAgICAgdGJDYi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1Rvb2xiYXIgPSB0YkNiLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgIHZvaWQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9vbGJhclZpc2liaWxpdHkoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJQb3NcIiksIFwidG9vbGJhclBvc2l0aW9uXCIsIFwic2VsZWN0XCIsIHtcclxuICAgICAgICAgICAgb3B0aW9uczogW1widG9wXCIsIFwiYm90dG9tXCJdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YlBhZFRcIiksIFwidG9vbGJhclBhZFRvcFwiLCBcIm51bWJlclwiLCB7IG1pbjogMCwgbWF4OiA0MCB9KTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJQYWRSXCIpLCBcInRvb2xiYXJQYWRSaWdodFwiLCBcIm51bWJlclwiLCB7IG1pbjogMCwgbWF4OiA0MCB9KTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJQYWRCXCIpLCBcInRvb2xiYXJQYWRCb3R0b21cIiwgXCJudW1iZXJcIiwge1xyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIG1heDogNDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUihzNiwgdChcInNtLnRiUGFkTFwiKSwgXCJ0b29sYmFyUGFkTGVmdFwiLCBcIm51bWJlclwiLCB7IG1pbjogMCwgbWF4OiA0MCB9KTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJCZ1wiKSwgXCJ0b29sYmFyQmdDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczYsIHQoXCJzbS50YkJ0bkJnXCIpLCBcInRvb2xiYXJCdG5CZ0NvbG9yXCIsIFwiY29sb3JcIik7XHJcbiAgICAgICAgUihzNiwgdChcInNtLnRiQnRuQm9yZGVyXCIpLCBcInRvb2xiYXJCdG5Cb3JkZXJTdHlsZVwiLCBcInNlbGVjdFwiLCB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcInNvbGlkXCIsIFwiZGFzaGVkXCIsIFwiZG90dGVkXCIsIFwibm9uZVwiXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJCdG5Cb3JkZXJDb2xvclwiKSwgXCJ0b29sYmFyQnRuQm9yZGVyQ29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHM2LCB0KFwic20udGJCdG5UZXh0XCIpLCBcInRvb2xiYXJCdG5UZXh0Q29sb3JcIiwgXCJjb2xvclwiKTtcclxuICAgICAgICBSKHM2LCBcIlNlcGFyYXRvciBjb2xvclwiLCBcInRvb2xiYXJCb3JkZXJDb2xvclwiLCBcImNvbG9yXCIpO1xyXG4gICAgICAgIFIoczYsIFwiU2VwYXJhdG9yIHdpZHRoXCIsIFwidG9vbGJhckJvcmRlcldpZHRoXCIsIFwibnVtYmVyXCIsIHtcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBtYXg6IDUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gUmVzZXQgdG9vbGJhciBidXR0b25cclxuICAgICAgICBjb25zdCB0YlJlc2V0QnRuID0gczYuY3JlYXRlRWwoXCJidXR0b25cIiwge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlx1MjFCQSBcIiArIHQoXCJzbS50YlJlc2V0RGVmYXVsdFwiKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YlJlc2V0QnRuLmFkZENsYXNzKFwibXotbnMtYnRuXCIpO1xyXG4gICAgICAgIHRiUmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNEYXJrID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWUgPT09IFwiZGFya1wiO1xyXG4gICAgICAgICAgICBjb25zdCBkZWYgPSBpc0RhcmsgPyBERUZBVUxUX1RPT0xCQVJfREFSSyA6IERFRkFVTFRfVE9PTEJBUl9MSUdIVDtcclxuICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKHtcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJCZ0NvbG9yOiBkZWYudG9vbGJhckJnQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyQnRuQmdDb2xvcjogZGVmLnRvb2xiYXJCdG5CZ0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhckJ0bkJvcmRlclN0eWxlOiBkZWYudG9vbGJhckJ0bkJvcmRlclN0eWxlLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhckJ0bkJvcmRlckNvbG9yOiBkZWYudG9vbGJhckJ0bkJvcmRlckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhckJ0blRleHRDb2xvcjogZGVmLnRvb2xiYXJCdG5UZXh0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyQm9yZGVyQ29sb3I6IGRlZi50b29sYmFyQm9yZGVyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyQm9yZGVyV2lkdGg6IGRlZi50b29sYmFyQm9yZGVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyUGFkVG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgdG9vbGJhclBhZFJpZ2h0OiAxMixcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJQYWRCb3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyUGFkTGVmdDogMTIsXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyUG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTdHlsZU1vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgYnIgPSBtLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGJyLmFkZENsYXNzKFwibXotbW9kYWwtYnRuc1wiKTtcclxuICAgICAgICBici5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IHQoXCJzbS5yZXNldFwiKSB9KS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSh7IC4uLkRFRkFVTFRfU1RZTEUgfSk7XHJcbiAgICAgICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U3R5bGVNb2RhbCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgY2IgPSBici5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IHQoXCJzbS5jbG9zZVwiKSB9KTtcclxuICAgICAgICBjYi5hZGRDbGFzcyhcIm16LW1vZGFsLWJ0blwiLCBcIm16LW1vZGFsLWJ0bi1wcmltYXJ5XCIpO1xyXG4gICAgICAgIGNiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dOb2RlU3R5bGVFZGl0b3IoZTogTW91c2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VQb3AoKTtcclxuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLmFsbFNlbCgpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5mQWxsKFsuLi5pZHNdWzBdKTtcclxuICAgICAgICBjb25zdCBzbyA9IGZpcnN0Py5zdHlsZU92ZXJyaWRlID8/IHt9O1xyXG4gICAgICAgIGNvbnN0IGlzUiA9ICEhZmlyc3Q/LmlzUm9vdDtcclxuICAgICAgICBjb25zdCBvdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgb3YuYWRkQ2xhc3MoXCJtei1tb2RhbC1vdmVybGF5XCIpO1xyXG4gICAgICAgIGNvbnN0IG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG0uYWRkQ2xhc3MoXCJtei1tb2RhbFwiKTtcclxuICAgICAgICBtLmNyZWF0ZUVsKFwiaDRcIiwge1xyXG4gICAgICAgICAgICB0ZXh0OiB0KFwibnMudGl0bGVcIikgKyBcIiAoXCIgKyBpZHMuc2l6ZSArIFwiKVwiLFxyXG4gICAgICAgIH0pLmFkZENsYXNzKFwibXotbnMtdGl0bGVcIik7XHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIG92LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBtLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcENsb3NlID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucG9wQ2xvc2UgPSBjbG9zZTtcclxuICAgICAgICBvdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xyXG4gICAgICAgIG0uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJrZXlkb3duXCIsXHJcbiAgICAgICAgICAgIChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChldi5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBhcHBseSA9IChmbjogKG46IE1pbmROb2RlRGF0YSkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuID0gdGhpcy5mQWxsKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChuKSBmbihuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWtDID0gKGw6IHN0cmluZywgY3VyOiBzdHJpbmcsIGZuOiAodjogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBtLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByLmFkZENsYXNzKFwibXotbW9kYWwtcm93XCIpO1xyXG4gICAgICAgICAgICByLmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IGwgfSkuYWRkQ2xhc3MoXCJtei1tb2RhbC1sYmxcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGkgPSByLmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgaS50eXBlID0gXCJjb2xvclwiO1xyXG4gICAgICAgICAgICBpLnZhbHVlID0gY3VyO1xyXG4gICAgICAgICAgICBpLmFkZENsYXNzKFwibXotc3AtY29sb3JcIik7XHJcbiAgICAgICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBmbihpLnZhbHVlKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBta04gPSAoXHJcbiAgICAgICAgICAgIGw6IHN0cmluZyxcclxuICAgICAgICAgICAgY3VyOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG1pbjogbnVtYmVyLFxyXG4gICAgICAgICAgICBtYXg6IG51bWJlcixcclxuICAgICAgICAgICAgZm46ICh2OiBudW1iZXIpID0+IHZvaWQsXHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBtLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByLmFkZENsYXNzKFwibXotbW9kYWwtcm93XCIpO1xyXG4gICAgICAgICAgICByLmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IGwgfSkuYWRkQ2xhc3MoXCJtei1tb2RhbC1sYmxcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGkgPSByLmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgaS50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgICAgICAgaS5taW4gPSBTdHJpbmcobWluKTtcclxuICAgICAgICAgICAgaS5tYXggPSBTdHJpbmcobWF4KTtcclxuICAgICAgICAgICAgaS52YWx1ZSA9IFN0cmluZyhjdXIpO1xyXG4gICAgICAgICAgICBpLmFkZENsYXNzKFwibXotc3AtbnVtXCIpO1xyXG4gICAgICAgICAgICBpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4gZm4oTnVtYmVyKGkudmFsdWUpKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBta1MgPSAoXHJcbiAgICAgICAgICAgIGw6IHN0cmluZyxcclxuICAgICAgICAgICAgY3VyOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIG9wdHM6IHN0cmluZ1tdLFxyXG4gICAgICAgICAgICBmbjogKHY6IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG0uY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHIuYWRkQ2xhc3MoXCJtei1tb2RhbC1yb3dcIik7XHJcbiAgICAgICAgICAgIHIuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogbCB9KS5hZGRDbGFzcyhcIm16LW1vZGFsLWxibFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcyA9IHIuY3JlYXRlRWwoXCJzZWxlY3RcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHMuYWRkQ2xhc3MoXCJtei1zcC1zZWxcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbyBvZiBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgICAgICBvcC52YWx1ZSA9IG87XHJcbiAgICAgICAgICAgICAgICBvcC50ZXh0ID0gbztcclxuICAgICAgICAgICAgICAgIGlmIChvID09PSBjdXIpIG9wLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHMuYXBwZW5kQ2hpbGQob3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBmbihzLnZhbHVlKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBta0MoXHJcbiAgICAgICAgICAgIHQoXCJzbS5iZ1wiKSxcclxuICAgICAgICAgICAgc28uYmdDb2xvciA/P1xyXG4gICAgICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEJnQ29sb3IgOiB0aGlzLnN0eWxlLm5vZGVCZ0NvbG9yKSxcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IG4uc3R5bGVPdmVycmlkZSA/PyB7fTtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUuYmdDb2xvciA9IHY7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rQyhcclxuICAgICAgICAgICAgdChcInNtLnRleHRcIiksXHJcbiAgICAgICAgICAgIHNvLnRleHRDb2xvciA/P1xyXG4gICAgICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdFRleHRDb2xvciA6IHRoaXMuc3R5bGUubm9kZVRleHRDb2xvciksXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSBuLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlLnRleHRDb2xvciA9IHY7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rTihcclxuICAgICAgICAgICAgdChcInNtLmZvbnRTaXplXCIpLFxyXG4gICAgICAgICAgICBzby5mb250U2l6ZSA/P1xyXG4gICAgICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEZvbnRTaXplIDogdGhpcy5zdHlsZS5ub2RlRm9udFNpemUpLFxyXG4gICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgMzIsXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSBuLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlLmZvbnRTaXplID0gdjtcclxuICAgICAgICAgICAgICAgICAgICBuLndpZHRoID0gdGhpcy5jYWxjVyhuLnRleHQsICEhbi5pc1Jvb3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIG4uaGVpZ2h0ID0gdGhpcy5jYWxjSChuLnRleHQsICEhbi5pc1Jvb3QpO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBta1MoXHJcbiAgICAgICAgICAgIHQoXCJzbS5mb250XCIpLFxyXG4gICAgICAgICAgICBzby5mb250RmFtaWx5ID8/XHJcbiAgICAgICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Rm9udEZhbWlseSA6IHRoaXMuc3R5bGUubm9kZUZvbnRGYW1pbHkpLFxyXG4gICAgICAgICAgICBGT05UX0xJU1QsXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSBuLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlLmZvbnRGYW1pbHkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ID09PSBcImluaGVyaXRcIiA/IHVuZGVmaW5lZCA6IHY7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rUyhcclxuICAgICAgICAgICAgdChcInNtLmJvcmRlclN0eWxlXCIpLFxyXG4gICAgICAgICAgICBzby5ib3JkZXJTdHlsZSA/P1xyXG4gICAgICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEJvcmRlclN0eWxlIDogdGhpcy5zdHlsZS5ub2RlQm9yZGVyU3R5bGUpLFxyXG4gICAgICAgICAgICBbXCJzb2xpZFwiLCBcImRhc2hlZFwiLCBcImRvdHRlZFwiLCBcImRvdWJsZVwiLCBcIm5vbmVcIl0sXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSBuLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlLmJvcmRlclN0eWxlID0gdiBhcyBCb3JkZXJTdHlsZTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtDKFxyXG4gICAgICAgICAgICB0KFwic20uYm9yZGVyQ29sb3JcIiksXHJcbiAgICAgICAgICAgIHNvLmJvcmRlckNvbG9yID8/XHJcbiAgICAgICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Qm9yZGVyQ29sb3IgOiB0aGlzLnN0eWxlLm5vZGVCb3JkZXJDb2xvciksXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSBuLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlLmJvcmRlckNvbG9yID0gdjtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtOKFxyXG4gICAgICAgICAgICB0KFwic20uYm9yZGVyV2lkdGhcIiksXHJcbiAgICAgICAgICAgIHNvLmJvcmRlcldpZHRoID8/XHJcbiAgICAgICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Qm9yZGVyV2lkdGggOiB0aGlzLnN0eWxlLm5vZGVCb3JkZXJXaWR0aCksXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDgsXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSBuLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlLmJvcmRlcldpZHRoID0gdjtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtOKFxyXG4gICAgICAgICAgICB0KFwibnMuYm9yZGVyUmFkaXVzXCIpLFxyXG4gICAgICAgICAgICBzby5ib3JkZXJSYWRpdXMgPz9cclxuICAgICAgICAgICAgICAgIChpc1JcclxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3R5bGUucm9vdEJvcmRlclJhZGl1c1xyXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5zdHlsZS5ub2RlQm9yZGVyUmFkaXVzKSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMzIsXHJcbiAgICAgICAgICAgICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuLnN0eWxlT3ZlcnJpZGUgPSBuLnN0eWxlT3ZlcnJpZGUgPz8ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlLmJvcmRlclJhZGl1cyA9IHY7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1rQyhcclxuICAgICAgICAgICAgdChcIm5zLmNvbm5Db2xvclwiKSxcclxuICAgICAgICAgICAgZmlyc3Q/LmNvbm5lY3Rpb25Db2xvciA/PyB0aGlzLnN0eWxlLmNvbm5lY3Rpb25Db2xvcixcclxuICAgICAgICAgICAgKHYpID0+XHJcbiAgICAgICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uY29ubmVjdGlvbkNvbG9yID0gdjtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtOKFxyXG4gICAgICAgICAgICB0KFwibnMuY29ubldpZHRoXCIpLFxyXG4gICAgICAgICAgICBmaXJzdD8uY29ubmVjdGlvbldpZHRoID8/IHRoaXMuc3R5bGUuY29ubmVjdGlvbldpZHRoLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICA4LFxyXG4gICAgICAgICAgICAodikgPT5cclxuICAgICAgICAgICAgICAgIGFwcGx5KChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbi5jb25uZWN0aW9uV2lkdGggPSB2O1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBDb25uZWN0aW9uIHR5cGUgd2l0aCBjb2xvciBzd2F0Y2hlcyBmb3Igcm9vdCBub2Rlc1xyXG4gICAgICAgIGlmIChpc1IpIHtcclxuICAgICAgICAgICAgY29uc3QgY3REaXYgPSBtLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjdERpdi5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3RcIik7XHJcbiAgICAgICAgICAgIGN0RGl2XHJcbiAgICAgICAgICAgICAgICAuY3JlYXRlRWwoXCJzcGFuXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0KFwic20ucmFpbmJvd1wiKSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJtei1yYWluYm93LWxibFwiKTtcclxuICAgICAgICAgICAgY29uc3QgblBhbHM6IHsgW2s6IHN0cmluZ106IHN0cmluZ1tdIH0gPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5SQUlOQk9XX1BBTEVUVEVTLFxyXG4gICAgICAgICAgICAgICAgLi4uKHRoaXMuc3R5bGUuY3VzdG9tUmFpbmJvd3MgfHwge30pLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyBEZXRlY3QgY3VycmVudCBwYWxldHRlIGJ5IG1hdGNoaW5nIGZpcnN0IGNoaWxkJ3MgY29sb3JcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZVBhbCA9IFwib2ZmXCI7XHJcbiAgICAgICAgICAgIGlmIChmaXJzdCAmJiBmaXJzdC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYyA9IGZpcnN0LmNoaWxkcmVuWzBdLmNvbm5lY3Rpb25Db2xvcjtcclxuICAgICAgICAgICAgICAgIGlmIChmYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW25hbWUsIGNvbG9yc10gb2YgT2JqZWN0LmVudHJpZXMoblBhbHMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xvcnNbMF0gPT09IGZjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWwgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgbkxpc3QgPSBjdERpdi5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgbkxpc3QuYWRkQ2xhc3MoXCJtei1yYWluYm93LWxpc3RcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYnVpbGROTCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5MaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBta05JID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIGtleTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBzdHJpbmdbXSB8IG51bGwsXHJcbiAgICAgICAgICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdCA9IG5MaXN0LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0LmFkZENsYXNzKFwibXotcmFpbmJvdy1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0LnRvZ2dsZUNsYXNzKFwiaXMtYWN0aXZlXCIsIGtleSA9PT0gYWN0aXZlUGFsKTtcclxuICAgICAgICAgICAgICAgICAgICBpdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgIT09IGFjdGl2ZVBhbCkgaXQuYWRkQ2xhc3MoXCJtei1yYWluYm93LWhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXQudG9nZ2xlQ2xhc3MoXCJtei1yYWluYm93LWhvdmVyXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpdC5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBsYWJlbCB9KS5hZGRDbGFzcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtei1yYWluYm93LWl0ZW0tbGJsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvdHMgPSBpdC5jcmVhdGVFbChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHMuYWRkQ2xhc3MoXCJtei1yYWluYm93LWRvdHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBjb2xvcnMuc2xpY2UoMCwgOCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBkb3RzLmNyZWF0ZUVsKFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuYWRkQ2xhc3MoXCJtei1yYWluYm93LWRvdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHsgXCItLW16LWRvdC1jb2xvclwiOiBjIH0pLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFtrLCB2XSkgPT4gZC5zdHlsZS5zZXRQcm9wZXJ0eShrLCB2KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2xvcnMpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHkoKG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbi5pc1Jvb3QpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbi5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uY2hpbGRyZW5baV0uY29ubmVjdGlvbkNvbG9yID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzW2kgJSBjb2xvcnMubGVuZ3RoXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhbCA9IGtleTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVidWlsZE5MKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbWtOSShcIm9mZlwiLCBcIlNvbGlkXCIsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgY29sb3JzXSBvZiBPYmplY3QuZW50cmllcyhuUGFscykpXHJcbiAgICAgICAgICAgICAgICAgICAgbWtOSShuYW1lLCBuYW1lLCBjb2xvcnMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWJ1aWxkTkwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2xyID0gbS5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IHQoXCJucy5jbGVhclwiKSB9KTtcclxuICAgICAgICBjbHIuYWRkQ2xhc3MoXCJtei1ucy1idG5cIik7XHJcbiAgICAgICAgY2xyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxyXG4gICAgICAgICAgICBhcHBseSgobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbi5zdHlsZU92ZXJyaWRlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgbi5jb25uZWN0aW9uQ29sb3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBuLmNvbm5lY3Rpb25XaWR0aCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBjYnRuID0gbS5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IHQoXCJzbS5jbG9zZVwiKSB9KTtcclxuICAgICAgICBjYnRuLmFkZENsYXNzKFwibXotbW9kYWwtYnRuXCIsIFwibXotbW9kYWwtYnRuLXByaW1hcnlcIik7XHJcbiAgICAgICAgY2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3YpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b2dnbGVTZWFyY2goKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoQmFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQmFyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaEJhciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY2M/LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5lbnN1cmVQcm94eSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLnNlYXJjaEJhci5hZGRDbGFzcyhcIm16LXNlYXJjaC1iYXJcIik7XHJcbiAgICAgICAgY29uc3QgaW5wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGlucC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgaW5wLnBsYWNlaG9sZGVyID0gdChcInNlYXJjaC5wbGFjZWhvbGRlclwiKTtcclxuICAgICAgICBpbnAuYWRkQ2xhc3MoXCJtei1zZWFyY2gtaW5wdXRcIik7XHJcbiAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGluZm8uYWRkQ2xhc3MoXCJtei1zZWFyY2gtY291bnRcIik7XHJcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGNsb3NlQnRuLmlubmVyVGV4dCA9IFwiXHUyNzE1XCI7XHJcbiAgICAgICAgY2xvc2VCdG4uYWRkQ2xhc3MoXCJtei1zZWFyY2gtYnRuXCIpO1xyXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQmFyPy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXIgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmNjPy5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5zdXJlUHJveHkoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNlYXJjaEJhci5hcHBlbmRDaGlsZChpbnApO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQmFyLmFwcGVuZENoaWxkKGluZm8pO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQmFyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICAgICAgICB0aGlzLnN2Z0N0LmFwcGVuZENoaWxkKHRoaXMuc2VhcmNoQmFyKTtcclxuICAgICAgICBjb25zdCBkb1NlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcSA9IGlucC52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSWR4ID0gMDtcclxuICAgICAgICAgICAgaWYgKCFxKSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB2aXMgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobi50ZXh0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocSkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzLnB1c2gobik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgdmlzKGMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdmlzKHIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hSZXN1bHRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaW5mby50ZXh0Q29udGVudCA9IFwiMS9cIiArIHRoaXMuc2VhcmNoUmVzdWx0cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbDEodGhpcy5zZWFyY2hSZXN1bHRzWzBdLmlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNOb2RlKHRoaXMuc2VhcmNoUmVzdWx0c1swXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaW5mby50ZXh0Q29udGVudCA9IFwiMFwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBkb1NlYXJjaCk7XHJcbiAgICAgICAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwia2V5ZG93blwiLFxyXG4gICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoUmVzdWx0cy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5zaGlmdEtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJZHggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc2VhcmNoSWR4IC0gMSArIHRoaXMuc2VhcmNoUmVzdWx0cy5sZW5ndGgpICVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaElkeCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zZWFyY2hJZHggKyAxKSAlIHRoaXMuc2VhcmNoUmVzdWx0cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5mby50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSWR4ICsgMSArIFwiL1wiICsgdGhpcy5zZWFyY2hSZXN1bHRzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZCA9IHRoaXMuc2VhcmNoUmVzdWx0c1t0aGlzLnNlYXJjaElkeF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWwxKG5kLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTm9kZShuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gaW5wLmZvY3VzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQmFyPy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEJhciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYz8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5zdXJlUHJveHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5wLmZvY3VzKCksIDApO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRDQyhcclxuICAgICAgICBjaDogTWluZE5vZGVEYXRhLFxyXG4gICAgICAgIHBSOiBib29sZWFuLFxyXG4gICAgICAgIGlkeDogbnVtYmVyLFxyXG4gICAgICAgIGluaD86IHN0cmluZyxcclxuICAgICk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGNoLmNvbm5lY3Rpb25Db2xvcikgcmV0dXJuIGNoLmNvbm5lY3Rpb25Db2xvcjtcclxuICAgICAgICBpZiAoaW5oKSByZXR1cm4gaW5oO1xyXG4gICAgICAgIGNvbnN0IHJiID0gdGhpcy5nZXRSYWluYm93KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3R5bGUuY29ubmVjdGlvblJhaW5ib3cgJiYgcFIpIHJldHVybiByYltpZHggJSByYi5sZW5ndGhdO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0eWxlLmNvbm5lY3Rpb25Db2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzQWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNaW5kTWFwVmlldykgPT09IHRoaXM7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzRXh0SW5wdXQoZTogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBpZiAoIXQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBjb25zdCB0YWcgPSB0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAodGFnID09PSBcImlucHV0XCIgfHwgdGFnID09PSBcInRleHRhcmVhXCIgfHwgdGFnID09PSBcInNlbGVjdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5zdmdDdD8uY29udGFpbnModCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0LmlzQ29udGVudEVkaXRhYmxlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9rZCA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0KCkgfHwgdGhpcy5tZE1vZGUgfHwgdGhpcy5pc0V4dElucHV0KGUpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoQmFyICYmIHRoaXMuc2VhcmNoQmFyLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gRklYICM3OiB3aGVuIG1vZGFsIGlzIG9wZW4sIEVzYyBjbG9zZXMgaXQ7IGJsb2NrIGFsbCBvdGhlciBrZXlzXHJcbiAgICAgICAgaWYgKHRoaXMucG9wQ2xvc2UpIHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3BDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3BDbG9zZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBGSVggIzY6IGRpc2FibGUgYWxsIGtleXMgZHVyaW5nIGRyYWdcclxuICAgICAgICBpZiAodGhpcy5kcz8uaXNEcmFnZ2luZykge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikgdGhpcy5jYW5jZWxEcmFnKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRWRpdCBtb2RlXHJcbiAgICAgICAgaWYgKHRoaXMuZWRpdElkKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSAmJlxyXG4gICAgICAgICAgICAgICAgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJhXCIgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcImZcIikge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VhcmNoKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkgJiZcclxuICAgICAgICAgICAgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJjXCIgJiZcclxuICAgICAgICAgICAgIWUuc2hpZnRLZXkgJiZcclxuICAgICAgICAgICAgdGhpcy5zZWxJZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29weU5vZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmXHJcbiAgICAgICAgICAgIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwieFwiICYmXHJcbiAgICAgICAgICAgIHRoaXMuc2VsSWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNvcHlOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmXHJcbiAgICAgICAgICAgIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwidlwiICYmXHJcbiAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5wYXN0ZU5vZGUoZS5zaGlmdEtleSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi51bmRvKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5kbygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IucmVkbykpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZG8oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBab29tIGtleWJpbmRpbmdzXHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi56b29tSW4pKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy56b29tQnkoMS4xKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLnpvb21PdXQpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy56b29tQnkoMC45KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLnpvb21SZXNldCkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnpvb21UbygxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLmFkZENoaWxkKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIHNoaWZ0K3RhYiA9IGxlZnQgY2hpbGQgKG9uIHJvb3Qgb3IgYW55IG5vZGUpXHJcbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5ICYmIHRoaXMuc2VsSWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTGVmdENoaWxkKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsSWQpIHRoaXMuYWRkQ2hpbGROb2RlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5hZGRTaWJsaW5nKSAmJiAhZS5jdHJsS2V5ICYmICFlLm1ldGFLZXkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAvLyBzaGlmdCtlbnRlciA9IGxlZnQgY2hpbGQgb24gcm9vdFxyXG4gICAgICAgICAgICBpZiAoZS5zaGlmdEtleSAmJiB0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWwgPSB0aGlzLmZBbGwodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsPy5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZExlZnRDaGlsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkgJiYgdGhpcy5zZWxJZCkgdGhpcy5hZGRTaWJsaW5nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3BhY2U6IHNpbmdsZSBub2RlIHNlbGVjdGVkID0gZWRpdCwgbm8vbXVsdGkgPSBwYW5cclxuICAgICAgICAvLyBlZGl0Tm9kZTogc2luZ2xlIG5vZGUgPSBlZGl0XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IuZWRpdE5vZGUpICYmXHJcbiAgICAgICAgICAgICFlLnJlcGVhdCAmJlxyXG4gICAgICAgICAgICB0aGlzLnNlbElkICYmXHJcbiAgICAgICAgICAgICF0aGlzLmlzTXVsdGkoKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdElkID0gdGhpcy5zZWxJZDtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkcmFnQ2FudmFzOiBwYW4gbW9kZVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IuZHJhZ0NhbnZhcykgJiYgIWUucmVwZWF0KSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zcGFjZURvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYykgdGhpcy5jYy50b2dnbGVDbGFzcyhcIm16LWN1cnNvci1ncmFiXCIsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEN0cmwrRW50ZXIgZW50ZXJzIGVkaXQgbW9kZVxyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRJZCA9IHRoaXMuc2VsSWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5mb2N1c05vZGUpICYmICFlLmN0cmxLZXkgJiYgIWUubWV0YUtleSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNTZWwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hCYXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQmFyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbHJTZWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VQb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJCYWNrc3BhY2VcIiB8fCBlLmtleSA9PT0gXCJEZWxldGVcIikge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTXVsdGkoKSkgdGhpcy5iYXRjaERlbCgpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlbElkKSB0aGlzLmRlbE5vZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLm5hdlVwKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxJZCkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyb3coXCJBcnJvd1VwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5uYXZEb3duKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxJZCkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyb3coXCJBcnJvd0Rvd25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLm5hdkxlZnQpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJvdyhcIkFycm93TGVmdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hdGNoS2V5KGUsIHRoaXMua2IubmF2UmlnaHQpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbElkKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJvdyhcIkFycm93UmlnaHRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBGSVggIzE6IGtlZXAgZ3JhYiBjdXJzb3IgZHVyaW5nIGRyYWcsIGRvbid0IHJlc2V0IHRvIHBvaW50ZXJcclxuICAgIHByaXZhdGUgX2t1ID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGUuY29kZSA9PT0gXCJTcGFjZVwiIHx8XHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5lZGl0Tm9kZSkgfHxcclxuICAgICAgICAgICAgdGhpcy5tYXRjaEtleShlLCB0aGlzLmtiLmRyYWdDYW52YXMpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BhY2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0N2ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNjKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNjLnRvZ2dsZUNsYXNzKFwibXotY3Vyc29yLWdyYWJiaW5nXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2MudG9nZ2xlQ2xhc3MoXCJtei1jdXJzb3ItZ3JhYlwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gSU1FLWNvbXBhdGlibGUgdHlwZVRvRWRpdCB2aWEgcHJveHkgdGV4dGFyZWEgcG9zaXRpb25lZCBiZWxvdyBzZWxlY3RlZCBub2RlXHJcbiAgICBwcml2YXRlIGVuc3VyZVByb3h5KCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJQcm94eSgpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXRoaXMucGx1Z2luLnNldHRpbmdzLnR5cGVUb0VkaXQgfHxcclxuICAgICAgICAgICAgIXRoaXMuc2VsSWQgfHxcclxuICAgICAgICAgICAgdGhpcy5pc011bHRpKCkgfHxcclxuICAgICAgICAgICAgdGhpcy5lZGl0SWQgfHxcclxuICAgICAgICAgICAgIXRoaXMuc3ZnQ3QgfHxcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCYXJcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hCYXIgJiYgdGhpcy5zZWFyY2hCYXIuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjb25zdCBuZCA9IHRoaXMuZkFsbCh0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoIW5kKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgICAgICAvLyBQb3NpdGlvbiBiZWxvdyB0aGUgc2VsZWN0ZWQgbm9kZSBpbiBzY3JlZW4gY29vcmRpbmF0ZXNcclxuICAgICAgICBjb25zdCBzY3JlZW5YID0gbmQueCAqIHRoaXMuem9vbSArIHRoaXMucGFuWDtcclxuICAgICAgICBjb25zdCBzY3JlZW5ZID0gKG5kLnkgKyBuZC5oZWlnaHQgLyAyKSAqIHRoaXMuem9vbSArIHRoaXMucGFuWSArIDQ7XHJcbiAgICAgICAgcC5hZGRDbGFzcyhcIm16LXByb3h5LXRhXCIpO1xyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHtcclxuICAgICAgICAgICAgXCItLW16LXByb3h5LWxlZnRcIjogc2NyZWVuWCArIFwicHhcIixcclxuICAgICAgICAgICAgXCItLW16LXByb3h5LXRvcFwiOiBzY3JlZW5ZICsgXCJweFwiLFxyXG4gICAgICAgIH0pLmZvckVhY2goKFtrLCB2XSkgPT4gcC5zdHlsZS5zZXRQcm9wZXJ0eShrLCB2KSk7XHJcbiAgICAgICAgdGhpcy5zdmdDdC5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgICB0aGlzLnByb3h5VEEgPSBwO1xyXG4gICAgICAgIGxldCBjb21wb3NpbmcgPSBmYWxzZTtcclxuICAgICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbnN0YXJ0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29tcG9zaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgcC5hZGRDbGFzcyhcIm16LXByb3h5LWNvbXBvc2luZ1wiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbXBvc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBwLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodmFsICYmIHRoaXMuc2VsSWQgJiYgIXRoaXMuZWRpdElkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRJZCA9IHRoaXMuc2VsSWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGl2ZVRBKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNldFJhbmdlVGV4dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNlbGVjdGlvblN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuc2VsZWN0aW9uRW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlVEEuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb3NpbmcpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gcC52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHZhbCAmJiB0aGlzLnNlbElkICYmICF0aGlzLmVkaXRJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0SWQgPSB0aGlzLnNlbElkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpdmVUQSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5zZXRSYW5nZVRleHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpdmVUQS5zZWxlY3Rpb25TdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLnNlbGVjdGlvbkVuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZVRBLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KSwgMCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNsZWFyUHJveHkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJveHlUQSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3h5VEEucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJveHlUQSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjb3B5Tm9kZShjdXQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsSWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBuZCA9IHRoaXMuZkFsbCh0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoIW5kKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jbGlwYm9hcmQgPSB7IGRhdGE6IEpTT04uc3RyaW5naWZ5KG5kKSwgaXNSb290OiAhIW5kLmlzUm9vdCwgY3V0IH07XHJcbiAgICAgICAgLy8gQWxzbyB3cml0ZSB0byBzeXN0ZW0gY2xpcGJvYXJkIHNvIHBhc3RlIHdvcmtzIGluIG90aGVyIHRleHQgZmllbGRzXHJcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQobmQudGV4dCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAvKiBpZ25vcmUgKi9cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoY3V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICAgICAgaWYgKG5kLmlzUm9vdClcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdHMgPSB0aGlzLnJvb3RzLmZpbHRlcigocikgPT4gci5pZCAhPT0gbmQuaWQpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMucmVtQWxsKG5kLmlkKTtcclxuICAgICAgICAgICAgdGhpcy5jbHJTZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHBhc3RlTm9kZShzdHJpcDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5jbGlwYm9hcmQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBjbG9uZTogTWluZE5vZGVEYXRhID0gSlNPTi5wYXJzZSh0aGlzLmNsaXBib2FyZC5kYXRhKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2xpcGJvYXJkLmN1dCkge1xyXG4gICAgICAgICAgICBjb25zdCByZUlkID0gKG46IE1pbmROb2RlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbi5pZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgcmVJZChjKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVJZChjbG9uZSk7XHJcbiAgICAgICAgfSBlbHNlIHRoaXMuY2xpcGJvYXJkID0gbnVsbDtcclxuICAgICAgICBpZiAoc3RyaXApIHtcclxuICAgICAgICAgICAgY29uc3QgcyA9IChuOiBNaW5kTm9kZURhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIG4uc3R5bGVPdmVycmlkZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIG4uY29ubmVjdGlvbkNvbG9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgbi5jb25uZWN0aW9uV2lkdGggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgcyhjKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcyhjbG9uZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICBpZiAoY2xvbmUuaXNSb290KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSB0aGlzLnJvb3RzW3RoaXMucm9vdHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIGNsb25lLnggPSBsYXN0Py54ID8/IDA7XHJcbiAgICAgICAgICAgIGNsb25lLnkgPSAobGFzdD8ueSA/PyAwKSArIDIwMDtcclxuICAgICAgICAgICAgdGhpcy5yb290cy5wdXNoKGNsb25lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbG9uZS5pc1Jvb3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLmZBbGwodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocCkgcC5jaGlsZHJlbi5wdXNoKGNsb25lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHRoaXMucm9vdHMucHVzaCh7IC4uLmNsb25lLCBpc1Jvb3Q6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsMShjbG9uZS5pZCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmRvU2F2ZSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjYW5jZWxEcmFnKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5kcykgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5kcy5pc1Jvb3REcmFnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLmRzIGFzIENoaWxkRHJhZztcclxuICAgICAgICAgICAgaWYgKGQuc25hcCkgdGhpcy5yb290cyA9IEpTT04ucGFyc2UoZC5zbmFwKTtcclxuICAgICAgICAgICAgZC5naG9zdEVsPy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgZC5pbmRpY2F0b3JFbD8ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHMgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmNjKSB0aGlzLmNjLnRvZ2dsZUNsYXNzKFwibXotY3Vyc29yLWdyYWJcIiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9tdSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuYm94U2VsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQm94KGUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRyYWdDdikge1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdDdiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYy50b2dnbGVDbGFzcyhcIm16LWN1cnNvci1ncmFiYmluZ1wiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNjLnRvZ2dsZUNsYXNzKFwibXotY3Vyc29yLWdyYWJcIiwgdGhpcy5zcGFjZURvd24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5kcykgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5kcy5pc0RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHMgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRzLmlzUm9vdERyYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5kcyA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZHMgYXMgQ2hpbGREcmFnO1xyXG4gICAgICAgIGNvbnN0IHJjID0gdGhpcy5jYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBteCA9IChlLmNsaWVudFggLSByYy5sZWZ0IC0gdGhpcy5wYW5YKSAvIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgbXkgPSAoZS5jbGllbnRZIC0gcmMudG9wIC0gdGhpcy5wYW5ZKSAvIHRoaXMuem9vbTtcclxuICAgICAgICBjb25zdCBkeCA9IG14IC0gZC5zdGFydFgsXHJcbiAgICAgICAgICAgIGR5ID0gbXkgLSBkLnN0YXJ0WTtcclxuICAgICAgICBjb25zdCBkbiA9IHRoaXMuZkFsbChkLm5vZGVJZCk7XHJcbiAgICAgICAgY29uc3QgZG5XID0gZG4gPyBkbi53aWR0aCA6IDA7XHJcbiAgICAgICAgY29uc3QgaXNMZWZ0U2lkZSA9IGRuPy5zaWRlID09PSBcImxlZnRcIjtcclxuICAgICAgICBjb25zdCBlZGdlWCA9IGRuXHJcbiAgICAgICAgICAgID8gaXNMZWZ0U2lkZVxyXG4gICAgICAgICAgICAgICAgPyBkbi54ICsgZHggKyBkblcgLyAyXHJcbiAgICAgICAgICAgICAgICA6IGRuLnggKyBkeCAtIGRuVyAvIDJcclxuICAgICAgICAgICAgOiBteDtcclxuICAgICAgICBjb25zdCBneSA9IGRuID8gZG4ueSArIGR5IDogbXk7XHJcbiAgICAgICAgY29uc3QgdGd0ID0gdGhpcy5kZXRUZ3QoZWRnZVgsIGVkZ2VYLCBneSwgZC5ub2RlSWQpO1xyXG4gICAgICAgIGlmICh0Z3QpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNQb3MoKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZlUygpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxJZHMgPSB0aGlzLmFsbFNlbCgpO1xyXG4gICAgICAgICAgICAvLyBGSVggIzY6IGNvbGxlY3Qgbm9kZXMgaW4gb3JpZ2luYWwgdHJlZSBvcmRlciwgcHJlc2VydmUgdGhlaXIgc2VxdWVuY2VcclxuICAgICAgICAgICAgY29uc3QgdG9Nb3ZlOiBNaW5kTm9kZURhdGFbXSA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0T3JkZXJlZCA9IChwYXJlbnQ6IE1pbmROb2RlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHBhcmVudC5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBwYXJlbnQuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbElkcy5oYXMoYy5pZCkgJiYgIWMuaXNSb290KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvTW92ZS51bnNoaWZ0KHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaSwgMSlbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3RPcmRlcmVkKGMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIGNvbGxlY3RPcmRlcmVkKHIpO1xyXG4gICAgICAgICAgICBpZiAoIXRvTW92ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRldCA9IHRoaXMucmVtQWxsKGQubm9kZUlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChkZXQpIHRvTW92ZS5wdXNoKGRldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gVXBkYXRlIHNpZGUgb2YgbW92ZWQgbm9kZXMgdG8gbWF0Y2ggdGFyZ2V0J3Mgc2lkZVxyXG4gICAgICAgICAgICBjb25zdCB0Z3ROb2RlID0gdGhpcy5mQWxsKHRndC5pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRndFNpZGUgPVxyXG4gICAgICAgICAgICAgICAgdGd0Tm9kZT8uc2lkZSB8fCAodGd0Tm9kZT8uaXNSb290ID8gdW5kZWZpbmVkIDogXCJyaWdodFwiKTtcclxuICAgICAgICAgICAgaWYgKHRndFNpZGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNldFNpZGUgPSAobjogTWluZE5vZGVEYXRhLCBzOiBcImxlZnRcIiB8IFwicmlnaHRcIikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG4uc2lkZSA9IHM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHNldFNpZGUoYywgcyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBtIG9mIHRvTW92ZSkgc2V0U2lkZShtLCB0Z3RTaWRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJbnNlcnQgcHJlc2VydmluZyBvcmRlclxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvTW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHRoaXMuaW5zVHJlZSh0b01vdmVbaV0sIHRndC5pZCwgdGd0LnpvbmUpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLmluc1RyZWUodG9Nb3ZlW2ldLCB0b01vdmVbaSAtIDFdLmlkLCBcImFmdGVyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEtlZXAgYWxsIG1vdmVkIG5vZGVzIHNlbGVjdGVkXHJcbiAgICAgICAgICAgIHRoaXMubXVsdGlTZWwuY2xlYXIoKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtIG9mIHRvTW92ZSkgdGhpcy5tdWx0aVNlbC5hZGQobS5pZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsSWQgPSB0b01vdmUubGVuZ3RoID8gdG9Nb3ZlWzBdLmlkIDogbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZC5naG9zdEVsPy5yZW1vdmUoKTtcclxuICAgICAgICBkLmluZGljYXRvckVsPy5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmRzID0gbnVsbDtcclxuICAgICAgICBpZiAodGd0KSB0aGlzLmFuaW1SZW5kZXIoKTtcclxuICAgICAgICBlbHNlIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRUeCgpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgLS0gU1ZHIGdyb3VwIHRyYW5zZm9ybSByZXF1aXJlcyBkaXJlY3Qgc3R5bGUgZm9yIHBhbi96b29tIHBlcmZvcm1hbmNlXHJcbiAgICAgICAgdGhpcy5nRWwuc3R5bGUudHJhbnNmb3JtID1cclxuICAgICAgICAgICAgXCJ0cmFuc2xhdGUoXCIgK1xyXG4gICAgICAgICAgICB0aGlzLnBhblggK1xyXG4gICAgICAgICAgICBcInB4LFwiICtcclxuICAgICAgICAgICAgdGhpcy5wYW5ZICtcclxuICAgICAgICAgICAgXCJweCkgc2NhbGUoXCIgK1xyXG4gICAgICAgICAgICB0aGlzLnpvb20gK1xyXG4gICAgICAgICAgICBcIilcIjtcclxuICAgICAgICBpZiAodGhpcy56b29tTGFiZWwpXHJcbiAgICAgICAgICAgIHRoaXMuem9vbUxhYmVsLmlubmVyVGV4dCA9IE1hdGgucm91bmQodGhpcy56b29tICogMTAwKSArIFwiJVwiO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB6b29tQnkoZmFjdG9yOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCByYyA9IHRoaXMuY2MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgaWYgKHJjLndpZHRoIDwgMSB8fCByYy5oZWlnaHQgPCAxKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgY3ggPSByYy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIGN5ID0gcmMuaGVpZ2h0IC8gMjtcclxuICAgICAgICBjb25zdCBueiA9IE1hdGgubWF4KDAuMSwgTWF0aC5taW4odGhpcy56b29tICogZmFjdG9yLCAzKSk7XHJcbiAgICAgICAgdGhpcy5wYW5YID0gY3ggLSAoY3ggLSB0aGlzLnBhblgpICogKG56IC8gdGhpcy56b29tKTtcclxuICAgICAgICB0aGlzLnBhblkgPSBjeSAtIChjeSAtIHRoaXMucGFuWSkgKiAobnogLyB0aGlzLnpvb20pO1xyXG4gICAgICAgIHRoaXMuem9vbSA9IG56O1xyXG4gICAgICAgIHRoaXMudXBkVHgoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgem9vbVRvKGxldmVsOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCByYyA9IHRoaXMuY2MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgaWYgKHJjLndpZHRoIDwgMSB8fCByYy5oZWlnaHQgPCAxKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgY3ggPSByYy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIGN5ID0gcmMuaGVpZ2h0IC8gMjtcclxuICAgICAgICB0aGlzLnBhblggPSBjeCAtIChjeCAtIHRoaXMucGFuWCkgKiAobGV2ZWwgLyB0aGlzLnpvb20pO1xyXG4gICAgICAgIHRoaXMucGFuWSA9IGN5IC0gKGN5IC0gdGhpcy5wYW5ZKSAqIChsZXZlbCAvIHRoaXMuem9vbSk7XHJcbiAgICAgICAgdGhpcy56b29tID0gbGV2ZWw7XHJcbiAgICAgICAgdGhpcy51cGRUeCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkb0xheW91dChuOiBNaW5kTm9kZURhdGEpIHtcclxuICAgICAgICB0aGlzLmNTSChuKTtcclxuICAgICAgICB0aGlzLmNYWShuKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY1NIKG46IE1pbmROb2RlRGF0YSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3Qgdm0gPSB0aGlzLnN0eWxlLm5vZGVHYXBZID8/IDI0O1xyXG4gICAgICAgIGlmICghbi5jaGlsZHJlbj8ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIChuIGFzIExheW91dE5vZGUpLl9zaCA9IG4uaGVpZ2h0ICsgdm07XHJcbiAgICAgICAgICAgIHJldHVybiAobiBhcyBMYXlvdXROb2RlKS5fc2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHRvdGFsICs9IHRoaXMuY1NIKGMpO1xyXG4gICAgICAgIChuIGFzIExheW91dE5vZGUpLl9zaCA9IE1hdGgubWF4KG4uaGVpZ2h0ICsgdm0sIHRvdGFsKTtcclxuICAgICAgICByZXR1cm4gKG4gYXMgTGF5b3V0Tm9kZSkuX3NoO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjWFkobjogTWluZE5vZGVEYXRhKSB7XHJcbiAgICAgICAgaWYgKCFuLmNoaWxkcmVuPy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBjb25zdCBobSA9IHRoaXMuc3R5bGUuY29ubmVjdGlvbkxlbmd0aCB8fCA4MDtcclxuICAgICAgICAvLyBTcGxpdCBjaGlsZHJlbiBieSBzaWRlIGZvciByb290IG5vZGVzXHJcbiAgICAgICAgY29uc3QgcmlnaHRDaCA9IG4uY2hpbGRyZW4uZmlsdGVyKChjKSA9PiBjLnNpZGUgIT09IFwibGVmdFwiKTtcclxuICAgICAgICBjb25zdCBsZWZ0Q2ggPSBuLmNoaWxkcmVuLmZpbHRlcigoYykgPT4gYy5zaWRlID09PSBcImxlZnRcIik7XHJcbiAgICAgICAgLy8gTGF5b3V0IHJpZ2h0IGNoaWxkcmVuXHJcbiAgICAgICAgaWYgKHJpZ2h0Q2gubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCB0b3QgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2YgcmlnaHRDaCkgdG90ICs9IChjIGFzIExheW91dE5vZGUpLl9zaDtcclxuICAgICAgICAgICAgbGV0IGN5ID0gbi55IC0gdG90IC8gMjtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIHJpZ2h0Q2gpIHtcclxuICAgICAgICAgICAgICAgIGMueCA9IG4ueCArIG4ud2lkdGggLyAyICsgaG0gKyBjLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgIGMueSA9IGN5ICsgKGMgYXMgTGF5b3V0Tm9kZSkuX3NoIC8gMjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY1hZKGMpO1xyXG4gICAgICAgICAgICAgICAgY3kgKz0gKGMgYXMgTGF5b3V0Tm9kZSkuX3NoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIExheW91dCBsZWZ0IGNoaWxkcmVuIChtaXJyb3IpXHJcbiAgICAgICAgaWYgKGxlZnRDaC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IHRvdCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBsZWZ0Q2gpIHRvdCArPSAoYyBhcyBMYXlvdXROb2RlKS5fc2g7XHJcbiAgICAgICAgICAgIGxldCBjeSA9IG4ueSAtIHRvdCAvIDI7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBsZWZ0Q2gpIHtcclxuICAgICAgICAgICAgICAgIGMueCA9IG4ueCAtIG4ud2lkdGggLyAyIC0gaG0gLSBjLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgIGMueSA9IGN5ICsgKGMgYXMgTGF5b3V0Tm9kZSkuX3NoIC8gMjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY1hZKGMpO1xyXG4gICAgICAgICAgICAgICAgY3kgKz0gKGMgYXMgTGF5b3V0Tm9kZSkuX3NoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjYWxjVyh0eHQ6IHN0cmluZywgaXNSOiBib29sZWFuKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBmcyA9IGlzUiA/IHRoaXMuc3R5bGUucm9vdEZvbnRTaXplIDogdGhpcy5zdHlsZS5ub2RlRm9udFNpemU7XHJcbiAgICAgICAgY29uc3QgZmYgPSBpc1IgPyB0aGlzLnN0eWxlLnJvb3RGb250RmFtaWx5IDogdGhpcy5zdHlsZS5ub2RlRm9udEZhbWlseTtcclxuICAgICAgICBsZXQgbXcgPSAwO1xyXG4gICAgICAgIGZvciAoY29uc3QgbCBvZiB0eHQuc3BsaXQoXCJcXG5cIikpIHtcclxuICAgICAgICAgICAgY29uc3QgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBkLmFkZENsYXNzKFwibXotbWVhc3VyZS1zcGFuXCIpO1xyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh7IFwiLS1tei1mc1wiOiBmcyArIFwicHhcIiwgXCItLW16LWZmXCI6IGZmIH0pLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAoW2ssIHZdKSA9PiBkLnN0eWxlLnNldFByb3BlcnR5KGssIHYpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkLmlubmVyVGV4dCA9IGwgfHwgXCIgXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZCk7XHJcbiAgICAgICAgICAgIGlmIChkLm9mZnNldFdpZHRoID4gbXcpIG13ID0gZC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KFxyXG4gICAgICAgICAgICBpc1IgPyB0aGlzLnN0eWxlLnJvb3RNaW5XaWR0aCA6IHRoaXMuc3R5bGUubm9kZU1pbldpZHRoLFxyXG4gICAgICAgICAgICBtdyArIHRoaXMuc3R5bGUubm9kZVBhZFggKiAyICsgNCxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjYWxjSCh0eHQ6IHN0cmluZywgaXNSOiBib29sZWFuKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBmcyA9IGlzUiA/IHRoaXMuc3R5bGUucm9vdEZvbnRTaXplIDogdGhpcy5zdHlsZS5ub2RlRm9udFNpemU7XHJcbiAgICAgICAgY29uc3QgbGggPSB0aGlzLnN0eWxlLm5vZGVMaW5lSGVpZ2h0IHx8IDEuNTtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgIGlzUiA/IHRoaXMuc3R5bGUucm9vdE1pbkhlaWdodCA6IHRoaXMuc3R5bGUubm9kZU1pbkhlaWdodCxcclxuICAgICAgICAgICAgdHh0LnNwbGl0KFwiXFxuXCIpLmxlbmd0aCAqIGZzICogbGggKyAxNCxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZWNQb3MoKSB7XHJcbiAgICAgICAgdGhpcy5vbGRQb3MuY2xlYXIoKTtcclxuICAgICAgICBjb25zdCB2ID0gKG46IE1pbmROb2RlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9sZFBvcy5zZXQobi5pZCwgeyB4OiBuLngsIHk6IG4ueSB9KTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHYoYyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdihyKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYW5pbVJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZXNHIHx8ICF0aGlzLmVkZ2VzRyB8fCAhdGhpcy5vbGRQb3Muc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5wID0gbmV3IE1hcDxzdHJpbmcsIHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4oKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykge1xyXG4gICAgICAgICAgICB0aGlzLmRvTGF5b3V0KHIpO1xyXG4gICAgICAgICAgICBjb25zdCB2ID0gKG46IE1pbmROb2RlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbnAuc2V0KG4uaWQsIHsgeDogbi54LCB5OiBuLnkgfSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgdihjKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdihyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3AgPSBuZXcgTWFwPHN0cmluZywgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9PigpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2lkLCBwXSBvZiBucCkgc3Auc2V0KGlkLCB0aGlzLm9sZFBvcy5nZXQoaWQpID8/IHApO1xyXG4gICAgICAgIGNvbnN0IGR1ciA9IDIwMCxcclxuICAgICAgICAgICAgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBpZiAodGhpcy5hbmltSWQpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbUlkKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtpZCwgcF0gb2YgbnApIHtcclxuICAgICAgICAgICAgY29uc3QgbiA9IHRoaXMuZkFsbChpZCk7XHJcbiAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICBuLnggPSBwLng7XHJcbiAgICAgICAgICAgICAgICBuLnkgPSBwLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtpZCwgcF0gb2Ygc3ApIHtcclxuICAgICAgICAgICAgY29uc3QgbiA9IHRoaXMuZkFsbChpZCk7XHJcbiAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICBuLnggPSBwLng7XHJcbiAgICAgICAgICAgICAgICBuLnkgPSBwLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVGTygpO1xyXG4gICAgICAgIHRoaXMuZWRnZXNHLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHRoaXMuZHJhd0VkZ2VzKHIpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAgPSAobm93OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHQgPSBNYXRoLm1pbigobm93IC0gdDApIC8gZHVyLCAxKSxcclxuICAgICAgICAgICAgICAgIGVhc2UgPSAxIC0gTWF0aC5wb3coMSAtIHR0LCAzKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBbaWQsIGZwXSBvZiBucCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IHNwLmdldChpZCkhO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbiA9IHRoaXMuZkFsbChpZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICAgICAgICAgIG4ueCA9IHMueCArIChmcC54IC0gcy54KSAqIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbi55ID0gcy55ICsgKGZwLnkgLSBzLnkpICogZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVkZ2VzRyEuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHRoaXMuZHJhd0VkZ2VzKHIpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZPKCk7XHJcbiAgICAgICAgICAgIGlmICh0dCA8IDEpIHRoaXMuYW5pbUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW2lkLCBwXSBvZiBucCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLmZBbGwoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4ueCA9IHAueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi55ID0gcC55O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1JZCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYW5pbUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzb2Z0UmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5lZGdlc0cgfHwgIXRoaXMubm9kZXNHKSByZXR1cm47XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHRoaXMuZG9MYXlvdXQocik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGTygpO1xyXG4gICAgICAgIHRoaXMuZWRnZXNHLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHRoaXMuZHJhd0VkZ2VzKHIpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGV2UGFuZWwoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5lZGdlc0cgfHwgIXRoaXMubm9kZXNHIHx8ICF0aGlzLm92ZXJsYXlHKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5lZGdlc0cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLm5vZGVzRy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheUcuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLmxpdmVUQSA9IG51bGw7XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHtcclxuICAgICAgICAgICAgdGhpcy5kb0xheW91dChyKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3RWRnZXMocik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB0aGlzLmRyYXdOb2RlcyhyKTtcclxuICAgICAgICBpZiAodGhpcy5ib3hTZWwgJiYgdGhpcy5ib3hFbCkgdGhpcy5vdmVybGF5Ry5hcHBlbmRDaGlsZCh0aGlzLmJveEVsKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURldlBhbmVsKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZWRpdElkKSB0aGlzLmNsZWFyUHJveHkoKTtcclxuICAgICAgICBlbHNlIHRoaXMuZW5zdXJlUHJveHkoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYlBhdGgoc3g6IG51bWJlciwgc3k6IG51bWJlciwgZXg6IG51bWJlciwgZXk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGR4ID0gZXggLSBzeDtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3R5bGUuY29ubmVjdGlvblN0eWxlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdHJhaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVwiICsgc3ggKyBcIiBcIiArIHN5ICsgXCJMXCIgKyBleCArIFwiIFwiICsgZXk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjdXJ2ZWRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN4ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3kgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiUVwiICtcclxuICAgICAgICAgICAgICAgICAgICAoc3ggKyBkeCAqIDAuNykgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV4ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdGVwXCI6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG14ID0gKHN4ICsgZXgpIC8gMjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1cIiArIHN4ICsgXCIgXCIgKyBzeSArIFwiSFwiICsgbXggKyBcIlZcIiArIGV5ICsgXCJIXCIgKyBleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiYnJhY2tldFwiOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBteCA9IHN4ICsgZHggKiAwLjU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTVwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIkNcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgbXggK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIG14ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXkgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV5XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJsb29zZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBcIk1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3ggK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIChzeCArIGR4ICogMC42KSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIChzeSArIChleSAtIHN5KSAqIDAuMSkgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgICAgICAgICAgICAoZXggLSBkeCAqIDAuMykgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAoZXkgLSAoZXkgLSBzeSkgKiAwLjEpICtcclxuICAgICAgICAgICAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXggK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN4ICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3kgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ1wiICtcclxuICAgICAgICAgICAgICAgICAgICAoc3ggKyBkeCAqIDAuNCkgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBzeSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIChleCAtIGR4ICogMC40KSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGV5ICtcclxuICAgICAgICAgICAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgZXggK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBleVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRyYXdFZGdlcyhuZDogTWluZE5vZGVEYXRhLCBpbmg/OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBwUiA9ICEhbmQuaXNSb290O1xyXG4gICAgICAgIC8vIEZvciBzdGVwL2JyYWNrZXQgc3R5bGVzLCB6LW9yZGVyIG1hdHRlcnMuIERyYXcgY2hpbGRyZW4gZnVydGhlc3QgZnJvbSBjZW50ZXIgZmlyc3QsXHJcbiAgICAgICAgLy8gY2xvc2VzdCB0byBjZW50ZXIgbGFzdCAob24gdG9wKSwgc28gZWFjaCBjaGlsZCdzIGNvbG9yIGlzIHZpc2libGUgYXQgdGhlIGp1bmN0aW9uLlxyXG4gICAgICAgIGNvbnN0IGFib3ZlOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGJlbG93OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG5kLmNoaWxkcmVuW2ldLnkgPCBuZC55KSBhYm92ZS5wdXNoKGkpO1xyXG4gICAgICAgICAgICBlbHNlIGJlbG93LnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFib3ZlOiB0b3AtdG8tYm90dG9tIChmdXJ0aGVzdCBmaXJzdCwgY2xvc2VzdCB0byBjZW50ZXIgbGFzdCA9IG9uIHRvcClcclxuICAgICAgICAvLyBCZWxvdzogYm90dG9tLXRvLXRvcCAoZnVydGhlc3QgZmlyc3QsIGNsb3Nlc3QgdG8gY2VudGVyIGxhc3QgPSBvbiB0b3ApXHJcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBbLi4uYWJvdmUsIC4uLmJlbG93LnJldmVyc2UoKV07XHJcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIG9yZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoID0gbmQuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IHRoaXMuZ2V0Q0MoY2gsIHBSLCBpLCBpbmgpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0xlZnQgPSBjaC5zaWRlID09PSBcImxlZnRcIjtcclxuICAgICAgICAgICAgLy8gQWNjb3VudCBmb3IgYm9yZGVyIHdpZHRoIHNvIGNvbm5lY3Rpb25zIHJlYWNoIG91dGVyIGVkZ2VcclxuICAgICAgICAgICAgY29uc3QgcFZpcyA9IHRoaXMubm9kZVZpcyhuZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBCVyA9IHBWaXMuYlMgIT09IFwibm9uZVwiID8gcFZpcy5iVyA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGNWaXMgPSB0aGlzLm5vZGVWaXMoY2gpO1xyXG4gICAgICAgICAgICBjb25zdCBjQlcgPSBjVmlzLmJTICE9PSBcIm5vbmVcIiA/IGNWaXMuYlcgOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBzeCA9IGlzTGVmdFxyXG4gICAgICAgICAgICAgICAgPyBuZC54IC0gbmQud2lkdGggLyAyIC0gcEJXXHJcbiAgICAgICAgICAgICAgICA6IG5kLnggKyBuZC53aWR0aCAvIDIgKyBwQlc7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4ID0gaXNMZWZ0XHJcbiAgICAgICAgICAgICAgICA/IGNoLnggKyBjaC53aWR0aCAvIDIgKyBjQldcclxuICAgICAgICAgICAgICAgIDogY2gueCAtIGNoLndpZHRoIC8gMiAtIGNCVztcclxuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgICAgIFwicGF0aFwiLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBwLnNldEF0dHJpYnV0ZShcImRcIiwgdGhpcy5iUGF0aChzeCwgbmQueSwgZXgsIGNoLnkpKTtcclxuICAgICAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgY29sKTtcclxuICAgICAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiLFxyXG4gICAgICAgICAgICAgICAgU3RyaW5nKGNoLmNvbm5lY3Rpb25XaWR0aCA/PyB0aGlzLnN0eWxlLmNvbm5lY3Rpb25XaWR0aCksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcz8uaXNEcmFnZ2luZyAmJlxyXG4gICAgICAgICAgICAgICAgIXRoaXMuZHMuaXNSb290RHJhZyAmJlxyXG4gICAgICAgICAgICAgICAgKHRoaXMuZHMgYXMgQ2hpbGREcmFnKS5ub2RlSWQgPT09IGNoLmlkXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCBcIjAuMTVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZWRnZXNHLmFwcGVuZENoaWxkKHApO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdFZGdlcyhcclxuICAgICAgICAgICAgICAgIGNoLFxyXG4gICAgICAgICAgICAgICAgY2guY29ubmVjdGlvbkNvbG9yID8/XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3R5bGUuY29ubmVjdGlvblJhaW5ib3cgJiYgcFIgPyBjb2wgOiBpbmgpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZHJhd05vZGVzKG46IE1pbmROb2RlRGF0YSkge1xyXG4gICAgICAgIHRoaXMuZHJhd09uZShuKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgdGhpcy5kcmF3Tm9kZXMoYyk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRyYXdPbmUobmQ6IE1pbmROb2RlRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgIFwiZm9yZWlnbk9iamVjdFwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZm8uaWQgPSBcIm1uLVwiICsgbmQuaWQ7XHJcbiAgICAgICAgY29uc3QgdiA9IHRoaXMubm9kZVZpcyhuZCk7XHJcbiAgICAgICAgY29uc3QgYlcgPSB2LmJTICE9PSBcIm5vbmVcIiA/IHYuYlcgOiAwO1xyXG4gICAgICAgIGNvbnN0IHZpc3VhbFcgPSBuZC53aWR0aCArIGJXICogMjtcclxuICAgICAgICBjb25zdCB2aXN1YWxIID0gbmQuaGVpZ2h0ICsgYlcgKiAyO1xyXG4gICAgICAgIGNvbnN0IHNlbEV4ID0gdGhpcy5pc1NlbChuZC5pZCkgPyB0aGlzLnN0eWxlLnNlbGVjdGlvbldpZHRoICsgNCA6IDA7XHJcbiAgICAgICAgZm8uc2V0QXR0cmlidXRlKFwieFwiLCBTdHJpbmcobmQueCAtIHZpc3VhbFcgLyAyIC0gc2VsRXgpKTtcclxuICAgICAgICBmby5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyhuZC55IC0gdmlzdWFsSCAvIDIgLSBzZWxFeCkpO1xyXG4gICAgICAgIGZvLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyh2aXN1YWxXICsgc2VsRXggKiAyKSk7XHJcbiAgICAgICAgZm8uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyh2aXN1YWxIICsgc2VsRXggKiAyKSk7XHJcbiAgICAgICAgZm8uc2V0QXR0cmlidXRlKFwib3ZlcmZsb3dcIiwgXCJ2aXNpYmxlXCIpO1xyXG4gICAgICAgIC8vIG92ZXJmbG93OnZpc2libGUgc2V0IHZpYSBTVkcgYXR0cmlidXRlIGFib3ZlXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmRzPy5pc0RyYWdnaW5nICYmXHJcbiAgICAgICAgICAgICF0aGlzLmRzLmlzUm9vdERyYWcgJiZcclxuICAgICAgICAgICAgKHRoaXMuZHMgYXMgQ2hpbGREcmFnKS5ub2RlSWQgPT09IG5kLmlkXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICBmby50b2dnbGVDbGFzcyhcIm16LWRyYWctdHJhbnNwYXJlbnRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgd3JhcC5hZGRDbGFzcyhcIm16LW5vZGUtd3JhcFwiKTtcclxuICAgICAgICBpZiAodGhpcy5lZGl0SWQgPT09IG5kLmlkKSB3cmFwLmFwcGVuZENoaWxkKHRoaXMubWtUQShuZCkpO1xyXG4gICAgICAgIGVsc2Ugd3JhcC5hcHBlbmRDaGlsZCh0aGlzLm1rRGl2KG5kKSk7XHJcbiAgICAgICAgZm8uYXBwZW5kQ2hpbGQod3JhcCk7XHJcbiAgICAgICAgdGhpcy5ub2Rlc0cuYXBwZW5kQ2hpbGQoZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbm9kZVZpcyhuZDogTWluZE5vZGVEYXRhKSB7XHJcbiAgICAgICAgY29uc3QgaXNSID0gISFuZC5pc1Jvb3Q7XHJcbiAgICAgICAgY29uc3Qgc28gPSBuZC5zdHlsZU92ZXJyaWRlID8/IHt9O1xyXG4gICAgICAgIGNvbnN0IGJnID1cclxuICAgICAgICAgICAgc28uYmdDb2xvciA/P1xyXG4gICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290QmdDb2xvciA6IHRoaXMuc3R5bGUubm9kZUJnQ29sb3IpO1xyXG4gICAgICAgIGNvbnN0IHRjID1cclxuICAgICAgICAgICAgc28udGV4dENvbG9yID8/XHJcbiAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RUZXh0Q29sb3IgOiB0aGlzLnN0eWxlLm5vZGVUZXh0Q29sb3IpO1xyXG4gICAgICAgIGNvbnN0IGZzID1cclxuICAgICAgICAgICAgc28uZm9udFNpemUgPz9cclxuICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEZvbnRTaXplIDogdGhpcy5zdHlsZS5ub2RlRm9udFNpemUpO1xyXG4gICAgICAgIGNvbnN0IGZmID1cclxuICAgICAgICAgICAgc28uZm9udEZhbWlseSA/P1xyXG4gICAgICAgICAgICAoaXNSID8gdGhpcy5zdHlsZS5yb290Rm9udEZhbWlseSA6IHRoaXMuc3R5bGUubm9kZUZvbnRGYW1pbHkpO1xyXG4gICAgICAgIGNvbnN0IGJTID1cclxuICAgICAgICAgICAgc28uYm9yZGVyU3R5bGUgPz9cclxuICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEJvcmRlclN0eWxlIDogdGhpcy5zdHlsZS5ub2RlQm9yZGVyU3R5bGUpO1xyXG4gICAgICAgIGNvbnN0IGJXID1cclxuICAgICAgICAgICAgc28uYm9yZGVyV2lkdGggPz9cclxuICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEJvcmRlcldpZHRoIDogdGhpcy5zdHlsZS5ub2RlQm9yZGVyV2lkdGgpO1xyXG4gICAgICAgIGxldCBiQyA9XHJcbiAgICAgICAgICAgIHNvLmJvcmRlckNvbG9yID8/XHJcbiAgICAgICAgICAgIChpc1IgPyB0aGlzLnN0eWxlLnJvb3RCb3JkZXJDb2xvciA6IHRoaXMuc3R5bGUubm9kZUJvcmRlckNvbG9yKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuY29ubmVjdGlvblJhaW5ib3cgJiZcclxuICAgICAgICAgICAgIXNvLmJvcmRlckNvbG9yICYmXHJcbiAgICAgICAgICAgICFpc1IgJiZcclxuICAgICAgICAgICAgbmQuY29ubmVjdGlvbkNvbG9yXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICBiQyA9IG5kLmNvbm5lY3Rpb25Db2xvcjtcclxuICAgICAgICBjb25zdCByYWQgPVxyXG4gICAgICAgICAgICBzby5ib3JkZXJSYWRpdXMgPz9cclxuICAgICAgICAgICAgKGlzUiA/IHRoaXMuc3R5bGUucm9vdEJvcmRlclJhZGl1cyA6IHRoaXMuc3R5bGUubm9kZUJvcmRlclJhZGl1cyk7XHJcbiAgICAgICAgcmV0dXJuIHsgaXNSLCBiZywgdGMsIGZzLCBmZiwgYlMsIGJXLCBiQywgcmFkIH07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG1rRGl2KG5kOiBNaW5kTm9kZURhdGEpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCB2ID0gdGhpcy5ub2RlVmlzKG5kKTtcclxuICAgICAgICBjb25zdCBzZWwgPSB0aGlzLmlzU2VsKG5kLmlkKTtcclxuICAgICAgICBjb25zdCB0YSA9IHRoaXMuc3R5bGUudGV4dEFsaWduO1xyXG4gICAgICAgIGNvbnN0IHBhZFggPSB0aGlzLnN0eWxlLm5vZGVQYWRYO1xyXG4gICAgICAgIGNvbnN0IGxoID0gdGhpcy5zdHlsZS5ub2RlTGluZUhlaWdodDtcclxuICAgICAgICBjb25zdCBvZmYgPSB0aGlzLnN0eWxlLnNlbGVjdGlvbk91dGxpbmVPZmZzZXQ7XHJcbiAgICAgICAgY29uc3QgYlcgPSB2LmJTICE9PSBcIm5vbmVcIiA/IHYuYlcgOiAwO1xyXG4gICAgICAgIGNvbnN0IHZpc3VhbFcgPSBuZC53aWR0aCArIGJXICogMjtcclxuICAgICAgICBjb25zdCB2aXN1YWxIID0gbmQuaGVpZ2h0ICsgYlcgKiAyO1xyXG4gICAgICAgIGNvbnN0IGJvcmRlckNTUyA9XHJcbiAgICAgICAgICAgIHYuYlMgIT09IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICA/IGBib3JkZXI6JHt2LmJXfXB4ICR7di5iU30gJHt2LmJDfTtgXHJcbiAgICAgICAgICAgICAgICA6IFwiYm9yZGVyOm5vbmU7XCI7XHJcbiAgICAgICAgY29uc3Qgc2VsQ1NTID0gc2VsXHJcbiAgICAgICAgICAgID8gYG91dGxpbmU6JHt0aGlzLnN0eWxlLnNlbGVjdGlvbldpZHRofXB4IHNvbGlkICR7dGhpcy5zdHlsZS5zZWxlY3Rpb25Db2xvcn07b3V0bGluZS1vZmZzZXQ6JHtvZmZ9cHg7YFxyXG4gICAgICAgICAgICA6IFwiXCI7XHJcbiAgICAgICAgZGl2LmFkZENsYXNzKFwibXotbm9kZS1kaXZcIik7XHJcbiAgICAgICAgY29uc3QgZHMgPSBkaXYuc3R5bGU7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LXdcIiwgdmlzdWFsVyArIFwicHhcIik7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LWhcIiwgdmlzdWFsSCArIFwicHhcIik7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXHJcbiAgICAgICAgICAgIFwiLS1tei1qY1wiLFxyXG4gICAgICAgICAgICB0YSA9PT0gXCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgID8gXCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgIDogdGEgPT09IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICA/IFwiZmxleC1lbmRcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotcmFkXCIsIHYucmFkICsgXCJweFwiKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotZndcIiwgU3RyaW5nKHYuaXNSID8gNzAwIDogNTAwKSk7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LWZzXCIsIHYuZnMgKyBcInB4XCIpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei1mZlwiLCB2LmZmKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotdGFcIiwgdGEpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei1saFwiLCBTdHJpbmcobGgpKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotYmdcIiwgdi5iZyk7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXCItLW16LXRjXCIsIHYudGMpO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei1wYWRcIiwgYDZweCAke3BhZFh9cHhgKTtcclxuICAgICAgICBkcy5zZXRQcm9wZXJ0eShcIi0tbXotY3Vyc29yXCIsIHYuaXNSID8gXCJtb3ZlXCIgOiBcImdyYWJcIik7XHJcbiAgICAgICAgZHMuc2V0UHJvcGVydHkoXHJcbiAgICAgICAgICAgIFwiLS1tei1ib3JkZXJcIixcclxuICAgICAgICAgICAgdi5iUyAhPT0gXCJub25lXCIgPyBgJHt2LmJXfXB4ICR7di5iU30gJHt2LmJDfWAgOiBcIm5vbmVcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFxyXG4gICAgICAgICAgICBcIi0tbXotb3V0bGluZVwiLFxyXG4gICAgICAgICAgICBzZWxcclxuICAgICAgICAgICAgICAgID8gYCR7dGhpcy5zdHlsZS5zZWxlY3Rpb25XaWR0aH1weCBzb2xpZCAke3RoaXMuc3R5bGUuc2VsZWN0aW9uQ29sb3J9YFxyXG4gICAgICAgICAgICAgICAgOiBcIm5vbmVcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIGRzLnNldFByb3BlcnR5KFwiLS1tei1vdXRsaW5lLW9mZlwiLCBzZWwgPyBvZmYgKyBcInB4XCIgOiBcIjBcIik7XHJcbiAgICAgICAgZGl2LmlubmVyVGV4dCA9IG5kLnRleHQ7XHJcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3BhY2VEb3duKSByZXR1cm47XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2M/LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY29uc3QgaXNEYmwgPSB0aGlzLmxjbmlkID09PSBuZC5pZCAmJiBub3cgLSB0aGlzLmxjdCA8IDMwMDtcclxuICAgICAgICAgICAgdGhpcy5sY3QgPSBub3c7XHJcbiAgICAgICAgICAgIHRoaXMubGNuaWQgPSBuZC5pZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tbWl0RWRpdCAmJiB0aGlzLmVkaXRJZCAhPT0gbmQuaWQpIHRoaXMuY29tbWl0RWRpdCgpO1xyXG4gICAgICAgICAgICBpZiAoaXNEYmwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdElkID0gbmQuaWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5IHx8IGUuY3RybEtleSB8fCBlLm1ldGFLZXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nU2VsKG5kLmlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpU2VsLmhhcyhuZC5pZCkpIHRoaXMuc2VsMShuZC5pZCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJjID0gdGhpcy5jYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgbHggPSAoZS5jbGllbnRYIC0gcmMubGVmdCAtIHRoaXMucGFuWCkgLyB0aGlzLnpvb20sXHJcbiAgICAgICAgICAgICAgICBseSA9IChlLmNsaWVudFkgLSByYy50b3AgLSB0aGlzLnBhblkpIC8gdGhpcy56b29tO1xyXG4gICAgICAgICAgICBpZiAobmQuaXNSb290KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwZWVyczogeyBpZDogc3RyaW5nOyBzeDogbnVtYmVyOyBzeTogbnVtYmVyIH1bXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlTZWwuc2l6ZSA+IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBtaWQgb2YgdGhpcy5tdWx0aVNlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWlkID09PSBuZC5pZCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1uID0gdGhpcy5mQWxsKG1pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtbj8uaXNSb290KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVlcnMucHVzaCh7IGlkOiBtaWQsIHN4OiBtbi54LCBzeTogbW4ueSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRHJhZ2dpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUm9vdERyYWc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBuZC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFg6IGx4LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WTogbHksXHJcbiAgICAgICAgICAgICAgICAgICAgbnN4OiBuZC54LFxyXG4gICAgICAgICAgICAgICAgICAgIG5zeTogbmQueSxcclxuICAgICAgICAgICAgICAgICAgICBwZWVyczogcGVlcnMubGVuZ3RoID8gcGVlcnMgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpc0RyYWdnaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpc1Jvb3REcmFnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBub2RlSWQ6IG5kLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WDogbHgsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRZOiBseSxcclxuICAgICAgICAgICAgICAgICAgICBnaG9zdEVsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGljYXRvckVsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHNuYXA6IEpTT04uc3RyaW5naWZ5KHRoaXMucm9vdHMpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dOb2RlQ3R4KGUsIG5kKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZGl2O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWtUQShuZDogTWluZE5vZGVEYXRhKTogSFRNTFRleHRBcmVhRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICAgICAgdGEudmFsdWUgPSBuZC50ZXh0O1xyXG4gICAgICAgIGNvbnN0IHYgPSB0aGlzLm5vZGVWaXMobmQpO1xyXG4gICAgICAgIGNvbnN0IHRBbGlnbiA9IHRoaXMuc3R5bGUudGV4dEFsaWduO1xyXG4gICAgICAgIGNvbnN0IGVkaXRPQyA9IHRoaXMuc3R5bGUuZWRpdE91dGxpbmVDb2xvcjtcclxuICAgICAgICBjb25zdCBwYWRYID0gdGhpcy5zdHlsZS5ub2RlUGFkWDtcclxuICAgICAgICBjb25zdCBsaCA9IHRoaXMuc3R5bGUubm9kZUxpbmVIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgb2ZmID0gdGhpcy5zdHlsZS5zZWxlY3Rpb25PdXRsaW5lT2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IGJXID0gdi5iUyAhPT0gXCJub25lXCIgPyB2LmJXIDogMDtcclxuICAgICAgICBjb25zdCB2aXN1YWxXID0gbmQud2lkdGggKyBiVyAqIDI7XHJcbiAgICAgICAgY29uc3QgdmlzdWFsSCA9IG5kLmhlaWdodCArIGJXICogMjtcclxuICAgICAgICBjb25zdCBib3JkZXJDU1MgPVxyXG4gICAgICAgICAgICB2LmJTICE9PSBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgPyBgYm9yZGVyOiR7di5iV31weCAke3YuYlN9ICR7di5iQ307YFxyXG4gICAgICAgICAgICAgICAgOiBcImJvcmRlcjpub25lO1wiO1xyXG4gICAgICAgIGNvbnN0IGVkaXRPVyA9IHRoaXMuc3R5bGUuZWRpdE91dGxpbmVXaWR0aDtcclxuICAgICAgICBjb25zdCBlZGl0Q1NTID0gYG91dGxpbmU6JHtlZGl0T1d9cHggc29saWQgJHtlZGl0T0N9O291dGxpbmUtb2Zmc2V0OiR7b2ZmfXB4O3RyYW5zaXRpb246bm9uZTthbmltYXRpb246bm9uZTtgO1xyXG4gICAgICAgIHRhLmFkZENsYXNzKFwibXotbm9kZS10YVwiKTtcclxuICAgICAgICBjb25zdCB0cyA9IHRhLnN0eWxlO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei13XCIsIHZpc3VhbFcgKyBcInB4XCIpO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1oXCIsIHZpc3VhbEggKyBcInB4XCIpO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1yYWRcIiwgdi5yYWQgKyBcInB4XCIpO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1md1wiLCBTdHJpbmcodi5pc1IgPyA3MDAgOiA1MDApKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotZnNcIiwgdi5mcyArIFwicHhcIik7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LWZmXCIsIHYuZmYpO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei10YVwiLCB0QWxpZ24pO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1saFwiLCBTdHJpbmcobGgpKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcIi0tbXotYmdcIiwgdi5iZyk7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LXRjXCIsIHYudGMpO1xyXG4gICAgICAgIHRzLnNldFByb3BlcnR5KFwiLS1tei1wYWRcIiwgYDZweCAke3BhZFh9cHhgKTtcclxuICAgICAgICB0cy5zZXRQcm9wZXJ0eShcclxuICAgICAgICAgICAgXCItLW16LWJvcmRlclwiLFxyXG4gICAgICAgICAgICB2LmJTICE9PSBcIm5vbmVcIiA/IGAke3YuYld9cHggJHt2LmJTfSAke3YuYkN9YCA6IFwibm9uZVwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LWVkaXQtb3V0bGluZVwiLCBgJHtlZGl0T1d9cHggc29saWQgJHtlZGl0T0N9YCk7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LWVkaXQtb3V0bGluZS1vZmZcIiwgb2ZmICsgXCJweFwiKTtcclxuICAgICAgICB0YS5hZGRDbGFzcyhcIm16LW5vZGUtdGFcIik7XHJcbiAgICAgICAgdHMuc2V0UHJvcGVydHkoXCItLW16LXNlbC1iZ1wiLCBlZGl0T0MgKyBcIjQwXCIpO1xyXG4gICAgICAgIHRhLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xyXG4gICAgICAgIC8vIEZJWDogaW5wdXQgaGFuZGxlciBcdTIwMTQgcmVjYWxjIHNpemUgYm90aCBncm93IEFORCBzaHJpbmtcclxuICAgICAgICB0YS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0eHQgPSB0YS52YWx1ZSB8fCBcIiBcIjtcclxuICAgICAgICAgICAgY29uc3QgbncgPSB0aGlzLmNhbGNXKHR4dCwgISFuZC5pc1Jvb3QpO1xyXG4gICAgICAgICAgICBjb25zdCBuaCA9IHRoaXMuY2FsY0godHh0LCAhIW5kLmlzUm9vdCk7XHJcbiAgICAgICAgICAgIGlmIChudyAhPT0gbmQud2lkdGggfHwgbmggIT09IG5kLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgbmQud2lkdGggPSBudztcclxuICAgICAgICAgICAgICAgIG5kLmhlaWdodCA9IG5oO1xyXG4gICAgICAgICAgICAgICAgdGEuc3R5bGUuc2V0UHJvcGVydHkoXCItLW16LXdcIiwgbmQud2lkdGggKyBiVyAqIDIgKyBcInB4XCIpO1xyXG4gICAgICAgICAgICAgICAgdGEuc3R5bGUuc2V0UHJvcGVydHkoXCItLW16LWhcIiwgbmQuaGVpZ2h0ICsgYlcgKiAyICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29mdFJlbmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5saXZlVEEgPSB0YTtcclxuICAgICAgICBjb25zdCBzYXZlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lZGl0SWQgIT09IG5kLmlkKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IHR4dCA9IHRhLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAobmQudGV4dCAhPT0gdHh0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgICAgICAgICBuZC50ZXh0ID0gdHh0O1xyXG4gICAgICAgICAgICAgICAgbmQud2lkdGggPSB0aGlzLmNhbGNXKHR4dCB8fCBcIiBcIiwgISFuZC5pc1Jvb3QpO1xyXG4gICAgICAgICAgICAgICAgbmQuaGVpZ2h0ID0gdGhpcy5jYWxjSCh0eHQgfHwgXCIgXCIsICEhbmQuaXNSb290KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWl0RWRpdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMubGl2ZVRBID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29tbWl0RWRpdCA9IHNhdmU7XHJcbiAgICAgICAgdGEuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJrZXlkb3duXCIsXHJcbiAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZS5rZXkgPT09IFwiRW50ZXJcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFlLnNoaWZ0S2V5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMubWF0Y2hLZXkoZSwgdGhpcy5rYi5saW5lQnJlYWspXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJUYWJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEluc2VydCB0YWIgYXQgY3Vyc29yIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcyA9IHRhLnNlbGVjdGlvblN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSB0YS5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGEudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YS52YWx1ZS5zdWJzdHJpbmcoMCwgcykgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGEudmFsdWUuc3Vic3RyaW5nKGVuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGEuc2VsZWN0aW9uU3RhcnQgPSB0YS5zZWxlY3Rpb25FbmQgPSBzICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB0YS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEN0cmwrVXAgPSBIb21lLCBDdHJsK0Rvd24gPSBFbmQsIEN0cmwrU2hpZnQrVXAgPSBTaGlmdCtIb21lLCBDdHJsK1NoaWZ0K0Rvd24gPSBTaGlmdCtFbmRcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSAmJiBlLmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGEuc2VsZWN0aW9uU3RhcnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZS5zaGlmdEtleSkgdGEuc2VsZWN0aW9uRW5kID0gMDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmIGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlbiA9IHRhLnZhbHVlLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICB0YS5zZWxlY3Rpb25FbmQgPSBsZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlLnNoaWZ0S2V5KSB0YS5zZWxlY3Rpb25TdGFydCA9IGxlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0YS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRhLnNlbGVjdCgpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIHJldHVybiB0YTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUZPKCkge1xyXG4gICAgICAgIGNvbnN0IHYgPSAobjogTWluZE5vZGVEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbCA9IHRoaXMuaXNTZWwobi5pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4ID0gc2VsID8gdGhpcy5zdHlsZS5zZWxlY3Rpb25XaWR0aCArIDQgOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBudiA9IHRoaXMubm9kZVZpcyhuKTtcclxuICAgICAgICAgICAgY29uc3QgYlcgPSBudi5iUyAhPT0gXCJub25lXCIgPyBudi5iVyA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHZ3ID0gbi53aWR0aCArIGJXICogMjtcclxuICAgICAgICAgICAgY29uc3QgdmggPSBuLmhlaWdodCArIGJXICogMjtcclxuICAgICAgICAgICAgY29uc3QgZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1uLVwiICsgbi5pZCk7XHJcbiAgICAgICAgICAgIGlmIChmbykge1xyXG4gICAgICAgICAgICAgICAgZm8uc2V0QXR0cmlidXRlKFwieFwiLCBTdHJpbmcobi54IC0gdncgLyAyIC0gZXgpKTtcclxuICAgICAgICAgICAgICAgIGZvLnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKG4ueSAtIHZoIC8gMiAtIGV4KSk7XHJcbiAgICAgICAgICAgICAgICBmby5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcodncgKyBleCAqIDIpKTtcclxuICAgICAgICAgICAgICAgIGZvLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcodmggKyBleCAqIDIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgdihjKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB2KHIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjbG9zZU1lbnUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlTWVudSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU1lbnUuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVNZW51ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNob3dNZW51KG1lbnU6IE1lbnUsIGU6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlTWVudSA9IG1lbnU7XHJcbiAgICAgICAgbWVudS5zaG93QXRNb3VzZUV2ZW50KGUpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzaG93Q2FudmFzQ3R4KGU6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNsb3NlUG9wKCk7XHJcbiAgICAgICAgY29uc3QgbWVudSA9IG5ldyBNZW51KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNdWx0aSgpKSB7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQoXCJjdHguYmF0Y2hEZWxcIikgKyBcIiAoXCIgKyB0aGlzLmFsbFNlbCgpLnNpemUgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldEljb24oXCJ0cmFzaFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuYmF0Y2hEZWwoKSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5lZGl0U3R5bGVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldEljb24oXCJwYWxldHRlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4gdGhpcy5zaG93Tm9kZVN0eWxlRWRpdG9yKGUpKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbWVudS5hZGRTZXBhcmF0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5uZXdSb290XCIpKVxyXG4gICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJwbHVzLWNpcmNsZVwiKVxyXG4gICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLmNjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkUm9vdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uZ2V0Um9vdE5hbWUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGUuY2xpZW50WCAtIHIubGVmdCAtIHRoaXMucGFuWCkgLyB0aGlzLnpvb20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlLmNsaWVudFkgLSByLnRvcCAtIHRoaXMucGFuWSkgLyB0aGlzLnpvb20sXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWVudS5hZGRTZXBhcmF0b3IoKTtcclxuICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LnVuZG9cIikpXHJcbiAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInVuZG9cIilcclxuICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMudW5kbygpKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHgucmVkb1wiKSlcclxuICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwicmVkb1wiKVxyXG4gICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4gdGhpcy5yZWRvKCkpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWVudS5hZGRTZXBhcmF0b3IoKTtcclxuICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4Lmdsb2JhbFN0eWxlXCIpKVxyXG4gICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJwYWxldHRlXCIpXHJcbiAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLnNob3dTdHlsZU1vZGFsKCkpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zaG93TWVudShtZW51LCBlKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2hvd05vZGVDdHgoZTogTW91c2VFdmVudCwgbmQ6IE1pbmROb2RlRGF0YSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VQb3AoKTtcclxuICAgICAgICBjb25zdCBtZW51ID0gbmV3IE1lbnUoKTtcclxuICAgICAgICBpZiAodGhpcy5pc011bHRpKCkpIHtcclxuICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdChcImN0eC5iYXRjaERlbFwiKSArIFwiIChcIiArIHRoaXMuYWxsU2VsKCkuc2l6ZSArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInRyYXNoXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4gdGhpcy5iYXRjaERlbCgpKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LmVkaXRTdHlsZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInBhbGV0dGVcIilcclxuICAgICAgICAgICAgICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLnNob3dOb2RlU3R5bGVFZGl0b3IoZSkpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5lZGl0XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5zZXRJY29uKFwicGVuY2lsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRJZCA9IG5kLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguc3R5bGVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJwYWxldHRlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4gdGhpcy5zaG93Tm9kZVN0eWxlRWRpdG9yKGUpKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbWVudS5hZGRTZXBhcmF0b3IoKTtcclxuICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LmNvcHlcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJjb3B5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbDEobmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcHlOb2RlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZSh0KFwiY3R4LmN1dFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInNjaXNzb3JzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbDEobmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcHlOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jbGlwYm9hcmQpXHJcbiAgICAgICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5wYXN0ZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJjbGlwYm9hcmRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWwxKG5kLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFzdGVOb2RlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtZW51LmFkZFNlcGFyYXRvcigpO1xyXG4gICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHguY2hpbGRcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJwbHVzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbDEobmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENoaWxkTm9kZShuZC5pc1Jvb3QgPyBcInJpZ2h0XCIgOiB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAobmQuaXNSb290KVxyXG4gICAgICAgICAgICAgICAgbWVudS5hZGRJdGVtKChpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFRpdGxlKHQoXCJjdHgubGVmdENoaWxkXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcImFycm93LWxlZnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWwxKG5kLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTGVmdENoaWxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKCFuZC5pc1Jvb3QpXHJcbiAgICAgICAgICAgICAgICBtZW51LmFkZEl0ZW0oKGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5zaWJsaW5nXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAuc2V0SWNvbihcInBsdXNcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWwxKG5kLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkU2libGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkU2VwYXJhdG9yKCk7XHJcbiAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaSkgPT5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUodChcImN0eC5kZWxldGVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLnNldEljb24oXCJ0cmFzaFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWwxKG5kLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd01lbnUobWVudSwgZSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGJhdGNoRGVsKCkge1xyXG4gICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIHRoaXMuYWxsU2VsKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm9vdHMuc29tZSgocikgPT4gci5pZCA9PT0gaWQpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb290cyA9IHRoaXMucm9vdHMuZmlsdGVyKChyKSA9PiByLmlkICE9PSBpZCk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZW1BbGwoaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsclNlbCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc3RhcnRCb3gobHg6IG51bWJlciwgbHk6IG51bWJlciwgc2hpZnQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmJveFNlbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ib3hTaGlmdCA9IHNoaWZ0O1xyXG4gICAgICAgIHRoaXMuYnN4ID0gbHg7XHJcbiAgICAgICAgdGhpcy5ic3kgPSBseTtcclxuICAgICAgICB0aGlzLmJjeCA9IGx4O1xyXG4gICAgICAgIHRoaXMuYmN5ID0gbHk7XHJcbiAgICAgICAgdGhpcy5ib3hFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgICAgICBcInJlY3RcIixcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGJzYyA9IHRoaXMuc3R5bGUuYm94U2VsZWN0aW9uQ29sb3IgfHwgXCIjM2I4MmY2XCI7XHJcbiAgICAgICAgdGhpcy5ib3hFbC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIHRoaXMuaGV4VG9SZ2JhKGJzYywgMC4wNikpO1xyXG4gICAgICAgIHRoaXMuYm94RWwuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIHRoaXMuaGV4VG9SZ2JhKGJzYywgMC40KSk7XHJcbiAgICAgICAgdGhpcy5ib3hFbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxXCIpO1xyXG4gICAgICAgIHRoaXMuYm94RWwuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcIjYgM1wiKTtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcInJ4XCIsIFwiNFwiKTtcclxuICAgICAgICAvLyBib3gtc2VsZWN0IHBvaW50ZXItZXZlbnRzIGhhbmRsZWQgYnkgQ1NTXHJcbiAgICAgICAgdGhpcy5vdmVybGF5Ry5hcHBlbmRDaGlsZCh0aGlzLmJveEVsKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkQm94KGx4OiBudW1iZXIsIGx5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmJjeCA9IGx4O1xyXG4gICAgICAgIHRoaXMuYmN5ID0gbHk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJveEVsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5ib3hFbC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyhNYXRoLm1pbih0aGlzLmJzeCwgbHgpKSk7XHJcbiAgICAgICAgdGhpcy5ib3hFbC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyhNYXRoLm1pbih0aGlzLmJzeSwgbHkpKSk7XHJcbiAgICAgICAgdGhpcy5ib3hFbC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcoTWF0aC5hYnMobHggLSB0aGlzLmJzeCkpKTtcclxuICAgICAgICB0aGlzLmJveEVsLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcoTWF0aC5hYnMobHkgLSB0aGlzLmJzeSkpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZW5kQm94KF9lOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5ib3hTZWwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJveEVsPy5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmJveEVsID0gbnVsbDtcclxuICAgICAgICBjb25zdCBieDEgPSBNYXRoLm1pbih0aGlzLmJzeCwgdGhpcy5iY3gpLFxyXG4gICAgICAgICAgICBieTEgPSBNYXRoLm1pbih0aGlzLmJzeSwgdGhpcy5iY3kpLFxyXG4gICAgICAgICAgICBieDIgPSBNYXRoLm1heCh0aGlzLmJzeCwgdGhpcy5iY3gpLFxyXG4gICAgICAgICAgICBieTIgPSBNYXRoLm1heCh0aGlzLmJzeSwgdGhpcy5iY3kpO1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhieDIgLSBieDEpIDwgNSAmJiBNYXRoLmFicyhieTIgLSBieTEpIDwgNSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYm94U2hpZnQpIHRoaXMuY2xyU2VsKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWRzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICAgICAgY29uc3QgY2hrID0gKG46IE1pbmROb2RlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBubCA9IG4ueCAtIG4ud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgbnIgPSBuLnggKyBuLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIG50ID0gbi55IC0gbi5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICAgICAgbmIgPSBuLnkgKyBuLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIGlmIChuciA+PSBieDEgJiYgbmwgPD0gYngyICYmIG5iID49IGJ5MSAmJiBudCA8PSBieTIpIGlkcy5hZGQobi5pZCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSBjaGsoYyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgY2hrKHIpO1xyXG4gICAgICAgIGlmICh0aGlzLmJveFNoaWZ0KSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB0aGlzLnRvZ1NlbChpZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tdWx0aVNlbC5jbGVhcigpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykgdGhpcy5tdWx0aVNlbC5hZGQoaWQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tdWx0aVNlbC5zaXplID09PSAxKSB0aGlzLnNlbDEoWy4uLnRoaXMubXVsdGlTZWxdWzBdKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5tdWx0aVNlbC5zaXplID4gMSkgdGhpcy5zZWxJZCA9IFsuLi50aGlzLm11bHRpU2VsXVswXTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmNsclNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc0Rlc2ModGd0OiBNaW5kTm9kZURhdGEsIHBpZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZkFsbChwaWQpO1xyXG4gICAgICAgIHJldHVybiBkID8gdGhpcy5mTih0Z3QuaWQsIGQpICE9PSBudWxsIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRldFRndChcclxuICAgICAgICBsZWZ0WDogbnVtYmVyLFxyXG4gICAgICAgIHJpZ2h0WDogbnVtYmVyLFxyXG4gICAgICAgIHk6IG51bWJlcixcclxuICAgICAgICBkaWQ6IHN0cmluZyxcclxuICAgICk6IHsgaWQ6IHN0cmluZzsgem9uZTogXCJjaGlsZFwiIHwgXCJiZWZvcmVcIiB8IFwiYWZ0ZXJcIiB9IHwgbnVsbCB7XHJcbiAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm9vdHMpIHtcclxuICAgICAgICAgICAgY29uc3QgaCA9IHRoaXMuX2R0KGxlZnRYLCByaWdodFgsIHksIHIsIGRpZCk7XHJcbiAgICAgICAgICAgIGlmIChoKSByZXR1cm4gaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9kdChcclxuICAgICAgICBsZWZ0WDogbnVtYmVyLFxyXG4gICAgICAgIHJpZ2h0WDogbnVtYmVyLFxyXG4gICAgICAgIHk6IG51bWJlcixcclxuICAgICAgICBuOiBNaW5kTm9kZURhdGEsXHJcbiAgICAgICAgZGlkOiBzdHJpbmcsXHJcbiAgICApOiB7IGlkOiBzdHJpbmc7IHpvbmU6IFwiY2hpbGRcIiB8IFwiYmVmb3JlXCIgfCBcImFmdGVyXCIgfSB8IG51bGwge1xyXG4gICAgICAgIC8vIEJsb2NrIGRyb3Agb250byBhbnkgc2VsZWN0ZWQgbm9kZSBvciBpdHMgZGVzY2VuZGFudHNcclxuICAgICAgICBjb25zdCBzZWxJZHMgPSB0aGlzLmFsbFNlbCgpO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2lkIG9mIHNlbElkcykge1xyXG4gICAgICAgICAgICBpZiAobi5pZCA9PT0gc2lkIHx8IHRoaXMuaXNEZXNjKG4sIHNpZCkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobi5pZCA9PT0gZGlkIHx8IHRoaXMuaXNEZXNjKG4sIGRpZCkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIC8vIFVzZSByaWdodCBlZGdlIGZvciBsZWZ0LXNpZGUgbm9kZXMsIGxlZnQgZWRnZSBmb3IgcmlnaHQtc2lkZSBub2Rlc1xyXG4gICAgICAgIGNvbnN0IHggPSBsZWZ0WDtcclxuICAgICAgICBjb25zdCBwYWQgPSAyNTtcclxuICAgICAgICBjb25zdCBsID0gbi54IC0gbi53aWR0aCAvIDIgLSBwYWQsXHJcbiAgICAgICAgICAgIHIgPSBuLnggKyBuLndpZHRoIC8gMiArIHBhZCxcclxuICAgICAgICAgICAgdG9wID0gbi55IC0gbi5oZWlnaHQgLyAyIC0gcGFkLFxyXG4gICAgICAgICAgICBiID0gbi55ICsgbi5oZWlnaHQgLyAyICsgcGFkO1xyXG4gICAgICAgIGlmICh4ID49IGwgJiYgeCA8PSByICYmIHkgPj0gdG9wICYmIHkgPD0gYikge1xyXG4gICAgICAgICAgICBsZXQgejogXCJjaGlsZFwiIHwgXCJiZWZvcmVcIiB8IFwiYWZ0ZXJcIiA9IFwiY2hpbGRcIjtcclxuICAgICAgICAgICAgaWYgKCFuLmlzUm9vdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaCA9IG4uaGVpZ2h0ICsgcGFkICogMixcclxuICAgICAgICAgICAgICAgICAgICByeSA9IHkgLSB0b3A7XHJcbiAgICAgICAgICAgICAgICBpZiAocnkgPCBoICogMC40KSB6ID0gXCJiZWZvcmVcIjtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJ5ID4gaCAqIDAuNikgeiA9IFwiYWZ0ZXJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4geyBpZDogbi5pZCwgem9uZTogeiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBjb25zdCBoID0gdGhpcy5fZHQobGVmdFgsIHJpZ2h0WCwgeSwgYywgZGlkKTtcclxuICAgICAgICAgICAgaWYgKGgpIHJldHVybiBoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVtVHJlZShpZDogc3RyaW5nLCBuOiBNaW5kTm9kZURhdGEpOiBNaW5kTm9kZURhdGEgfCBudWxsIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG4uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG4uY2hpbGRyZW5baV0uaWQgPT09IGlkKSByZXR1cm4gbi5jaGlsZHJlbi5zcGxpY2UoaSwgMSlbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLnJlbVRyZWUoaWQsIG4uY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICBpZiAoZikgcmV0dXJuIGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZW1BbGwoaWQ6IHN0cmluZyk6IE1pbmROb2RlRGF0YSB8IG51bGwge1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLnJlbVRyZWUoaWQsIHIpO1xyXG4gICAgICAgICAgICBpZiAoZikgcmV0dXJuIGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpbnNUcmVlKFxyXG4gICAgICAgIG5pOiBNaW5kTm9kZURhdGEsXHJcbiAgICAgICAgdGlkOiBzdHJpbmcsXHJcbiAgICAgICAgem9uZTogXCJjaGlsZFwiIHwgXCJiZWZvcmVcIiB8IFwiYWZ0ZXJcIixcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IHRuID0gdGhpcy5mQWxsKHRpZCk7XHJcbiAgICAgICAgaWYgKCF0bikgcmV0dXJuO1xyXG4gICAgICAgIC8vIEluaGVyaXQgc2lkZSBmcm9tIHRhcmdldFxyXG4gICAgICAgIGNvbnN0IHNldFNpZGUgPSAobjogTWluZE5vZGVEYXRhLCBzPzogXCJsZWZ0XCIgfCBcInJpZ2h0XCIpID0+IHtcclxuICAgICAgICAgICAgbi5zaWRlID0gcztcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIG4uY2hpbGRyZW4pIHNldFNpZGUoYywgcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoem9uZSA9PT0gXCJjaGlsZFwiIHx8IHRuLmlzUm9vdCkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRTaWRlID0gdG4uaXNSb290ID8gbmkuc2lkZSA6IHRuLnNpZGU7XHJcbiAgICAgICAgICAgIHNldFNpZGUobmksIHRhcmdldFNpZGUpO1xyXG4gICAgICAgICAgICB0bi5jaGlsZHJlbi5wdXNoKG5pKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTaWRlKG5pLCB0bi5zaWRlKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gdGhpcy5mUCh0aWQsIHIpO1xyXG4gICAgICAgICAgICBpZiAocCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gcC5jaGlsZHJlbi5maW5kSW5kZXgoKGMpID0+IGMuaWQgPT09IHRpZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWR4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHAuY2hpbGRyZW4uc3BsaWNlKHpvbmUgPT09IFwiYmVmb3JlXCIgPyBpZHggOiBpZHggKyAxLCAwLCBuaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmTihpZDogc3RyaW5nLCBuOiBNaW5kTm9kZURhdGEpOiBNaW5kTm9kZURhdGEgfCBudWxsIHtcclxuICAgICAgICBpZiAobi5pZCA9PT0gaWQpIHJldHVybiBuO1xyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLmZOKGlkLCBjKTtcclxuICAgICAgICAgICAgaWYgKGYpIHJldHVybiBmO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZlAoY2lkOiBzdHJpbmcsIG46IE1pbmROb2RlRGF0YSk6IE1pbmROb2RlRGF0YSB8IG51bGwge1xyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGlmIChjLmlkID09PSBjaWQpIHJldHVybiBuO1xyXG4gICAgICAgICAgICBjb25zdCBmID0gdGhpcy5mUChjaWQsIGMpO1xyXG4gICAgICAgICAgICBpZiAoZikgcmV0dXJuIGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmUEEoY2lkOiBzdHJpbmcpOiBNaW5kTm9kZURhdGEgfCBudWxsIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gdGhpcy5mUChjaWQsIHIpO1xyXG4gICAgICAgICAgICBpZiAocCkgcmV0dXJuIHA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBiaW5kRXZ0cygpIHtcclxuICAgICAgICBjb25zdCBjYyA9IHRoaXMuY2M7XHJcbiAgICAgICAgY2MuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0Z3QgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAodGd0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0ZXh0YXJlYVwiKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNjLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcclxuICAgICAgICAgICAgLy8gRklYOiBpZiBzcGFjZSBoZWxkLCBBTFdBWVMgc3RhcnQgY2FudmFzIGRyYWcgcmVnYXJkbGVzcyBvZiBjbGljayB0YXJnZXRcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3BhY2VEb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdDdiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNteCA9IGUuY2xpZW50WDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc215ID0gZS5jbGllbnRZO1xyXG4gICAgICAgICAgICAgICAgY2MudG9nZ2xlQ2xhc3MoXCJtei1jdXJzb3ItZ3JhYmJpbmdcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGd0ID09PSB0aGlzLnN2Z0VsIHx8XHJcbiAgICAgICAgICAgICAgICB0Z3QgPT09IGNjIHx8XHJcbiAgICAgICAgICAgICAgICB0Z3QudGFnTmFtZSA9PT0gXCJzdmdcIiB8fFxyXG4gICAgICAgICAgICAgICAgdGd0LnRhZ05hbWUgPT09IFwiZ1wiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tbWl0RWRpdCkgdGhpcy5jb21taXRFZGl0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Qm94KFxyXG4gICAgICAgICAgICAgICAgICAgIChlLmNsaWVudFggLSBjYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gdGhpcy5wYW5YKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgICAgICAgICAoZS5jbGllbnRZIC0gY2MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gdGhpcy5wYW5ZKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgICAgICAgICBlLnNoaWZ0S2V5LFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0Z3QgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0Z3QgPT09IHRoaXMuc3ZnRWwgfHxcclxuICAgICAgICAgICAgICAgIHRndCA9PT0gY2MgfHxcclxuICAgICAgICAgICAgICAgIFtcInN2Z1wiLCBcImdcIiwgXCJwYXRoXCJdLmluY2x1ZGVzKHRndC50YWdOYW1lKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NhbnZhc0N0eChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmMgPSBjYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgbHggPSAoZS5jbGllbnRYIC0gcmMubGVmdCAtIHRoaXMucGFuWCkgLyB0aGlzLnpvb20sXHJcbiAgICAgICAgICAgICAgICBseSA9IChlLmNsaWVudFkgLSByYy50b3AgLSB0aGlzLnBhblkpIC8gdGhpcy56b29tO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib3hTZWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkQm94KGx4LCBseSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gbHggLSB0aGlzLmRzLnN0YXJ0WCxcclxuICAgICAgICAgICAgICAgICAgICBkeSA9IGx5IC0gdGhpcy5kcy5zdGFydFk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuZHMuaXNEcmFnZ2luZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChNYXRoLmFicyhkeCkgPiA1IHx8IE1hdGguYWJzKGR5KSA+IDUpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcy5pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRzLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kcy5pc1Jvb3REcmFnKSB0aGlzLnJvb3RERihkeCwgZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5jaGlsZERGKGx4LCBseSwgZHgsIGR5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnQ3YpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFuWCArPSBlLmNsaWVudFggLSB0aGlzLnNteDtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFuWSArPSBlLmNsaWVudFkgLSB0aGlzLnNteTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc214ID0gZS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbXkgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZFR4KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcIndoZWVsXCIsXHJcbiAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrYiA9IHRoaXMua2I7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2UgPSBlLmRlbHRhWSA+IDAgPyAwLjkgOiAxLjE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgemYgPSBrYi5pbnZlcnRab29tID8gMSAvIGJhc2UgOiBiYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG56ID0gTWF0aC5tYXgoMC4xLCBNYXRoLm1pbih0aGlzLnpvb20gKiB6ZiwgMykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBjYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXggPSBlLmNsaWVudFggLSByLmxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15ID0gZS5jbGllbnRZIC0gci50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5YID0gbXggLSAobXggLSB0aGlzLnBhblgpICogKG56IC8gdGhpcy56b29tKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhblkgPSBteSAtIChteSAtIHRoaXMucGFuWSkgKiAobnogLyB0aGlzLnpvb20pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuem9vbSA9IG56O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZCA9IGUuZGVsdGFYIHx8IGUuZGVsdGFZO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuWCAtPSBrYi5pbnZlcnRTY3JvbGxYID8gLWQgOiBkO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhblggLT0ga2IuaW52ZXJ0U2Nyb2xsWCA/IC1lLmRlbHRhWCA6IGUuZGVsdGFYO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuWSAtPSBrYi5pbnZlcnRTY3JvbGxZID8gLWUuZGVsdGFZIDogZS5kZWx0YVk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZFR4KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgcGFzc2l2ZTogZmFsc2UgfSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByb290REYoZHg6IG51bWJlciwgZHk6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5kcz8uaXNSb290RHJhZykgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHJuID0gdGhpcy5mQWxsKHRoaXMuZHMubm9kZUlkKTtcclxuICAgICAgICBpZiAoIXJuKSByZXR1cm47XHJcbiAgICAgICAgcm4ueCA9IHRoaXMuZHMubnN4ICsgZHg7XHJcbiAgICAgICAgcm4ueSA9IHRoaXMuZHMubnN5ICsgZHk7XHJcbiAgICAgICAgdGhpcy5kb0xheW91dChybik7XHJcbiAgICAgICAgaWYgKCh0aGlzLmRzIGFzIFJvb3REcmFnKS5wZWVycylcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwIG9mICh0aGlzLmRzIGFzIFJvb3REcmFnKS5wZWVycyEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBuID0gdGhpcy5mQWxsKHAuaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG4ueCA9IHAuc3ggKyBkeDtcclxuICAgICAgICAgICAgICAgICAgICBwbi55ID0gcC5zeSArIGR5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9MYXlvdXQocG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lZGdlc0cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5kcmF3RWRnZXMocik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGTygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjaGlsZERGKGx4OiBudW1iZXIsIGx5OiBudW1iZXIsIGR4OiBudW1iZXIsIGR5OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkID0gdGhpcy5kcyBhcyBDaGlsZERyYWc7XHJcbiAgICAgICAgaWYgKCFkLmdob3N0RWwpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3JpZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW4tXCIgKyBkLm5vZGVJZCk7XHJcbiAgICAgICAgICAgIGlmIChvcmlnKSBvcmlnLnRvZ2dsZUNsYXNzKFwibXotZHJhZy10cmFuc3BhcmVudFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgZG4gPSB0aGlzLmZBbGwoZC5ub2RlSWQpO1xyXG4gICAgICAgICAgICBpZiAoZG4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvcmVpZ25PYmplY3RcIixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBnaG9zdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcoZG4ud2lkdGgpKTtcclxuICAgICAgICAgICAgICAgIGdob3N0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcoZG4uaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICBnaG9zdC5zZXRBdHRyaWJ1dGUoXCJvdmVyZmxvd1wiLCBcInZpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBnaG9zdCBvcGFjaXR5IGhhbmRsZWQgYnkgbXotZHJhZy1naG9zdCBjbGFzc1xyXG4gICAgICAgICAgICAgICAgLy8gZ2hvc3QgcG9pbnRlci1ldmVudHMgaGFuZGxlZCBieSBtei1kcmFnLWdob3N0IGNsYXNzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBnZC5hZGRDbGFzcyhcIm16LWRyYWctZ2hvc3RcIik7XHJcbiAgICAgICAgICAgICAgICBnZC5pbm5lclRleHQgPSBkbi50ZXh0O1xyXG4gICAgICAgICAgICAgICAgZ2hvc3QuYXBwZW5kQ2hpbGQoZ2QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5Ry5hcHBlbmRDaGlsZChnaG9zdCk7XHJcbiAgICAgICAgICAgICAgICBkLmdob3N0RWwgPSBnaG9zdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICAgICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCIsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaW5kLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICBcImZpbGxcIixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhleFRvUmdiYShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHlsZS5ib3hTZWxlY3Rpb25Db2xvciB8fCBcIiMzYjgyZjZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgMC4xMixcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGluZC5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgdGhpcy5zdHlsZS5zZWxlY3Rpb25Db2xvcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgICAgICAgICAgIGluZC5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIyXCIpO1xyXG4gICAgICAgICAgICAgICAgaW5kLnNldEF0dHJpYnV0ZShcInJ4XCIsIFN0cmluZyh0aGlzLnN0eWxlLm5vZGVCb3JkZXJSYWRpdXMpKTtcclxuICAgICAgICAgICAgICAgIC8vIGluZGljYXRvciBwb2ludGVyLWV2ZW50cyBoYW5kbGVkIGJ5IENTU1xyXG4gICAgICAgICAgICAgICAgaW5kLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5Ry5hcHBlbmRDaGlsZChpbmQpO1xyXG4gICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbCA9IGluZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkbiA9IHRoaXMuZkFsbChkLm5vZGVJZCk7XHJcbiAgICAgICAgaWYgKGRuICYmIGQuZ2hvc3RFbCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0xlZnRTaWRlID0gZG4uc2lkZSA9PT0gXCJsZWZ0XCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGVkZ2VYID0gaXNMZWZ0U2lkZVxyXG4gICAgICAgICAgICAgICAgPyBkbi54ICsgZHggKyBkbi53aWR0aCAvIDJcclxuICAgICAgICAgICAgICAgIDogZG4ueCArIGR4IC0gZG4ud2lkdGggLyAyO1xyXG4gICAgICAgICAgICBjb25zdCBneSA9IGRuLnkgKyBkeTtcclxuICAgICAgICAgICAgZC5naG9zdEVsLnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKGRuLnggKyBkeCAtIGRuLndpZHRoIC8gMikpO1xyXG4gICAgICAgICAgICBkLmdob3N0RWwuc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoZ3kgLSBkbi5oZWlnaHQgLyAyKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRndCA9IHRoaXMuZGV0VGd0KGVkZ2VYLCBlZGdlWCwgZ3ksIGQubm9kZUlkKTtcclxuICAgICAgICAgICAgaWYgKHRndCAmJiBkLmluZGljYXRvckVsKSB7XHJcbiAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRuID0gdGhpcy5mQWxsKHRndC5pZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGd0LnpvbmUgPT09IFwiY2hpbGRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLnggLSB0bi53aWR0aCAvIDIgLSA0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5pbmRpY2F0b3JFbC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyh0bi55IC0gdG4uaGVpZ2h0IC8gMiAtIDQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyh0bi53aWR0aCArIDgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcodG4uaGVpZ2h0ICsgOCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0Z3Quem9uZSA9PT0gXCJiZWZvcmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLnggLSB0bi53aWR0aCAvIDIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLnkgLSB0bi5oZWlnaHQgLyAyIC0gNiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHRuLndpZHRoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiM1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLnggLSB0bi53aWR0aCAvIDIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmluZGljYXRvckVsLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHRuLnkgKyB0bi5oZWlnaHQgLyAyICsgMyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHRuLndpZHRoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiM1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZC5pbmRpY2F0b3JFbClcclxuICAgICAgICAgICAgICAgIGQuaW5kaWNhdG9yRWwudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhZGRDaGlsZE5vZGUoZm9yY2VTaWRlPzogXCJsZWZ0XCIgfCBcInJpZ2h0XCIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsSWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBwID0gdGhpcy5mQWxsKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIGlmICghcCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICBjb25zdCB0eHQgPSB0aGlzLnBsdWdpbi5nZXRDaGlsZE5hbWUoKTtcclxuICAgICAgICBjb25zdCBuOiBNaW5kTm9kZURhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxyXG4gICAgICAgICAgICB0ZXh0OiB0eHQsXHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmNhbGNXKHR4dCwgZmFsc2UpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuY2FsY0godHh0LCBmYWxzZSksXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChwLmNvbm5lY3Rpb25Db2xvcikgbi5jb25uZWN0aW9uQ29sb3IgPSBwLmNvbm5lY3Rpb25Db2xvcjtcclxuICAgICAgICBpZiAocC5jb25uZWN0aW9uV2lkdGgpIG4uY29ubmVjdGlvbldpZHRoID0gcC5jb25uZWN0aW9uV2lkdGg7XHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHNpZGVcclxuICAgICAgICBpZiAoZm9yY2VTaWRlKSBuLnNpZGUgPSBmb3JjZVNpZGU7XHJcbiAgICAgICAgZWxzZSBpZiAocC5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlyID0gdGhpcy5zdHlsZS5ub2RlRGlyZWN0aW9uO1xyXG4gICAgICAgICAgICBpZiAoZGlyID09PSBcImxlZnRcIikgbi5zaWRlID0gXCJsZWZ0XCI7XHJcbiAgICAgICAgICAgIGVsc2Ugbi5zaWRlID0gXCJyaWdodFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG4uc2lkZSA9IHAuc2lkZSB8fCBcInJpZ2h0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAuY2hpbGRyZW4ucHVzaChuKTtcclxuICAgICAgICB0aGlzLmFzc2lnblJhaW5ib3dDb2xvcihwLCBuKTtcclxuICAgICAgICB0aGlzLnNlbDEobi5pZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmVkaXRPbkNyZWF0ZSkgdGhpcy5lZGl0SWQgPSBuLmlkO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYWRkTGVmdENoaWxkKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGROb2RlKFwibGVmdFwiKTtcclxuICAgIH1cclxuICAgIC8vIEVudGVyIG9uIHJvb3QgPSBhZGQgY2hpbGQuIEVudGVyIG9uIGNoaWxkID0gaW5zZXJ0IHNpYmxpbmcgQUZURVIgY3VycmVudFxyXG4gICAgcHJpdmF0ZSBhZGRTaWJsaW5nKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxJZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHNlbCA9IHRoaXMuZkFsbCh0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoIXNlbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChzZWwuaXNSb290KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGROb2RlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcCA9IHRoaXMuZlBBKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIGlmICghcCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICBjb25zdCB0eHQgPSB0aGlzLnBsdWdpbi5nZXRDaGlsZE5hbWUoKTtcclxuICAgICAgICBjb25zdCBuOiBNaW5kTm9kZURhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxyXG4gICAgICAgICAgICB0ZXh0OiB0eHQsXHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmNhbGNXKHR4dCwgZmFsc2UpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuY2FsY0godHh0LCBmYWxzZSksXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICAgICAgc2lkZTogc2VsLnNpZGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocC5jb25uZWN0aW9uQ29sb3IpIG4uY29ubmVjdGlvbkNvbG9yID0gcC5jb25uZWN0aW9uQ29sb3I7XHJcbiAgICAgICAgaWYgKHAuY29ubmVjdGlvbldpZHRoKSBuLmNvbm5lY3Rpb25XaWR0aCA9IHAuY29ubmVjdGlvbldpZHRoO1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHAuY2hpbGRyZW4uZmluZEluZGV4KChjKSA9PiBjLmlkID09PSB0aGlzLnNlbElkKTtcclxuICAgICAgICBpZiAoaWR4ICE9PSAtMSkgcC5jaGlsZHJlbi5zcGxpY2UoaWR4ICsgMSwgMCwgbik7XHJcbiAgICAgICAgZWxzZSBwLmNoaWxkcmVuLnB1c2gobik7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25SYWluYm93Q29sb3IocCwgbik7XHJcbiAgICAgICAgdGhpcy5zZWwxKG4uaWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5lZGl0T25DcmVhdGUpIHRoaXMuZWRpdElkID0gbi5pZDtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICB9XHJcbiAgICAvLyBGSVggIzM6IGRlbGV0ZSBzZWxlY3RzIFVQUEVSIHNpYmxpbmcgKGlkeC0xKVxyXG4gICAgcHJpdmF0ZSBkZWxOb2RlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZWxJZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnJvb3RzLnNvbWUoKHIpID0+IHIuaWQgPT09IHRoaXMuc2VsSWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVMoKTtcclxuICAgICAgICAgICAgdGhpcy5yb290cyA9IHRoaXMucm9vdHMuZmlsdGVyKChyKSA9PiByLmlkICE9PSB0aGlzLnNlbElkKTtcclxuICAgICAgICAgICAgdGhpcy5jbHJTZWwoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm9vdHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWwxKHRoaXMucm9vdHNbdGhpcy5yb290cy5sZW5ndGggLSAxXS5pZCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9TYXZlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcCA9IHRoaXMuZlBBKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgIGlmICghcCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHAuY2hpbGRyZW4uZmluZEluZGV4KChjKSA9PiBjLmlkID09PSB0aGlzLnNlbElkKTtcclxuICAgICAgICB0aGlzLnNhdmVTKCk7XHJcbiAgICAgICAgcC5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICBpZiAocC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3SWR4ID0gaWR4ID4gMCA/IGlkeCAtIDEgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLnNlbDEocC5jaGlsZHJlbltuZXdJZHhdLmlkKTtcclxuICAgICAgICB9IGVsc2UgdGhpcy5zZWwxKHAuaWQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5kb1NhdmUoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ0QobmlkOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvb3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLl9nZChuaWQsIHIsIDApO1xyXG4gICAgICAgICAgICBpZiAoZCAhPT0gLTEpIHJldHVybiBkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9nZChuaWQ6IHN0cmluZywgbjogTWluZE5vZGVEYXRhLCBkOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChuLmlkID09PSBuaWQpIHJldHVybiBkO1xyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiBuLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLl9nZChuaWQsIGMsIGQgKyAxKTtcclxuICAgICAgICAgICAgaWYgKHIgIT09IC0xKSByZXR1cm4gcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjRGVwKHRkOiBudW1iZXIpOiBNaW5kTm9kZURhdGFbXSB7XHJcbiAgICAgICAgY29uc3QgbzogTWluZE5vZGVEYXRhW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb290cykgdGhpcy5fY2QociwgMCwgdGQsIG8pO1xyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfY2QobjogTWluZE5vZGVEYXRhLCBkOiBudW1iZXIsIHRkOiBudW1iZXIsIG86IE1pbmROb2RlRGF0YVtdKSB7XHJcbiAgICAgICAgaWYgKGQgPT09IHRkKSB7XHJcbiAgICAgICAgICAgIG8ucHVzaChuKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGMgb2Ygbi5jaGlsZHJlbikgdGhpcy5fY2QoYywgZCArIDEsIHRkLCBvKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXJyb3coZGlyOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsSWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBjdXIgPSB0aGlzLmZBbGwodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgaWYgKCFjdXIpIHJldHVybjtcclxuICAgICAgICBjb25zdCBpc0xlZnQgPSBjdXIuc2lkZSA9PT0gXCJsZWZ0XCI7XHJcbiAgICAgICAgaWYgKGRpciA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcclxuICAgICAgICAgICAgaWYgKGlzTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyID0gdGhpcy5mUEEodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyKSB0aGlzLnNlbDEocGFyLmlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJjID0gY3VyLmNoaWxkcmVuPy5maWx0ZXIoKGMpID0+IGMuc2lkZSAhPT0gXCJsZWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJjPy5sZW5ndGgpIHRoaXMuc2VsMShyY1swXS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRpciA9PT0gXCJBcnJvd0xlZnRcIikge1xyXG4gICAgICAgICAgICBpZiAoaXNMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYyA9IGN1ci5jaGlsZHJlbj8ubGVuZ3RoID8gY3VyLmNoaWxkcmVuIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChsYykgdGhpcy5zZWwxKGxjWzBdLmlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXIuaXNSb290KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYyA9IGN1ci5jaGlsZHJlbj8uZmlsdGVyKChjKSA9PiBjLnNpZGUgPT09IFwibGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChsYz8ubGVuZ3RoKSB0aGlzLnNlbDEobGNbMF0uaWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyID0gdGhpcy5mUEEodGhpcy5zZWxJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyKSB0aGlzLnNlbDEocGFyLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLmdEKHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICBpZiAoZCA9PT0gLTEpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgcGVlcnMgPSB0aGlzLmNEZXAoZCk7XHJcbiAgICAgICAgICAgIGlmIChwZWVycy5sZW5ndGggPD0gMSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSBwZWVycy5maW5kSW5kZXgoKG4pID0+IG4uaWQgPT09IHRoaXMuc2VsSWQpO1xyXG4gICAgICAgICAgICBpZiAoaWR4ID09PSAtMSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoZGlyID09PSBcIkFycm93VXBcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsMShwZWVyc1tpZHggPiAwID8gaWR4IC0gMSA6IHBlZXJzLmxlbmd0aCAtIDFdLmlkKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnNlbDEocGVlcnNbaWR4IDwgcGVlcnMubGVuZ3RoIC0gMSA/IGlkeCArIDEgOiAwXS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8vIHNyYy90eXBlcy50c1xyXG5pbXBvcnQgdHlwZSB7IExhbmd1YWdlIH0gZnJvbSBcIi4vaTE4blwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNaW5kTm9kZURhdGEge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIGNoaWxkcmVuOiBNaW5kTm9kZURhdGFbXTtcclxuICAgIGlzUm9vdD86IGJvb2xlYW47XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBzdHlsZU92ZXJyaWRlPzogTm9kZVN0eWxlT3ZlcnJpZGU7XHJcbiAgICBjb25uZWN0aW9uQ29sb3I/OiBzdHJpbmc7XHJcbiAgICBjb25uZWN0aW9uV2lkdGg/OiBudW1iZXI7XHJcbiAgICBzaWRlPzogXCJsZWZ0XCIgfCBcInJpZ2h0XCI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBOb2RlU3R5bGVPdmVycmlkZSB7XHJcbiAgICBiZ0NvbG9yPzogc3RyaW5nO1xyXG4gICAgdGV4dENvbG9yPzogc3RyaW5nO1xyXG4gICAgZm9udFNpemU/OiBudW1iZXI7XHJcbiAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xyXG4gICAgYm9yZGVyU3R5bGU/OiBCb3JkZXJTdHlsZTtcclxuICAgIGJvcmRlckNvbG9yPzogc3RyaW5nO1xyXG4gICAgYm9yZGVyV2lkdGg/OiBudW1iZXI7XHJcbiAgICBib3JkZXJSYWRpdXM/OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IHR5cGUgQm9yZGVyU3R5bGUgPSBcInNvbGlkXCIgfCBcImRhc2hlZFwiIHwgXCJkb3R0ZWRcIiB8IFwiZG91YmxlXCIgfCBcIm5vbmVcIjtcclxuZXhwb3J0IHR5cGUgQ29ubmVjdGlvbkxpbmVTdHlsZSA9XHJcbiAgICB8IFwiYmV6aWVyXCJcclxuICAgIHwgXCJzdHJhaWdodFwiXHJcbiAgICB8IFwiY3VydmVkXCJcclxuICAgIHwgXCJzdGVwXCJcclxuICAgIHwgXCJicmFja2V0XCJcclxuICAgIHwgXCJsb29zZVwiO1xyXG5leHBvcnQgdHlwZSBUZXh0QWxpZ24gPSBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCI7XHJcbmV4cG9ydCB0eXBlIE5vZGVEaXJlY3Rpb24gPSBcInJpZ2h0XCIgfCBcImxlZnRcIiB8IFwiYm90aFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNaW5kTWFwU3R5bGUge1xyXG4gICAgbm9kZUJnQ29sb3I6IHN0cmluZztcclxuICAgIG5vZGVUZXh0Q29sb3I6IHN0cmluZztcclxuICAgIG5vZGVGb250U2l6ZTogbnVtYmVyO1xyXG4gICAgbm9kZUZvbnRGYW1pbHk6IHN0cmluZztcclxuICAgIG5vZGVCb3JkZXJTdHlsZTogQm9yZGVyU3R5bGU7XHJcbiAgICBub2RlQm9yZGVyQ29sb3I6IHN0cmluZztcclxuICAgIG5vZGVCb3JkZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgbm9kZUJvcmRlclJhZGl1czogbnVtYmVyO1xyXG4gICAgbm9kZU1pbldpZHRoOiBudW1iZXI7XHJcbiAgICBub2RlTWluSGVpZ2h0OiBudW1iZXI7XHJcbiAgICByb290QmdDb2xvcjogc3RyaW5nO1xyXG4gICAgcm9vdFRleHRDb2xvcjogc3RyaW5nO1xyXG4gICAgcm9vdEZvbnRTaXplOiBudW1iZXI7XHJcbiAgICByb290Rm9udEZhbWlseTogc3RyaW5nO1xyXG4gICAgcm9vdEJvcmRlclN0eWxlOiBCb3JkZXJTdHlsZTtcclxuICAgIHJvb3RCb3JkZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgcm9vdEJvcmRlcldpZHRoOiBudW1iZXI7XHJcbiAgICByb290Qm9yZGVyUmFkaXVzOiBudW1iZXI7XHJcbiAgICByb290TWluV2lkdGg6IG51bWJlcjtcclxuICAgIHJvb3RNaW5IZWlnaHQ6IG51bWJlcjtcclxuICAgIGNvbm5lY3Rpb25TdHlsZTogQ29ubmVjdGlvbkxpbmVTdHlsZTtcclxuICAgIGNvbm5lY3Rpb25Db2xvcjogc3RyaW5nO1xyXG4gICAgY29ubmVjdGlvbldpZHRoOiBudW1iZXI7XHJcbiAgICBjb25uZWN0aW9uTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBjb25uZWN0aW9uUmFpbmJvdzogYm9vbGVhbjtcclxuICAgIHJhaW5ib3dQYWxldHRlOiBzdHJpbmc7XHJcbiAgICBjdXN0b21SYWluYm93czogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+O1xyXG4gICAgbm9kZURpcmVjdGlvbjogTm9kZURpcmVjdGlvbjtcclxuICAgIHNlbGVjdGlvbkNvbG9yOiBzdHJpbmc7XHJcbiAgICBzZWxlY3Rpb25XaWR0aDogbnVtYmVyO1xyXG4gICAgc2VsZWN0aW9uT3V0bGluZU9mZnNldDogbnVtYmVyO1xyXG4gICAgZWRpdE91dGxpbmVDb2xvcjogc3RyaW5nO1xyXG4gICAgZWRpdE91dGxpbmVXaWR0aDogbnVtYmVyO1xyXG4gICAgYm94U2VsZWN0aW9uQ29sb3I6IHN0cmluZztcclxuICAgIHRleHRBbGlnbjogVGV4dEFsaWduO1xyXG4gICAgbm9kZVBhZFg6IG51bWJlcjtcclxuICAgIG5vZGVMaW5lSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBub2RlR2FwWTogbnVtYmVyO1xyXG4gICAgY2FudmFzQmc6IHN0cmluZztcclxuICAgIHRvb2xiYXJQYWRUb3A6IG51bWJlcjtcclxuICAgIHRvb2xiYXJQYWRSaWdodDogbnVtYmVyO1xyXG4gICAgdG9vbGJhclBhZEJvdHRvbTogbnVtYmVyO1xyXG4gICAgdG9vbGJhclBhZExlZnQ6IG51bWJlcjtcclxuICAgIHRvb2xiYXJQb3NpdGlvbjogXCJ0b3BcIiB8IFwiYm90dG9tXCI7XHJcbiAgICB0b29sYmFyQmdDb2xvcjogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJ0bkJnQ29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJTdHlsZTogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJ0bkJvcmRlckNvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQnRuVGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQm9yZGVyQ29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCb3JkZXJXaWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtleUJpbmRpbmdzIHtcclxuICAgIGVkaXROb2RlOiBzdHJpbmc7XHJcbiAgICBhZGRTaWJsaW5nOiBzdHJpbmc7XHJcbiAgICBhZGRDaGlsZDogc3RyaW5nO1xyXG4gICAgZm9jdXNOb2RlOiBzdHJpbmc7XHJcbiAgICB1bmRvOiBzdHJpbmc7XHJcbiAgICByZWRvOiBzdHJpbmc7XHJcbiAgICBsaW5lQnJlYWs6IHN0cmluZztcclxuICAgIGRyYWdDYW52YXM6IHN0cmluZztcclxuICAgIHpvb21Jbjogc3RyaW5nO1xyXG4gICAgem9vbU91dDogc3RyaW5nO1xyXG4gICAgem9vbVJlc2V0OiBzdHJpbmc7XHJcbiAgICBuYXZVcDogc3RyaW5nO1xyXG4gICAgbmF2RG93bjogc3RyaW5nO1xyXG4gICAgbmF2TGVmdDogc3RyaW5nO1xyXG4gICAgbmF2UmlnaHQ6IHN0cmluZztcclxuICAgIGludmVydFNjcm9sbFk6IGJvb2xlYW47XHJcbiAgICBpbnZlcnRTY3JvbGxYOiBib29sZWFuO1xyXG4gICAgaW52ZXJ0Wm9vbTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQbHVnaW5TZXR0aW5ncyB7XHJcbiAgICBzdHlsZTogTWluZE1hcFN0eWxlO1xyXG4gICAgbGFuZ3VhZ2U6IExhbmd1YWdlO1xyXG4gICAgdGhlbWU6IFwibGlnaHRcIiB8IFwiZGFya1wiO1xyXG4gICAgc2hvd1Rvb2xiYXI6IGJvb2xlYW47XHJcbiAgICBrZXlCaW5kaW5nczogS2V5QmluZGluZ3M7XHJcbiAgICBkZXZlbG9wZXJNb2RlOiBib29sZWFuO1xyXG4gICAgZWRpdE9uQ3JlYXRlOiBib29sZWFuO1xyXG4gICAgdHlwZVRvRWRpdDogYm9vbGVhbjtcclxuICAgIGN1c3RvbU5vZGVOYW1lczogUmVjb3JkPHN0cmluZywgeyByb290Pzogc3RyaW5nOyBjaGlsZD86IHN0cmluZyB9PjtcclxuICAgIHRvb2xiYXJTdHlsZUxpZ2h0PzogVG9vbGJhclRoZW1lQ29sb3JzO1xyXG4gICAgdG9vbGJhclN0eWxlRGFyaz86IFRvb2xiYXJUaGVtZUNvbG9ycztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb29sYmFyVGhlbWVDb2xvcnMge1xyXG4gICAgdG9vbGJhckJnQ29sb3I6IHN0cmluZztcclxuICAgIHRvb2xiYXJCdG5CZ0NvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQnRuQm9yZGVyU3R5bGU6IHN0cmluZztcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJ0blRleHRDb2xvcjogc3RyaW5nO1xyXG4gICAgdG9vbGJhckJvcmRlckNvbG9yOiBzdHJpbmc7XHJcbiAgICB0b29sYmFyQm9yZGVyV2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9PTEJBUl9MSUdIVDogVG9vbGJhclRoZW1lQ29sb3JzID0ge1xyXG4gICAgdG9vbGJhckJnQ29sb3I6IFwiI2Y1ZjVmNVwiLFxyXG4gICAgdG9vbGJhckJ0bkJnQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgdG9vbGJhckJ0bkJvcmRlclN0eWxlOiBcInNvbGlkXCIsXHJcbiAgICB0b29sYmFyQnRuQm9yZGVyQ29sb3I6IFwiI2QxZDVkYlwiLFxyXG4gICAgdG9vbGJhckJ0blRleHRDb2xvcjogXCIjMzMzMzMzXCIsXHJcbiAgICB0b29sYmFyQm9yZGVyQ29sb3I6IFwiI2UwZTBlMFwiLFxyXG4gICAgdG9vbGJhckJvcmRlcldpZHRoOiAxLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9PTEJBUl9EQVJLOiBUb29sYmFyVGhlbWVDb2xvcnMgPSB7XHJcbiAgICB0b29sYmFyQmdDb2xvcjogXCIjMmIyYjJiXCIsXHJcbiAgICB0b29sYmFyQnRuQmdDb2xvcjogXCIjM2MzYzNjXCIsXHJcbiAgICB0b29sYmFyQnRuQm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgIHRvb2xiYXJCdG5Cb3JkZXJDb2xvcjogXCIjNTU1NTU1XCIsXHJcbiAgICB0b29sYmFyQnRuVGV4dENvbG9yOiBcIiNlMGUwZTBcIixcclxuICAgIHRvb2xiYXJCb3JkZXJDb2xvcjogXCIjNTA1MDUwXCIsXHJcbiAgICB0b29sYmFyQm9yZGVyV2lkdGg6IDEsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUkFJTkJPV19QQUxFVFRFUzogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge1xyXG4gICAgY2xhc3NpYzogW1xyXG4gICAgICAgIFwiIzExY2QzY1wiLFxyXG4gICAgICAgIFwiIzM0OThkYlwiLFxyXG4gICAgICAgIFwiI2Y0MjUwZVwiLFxyXG4gICAgICAgIFwiI2Y4OGQyZlwiLFxyXG4gICAgICAgIFwiIzFhZDVlZFwiLFxyXG4gICAgICAgIFwiI2IwYjBiMFwiLFxyXG4gICAgICAgIFwiI2M4NWJmM1wiLFxyXG4gICAgICAgIFwiIzQwY2RiMVwiLFxyXG4gICAgICAgIFwiIzZiOTlmNlwiLFxyXG4gICAgICAgIFwiI2ZiMzk5N2Q4XCIsXHJcbiAgICAgICAgXCIjODA3MGY5XCIsXHJcbiAgICAgICAgXCIjY2I3MGY1XCIsXHJcbiAgICBdLFxyXG4gICAgcGFzdGVsOiBbXHJcbiAgICAgICAgXCIjYmFmZmM5XCIsXHJcbiAgICAgICAgXCIjYmFlMWZmXCIsXHJcbiAgICAgICAgXCIjZmZiM2JhXCIsXHJcbiAgICAgICAgXCIjZmZkZmJhXCIsXHJcbiAgICAgICAgXCIjZmZmZmJhXCIsXHJcbiAgICAgICAgXCIjZThiYWZmXCIsXHJcbiAgICAgICAgXCIjZmZjOWRlXCIsXHJcbiAgICAgICAgXCIjYzlmZmU1XCIsXHJcbiAgICAgICAgXCIjYzlkNmZmXCIsXHJcbiAgICAgICAgXCIjZmZlOGM5XCIsXHJcbiAgICAgICAgXCIjZDRiYWZmXCIsXHJcbiAgICAgICAgXCIjYmFmZmVhXCIsXHJcbiAgICBdLFxyXG4gICAgZm9yZXN0OiBbXHJcbiAgICAgICAgXCIjMjdhZTYwXCIsXHJcbiAgICAgICAgXCIjMmVjYzcxXCIsXHJcbiAgICAgICAgXCIjMWFiYzljXCIsXHJcbiAgICAgICAgXCIjMTZhMDg1XCIsXHJcbiAgICAgICAgXCIjMDA2NDAwXCIsXHJcbiAgICAgICAgXCIjMjI4QjIyXCIsXHJcbiAgICAgICAgXCIjMzJDRDMyXCIsXHJcbiAgICAgICAgXCIjM0NCMzcxXCIsXHJcbiAgICAgICAgXCIjMkU4QjU3XCIsXHJcbiAgICAgICAgXCIjNjZDREFBXCIsXHJcbiAgICAgICAgXCIjOEZCQzhGXCIsXHJcbiAgICAgICAgXCIjOTBFRTkwXCIsXHJcbiAgICBdLFxyXG4gICAgY2FuZHk6IFtcclxuICAgICAgICBcIiNGRjZGOTFcIixcclxuICAgICAgICBcIiNGRjk2NzFcIixcclxuICAgICAgICBcIiNGRkM3NUZcIixcclxuICAgICAgICBcIiNGOUY4NzFcIixcclxuICAgICAgICBcIiNENjVEQjFcIixcclxuICAgICAgICBcIiM4NDVFQzJcIixcclxuICAgICAgICBcIiMyQzczRDJcIixcclxuICAgICAgICBcIiMwMDg5QkFcIixcclxuICAgICAgICBcIiMwMDhFOUJcIixcclxuICAgICAgICBcIiMwMDhGN0FcIixcclxuICAgICAgICBcIiNCMEE4QjlcIixcclxuICAgICAgICBcIiNDMzRBMzZcIixcclxuICAgIF0sXHJcbiAgICBuZW9uOiBbXHJcbiAgICAgICAgXCIjZmYwMDU1XCIsXHJcbiAgICAgICAgXCIjZmY2NjAwXCIsXHJcbiAgICAgICAgXCIjZmZjYzAwXCIsXHJcbiAgICAgICAgXCIjMDBmZjg4XCIsXHJcbiAgICAgICAgXCIjMDA4OGZmXCIsXHJcbiAgICAgICAgXCIjYWEwMGZmXCIsXHJcbiAgICAgICAgXCIjZmYwMDk5XCIsXHJcbiAgICAgICAgXCIjMDBmZmNjXCIsXHJcbiAgICAgICAgXCIjMDBjY2ZmXCIsXHJcbiAgICAgICAgXCIjZmZmZjAwXCIsXHJcbiAgICAgICAgXCIjZmYwMGZmXCIsXHJcbiAgICAgICAgXCIjMDBmZjAwXCIsXHJcbiAgICBdLFxyXG4gICAgZWFydGg6IFtcclxuICAgICAgICBcIiM4QjQ1MTNcIixcclxuICAgICAgICBcIiNBMDUyMkRcIixcclxuICAgICAgICBcIiNDRDg1M0ZcIixcclxuICAgICAgICBcIiNERUI4ODdcIixcclxuICAgICAgICBcIiNEMkI0OENcIixcclxuICAgICAgICBcIiNCQzhGOEZcIixcclxuICAgICAgICBcIiNGNEE0NjBcIixcclxuICAgICAgICBcIiNEQUE1MjBcIixcclxuICAgICAgICBcIiNCODg2MEJcIixcclxuICAgICAgICBcIiM4MDgwMDBcIixcclxuICAgICAgICBcIiM2QjhFMjNcIixcclxuICAgICAgICBcIiM1NTZCMkZcIixcclxuICAgIF0sXHJcbiAgICBvY2VhbjogW1xyXG4gICAgICAgIFwiIzAwMWYzZlwiLFxyXG4gICAgICAgIFwiIzAwMzM2NlwiLFxyXG4gICAgICAgIFwiIzAwNDA4MFwiLFxyXG4gICAgICAgIFwiIzAwNTliM1wiLFxyXG4gICAgICAgIFwiIzAwNzNlNlwiLFxyXG4gICAgICAgIFwiIzFhOGNmZlwiLFxyXG4gICAgICAgIFwiIzRkYTZmZlwiLFxyXG4gICAgICAgIFwiIzgwYmZmZlwiLFxyXG4gICAgICAgIFwiIzk5Y2NmZlwiLFxyXG4gICAgICAgIFwiI2IzZDlmZlwiLFxyXG4gICAgICAgIFwiI2NjZTVmZlwiLFxyXG4gICAgICAgIFwiI2U2ZjJmZlwiLFxyXG4gICAgXSxcclxuICAgIHN1bnNldDogW1xyXG4gICAgICAgIFwiI2ZmNmI2YlwiLFxyXG4gICAgICAgIFwiI2VlNWEyNFwiLFxyXG4gICAgICAgIFwiI2YwOTMyYlwiLFxyXG4gICAgICAgIFwiI2Y2ZTU4ZFwiLFxyXG4gICAgICAgIFwiI2ZmYmU3NlwiLFxyXG4gICAgICAgIFwiI2ZmNzk3OVwiLFxyXG4gICAgICAgIFwiI2UwNTZmZFwiLFxyXG4gICAgICAgIFwiI2JlMmVkZFwiLFxyXG4gICAgICAgIFwiIzY4NmRlMFwiLFxyXG4gICAgICAgIFwiIzQ4MzRkNFwiLFxyXG4gICAgICAgIFwiIzMwMzM2YlwiLFxyXG4gICAgICAgIFwiIzEzMGY0MFwiLFxyXG4gICAgXSxcclxuICAgIG1vbm9jaHJvbWU6IFtcclxuICAgICAgICBcIiMwMDAwMDBcIixcclxuICAgICAgICBcIiMxYTFhMWFcIixcclxuICAgICAgICBcIiMzMzMzMzNcIixcclxuICAgICAgICBcIiM0ZDRkNGRcIixcclxuICAgICAgICBcIiM2NjY2NjZcIixcclxuICAgICAgICBcIiM4MDgwODBcIixcclxuICAgICAgICBcIiM5OTk5OTlcIixcclxuICAgICAgICBcIiNiM2IzYjNcIixcclxuICAgICAgICBcIiNjY2NjY2NcIixcclxuICAgICAgICBcIiNlNmU2ZTZcIixcclxuICAgICAgICBcIiNmMmYyZjJcIixcclxuICAgICAgICBcIiNmZmZmZmZcIixcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRk9OVF9MSVNUID0gW1xyXG4gICAgXCJpbmhlcml0XCIsXHJcbiAgICBcIkFyaWFsXCIsXHJcbiAgICBcIkhlbHZldGljYSBOZXVlXCIsXHJcbiAgICBcIkdlb3JnaWFcIixcclxuICAgIFwiVGltZXMgTmV3IFJvbWFuXCIsXHJcbiAgICBcIkNvdXJpZXIgTmV3XCIsXHJcbiAgICBcIlZlcmRhbmFcIixcclxuICAgIFwibW9ub3NwYWNlXCIsXHJcbiAgICBcInNhbnMtc2VyaWZcIixcclxuICAgIFwic2VyaWZcIixcclxuXTtcclxuZXhwb3J0IGNvbnN0IENPTk5FQ1RJT05fU1RZTEVTOiBDb25uZWN0aW9uTGluZVN0eWxlW10gPSBbXHJcbiAgICBcImJlemllclwiLFxyXG4gICAgXCJzdHJhaWdodFwiLFxyXG4gICAgXCJjdXJ2ZWRcIixcclxuICAgIFwic3RlcFwiLFxyXG4gICAgXCJicmFja2V0XCIsXHJcbiAgICBcImxvb3NlXCIsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9LRVlCSU5ESU5HUzogS2V5QmluZGluZ3MgPSB7XHJcbiAgICBlZGl0Tm9kZTogXCJTcGFjZVwiLFxyXG4gICAgYWRkU2libGluZzogXCJFbnRlclwiLFxyXG4gICAgYWRkQ2hpbGQ6IFwiVGFiXCIsXHJcbiAgICBmb2N1c05vZGU6IFwiZlwiLFxyXG4gICAgdW5kbzogXCJjdHJsK3pcIixcclxuICAgIHJlZG86IFwiY3RybCtzaGlmdCt6XCIsXHJcbiAgICBsaW5lQnJlYWs6IFwic2hpZnQrRW50ZXJcIixcclxuICAgIGRyYWdDYW52YXM6IFwiU3BhY2VcIixcclxuICAgIHpvb21JbjogXCJzaGlmdCs9XCIsXHJcbiAgICB6b29tT3V0OiBcInNoaWZ0Ky1cIixcclxuICAgIHpvb21SZXNldDogXCJzaGlmdCswXCIsXHJcbiAgICBuYXZVcDogXCJBcnJvd1VwXCIsXHJcbiAgICBuYXZEb3duOiBcIkFycm93RG93blwiLFxyXG4gICAgbmF2TGVmdDogXCJBcnJvd0xlZnRcIixcclxuICAgIG5hdlJpZ2h0OiBcIkFycm93UmlnaHRcIixcclxuICAgIGludmVydFNjcm9sbFk6IGZhbHNlLFxyXG4gICAgaW52ZXJ0U2Nyb2xsWDogZmFsc2UsXHJcbiAgICBpbnZlcnRab29tOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NUWUxFOiBNaW5kTWFwU3R5bGUgPSB7XHJcbiAgICBub2RlQmdDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICBub2RlVGV4dENvbG9yOiBcIiMzMzMzMzNcIixcclxuICAgIG5vZGVGb250U2l6ZTogMTQsXHJcbiAgICBub2RlRm9udEZhbWlseTogXCJpbmhlcml0XCIsXHJcbiAgICBub2RlQm9yZGVyU3R5bGU6IFwic29saWRcIixcclxuICAgIG5vZGVCb3JkZXJDb2xvcjogXCIjY2NjY2NjXCIsXHJcbiAgICBub2RlQm9yZGVyV2lkdGg6IDIsXHJcbiAgICBub2RlQm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgbm9kZU1pbldpZHRoOiA2MCxcclxuICAgIG5vZGVNaW5IZWlnaHQ6IDMyLFxyXG4gICAgcm9vdEJnQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgcm9vdFRleHRDb2xvcjogXCIjMTcxNzE3XCIsXHJcbiAgICByb290Rm9udFNpemU6IDE4LFxyXG4gICAgcm9vdEZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLFxyXG4gICAgcm9vdEJvcmRlclN0eWxlOiBcInNvbGlkXCIsXHJcbiAgICByb290Qm9yZGVyQ29sb3I6IFwiI2JhYmFiYVwiLFxyXG4gICAgcm9vdEJvcmRlcldpZHRoOiAyLFxyXG4gICAgcm9vdEJvcmRlclJhZGl1czogNSxcclxuICAgIHJvb3RNaW5XaWR0aDogOTYsXHJcbiAgICByb290TWluSGVpZ2h0OiA0MCxcclxuICAgIGNvbm5lY3Rpb25TdHlsZTogXCJicmFja2V0XCIsXHJcbiAgICBjb25uZWN0aW9uQ29sb3I6IFwiI2E4YThhOFwiLFxyXG4gICAgY29ubmVjdGlvbldpZHRoOiAxLjUsXHJcbiAgICBjb25uZWN0aW9uTGVuZ3RoOiA5NixcclxuICAgIGNvbm5lY3Rpb25SYWluYm93OiB0cnVlLFxyXG4gICAgcmFpbmJvd1BhbGV0dGU6IFwiY2xhc3NpY1wiLFxyXG4gICAgY3VzdG9tUmFpbmJvd3M6IHtcclxuICAgICAgICBDdXN0b206IFtcclxuICAgICAgICAgICAgXCIjZmY4OTg5XCIsXHJcbiAgICAgICAgICAgIFwiIzhlZmQ4ZVwiLFxyXG4gICAgICAgICAgICBcIiNhM2EzZmZcIixcclxuICAgICAgICAgICAgXCIjZmZmZjkxXCIsXHJcbiAgICAgICAgICAgIFwiI2Y5YjFmOVwiLFxyXG4gICAgICAgICAgICBcIiNhNGZmZmZcIixcclxuICAgICAgICAgICAgXCIjZGVkZWRlXCIsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBub2RlRGlyZWN0aW9uOiBcInJpZ2h0XCIsXHJcbiAgICBzZWxlY3Rpb25Db2xvcjogXCIjMjRiYzEwXCIsXHJcbiAgICBzZWxlY3Rpb25XaWR0aDogMyxcclxuICAgIHNlbGVjdGlvbk91dGxpbmVPZmZzZXQ6IDIsXHJcbiAgICBlZGl0T3V0bGluZUNvbG9yOiBcIiMzYmZiMmRcIixcclxuICAgIGVkaXRPdXRsaW5lV2lkdGg6IDUsXHJcbiAgICBib3hTZWxlY3Rpb25Db2xvcjogXCIjM2I4MmY2XCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBub2RlUGFkWDogMTAsXHJcbiAgICBub2RlTGluZUhlaWdodDogMS41LFxyXG4gICAgbm9kZUdhcFk6IDMyLFxyXG4gICAgY2FudmFzQmc6IFwiI2ZmZmZmZlwiLFxyXG4gICAgdG9vbGJhclBhZFRvcDogMCxcclxuICAgIHRvb2xiYXJQYWRSaWdodDogMTIsXHJcbiAgICB0b29sYmFyUGFkQm90dG9tOiAwLFxyXG4gICAgdG9vbGJhclBhZExlZnQ6IDEyLFxyXG4gICAgdG9vbGJhclBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgdG9vbGJhckJnQ29sb3I6IFwiI2Y1ZjVmNVwiLFxyXG4gICAgdG9vbGJhckJ0bkJnQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgdG9vbGJhckJ0bkJvcmRlclN0eWxlOiBcInNvbGlkXCIsXHJcbiAgICB0b29sYmFyQnRuQm9yZGVyQ29sb3I6IFwiI2QxZDVkYlwiLFxyXG4gICAgdG9vbGJhckJ0blRleHRDb2xvcjogXCIjMzMzMzMzXCIsXHJcbiAgICB0b29sYmFyQm9yZGVyQ29sb3I6IFwiI2UwZTBlMFwiLFxyXG4gICAgdG9vbGJhckJvcmRlcldpZHRoOiAxLFxyXG59O1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9TRVRUSU5HUzogUGx1Z2luU2V0dGluZ3MgPSB7XHJcbiAgICBzdHlsZTogeyAuLi5ERUZBVUxUX1NUWUxFIH0sXHJcbiAgICBsYW5ndWFnZTogXCJlblwiLFxyXG4gICAgdGhlbWU6IFwibGlnaHRcIixcclxuICAgIHNob3dUb29sYmFyOiB0cnVlLFxyXG4gICAga2V5QmluZGluZ3M6IHsgLi4uREVGQVVMVF9LRVlCSU5ESU5HUyB9LFxyXG4gICAgZGV2ZWxvcGVyTW9kZTogZmFsc2UsXHJcbiAgICBlZGl0T25DcmVhdGU6IGZhbHNlLFxyXG4gICAgdHlwZVRvRWRpdDogdHJ1ZSxcclxuICAgIGN1c3RvbU5vZGVOYW1lczoge30sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBWSUVXX1RZUEVfTUlORE1BUCA9IFwibWluZHpqLXZpZXdcIjtcclxuZXhwb3J0IGNvbnN0IFZJRVdfVFlQRV9NSU5ETUFQX1NUWUxFID0gXCJtaW5kemotc3R5bGUtcGFuZWxcIjtcclxuZXhwb3J0IGNvbnN0IE1JTkRNQVBfRklMRV9FWFRFTlNJT04gPSBcIm1pbmR6alwiO1xyXG4iLCAiLy8gc3JjL2kxOG4udHNcclxuLy8gQWxsIDE5IGxhbmd1YWdlcyB3aXRoIENPTVBMRVRFIHRyYW5zbGF0aW9ucyAobm8gZmFsbGJhY2sgdG8gRW5nbGlzaClcclxuXHJcbmV4cG9ydCB0eXBlIExhbmd1YWdlID1cclxuICAgIHwgXCJlblwiXHJcbiAgICB8IFwiemhcIlxyXG4gICAgfCBcImphXCJcclxuICAgIHwgXCJmclwiXHJcbiAgICB8IFwiZGVcIlxyXG4gICAgfCBcImVzXCJcclxuICAgIHwgXCJydVwiXHJcbiAgICB8IFwic3ZcIlxyXG4gICAgfCBcImhpXCJcclxuICAgIHwgXCJrb1wiXHJcbiAgICB8IFwicHRcIlxyXG4gICAgfCBcImZpXCJcclxuICAgIHwgXCJub1wiXHJcbiAgICB8IFwibmxcIlxyXG4gICAgfCBcImxpXCJcclxuICAgIHwgXCJkYVwiXHJcbiAgICB8IFwiaGVcIlxyXG4gICAgfCBcIml0XCJcclxuICAgIHwgXCJhclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExBTkdVQUdFUzogeyB2YWx1ZTogTGFuZ3VhZ2U7IGxhYmVsOiBzdHJpbmcgfVtdID0gW1xyXG4gICAgeyB2YWx1ZTogXCJlblwiLCBsYWJlbDogXCJFbmdsaXNoXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiemhcIiwgbGFiZWw6IFwiXHU0RTJEXHU2NTg3XCIgfSxcclxuICAgIHsgdmFsdWU6IFwiamFcIiwgbGFiZWw6IFwiXHU2NUU1XHU2NzJDXHU4QTlFXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiZnJcIiwgbGFiZWw6IFwiRnJhblx1MDBFN2Fpc1wiIH0sXHJcbiAgICB7IHZhbHVlOiBcImRlXCIsIGxhYmVsOiBcIkRldXRzY2hcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJlc1wiLCBsYWJlbDogXCJFc3BhXHUwMEYxb2xcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJydVwiLCBsYWJlbDogXCJcdTA0MjBcdTA0NDNcdTA0NDFcdTA0NDFcdTA0M0FcdTA0MzhcdTA0MzlcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJzdlwiLCBsYWJlbDogXCJTdmVuc2thXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiaGlcIiwgbGFiZWw6IFwiXHUwOTM5XHUwOTNGXHUwOTI4XHUwOTREXHUwOTI2XHUwOTQwXCIgfSxcclxuICAgIHsgdmFsdWU6IFwia29cIiwgbGFiZWw6IFwiXHVENTVDXHVBRDZEXHVDNUI0XCIgfSxcclxuICAgIHsgdmFsdWU6IFwicHRcIiwgbGFiZWw6IFwiUG9ydHVndVx1MDBFQXNcIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJmaVwiLCBsYWJlbDogXCJTdW9taVwiIH0sXHJcbiAgICB7IHZhbHVlOiBcIm5vXCIsIGxhYmVsOiBcIk5vcnNrXCIgfSxcclxuICAgIHsgdmFsdWU6IFwibmxcIiwgbGFiZWw6IFwiTmVkZXJsYW5kc1wiIH0sXHJcbiAgICB7IHZhbHVlOiBcImxpXCIsIGxhYmVsOiBcIkxpZWNodGVuc3RlaW5cIiB9LFxyXG4gICAgeyB2YWx1ZTogXCJpdFwiLCBsYWJlbDogXCJJdGFsaWFub1wiIH0sXHJcbiAgICB7IHZhbHVlOiBcImRhXCIsIGxhYmVsOiBcIkRhbnNrXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiaGVcIiwgbGFiZWw6IFwiXHUwNUUyXHUwNUQxXHUwNUU4XHUwNUQ5XHUwNUVBXCIgfSxcclxuICAgIHsgdmFsdWU6IFwiYXJcIiwgbGFiZWw6IFwiXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjMxXHUwNjI4XHUwNjRBXHUwNjI5XCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBSb290XCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgVW5kb1wiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFJlZG9cIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIE1hcFwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdHlsZVwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZvY3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlNlYXJjaFwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlNlYXJjaCB8IFNwYWNlOkVkaXQgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOZXcgcm9vdFwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93biBtb2RlXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiU3R5bGUgcGFuZWxcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJGb2N1cyBub2RlXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlNlYXJjaCBub2Rlc1wiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIlNldHRpbmdzXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlpvb20gSW5cIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlpvb20gT3V0XCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIEN1c3RvbVwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgQmF0Y2ggRGVsZXRlXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggRWRpdCBTdHlsZVwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOZXcgUm9vdFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBVbmRvXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFJlZG9cIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbCBTdHlsZVwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBFZGl0XCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdHlsZVwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBDb3B5XCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgQ3V0XCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBQYXN0ZVwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgQ2hpbGRcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBMZWZ0IENoaWxkXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFNpYmxpbmdcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBEZWxldGVcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiSGlkZSBUb29sYmFyXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbCBTdHlsZVwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIkNoaWxkIE5vZGVcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlJvb3QgTm9kZVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkJhY2tncm91bmRcIixcclxuICAgIFwic20udGV4dFwiOiBcIlRleHQgQ29sb3JcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJGb250IFNpemVcIixcclxuICAgIFwic20uZm9udFwiOiBcIkZvbnRcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJCb3JkZXIgU3R5bGVcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJCb3JkZXIgQ29sb3JcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJCb3JkZXIgV2lkdGhcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiQm9yZGVyIFJhZGl1c1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIk1pbiBXaWR0aFwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJNaW4gSGVpZ2h0XCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJDb25uZWN0aW9uXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXBlXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiQ29sb3JcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJXaWR0aFwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTGVuZ3RoXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggUmFpbmJvd1wiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiTm9kZSBEaXJlY3Rpb25cIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJTaWJsaW5nIEdhcFwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlJpZ2h0XCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJMZWZ0XCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJCb3RoXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXR0ZVwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJTZWxlY3Rpb25cIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJTZWxlY3Rpb24gQ29sb3JcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJTZWxlY3Rpb24gV2lkdGhcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiT3V0bGluZSBPZmZzZXRcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJFZGl0IE91dGxpbmUgQ29sb3JcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIkVkaXQgT3V0bGluZSBXaWR0aFwiLFxyXG4gICAgXCJzbS5ib3hTZWxDb2xvclwiOiBcIkJveCBTZWxlY3Rpb24gQ29sb3JcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiVGV4dCBBbGlnblwiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlRleHQgUGFkZGluZ1wiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIkxpbmUgSGVpZ2h0XCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiQ2FudmFzIEJhY2tncm91bmRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJSZXNldFwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIkNsb3NlXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiU2hvdyBUb29sYmFyXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiVG9vbGJhciBQYWRkaW5nXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlRvcFwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJSaWdodFwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJCb3R0b21cIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiTGVmdFwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlRvb2xiYXIgUG9zaXRpb25cIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJUb3BcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJCb3R0b21cIixcclxuICAgIFwic20udGJCZ1wiOiBcIlRvb2xiYXIgQmFja2dyb3VuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiQnV0dG9uIEJhY2tncm91bmRcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJCdXR0b24gQm9yZGVyIFN0eWxlXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJCdXR0b24gQm9yZGVyIENvbG9yXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIkJ1dHRvbiBUZXh0IENvbG9yXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiUmVzZXQgVG9vbGJhclwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBOb2RlIFN0eWxlXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkxpbmUgQ29sb3JcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiTGluZSBXaWR0aFwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIkNsZWFyIEN1c3RvbVwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJCb3JkZXIgUmFkaXVzXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlNlYXJjaCBub2Rlcy4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlJvb3RcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOZXcgUm9vdFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJDaGlsZFwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogU2V0dGluZ3NcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJMYW5ndWFnZVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJJbnRlcmZhY2UgbGFuZ3VhZ2VcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGhlbWVcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIkNvbG9yIHRoZW1lXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkxpZ2h0XCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiRGFya1wiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlNob3cgVG9vbGJhclwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJTaG93IHRvb2xiYXJcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiQ2FudmFzIEJhY2tncm91bmRcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkJhY2tncm91bmQgY29sb3JcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiQWJvdXRcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzaW9uXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJBdXRob3JcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIkEgZmVhdHVyZS1yaWNoIG9wZW4gc291cmNlIG1pbmQgbWFwIGFwcCBmb3IgT2JzaWRpYW4gd2l0aCBjdXN0b20gc3R5bGVzLCByYWluYm93IGNvbm5lY3Rpb25zLCBtdWx0aS1zZWxlY3QsIGRyYWcgJiBkcm9wLCBhbmQgTWFya2Rvd24gaW1wb3J0L2V4cG9ydC5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJVcGRhdGVkXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWIgUmVwb3NpdG9yeVwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiU3VwcG9ydCBPcGVuIFNvdXJjZSBBdXRob3JcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJLZXlib2FyZCBTaG9ydGN1dHNcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiQ3VzdG9taXplIHNob3J0Y3V0c1wiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJFZGl0IG5vZGVcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiQWRkIHNpYmxpbmdcIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkFkZCBjaGlsZFwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiRm9jdXMgbm9kZVwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJVbmRvXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlJlZG9cIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJMaW5lIGJyZWFrIChpbiBlZGl0KVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJEcmFnIGNhbnZhc1wiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlpvb20gaW5cIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiWm9vbSBvdXRcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJSZXNldCB6b29tXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJOYXZpZ2F0ZSB1cFwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJOYXZpZ2F0ZSBkb3duXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIk5hdmlnYXRlIGxlZnRcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIk5hdmlnYXRlIHJpZ2h0XCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJQcmVzcyBrZXkuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlNjcm9sbCAmIFpvb21cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJJbnZlcnQgdmVydGljYWwgc2Nyb2xsXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSW52ZXJ0IGhvcml6b250YWwgc2Nyb2xsXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiSW52ZXJ0IHpvb20gZGlyZWN0aW9uXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJFZGl0IG9uIGNyZWF0ZVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIkVudGVyIGVkaXQgbW9kZSB3aGVuIGNyZWF0aW5nIG5ldyBub2Rlc1wiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJSb290IG5vZGUgbmFtZVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiRGVmYXVsdCBuYW1lIGZvciBuZXcgcm9vdCBub2Rlc1wiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiQ2hpbGQgbm9kZSBuYW1lXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiRGVmYXVsdCBuYW1lIGZvciBuZXcgY2hpbGQgbm9kZXNcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJUeXBlIHRvIGVkaXRcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6XHJcbiAgICAgICAgXCJQcmVzcyBhbnkga2V5IHRvIGVudGVyIGVkaXQgbW9kZSB3aGVuIGEgbm9kZSBpcyBzZWxlY3RlZFwiLFxyXG59O1xyXG5cclxuY29uc3QgX3poOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFx1NEUzQlx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IFx1NjRBNFx1OTUwMFwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFx1OTFDRFx1NTA1QVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFx1NkEyMVx1NUYwRlwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgXHU1QkZDXHU1NkZFXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1NjgzN1x1NUYwRlwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIlx1NUI5QVx1NEY0RFwiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJcdTY0MUNcdTdEMjJcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpcdTY0MUNcdTdEMjIgfCBTcGFjZTpcdTdGMTZcdThGOTEgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJcdTY1QjBcdTVFRkFcdTRFM0JcdTgyODJcdTcwQjlcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd25cdTZBMjFcdTVGMEZcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJcdTY4MzdcdTVGMEZcdTk3NjJcdTY3N0ZcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJcdTVCOUFcdTRGNERcdTgyODJcdTcwQjlcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiXHU2NDFDXHU3RDIyXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiXHU4QkJFXHU3RjZFXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlx1NjUzRVx1NTkyN1wiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHU3RjI5XHU1QzBGXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFx1ODFFQVx1NUI5QVx1NEU0OVwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHU2Mjc5XHU5MUNGXHU1MjIwXHU5NjY0XCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHU3RjE2XHU4RjkxXHU2ODM3XHU1RjBGXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IFx1NjVCMFx1NUVGQVx1NEUzQlx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBcdTY0QTRcdTk1MDBcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgXHU5MUNEXHU1MDVBXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTUxNjhcdTVDNDBcdTY4MzdcdTVGMEZcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgXHU3RjE2XHU4RjkxXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTY4MzdcdTVGMEZcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgXHU1OTBEXHU1MjM2XCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgXHU1MjZBXHU1MjA3XCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBcdTdDOThcdThEMzRcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IFx1NUI1MFx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFx1NURFNlx1NEZBN1x1NUI1MFx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBcdTUxNDRcdTVGMUZcdTgyODJcdTcwQjlcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTUyMjBcdTk2NjRcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiXHU5NjkwXHU4NUNGXHU1REU1XHU1MTc3XHU2ODBGXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1NTE2OFx1NUM0MFx1NjgzN1x1NUYwRlwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIlx1NUI1MFx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiXHU0RTNCXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInNtLmJnXCI6IFwiXHU4MENDXHU2NjZGXHU4MjcyXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJcdTY1ODdcdTVCNTdcdTgyNzJcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJcdTVCNTdcdTRGNTNcdTU5MjdcdTVDMEZcIixcclxuICAgIFwic20uZm9udFwiOiBcIlx1NUI1N1x1NEY1M1wiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlx1OEZCOVx1Njg0Nlx1NjgzN1x1NUYwRlwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlx1OEZCOVx1Njg0Nlx1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIlx1OEZCOVx1Njg0Nlx1NUJCRFx1NUVBNlwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJcdTU3MDZcdTg5RDJcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJcdTY3MDBcdTVDMEZcdTVCQkRcdTVFQTZcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiXHU2NzAwXHU1QzBGXHU5QUQ4XHU1RUE2XCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJcdThGREVcdTdFQkZcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1N0M3Qlx1NTc4QlwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1NUJCRFx1NUVBNlwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHU5NTdGXHU1RUE2XCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggXHU1RjY5XHU4Njc5XCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJcdTgyODJcdTcwQjlcdTY1QjlcdTU0MTFcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJcdTU0MENcdTdFQTdcdTk1RjRcdThERERcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJcdTUzRjNcdTRGQTdcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlx1NURFNlx1NEZBN1wiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiXHU1REU2XHU1M0YzXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiXHU4QzAzXHU4MjcyXHU2NzdGXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlx1OTAwOVx1NEUyRFwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlx1OTAwOVx1NEUyRFx1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIlx1OTAwOVx1NEUyRFx1Njg0Nlx1NUJCRFx1NUVBNlwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJcdTkwMDlcdTRFMkRcdTY4NDZcdTUwNEZcdTc5RkJcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJcdTdGMTZcdThGOTFcdTY4NDZcdTk4OUNcdTgyNzJcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlx1N0YxNlx1OEY5MVx1Njg0Nlx1NUJCRFx1NUVBNlwiLFxyXG4gICAgXCJzbS5ib3hTZWxDb2xvclwiOiBcIlx1Njg0Nlx1OTAwOVx1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJcdTY1ODdcdTVCNTdcdTVCRjlcdTlGNTBcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJcdTY1ODdcdTVCNTdcdTk1RjRcdThERERcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJcdTg4NENcdTk1RjRcdThERERcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJcdTc1M0JcdTVFMDNcdTgwQ0NcdTY2NkZcdTgyNzJcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJcdTkxQ0RcdTdGNkVcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJcdTUxNzNcdTk1RURcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJcdTY2M0VcdTc5M0FcdTVERTVcdTUxNzdcdTY4MEZcIixcclxuICAgIFwic20udGJQYWRcIjogXCJcdTVERTVcdTUxNzdcdTY4MEZcdTUxODVcdThGQjlcdThERERcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiXHU0RTBBXCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIlx1NTNGM1wiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJcdTRFMEJcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiXHU1REU2XCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiXHU1REU1XHU1MTc3XHU2ODBGXHU0RjREXHU3RjZFXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiXHU5ODc2XHU5MEU4XCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiXHU1RTk1XHU5MEU4XCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJcdTVERTVcdTUxNzdcdTY4MEZcdTgwQ0NcdTY2NkZcdTgyNzJcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlx1NjMwOVx1OTRBRVx1ODBDQ1x1NjY2Rlx1ODI3MlwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlx1NjMwOVx1OTRBRVx1OEZCOVx1Njg0Nlx1NjgzN1x1NUYwRlwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiXHU2MzA5XHU5NEFFXHU4RkI5XHU2ODQ2XHU5ODlDXHU4MjcyXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIlx1NjMwOVx1OTRBRVx1NUI1N1x1NEY1M1x1OTg5Q1x1ODI3MlwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIlx1OTFDRFx1N0Y2RVx1NURFNVx1NTE3N1x1NjgwRlwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTgyODJcdTcwQjlcdTY4MzdcdTVGMEZcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiXHU4RkRFXHU3RUJGXHU5ODlDXHU4MjcyXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIlx1OEZERVx1N0VCRlx1NUJCRFx1NUVBNlwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlx1NkUwNVx1OTY2NFx1ODFFQVx1NUI5QVx1NEU0OVwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJcdTU3MDZcdTg5RDJcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiXHU2NDFDXHU3RDIyXHU4MjgyXHU3MEI5Li4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiXHU0RTNCXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiXHU2NUIwXHU0RTNCXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIlx1NUI1MFx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogXHU4QkJFXHU3RjZFXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiXHU4QkVEXHU4QTAwXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIlx1NzU0Q1x1OTc2Mlx1OEJFRFx1OEEwMFwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJcdTRFM0JcdTk4OThcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIlx1OTg5Q1x1ODI3Mlx1NEUzQlx1OTg5OFwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJcdTRFQUVcdTgyNzJcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJcdTY2OTdcdTgyNzJcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJcdTY2M0VcdTc5M0FcdTVERTVcdTUxNzdcdTY4MEZcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiXHU2NjNFXHU3OTNBXHU5ODc2XHU5MEU4XHU1REU1XHU1MTc3XHU2ODBGXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIlx1NzUzQlx1NUUwM1x1ODBDQ1x1NjY2Rlx1ODI3MlwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiXHU3NTNCXHU1RTAzXHU4MENDXHU2NjZGXHU5ODlDXHU4MjcyXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlx1NTE3M1x1NEU4RVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlx1NzI0OFx1NjcyQ1wiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiXHU0RjVDXHU4MDA1XCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJcdTRFMDBcdTZCM0VcdTUyOUZcdTgwRkRcdTRFMzBcdTVCQ0NcdTc2ODRPYnNpZGlhblx1NjAxRFx1N0VGNFx1NUJGQ1x1NTZGRVx1NUYwMFx1NkU5MFx1NUU5NFx1NzUyOFx1RkYwQ1x1NjUyRlx1NjMwMVx1ODFFQVx1NUI5QVx1NEU0OVx1NjgzN1x1NUYwRlx1MzAwMVx1NUY2OVx1ODY3OVx1OEZERVx1N0VCRlx1MzAwMVx1NTkxQVx1OTAwOVx1MzAwMVx1NjJENlx1NjUzRVx1NTQ4Q01hcmtkb3duXHU3RjE2XHU4RjkxXHU1QkZDXHU1MTY1XHU1QkZDXHU1MUZBXHUzMDAyXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiXHU2NkY0XHU2NUIwXHU2NUU1XHU2NzFGXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWIgXHU0RUQzXHU1RTkzXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJcdTY1MkZcdTYzMDFcdTVGMDBcdTZFOTBcdTk4NzlcdTc2RUVcdTRGNUNcdTgwMDVcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJcdTVGRUJcdTYzNzdcdTk1MkVcdThCQkVcdTdGNkVcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiXHU4MUVBXHU1QjlBXHU0RTQ5XHU1RkVCXHU2Mzc3XHU5NTJFXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlx1N0YxNlx1OEY5MVx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJcdTY1QjBcdTVFRkFcdTUxNDRcdTVGMUZcdTgyODJcdTcwQjlcIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIlx1NjVCMFx1NUVGQVx1NUI1MFx1ODI4Mlx1NzBCOVwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiXHU1QjlBXHU0RjREXHU4MjgyXHU3MEI5XCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIlx1NjRBNFx1OTUwMFwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJcdTkxQ0RcdTUwNUFcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJcdTYzNjJcdTg4NEMoXHU3RjE2XHU4RjkxXHU0RTJEKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJcdTYyRDZcdTUyQThcdTc1M0JcdTVFMDNcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJcdTY1M0VcdTU5MjdcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiXHU3RjI5XHU1QzBGXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiXHU5MUNEXHU3RjZFXHU3RjI5XHU2NTNFXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJcdTU0MTFcdTRFMEFcdTVCRkNcdTgyMkFcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiXHU1NDExXHU0RTBCXHU1QkZDXHU4MjJBXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlx1NTQxMVx1NURFNlx1NUJGQ1x1ODIyQVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiXHU1NDExXHU1M0YzXHU1QkZDXHU4MjJBXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJcdTYzMDlcdTRFMEJcdTYzMDlcdTk1MkUuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlx1NkVEQVx1NTJBOFx1NEUwRVx1N0YyOVx1NjUzRVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIlx1NTNDRFx1OEY2Q1x1NTc4Mlx1NzZGNFx1NkVEQVx1NTJBOFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIlx1NTNDRFx1OEY2Q1x1NkMzNFx1NUU3M1x1NkVEQVx1NTJBOFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlx1NTNDRFx1OEY2Q1x1N0YyOVx1NjUzRVx1NjVCOVx1NTQxMVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiXHU1MjFCXHU1RUZBXHU2NUY2XHU3RjE2XHU4RjkxXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHU1MjFCXHU1RUZBXHU2NUIwXHU4MjgyXHU3MEI5XHU2NUY2XHU4MUVBXHU1MkE4XHU4RkRCXHU1MTY1XHU3RjE2XHU4RjkxXHU2QTIxXHU1RjBGXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlx1NEUzQlx1ODI4Mlx1NzBCOVx1NTQwRFx1NzlGMFwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiXHU2NUIwXHU0RTNCXHU4MjgyXHU3MEI5XHU3Njg0XHU5RUQ4XHU4QkE0XHU1NDBEXHU3OUYwXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJcdTVCNTBcdTgyODJcdTcwQjlcdTU0MERcdTc5RjBcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJcdTY1QjBcdTVCNTBcdTgyODJcdTcwQjlcdTc2ODRcdTlFRDhcdThCQTRcdTU0MERcdTc5RjBcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJcdTYzMDlcdTk1MkVcdTdGMTZcdThGOTFcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiXHU5MDA5XHU0RTJEXHU4MjgyXHU3MEI5XHU2NUY2XHU2MzA5XHU0RUZCXHU2MTBGXHU5NTJFXHU3NkY0XHU2M0E1XHU4RkRCXHU1MTY1XHU3RjE2XHU4RjkxXHU2QTIxXHU1RjBGXCIsXHJcbn07XHJcblxyXG5jb25zdCBfamE6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgXHUzMEVCXHUzMEZDXHUzMEM4XCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgXHU1MTQzXHUzMDZCXHU2MjNCXHUzMDU5XCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgXHUzMDg0XHUzMDhBXHU3NkY0XHUzMDU5XCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBcdTMwREVcdTMwQzNcdTMwRDdcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUzMEI5XHUzMEJGXHUzMEE0XHUzMEVCXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiXHUzMEQ1XHUzMEE5XHUzMEZDXHUzMEFCXHUzMEI5XCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlx1NjkxQ1x1N0QyMlwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlx1NjkxQ1x1N0QyMiB8IFNwYWNlOlx1N0RFOFx1OTZDNiB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIlx1NjVCMFx1ODk4Rlx1MzBFQlx1MzBGQ1x1MzBDOFwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93blx1MzBFMlx1MzBGQ1x1MzBDOVwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlx1MzBCOVx1MzBCRlx1MzBBNFx1MzBFQlx1MzBEMVx1MzBDRFx1MzBFQlwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIlx1MzBDRVx1MzBGQ1x1MzBDOVx1MzA2Qlx1MzBENVx1MzBBOVx1MzBGQ1x1MzBBQlx1MzBCOVwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJcdTMwQ0VcdTMwRkNcdTMwQzlcdTY5MUNcdTdEMjJcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJcdThBMkRcdTVCOUFcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiXHU2MkUxXHU1OTI3XCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJcdTdFMkVcdTVDMEZcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgXHUzMEFCXHUzMEI5XHUzMEJGXHUzMEUwXCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTRFMDBcdTYyRUNcdTUyNEFcdTk2NjRcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTMwQjlcdTMwQkZcdTMwQTRcdTMwRUJcdTdERThcdTk2QzZcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgXHU2NUIwXHU4OThGXHUzMEVCXHUzMEZDXHUzMEM4XCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFx1NTE0M1x1MzA2Qlx1NjIzQlx1MzA1OVwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBcdTMwODRcdTMwOEFcdTc2RjRcdTMwNTlcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1NTE2OFx1NEY1M1x1MzBCOVx1MzBCRlx1MzBBNFx1MzBFQlwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBcdTdERThcdTk2QzZcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MzBCOVx1MzBCRlx1MzBBNFx1MzBFQlwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBcdTMwQjNcdTMwRDRcdTMwRkNcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBcdTMwQUJcdTMwQzNcdTMwQzhcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFx1OENCQ1x1MzA4QVx1NEVEOFx1MzA1MVwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgXHU1QjUwXHUzMENFXHUzMEZDXHUzMEM5XCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgXHU1REU2XHU1QjUwXHUzMENFXHUzMEZDXHUzMEM5XCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFx1NTE0NFx1NUYxRlx1MzBDRVx1MzBGQ1x1MzBDOVwiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1NTI0QVx1OTY2NFwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJcdTMwQzRcdTMwRkNcdTMwRUJcdTMwRDBcdTMwRkNcdTMwOTJcdTk3NUVcdTg4NjhcdTc5M0FcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHU1MTY4XHU0RjUzXHUzMEI5XHUzMEJGXHUzMEE0XHUzMEVCXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiXHU1QjUwXHUzMENFXHUzMEZDXHUzMEM5XCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJcdTMwRUJcdTMwRkNcdTMwQzhcdTMwQ0VcdTMwRkNcdTMwQzlcIixcclxuICAgIFwic20uYmdcIjogXCJcdTgwQ0NcdTY2NkZcdTgyNzJcIixcclxuICAgIFwic20udGV4dFwiOiBcIlx1NjU4N1x1NUI1N1x1ODI3MlwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlx1MzBENVx1MzBBOVx1MzBGM1x1MzBDOFx1MzBCNVx1MzBBNFx1MzBCQVwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiXHUzMEQ1XHUzMEE5XHUzMEYzXHUzMEM4XCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiXHU2N0EwXHU3RERBXHUzMEI5XHUzMEJGXHUzMEE0XHUzMEVCXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiXHU2N0EwXHU3RERBXHUzMDZFXHU4MjcyXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiXHU2N0EwXHU3RERBXHUzMDZFXHU1RTQ1XCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlx1ODlEMlx1NEUzOFwiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIlx1NjcwMFx1NUMwRlx1NUU0NVwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJcdTY3MDBcdTVDMEZcdTlBRDhcdTMwNTVcIixcclxuICAgIFwic20uY29ublwiOiBcIlx1NjNBNVx1N0Q5QVx1N0REQVwiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiXHUzMEJGXHUzMEE0XHUzMEQ3XCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiXHU4MjcyXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiXHU1RTQ1XCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJcdTk1NzdcdTMwNTVcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBcdTMwRUNcdTMwQTRcdTMwRjNcdTMwRENcdTMwRkNcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlx1MzBDRVx1MzBGQ1x1MzBDOVx1NjVCOVx1NTQxMVwiLFxyXG4gICAgXCJzbS5ub2RlR2FwWVwiOiBcIlx1NTE0NFx1NUYxRlx1MzBDRVx1MzBGQ1x1MzBDOVx1OTU5M1x1OTY5NFwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlx1NTNGM1wiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiXHU1REU2XCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJcdTRFMjFcdTY1QjlcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJcdTMwRDFcdTMwRUNcdTMwQzNcdTMwQzhcIixcclxuICAgIFwic20uc2VsXCI6IFwiXHU5MDc4XHU2MjlFXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiXHU5MDc4XHU2MjlFXHU4MjcyXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiXHU5MDc4XHU2MjlFXHU2N0EwXHUzMDZFXHU1RTQ1XCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIlx1MzBBMlx1MzBBNlx1MzBDOFx1MzBFOVx1MzBBNFx1MzBGM1x1MzBBQVx1MzBENVx1MzBCQlx1MzBDM1x1MzBDOFwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlx1N0RFOFx1OTZDNlx1NjdBMFx1MzA2RVx1ODI3MlwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiXHU3REU4XHU5NkM2XHU2N0EwXHUzMDZFXHU1RTQ1XCIsXHJcbiAgICBcInNtLmJveFNlbENvbG9yXCI6IFwiXHU3QkM0XHU1NkYyXHU5MDc4XHU2MjlFXHU4MjcyXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlx1MzBDNlx1MzBBRFx1MzBCOVx1MzBDOFx1OTE0RFx1N0Y2RVwiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlx1MzBDNlx1MzBBRFx1MzBCOVx1MzBDOFx1NEY1OVx1NzY3RFwiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIlx1ODg0Q1x1MzA2RVx1OUFEOFx1MzA1NVwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIlx1MzBBRFx1MzBFM1x1MzBGM1x1MzBEMFx1MzBCOVx1ODBDQ1x1NjY2RlwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlx1MzBFQVx1MzBCQlx1MzBDM1x1MzBDOFwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlx1OTU4OVx1MzA1OFx1MzA4QlwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlx1MzBDNFx1MzBGQ1x1MzBFQlx1MzBEMFx1MzBGQ1x1ODg2OFx1NzkzQVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlx1MzBDNFx1MzBGQ1x1MzBFQlx1MzBEMFx1MzBGQ1x1NEY1OVx1NzY3RFwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJcdTRFMEFcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiXHU1M0YzXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIlx1NEUwQlwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJcdTVERTZcIixcclxuICAgIFwic20udGJQb3NcIjogXCJcdTMwQzRcdTMwRkNcdTMwRUJcdTMwRDBcdTMwRkNcdTRGNERcdTdGNkVcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdTRFMEFcdTkwRThcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdTRFMEJcdTkwRThcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1MzBDNFx1MzBGQ1x1MzBFQlx1MzBEMFx1MzBGQ1x1ODBDQ1x1NjY2RlwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiXHUzMERDXHUzMEJGXHUzMEYzXHU4MENDXHU2NjZGXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiXHUzMERDXHUzMEJGXHUzMEYzXHU2N0EwXHU3RERBXHUzMEI5XHUzMEJGXHUzMEE0XHUzMEVCXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJcdTMwRENcdTMwQkZcdTMwRjNcdTY3QTBcdTdEREFcdTMwNkVcdTgyNzJcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHUzMERDXHUzMEJGXHUzMEYzXHU2NTg3XHU1QjU3XHU4MjcyXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiXHUzMEM0XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEZDXHUzMEVBXHUzMEJCXHUzMEMzXHUzMEM4XCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1MzBDRVx1MzBGQ1x1MzBDOVx1MzBCOVx1MzBCRlx1MzBBNFx1MzBFQlwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJcdTdEREFcdTMwNkVcdTgyNzJcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiXHU3RERBXHUzMDZFXHU1RTQ1XCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiXHUzMEFCXHUzMEI5XHUzMEJGXHUzMEUwXHUzMDkyXHUzMEFGXHUzMEVBXHUzMEEyXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlx1ODlEMlx1NEUzOFwiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJcdTMwQ0VcdTMwRkNcdTMwQzlcdTMwOTJcdTY5MUNcdTdEMjIuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJcdTMwRUJcdTMwRkNcdTMwQzhcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJcdTY1QjBcdTMwNTdcdTMwNDRcdTMwRUJcdTMwRkNcdTMwQzhcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiXHU1QjUwXHUzMENFXHUzMEZDXHUzMEM5XCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBcdThBMkRcdTVCOUFcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJcdThBMDBcdThBOUVcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiXHUzMEE0XHUzMEYzXHUzMEJGXHUzMEZDXHUzMEQ1XHUzMEE3XHUzMEZDXHUzMEI5XHU4QTAwXHU4QTlFXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlx1MzBDNlx1MzBGQ1x1MzBERVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiXHUzMEFCXHUzMEU5XHUzMEZDXHUzMEM2XHUzMEZDXHUzMERFXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIlx1MzBFOVx1MzBBNFx1MzBDOFwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIlx1MzBDMFx1MzBGQ1x1MzBBRlwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlx1MzBDNFx1MzBGQ1x1MzBFQlx1MzBEMFx1MzBGQ1x1ODg2OFx1NzkzQVwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJcdTMwQzRcdTMwRkNcdTMwRUJcdTMwRDBcdTMwRkNcdTMwOTJcdTg4NjhcdTc5M0FcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiXHUzMEFEXHUzMEUzXHUzMEYzXHUzMEQwXHUzMEI5XHU4MENDXHU2NjZGXHU4MjcyXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJcdTgwQ0NcdTY2NkZcdTgyNzJcIixcclxuICAgIFwic2V0LmFib3V0XCI6IFwiXHU2OTgyXHU4OTgxXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiXHUzMEQwXHUzMEZDXHUzMEI4XHUzMEU3XHUzMEYzXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJcdTRGNUNcdTgwMDVcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIk9ic2lkaWFuXHU3NTI4XHUzMDZFXHU5QUQ4XHU2QTVGXHU4MEZEXHUzMEFBXHUzMEZDXHUzMEQ3XHUzMEYzXHUzMEJEXHUzMEZDXHUzMEI5XHUzMERFXHUzMEE0XHUzMEYzXHUzMEM5XHUzMERFXHUzMEMzXHUzMEQ3XHUzMDAyXHUzMEFCXHUzMEI5XHUzMEJGXHUzMEUwXHUzMEI5XHUzMEJGXHUzMEE0XHUzMEVCXHUzMDAxXHUzMEVDXHUzMEE0XHUzMEYzXHUzMERDXHUzMEZDXHU2M0E1XHU3RDlBXHU3RERBXHUzMDAxXHU4OTA3XHU2NTcwXHU5MDc4XHU2MjlFXHUzMDAxXHUzMEM5XHUzMEU5XHUzMEMzXHUzMEIwJlx1MzBDOVx1MzBFRFx1MzBDM1x1MzBEN1x1MzAwMU1hcmtkb3duXHUzMEE0XHUzMEYzXHUzMEREXHUzMEZDXHUzMEM4L1x1MzBBOFx1MzBBRlx1MzBCOVx1MzBERFx1MzBGQ1x1MzBDOFx1NUJGRVx1NUZEQ1x1MzAwMlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlx1NjZGNFx1NjVCMFx1NjVFNVwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViXHUzMEVBXHUzMEREXHUzMEI4XHUzMEM4XHUzMEVBXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJcdTMwQUFcdTMwRkNcdTMwRDdcdTMwRjNcdTMwQkRcdTMwRkNcdTMwQjlcdTRGNUNcdTgwMDVcdTMwOTJcdTY1MkZcdTYzRjRcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJcdTMwQURcdTMwRkNcdTMwRENcdTMwRkNcdTMwQzlcdTMwQjdcdTMwRTdcdTMwRkNcdTMwQzhcdTMwQUJcdTMwQzNcdTMwQzhcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiXHUzMEI3XHUzMEU3XHUzMEZDXHUzMEM4XHUzMEFCXHUzMEMzXHUzMEM4XHUzMDkyXHUzMEFCXHUzMEI5XHUzMEJGXHUzMERFXHUzMEE0XHUzMEJBXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlx1MzBDRVx1MzBGQ1x1MzBDOVx1MzA5Mlx1N0RFOFx1OTZDNlwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJcdTUxNDRcdTVGMUZcdTMwQ0VcdTMwRkNcdTMwQzlcdThGRkRcdTUyQTBcIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIlx1NUI1MFx1MzBDRVx1MzBGQ1x1MzBDOVx1OEZGRFx1NTJBMFwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiXHUzMENFXHUzMEZDXHUzMEM5XHUzMDZCXHUzMEQ1XHUzMEE5XHUzMEZDXHUzMEFCXHUzMEI5XCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIlx1NTE0M1x1MzA2Qlx1NjIzQlx1MzA1OVwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJcdTMwODRcdTMwOEFcdTc2RjRcdTMwNTlcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJcdTY1MzlcdTg4NENcdUZGMDhcdTdERThcdTk2QzZcdTRFMkRcdUZGMDlcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiXHUzMEFEXHUzMEUzXHUzMEYzXHUzMEQwXHUzMEI5XHUzMDkyXHU3OUZCXHU1MkQ1XCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiXHU2MkUxXHU1OTI3XCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlx1N0UyRVx1NUMwRlwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlx1MzBCQVx1MzBGQ1x1MzBFMFx1MzBFQVx1MzBCQlx1MzBDM1x1MzBDOFwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiXHU0RTBBXHUzMDZCXHU3OUZCXHU1MkQ1XCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIlx1NEUwQlx1MzA2Qlx1NzlGQlx1NTJENVwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJcdTVERTZcdTMwNkJcdTc5RkJcdTUyRDVcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlx1NTNGM1x1MzA2Qlx1NzlGQlx1NTJENVwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiXHUzMEFEXHUzMEZDXHUzMDkyXHU2MkJDXHUzMDU3XHUzMDY2XHUzMDRGXHUzMDYwXHUzMDU1XHUzMDQ0Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJcdTMwQjlcdTMwQUZcdTMwRURcdTMwRkNcdTMwRUJcdTMwNjhcdTMwQkFcdTMwRkNcdTMwRTBcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJcdTU3ODJcdTc2RjRcdTMwQjlcdTMwQUZcdTMwRURcdTMwRkNcdTMwRUJcdTUzQ0RcdThFRTJcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJcdTZDMzRcdTVFNzNcdTMwQjlcdTMwQUZcdTMwRURcdTMwRkNcdTMwRUJcdTUzQ0RcdThFRTJcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJcdTMwQkFcdTMwRkNcdTMwRTBcdTY1QjlcdTU0MTFcdTUzQ0RcdThFRTJcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIlx1NEY1Q1x1NjIxMFx1NjY0Mlx1MzA2Qlx1N0RFOFx1OTZDNlwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIlx1MzBDRVx1MzBGQ1x1MzBDOVx1NEY1Q1x1NjIxMFx1NjY0Mlx1MzA2Qlx1N0RFOFx1OTZDNlx1MzBFMlx1MzBGQ1x1MzBDOVx1MzA2Qlx1NTE2NVx1MzA4QlwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJcdTMwRUJcdTMwRkNcdTMwQzhcdTMwQ0VcdTMwRkNcdTMwQzlcdTU0MERcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlx1NjVCMFx1ODk4Rlx1MzBFQlx1MzBGQ1x1MzBDOFx1MzA2RVx1MzBDN1x1MzBENVx1MzBBOVx1MzBFQlx1MzBDOFx1NTQwRFwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiXHU1QjUwXHUzMENFXHUzMEZDXHUzMEM5XHU1NDBEXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiXHU2NUIwXHU4OThGXHU1QjUwXHUzMENFXHUzMEZDXHUzMEM5XHUzMDZFXHUzMEM3XHUzMEQ1XHUzMEE5XHUzMEVCXHUzMEM4XHU1NDBEXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiXHUzMEFEXHUzMEZDXHUzMDY3XHU3REU4XHU5NkM2XCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlx1MzBDRVx1MzBGQ1x1MzBDOVx1OTA3OFx1NjI5RVx1NjY0Mlx1MzA2Qlx1MzBBRFx1MzBGQ1x1MzA5Mlx1NjJCQ1x1MzA1OVx1MzA2OFx1N0RFOFx1OTZDNlx1MzBFMlx1MzBGQ1x1MzBDOVx1MzA2Qlx1NTE2NVx1MzA4QlwiLFxyXG59O1xyXG5cclxuY29uc3QgX2ZyOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFJhY2luZVwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IEFubnVsZXJcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBSZWZhaXJlXCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBDYXJ0ZVwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdHlsZVwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZvY3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlJlY2hlcmNoZXJcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpSZWNoZXJjaGVyIHwgRXNwYWNlOlx1MDBDOWRpdGVyIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTm91dmVsbGUgcmFjaW5lXCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1vZGUgTWFya2Rvd25cIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJQYW5uZWF1IGRlIHN0eWxlXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiRm9jYWxpc2VyIGxlIG5cdTAxNTN1ZFwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJSZWNoZXJjaGVyIGRlcyBuXHUwMTUzdWRzXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiUGFyYW1cdTAwRTh0cmVzXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlpvb20gYXZhbnRcIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlpvb20gYXJyaVx1MDBFOHJlXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFBlcnNvbm5hbGlzXHUwMEU5XCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBTdXBwci4gZW4gbG90XCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggTW9kaWZpZXIgbGUgc3R5bGVcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTm91dmVsbGUgcmFjaW5lXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IEFubnVsZXJcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgUmVmYWlyZVwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3R5bGUgZ2xvYmFsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFx1MDBDOWRpdGVyXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdHlsZVwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBDb3BpZXJcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBDb3VwZXJcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIENvbGxlclwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgRW5mYW50XCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgRW5mYW50IGdhdWNoZVwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBGclx1MDBFOHJlXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgU3VwcHJpbWVyXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIk1hc3F1ZXIgbGEgYmFycmUgZCdvdXRpbHNcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggU3R5bGUgZ2xvYmFsXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiTlx1MDE1M3VkIGVuZmFudFwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiTlx1MDE1M3VkIHJhY2luZVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkZvbmRcIixcclxuICAgIFwic20udGV4dFwiOiBcIkNvdWxldXIgdGV4dGVcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJUYWlsbGUgcG9saWNlXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJQb2xpY2VcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJTdHlsZSBib3JkdXJlXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiQ291bGV1ciBib3JkdXJlXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiTGFyZ2V1ciBib3JkdXJlXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlJheW9uIGJvcmR1cmVcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJMYXJnZXVyIG1pbi5cIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiSGF1dGV1ciBtaW4uXCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJDb25uZXhpb25cIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cGVcIixcclxuICAgIFwic20uY29sb3JcIjogXCJDb3VsZXVyXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiTGFyZ2V1clwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTG9uZ3VldXJcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBBcmMtZW4tY2llbFwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiRGlyZWN0aW9uIG5cdTAxNTN1ZHNcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJFc3BhY2VtZW50IGZyXHUwMEU4cmVzXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiRHJvaXRlXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJHYXVjaGVcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkxlcyBkZXV4XCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXR0ZVwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJTXHUwMEU5bGVjdGlvblwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIkNvdWxldXIgc1x1MDBFOWxlY3Rpb25cIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJMYXJnZXVyIHNcdTAwRTlsZWN0aW9uXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIkRcdTAwRTljYWxhZ2UgY29udG91clwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIkNvdWxldXIgY29udG91ciBcdTAwRTlkaXRpb25cIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIkxhcmdldXIgY29udG91ciBcdTAwRTlkaXRpb25cIixcclxuICAgIFwic20uYm94U2VsQ29sb3JcIjogXCJDb3VsZXVyIGRlIHNcdTAwRTlsZWN0aW9uXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIkFsaWduZW1lbnQgdGV4dGVcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJNYXJnZSB0ZXh0ZVwiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIkhhdXRldXIgZGUgbGlnbmVcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJGb25kIGR1IGNhbmV2YXNcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJSXHUwMEU5aW5pdGlhbGlzZXJcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJGZXJtZXJcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJBZmZpY2hlciBiYXJyZSBkJ291dGlsc1wiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIk1hcmdlcyBiYXJyZVwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJIYXV0XCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIkRyb2l0ZVwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJCYXNcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiR2F1Y2hlXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiUG9zaXRpb24gYmFycmVcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJIYXV0XCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiQmFzXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJGb25kIGJhcnJlXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJGb25kIGJvdXRvblwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlN0eWxlIGJvcmR1cmUgYm91dG9uXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJDb3VsZXVyIGJvcmR1cmUgYm91dG9uXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIkNvdWxldXIgdGV4dGUgYm91dG9uXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiUlx1MDBFOWluaXRpYWxpc2VyIGxhIGJhcnJlXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFN0eWxlIGR1IG5cdTAxNTN1ZFwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJDb3VsZXVyIGxpZ25lXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxhcmdldXIgbGlnbmVcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJFZmZhY2VyIHBlcnNvbm5hbGlzYXRpb25cIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiUmF5b24gYm9yZHVyZVwiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJSZWNoZXJjaGVyLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiUmFjaW5lXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiTm91dmVsbGUgcmFjaW5lXCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIkVuZmFudFwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJQYXJhbVx1MDBFOHRyZXMgTWluZFpKXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiTGFuZ3VlXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIkxhbmd1ZSBkJ2ludGVyZmFjZVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUaFx1MDBFOG1lXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJUaFx1MDBFOG1lIGRlIGNvdWxldXJcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiQ2xhaXJcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJTb21icmVcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJBZmZpY2hlciBiYXJyZSBkJ291dGlsc1wiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJBZmZpY2hlciBsYSBiYXJyZVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJGb25kIGR1IGNhbmV2YXNcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkNvdWxldXIgZGUgZm9uZFwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTAwQzAgcHJvcG9zXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiQXV0ZXVyXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJBcHBsaWNhdGlvbiBkZSBjYXJ0ZSBtZW50YWxlIG9wZW4gc291cmNlIHBvdXIgT2JzaWRpYW4gYXZlYyBzdHlsZXMgcGVyc29ubmFsaXNcdTAwRTlzLCBjb25uZXhpb25zIGFyYy1lbi1jaWVsLCBtdWx0aS1zXHUwMEU5bGVjdGlvbiwgZ2xpc3Nlci1kXHUwMEU5cG9zZXIgZXQgaW1wb3J0L2V4cG9ydCBNYXJrZG93bi5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJNaXMgXHUwMEUwIGpvdXJcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkRcdTAwRTlwXHUwMEY0dCBHaXRIdWJcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlNvdXRlbmlyIGwnYXV0ZXVyIG9wZW4gc291cmNlXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiUmFjY291cmNpcyBjbGF2aWVyXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlBlcnNvbm5hbGlzZXIgbGVzIHJhY2NvdXJjaXNcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHUwMEM5ZGl0ZXIgbGUgblx1MDE1M3VkXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkFqb3V0ZXIgdW4gZnJcdTAwRThyZVwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiQWpvdXRlciB1biBlbmZhbnRcIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkZvY2FsaXNlciBsZSBuXHUwMTUzdWRcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiQW5udWxlclwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJSZWZhaXJlXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiUmV0b3VyIFx1MDBFMCBsYSBsaWduZSAoZW4gXHUwMEU5ZGl0aW9uKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJEXHUwMEU5cGxhY2VyIGxlIGNhbmV2YXNcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJab29tIGF2YW50XCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlpvb20gYXJyaVx1MDBFOHJlXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiUlx1MDBFOWluaXRpYWxpc2VyIHpvb21cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk5hdmlndWVyIGhhdXRcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiTmF2aWd1ZXIgYmFzXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIk5hdmlndWVyIGdhdWNoZVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiTmF2aWd1ZXIgZHJvaXRlXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJBcHB1eWV6Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJEXHUwMEU5ZmlsZW1lbnQgZXQgem9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVyc2VyIGRcdTAwRTlmaWxlbWVudCBWXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSW52ZXJzZXIgZFx1MDBFOWZpbGVtZW50IEhcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJJbnZlcnNlciB6b29tXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTAwQzlkaXRlciBcdTAwRTAgbGEgY3JcdTAwRTlhdGlvblwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIk1vZGUgXHUwMEU5ZGl0aW9uIFx1MDBFMCBsYSBjclx1MDBFOWF0aW9uXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIk5vbSByYWNpbmVcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIk5vbSBwYXIgZFx1MDBFOWZhdXQgZGVzIHJhY2luZXNcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIk5vbSBlbmZhbnRcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJOb20gcGFyIGRcdTAwRTlmYXV0IGRlcyBlbmZhbnRzXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiU2Fpc2llIHBvdXIgXHUwMEU5ZGl0ZXJcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiXHUwMEM5ZGl0ZXIgZW4gdGFwYW50IHF1YW5kIHVuIG5cdTAxNTN1ZCBlc3Qgc1x1MDBFOWxlY3Rpb25uXHUwMEU5XCIsXHJcbn07XHJcblxyXG5jb25zdCBfZGU6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgV3VyemVsXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgUlx1MDBGQ2NrZ1x1MDBFNG5naWdcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBXaWVkZXJob2xlblwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgS2FydGVcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZva3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlN1Y2hlblwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlN1Y2hlbiB8IExlZXJ0YXN0ZTpCZWFyYmVpdGVuIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTmV1ZSBXdXJ6ZWxcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24tTW9kdXNcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJTdGlsLVBhbmVsXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiS25vdGVuIGZva3Vzc2llcmVuXCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIktub3RlbiBzdWNoZW5cIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJFaW5zdGVsbHVuZ2VuXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlZlcmdyXHUwMEY2XHUwMERGZXJuXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJWZXJrbGVpbmVyblwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBCZW51dHplcmRlZmluaWVydFwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgQWxsZSBsXHUwMEY2c2NoZW5cIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsIGJlYXJiZWl0ZW5cIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTmV1ZSBXdXJ6ZWxcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgUlx1MDBGQ2NrZ1x1MDBFNG5naWdcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgV2llZGVyaG9sZW5cIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbGVyIFN0aWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgQmVhcmJlaXRlblwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBLb3BpZXJlblwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIEF1c3NjaG5laWRlblwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgRWluZlx1MDBGQ2dlblwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgS2luZGtub3RlblwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IExpbmtlciBLaW5ka25vdGVuXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IEdlc2Nod2lzdGVyXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgTFx1MDBGNnNjaGVuXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIldlcmt6ZXVnbGVpc3RlIGF1c2JsZW5kZW5cIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsZXIgU3RpbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIktpbmRrbm90ZW5cIixcclxuICAgIFwic20ucm9vdFwiOiBcIld1cnplbGtub3RlblwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJUZXh0ZmFyYmVcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJTY2hyaWZ0Z3JcdTAwRjZcdTAwREZlXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJTY2hyaWZ0YXJ0XCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiUmFobWVuc3RpbFwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlJhaG1lbmZhcmJlXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiUmFobWVuYnJlaXRlXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIkVja2VucmFkaXVzXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTWluLiBCcmVpdGVcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiTWluLiBIXHUwMEY2aGVcIixcclxuICAgIFwic20uY29ublwiOiBcIlZlcmJpbmR1bmdcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cFwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkZhcmJlXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiQnJlaXRlXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMXHUwMEU0bmdlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggUmVnZW5ib2dlblwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiS25vdGVucmljaHR1bmdcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJHZXNjaHdpc3RlcmFic3RhbmRcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJSZWNodHNcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIkxpbmtzXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJCZWlkZVwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0dGVcIixcclxuICAgIFwic20uc2VsXCI6IFwiQXVzd2FobFwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIkF1c3dhaGxmYXJiZVwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIkF1c3dhaGxicmVpdGVcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiS29udHVyLVZlcnNhdHpcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJCZWFyYmVpdHVuZ3NyYWhtZW5mYXJiZVwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiQmVhcmJlaXR1bmdzcmFobWVuYnJlaXRlXCIsXHJcbiAgICBcInNtLmJveFNlbENvbG9yXCI6IFwiQXVzd2FobGZhcmJlXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRleHRhdXNyaWNodHVuZ1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlRleHRhYnN0YW5kXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiWmVpbGVuaFx1MDBGNmhlXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiTGVpbndhbmQtSGludGVyZ3J1bmRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJadXJcdTAwRkNja3NldHplblwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlNjaGxpZVx1MDBERmVuXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiV2Vya3pldWdsZWlzdGUgYW56ZWlnZW5cIixcclxuICAgIFwic20udGJQYWRcIjogXCJXZXJremV1Z2xlaXN0ZSBBYnN0YW5kXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIk9iZW5cIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiUmVjaHRzXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIlVudGVuXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIkxpbmtzXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiV2Vya3pldWdsZWlzdGUgUG9zaXRpb25cIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJPYmVuXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiVW50ZW5cIixcclxuICAgIFwic20udGJCZ1wiOiBcIldlcmt6ZXVnbGVpc3RlIEhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJTY2hhbHRmbFx1MDBFNGNoZSBIaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlNjaGFsdGZsXHUwMEU0Y2hlIFJhaG1lbnN0aWxcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlNjaGFsdGZsXHUwMEU0Y2hlIFJhaG1lbmZhcmJlXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIlNjaGFsdGZsXHUwMEU0Y2hlIFRleHRmYXJiZVwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIldlcmt6ZXVnbGVpc3RlIHp1clx1MDBGQ2Nrc2V0emVuXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEtub3RlbnN0aWxcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiTGluaWVuZmFyYmVcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiTGluaWVuYnJlaXRlXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiQW5wYXNzdW5nIHp1clx1MDBGQ2Nrc2V0emVuXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIkVja2VucmFkaXVzXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIktub3RlbiBzdWNoZW4uLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJXdXJ6ZWxcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOZXVlIFd1cnplbFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJLaW5kXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBFaW5zdGVsbHVuZ2VuXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiU3ByYWNoZVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJPYmVyZmxcdTAwRTRjaGVuc3ByYWNoZVwiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUaGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiRmFyYnRoZW1hXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkhlbGxcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJEdW5rZWxcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJXZXJremV1Z2xlaXN0ZSBhbnplaWdlblwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJXZXJremV1Z2xlaXN0ZSBhbnplaWdlblwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJMZWlud2FuZC1IaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiSGludGVyZ3J1bmRmYXJiZVwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTAwRENiZXJcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzaW9uXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJBdXRvclwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiRnVua3Rpb25zcmVpY2hlIE9wZW4tU291cmNlLU1pbmRtYXAtQXBwIGZcdTAwRkNyIE9ic2lkaWFuIG1pdCBiZW51dHplcmRlZmluaWVydGVuIFN0aWxlbiwgUmVnZW5ib2dlbi1WZXJiaW5kdW5nZW4sIE1laHJmYWNoYXVzd2FobCwgRHJhZyAmIERyb3AgdW5kIE1hcmtkb3duLUltcG9ydC9FeHBvcnQuXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiQWt0dWFsaXNpZXJ0XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWItUmVwb3NpdG9yeVwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiT3Blbi1Tb3VyY2UtQXV0b3IgdW50ZXJzdFx1MDBGQ3R6ZW5cIixcclxuICAgIFwic2V0LmtleXNcIjogXCJUYXN0ZW5rb21iaW5hdGlvbmVuXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlRhc3RlbmtvbWJpbmF0aW9uZW4gYW5wYXNzZW5cIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiS25vdGVuIGJlYXJiZWl0ZW5cIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiR2VzY2h3aXN0ZXIgaGluenVmXHUwMEZDZ2VuXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJLaW5kIGhpbnp1Zlx1MDBGQ2dlblwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiS25vdGVuIGZva3Vzc2llcmVuXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIlJcdTAwRkNja2dcdTAwRTRuZ2lnXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIldpZWRlcmhvbGVuXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiWmVpbGVudW1icnVjaCAoYmVpbSBCZWFyYmVpdGVuKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJMZWlud2FuZCB6aWVoZW5cIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJWZXJnclx1MDBGNlx1MDBERmVyblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJWZXJrbGVpbmVyblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlpvb20genVyXHUwMEZDY2tzZXR6ZW5cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk5hY2ggb2JlblwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJOYWNoIHVudGVuXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIk5hY2ggbGlua3NcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIk5hY2ggcmVjaHRzXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJUYXN0ZSBkclx1MDBGQ2NrZW4uLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlNjcm9sbGVuIHVuZCBab29tZW5cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJWZXJ0aWthbGVzIFNjcm9sbGVuIHVta2VocmVuXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSG9yaXpvbnRhbGVzIFNjcm9sbGVuIHVta2VocmVuXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiWm9vbS1SaWNodHVuZyB1bWtlaHJlblwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiQmVpIEVyc3RlbGx1bmcgYmVhcmJlaXRlblwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIkJlYXJiZWl0dW5nc21vZHVzIGJlaW0gRXJzdGVsbGVuIG5ldWVyIEtub3RlblwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJXdXJ6ZWxrbm90ZW5uYW1lXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJTdGFuZGFyZG5hbWUgZlx1MDBGQ3IgbmV1ZSBXdXJ6ZWxuXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJLaW5ka25vdGVubmFtZVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmFtZSBmXHUwMEZDciBuZXVlIEtpbmRlclwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlRpcHBlbiB6dW0gQmVhcmJlaXRlblwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJCZWkgQXVzd2FobCBkaXJla3QgYmVhcmJlaXRlblwiLFxyXG59O1xyXG5cclxuY29uc3QgX2VzOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFJhXHUwMEVEelwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IERlc2hhY2VyXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgUmVoYWNlclwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgTWFwYVwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG9cIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJFbmZvY2FyXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIkJ1c2NhclwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOkJ1c2NhciB8IEVzcGFjaW86RWRpdGFyIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTnVldmEgcmFcdTAwRUR6XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1vZG8gTWFya2Rvd25cIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJQYW5lbCBkZSBlc3RpbG9cIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJFbmZvY2FyIG5vZG9cIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiQnVzY2FyIG5vZG9zXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiQWp1c3Rlc1wiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJBY2VyY2FyXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJBbGVqYXJcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgUGVyc29uYWxpemFkb1wiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgQm9ycmFyIGVuIGxvdGVcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFZGl0YXIgZXN0aWxvXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IE51ZXZhIHJhXHUwMEVEelwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBEZXNoYWNlclwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBSZWhhY2VyXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG8gZ2xvYmFsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIEVkaXRhclwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIENvcGlhclwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIENvcnRhclwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgUGVnYXJcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IEhpam9cIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBIaWpvIGl6cXVpZXJkb1wiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBIZXJtYW5vXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgRWxpbWluYXJcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiT2N1bHRhciBiYXJyYVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG8gZ2xvYmFsXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiTm9kbyBoaWpvXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJOb2RvIHJhXHUwMEVEelwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkZvbmRvXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJDb2xvciBkZSB0ZXh0b1wiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlRhbWFcdTAwRjFvXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJGdWVudGVcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJFc3RpbG8gYm9yZGVcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJDb2xvciBib3JkZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIkFuY2hvIGJvcmRlXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlJhZGlvIGJvcmRlXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiQW5jaG8gbVx1MDBFRG4uXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIkFsdG8gbVx1MDBFRG4uXCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJDb25leGlcdTAwRjNuXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUaXBvXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiQ29sb3JcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJBbmNob1wiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTG9uZ2l0dWRcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBBcmNvXHUwMEVEcmlzXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJEaXJlY2NpXHUwMEYzblwiLFxyXG4gICAgXCJzbS5ub2RlR2FwWVwiOiBcIkVzcGFjaW8gZW50cmUgaGVybWFub3NcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJEZXJlY2hhXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJJenF1aWVyZGFcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkFtYm9zXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXRhXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlNlbGVjY2lcdTAwRjNuXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiQ29sb3Igc2VsZWNjaVx1MDBGM25cIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJBbmNobyBzZWxlY2NpXHUwMEYzblwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJEZXNwbGF6YW1pZW50byBjb250b3Jub1wiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIkNvbG9yIGNvbnRvcm5vIGVkaWNpXHUwMEYzblwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiQW5jaG8gY29udG9ybm8gZWRpY2lcdTAwRjNuXCIsXHJcbiAgICBcInNtLmJveFNlbENvbG9yXCI6IFwiQ29sb3IgZGUgc2VsZWNjaVx1MDBGM25cIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiQWxpbmVhY2lcdTAwRjNuXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiUmVsbGVubyB0ZXh0b1wiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIkFsdHVyYSBsXHUwMEVEbmVhXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiRm9uZG8gbGllbnpvXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiUmVzdGFibGVjZXJcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJDZXJyYXJcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJNb3N0cmFyIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiUmVsbGVubyBiYXJyYVwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJBcnJpYmFcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiRGVyZWNoYVwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJBYmFqb1wiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJJenF1aWVyZGFcIixcclxuICAgIFwic20udGJQb3NcIjogXCJQb3NpY2lcdTAwRjNuIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiQXJyaWJhXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiQWJham9cIixcclxuICAgIFwic20udGJCZ1wiOiBcIkZvbmRvIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJGb25kbyBib3RcdTAwRjNuXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiRXN0aWxvIGJvcmRlIGJvdFx1MDBGM25cIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIkNvbG9yIGJvcmRlIGJvdFx1MDBGM25cIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiQ29sb3IgdGV4dG8gYm90XHUwMEYzblwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIlJlc3RhYmxlY2VyIGJhcnJhXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEVzdGlsbyBub2RvXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkNvbG9yIGxcdTAwRURuZWFcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiQW5jaG8gbFx1MDBFRG5lYVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIkJvcnJhciBwZXJzb25hbGl6YWNpXHUwMEYzblwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJSYWRpbyBib3JkZVwiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJCdXNjYXIgbm9kb3MuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJSYVx1MDBFRHpcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOdWV2YSByYVx1MDBFRHpcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiSGlqb1wiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJBanVzdGVzIE1pbmRaSlwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIklkaW9tYVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJJZGlvbWEgaW50ZXJmYXpcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiVGVtYSBkZSBjb2xvclwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJDbGFyb1wiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIk9zY3Vyb1wiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIk1vc3RyYXIgYmFycmFcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiTW9zdHJhciBiYXJyYVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJGb25kbyBsaWVuem9cIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkNvbG9yIGRlIGZvbmRvXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIkFjZXJjYSBkZVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNpXHUwMEYzblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiQXV0b3JcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIkFwbGljYWNpXHUwMEYzbiBkZSBtYXBhIG1lbnRhbCBkZSBjXHUwMEYzZGlnbyBhYmllcnRvIHBhcmEgT2JzaWRpYW4gY29uIGVzdGlsb3MgcGVyc29uYWxpemFkb3MsIGNvbmV4aW9uZXMgYXJjb1x1MDBFRHJpcywgbXVsdGktc2VsZWNjaVx1MDBGM24sIGFycmFzdHJhciB5IHNvbHRhciBlIGltcG9ydGFjaVx1MDBGM24vZXhwb3J0YWNpXHUwMEYzbiBNYXJrZG93bi5cIixcclxuICAgIFwic2V0LnVwZGF0ZWRcIjogXCJBY3R1YWxpemFkb1wiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiUmVwb3NpdG9yaW8gR2l0SHViXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJBcG95YXIgYWwgYXV0b3Igb3BlbiBzb3VyY2VcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJBdGFqb3MgZGUgdGVjbGFkb1wiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJQZXJzb25hbGl6YXIgYXRham9zXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIkVkaXRhciBub2RvXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkFcdTAwRjFhZGlyIGhlcm1hbm9cIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkFcdTAwRjFhZGlyIGhpam9cIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkVuZm9jYXIgbm9kb1wiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJEZXNoYWNlclwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJSZWhhY2VyXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiU2FsdG8gZGUgbFx1MDBFRG5lYSAoZW4gZWRpY2lcdTAwRjNuKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJBcnJhc3RyYXIgbGllbnpvXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiQWNlcmNhclwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJBbGVqYXJcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJSZXN0YWJsZWNlciB6b29tXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJBcnJpYmFcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiQWJham9cIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiSXpxdWllcmRhXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJEZXJlY2hhXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJQdWxzZS4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiRGVzcGxhemFtaWVudG8geSB6b29tXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiSW52ZXJ0aXIgZGVzcGxhemFtaWVudG8gVlwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkludmVydGlyIGRlc3BsYXphbWllbnRvIEhcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJJbnZlcnRpciB6b29tXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJFZGl0YXIgYWwgY3JlYXJcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJNb2RvIGVkaWNpXHUwMEYzbiBhbCBjcmVhciBub2Rvc1wiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJOb21icmUgcmFcdTAwRUR6XCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJOb21icmUgcG9yIGRlZmVjdG8gZGUgcmFcdTAwRURjZXNcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIk5vbWJyZSBoaWpvXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiTm9tYnJlIHBvciBkZWZlY3RvIGRlIGhpam9zXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiVGVjbGVhciBwYXJhIGVkaXRhclwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJFZGl0YXIgYWwgdGVjbGVhciBjb24gbm9kbyBzZWxlY2Npb25hZG9cIixcclxufTtcclxuXHJcbmNvbnN0IF9ydTogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdTA0MUFcdTA0M0VcdTA0NDBcdTA0MzVcdTA0M0RcdTA0NENcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTA0MUVcdTA0NDJcdTA0M0NcdTA0MzVcdTA0M0RcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdTA0MUZcdTA0M0VcdTA0MzJcdTA0NDJcdTA0M0VcdTA0NDBcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIFx1MDQxQVx1MDQzMFx1MDQ0MFx1MDQ0Mlx1MDQzMFwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA0MjFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0NENcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJcdTA0MjRcdTA0M0VcdTA0M0FcdTA0NDNcdTA0NDFcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiXHUwNDFGXHUwNDNFXHUwNDM4XHUwNDQxXHUwNDNBXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6XHUwNDFGXHUwNDNFXHUwNDM4XHUwNDQxXHUwNDNBIHwgXHUwNDFGXHUwNDQwXHUwNDNFXHUwNDMxXHUwNDM1XHUwNDNCOlx1MDQyMFx1MDQzNVx1MDQzNC4gfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJcdTA0MURcdTA0M0VcdTA0MzJcdTA0NEJcdTA0MzkgXHUwNDNBXHUwNDNFXHUwNDQwXHUwNDM1XHUwNDNEXHUwNDRDXCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIlx1MDQyMFx1MDQzNVx1MDQzNlx1MDQzOFx1MDQzQyBNYXJrZG93blwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlx1MDQxRlx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzQlx1MDQ0QyBcdTA0NDFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0MzVcdTA0MzlcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJcdTA0MjRcdTA0M0VcdTA0M0FcdTA0NDNcdTA0NDEgXHUwNDNEXHUwNDMwIFx1MDQ0M1x1MDQzN1x1MDQzQlx1MDQzNVwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJcdTA0MUZcdTA0M0VcdTA0MzhcdTA0NDFcdTA0M0EgXHUwNDQzXHUwNDM3XHUwNDNCXHUwNDNFXHUwNDMyXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiXHUwNDFEXHUwNDMwXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDNFXHUwNDM5XHUwNDNBXHUwNDM4XCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlx1MDQyM1x1MDQzMlx1MDQzNVx1MDQzQlx1MDQzOFx1MDQ0N1x1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHUwNDIzXHUwNDNDXHUwNDM1XHUwNDNEXHUwNDRDXHUwNDQ4XHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFx1MDQyMVx1MDQzMlx1MDQzRVx1MDQzOVwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHUwNDIzXHUwNDM0XHUwNDMwXHUwNDNCXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQzMlx1MDQ0MVx1MDQ1MVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDQyMVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBcdTA0MURcdTA0M0VcdTA0MzJcdTA0NEJcdTA0MzkgXHUwNDNBXHUwNDNFXHUwNDQwXHUwNDM1XHUwNDNEXHUwNDRDXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFx1MDQxRVx1MDQ0Mlx1MDQzQ1x1MDQzNVx1MDQzRFx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBcdTA0MUZcdTA0M0VcdTA0MzJcdTA0NDJcdTA0M0VcdTA0NDBcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDQxM1x1MDQzQlx1MDQzRVx1MDQzMVx1MDQzMFx1MDQzQlx1MDQ0Q1x1MDQzRFx1MDQ0Qlx1MDQzOSBcdTA0NDFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0NENcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgXHUwNDIwXHUwNDM1XHUwNDM0XHUwNDMwXHUwNDNBXHUwNDQyXHUwNDM4XHUwNDQwXHUwNDNFXHUwNDMyXHUwNDMwXHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA0MjFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0NENcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgXHUwNDFBXHUwNDNFXHUwNDNGXHUwNDM4XHUwNDQwXHUwNDNFXHUwNDMyXHUwNDMwXHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgXHUwNDEyXHUwNDRCXHUwNDQwXHUwNDM1XHUwNDM3XHUwNDMwXHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBcdTA0MTJcdTA0NDFcdTA0NDJcdTA0MzBcdTA0MzJcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IFx1MDQxNFx1MDQzRVx1MDQ0N1x1MDQzNVx1MDQ0MFx1MDQzRFx1MDQzOFx1MDQzOVwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFx1MDQxQlx1MDQzNVx1MDQzMlx1MDQ0Qlx1MDQzOSBcdTA0MzRcdTA0M0VcdTA0NDdcdTA0MzVcdTA0NDBcdTA0M0RcdTA0MzhcdTA0MzlcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgXHUwNDIxXHUwNDNFXHUwNDQxXHUwNDM1XHUwNDM0XHUwNDNEXHUwNDM4XHUwNDM5XCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHUwNDIzXHUwNDM0XHUwNDMwXHUwNDNCXHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIlx1MDQyMVx1MDQzQVx1MDQ0MFx1MDQ0Qlx1MDQ0Mlx1MDQ0QyBcdTA0M0ZcdTA0MzBcdTA0M0RcdTA0MzVcdTA0M0JcdTA0NENcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNDEzXHUwNDNCXHUwNDNFXHUwNDMxXHUwNDMwXHUwNDNCXHUwNDRDXHUwNDNEXHUwNDRCXHUwNDM5IFx1MDQ0MVx1MDQ0Mlx1MDQzOFx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIlx1MDQxNFx1MDQzRVx1MDQ0N1x1MDQzNVx1MDQ0MFx1MDQzRFx1MDQzOFx1MDQzOSBcdTA0NDNcdTA0MzdcdTA0MzVcdTA0M0JcIixcclxuICAgIFwic20ucm9vdFwiOiBcIlx1MDQxQVx1MDQzRVx1MDQ0MFx1MDQzRFx1MDQzNVx1MDQzMlx1MDQzRVx1MDQzOSBcdTA0NDNcdTA0MzdcdTA0MzVcdTA0M0JcIixcclxuICAgIFwic20uYmdcIjogXCJcdTA0MjRcdTA0M0VcdTA0M0RcIixcclxuICAgIFwic20udGV4dFwiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0NDJcdTA0MzVcdTA0M0FcdTA0NDFcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJcdTA0MjBcdTA0MzBcdTA0MzdcdTA0M0NcdTA0MzVcdTA0NDAgXHUwNDQ4XHUwNDQwXHUwNDM4XHUwNDQ0XHUwNDQyXHUwNDMwXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJcdTA0MjhcdTA0NDBcdTA0MzhcdTA0NDRcdTA0NDJcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJcdTA0MjFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0NEMgXHUwNDQwXHUwNDMwXHUwNDNDXHUwNDNBXHUwNDM4XCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyIFx1MDQ0MFx1MDQzMFx1MDQzQ1x1MDQzQVx1MDQzOFwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIlx1MDQyOFx1MDQzOFx1MDQ0MFx1MDQzOFx1MDQzRFx1MDQzMCBcdTA0NDBcdTA0MzBcdTA0M0NcdTA0M0FcdTA0MzhcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiXHUwNDIwXHUwNDMwXHUwNDM0XHUwNDM4XHUwNDQzXHUwNDQxXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiXHUwNDFDXHUwNDM4XHUwNDNELiBcdTA0NDhcdTA0MzhcdTA0NDBcdTA0MzhcdTA0M0RcdTA0MzBcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiXHUwNDFDXHUwNDM4XHUwNDNELiBcdTA0MzJcdTA0NEJcdTA0NDFcdTA0M0VcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic20uY29ublwiOiBcIlx1MDQyMVx1MDQzRVx1MDQzNVx1MDQzNFx1MDQzOFx1MDQzRFx1MDQzNVx1MDQzRFx1MDQzOFx1MDQzNVwiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiXHUwNDIyXHUwNDM4XHUwNDNGXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiXHUwNDI4XHUwNDM4XHUwNDQwXHUwNDM4XHUwNDNEXHUwNDMwXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJcdTA0MTRcdTA0M0JcdTA0MzhcdTA0M0RcdTA0MzBcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBcdTA0MjBcdTA0MzBcdTA0MzRcdTA0NDNcdTA0MzNcdTA0MzBcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlx1MDQxRFx1MDQzMFx1MDQzRlx1MDQ0MFx1MDQzMFx1MDQzMlx1MDQzQlx1MDQzNVx1MDQzRFx1MDQzOFx1MDQzNVwiLFxyXG4gICAgXCJzbS5ub2RlR2FwWVwiOiBcIlx1MDQxRVx1MDQ0Mlx1MDQ0MVx1MDQ0Mlx1MDQ0M1x1MDQzRiBcdTA0M0NcdTA0MzVcdTA0MzZcdTA0MzRcdTA0NDMgXHUwNDQzXHUwNDM3XHUwNDNCXHUwNDMwXHUwNDNDXHUwNDM4XCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiXHUwNDEyXHUwNDNGXHUwNDQwXHUwNDMwXHUwNDMyXHUwNDNFXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJcdTA0MTJcdTA0M0JcdTA0MzVcdTA0MzJcdTA0M0VcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIlx1MDQxRVx1MDQzMVx1MDQzMFwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlx1MDQxRlx1MDQzMFx1MDQzQlx1MDQzOFx1MDQ0Mlx1MDQ0MFx1MDQzMFwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJcdTA0MTJcdTA0NEJcdTA0MzRcdTA0MzVcdTA0M0JcdTA0MzVcdTA0M0RcdTA0MzhcdTA0MzVcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJcdTA0MjZcdTA0MzJcdTA0MzVcdTA0NDIgXHUwNDMyXHUwNDRCXHUwNDM0XHUwNDM1XHUwNDNCXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDRGXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiXHUwNDI4XHUwNDM4XHUwNDQwXHUwNDM4XHUwNDNEXHUwNDMwIFx1MDQzMlx1MDQ0Qlx1MDQzNFx1MDQzNVx1MDQzQlx1MDQzNVx1MDQzRFx1MDQzOFx1MDQ0RlwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJcdTA0MjFcdTA0M0NcdTA0MzVcdTA0NDlcdTA0MzVcdTA0M0RcdTA0MzhcdTA0MzUgXHUwNDNBXHUwNDNFXHUwNDNEXHUwNDQyXHUwNDQzXHUwNDQwXHUwNDMwXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiXHUwNDI2XHUwNDMyXHUwNDM1XHUwNDQyIFx1MDQzQVx1MDQzRVx1MDQzRFx1MDQ0Mlx1MDQ0M1x1MDQ0MFx1MDQzMCBcdTA0NDBcdTA0MzVcdTA0MzQuXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJcdTA0MjhcdTA0MzhcdTA0NDBcdTA0MzhcdTA0M0RcdTA0MzAgXHUwNDNBXHUwNDNFXHUwNDNEXHUwNDQyXHUwNDQzXHUwNDQwXHUwNDMwIFx1MDQ0MFx1MDQzNVx1MDQzNC5cIixcclxuICAgIFwic20uYm94U2VsQ29sb3JcIjogXCJcdTA0MjZcdTA0MzJcdTA0MzVcdTA0NDIgXHUwNDQwXHUwNDMwXHUwNDNDXHUwNDNBXHUwNDM4IFx1MDQzMlx1MDQ0Qlx1MDQzNFx1MDQzNVx1MDQzQlx1MDQzNVx1MDQzRFx1MDQzOFx1MDQ0RlwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJcdTA0MTJcdTA0NEJcdTA0NDBcdTA0MzBcdTA0MzJcdTA0M0RcdTA0MzhcdTA0MzJcdTA0MzBcdTA0M0RcdTA0MzhcdTA0MzVcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJcdTA0MUVcdTA0NDJcdTA0NDFcdTA0NDJcdTA0NDNcdTA0M0YgXHUwNDQyXHUwNDM1XHUwNDNBXHUwNDQxXHUwNDQyXHUwNDMwXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiXHUwNDEyXHUwNDRCXHUwNDQxXHUwNDNFXHUwNDQyXHUwNDMwIFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzRVx1MDQzQVx1MDQzOFwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzRCBcdTA0NDVcdTA0M0VcdTA0M0JcdTA0NDFcdTA0NDJcdTA0MzBcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJcdTA0MjFcdTA0MzFcdTA0NDBcdTA0M0VcdTA0NDFcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJcdTA0MTdcdTA0MzBcdTA0M0FcdTA0NDBcdTA0NEJcdTA0NDJcdTA0NENcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJcdTA0MUZcdTA0MzBcdTA0M0RcdTA0MzVcdTA0M0JcdTA0NEMgXHUwNDM4XHUwNDNEXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDQzXHUwNDNDXHUwNDM1XHUwNDNEXHUwNDQyXHUwNDNFXHUwNDMyXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiXHUwNDFFXHUwNDQyXHUwNDQxXHUwNDQyXHUwNDQzXHUwNDNGIFx1MDQzRlx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzQlx1MDQzOFwiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJcdTA0MjFcdTA0MzJcdTA0MzVcdTA0NDBcdTA0NDVcdTA0NDNcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiXHUwNDIxXHUwNDNGXHUwNDQwXHUwNDMwXHUwNDMyXHUwNDMwXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIlx1MDQyMVx1MDQzRFx1MDQzOFx1MDQzN1x1MDQ0M1wiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJcdTA0MjFcdTA0M0JcdTA0MzVcdTA0MzJcdTA0MzBcIixcclxuICAgIFwic20udGJQb3NcIjogXCJcdTA0MUZcdTA0M0VcdTA0MzdcdTA0MzhcdTA0NDZcdTA0MzhcdTA0NEYgXHUwNDNGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDM4XCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiXHUwNDIxXHUwNDMyXHUwNDM1XHUwNDQwXHUwNDQ1XHUwNDQzXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiXHUwNDIxXHUwNDNEXHUwNDM4XHUwNDM3XHUwNDQzXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJcdTA0MjRcdTA0M0VcdTA0M0QgXHUwNDNGXHUwNDMwXHUwNDNEXHUwNDM1XHUwNDNCXHUwNDM4XCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJcdTA0MjRcdTA0M0VcdTA0M0QgXHUwNDNBXHUwNDNEXHUwNDNFXHUwNDNGXHUwNDNBXHUwNDM4XCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiXHUwNDIxXHUwNDQyXHUwNDM4XHUwNDNCXHUwNDRDIFx1MDQ0MFx1MDQzMFx1MDQzQ1x1MDQzQVx1MDQzOCBcdTA0M0FcdTA0M0RcdTA0M0VcdTA0M0ZcdTA0M0FcdTA0MzhcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0NDBcdTA0MzBcdTA0M0NcdTA0M0FcdTA0MzggXHUwNDNBXHUwNDNEXHUwNDNFXHUwNDNGXHUwNDNBXHUwNDM4XCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0NDJcdTA0MzVcdTA0M0FcdTA0NDFcdTA0NDJcdTA0MzAgXHUwNDNBXHUwNDNEXHUwNDNFXHUwNDNGXHUwNDNBXHUwNDM4XCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiXHUwNDIxXHUwNDMxXHUwNDQwXHUwNDNFXHUwNDQxXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQzRlx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA0MjFcdTA0NDJcdTA0MzhcdTA0M0JcdTA0NEMgXHUwNDQzXHUwNDM3XHUwNDNCXHUwNDMwXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlx1MDQyNlx1MDQzMlx1MDQzNVx1MDQ0MiBcdTA0M0JcdTA0MzhcdTA0M0RcdTA0MzhcdTA0MzhcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiXHUwNDI4XHUwNDM4XHUwNDQwXHUwNDM4XHUwNDNEXHUwNDMwIFx1MDQzQlx1MDQzOFx1MDQzRFx1MDQzOFx1MDQzOFwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlx1MDQyMVx1MDQzMVx1MDQ0MFx1MDQzRVx1MDQ0MVx1MDQzOFx1MDQ0Mlx1MDQ0QyBcdTA0M0RcdTA0MzBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0M0VcdTA0MzlcdTA0M0FcdTA0MzhcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiXHUwNDIwXHUwNDMwXHUwNDM0XHUwNDM4XHUwNDQzXHUwNDQxXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlx1MDQxRlx1MDQzRVx1MDQzOFx1MDQ0MVx1MDQzQSBcdTA0NDNcdTA0MzdcdTA0M0JcdTA0M0VcdTA0MzIuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJcdTA0MUFcdTA0M0VcdTA0NDBcdTA0MzVcdTA0M0RcdTA0NENcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJcdTA0MURcdTA0M0VcdTA0MzJcdTA0NEJcdTA0MzkgXHUwNDNBXHUwNDNFXHUwNDQwXHUwNDM1XHUwNDNEXHUwNDRDXCIsXHJcbiAgICBcImRlZi5jaGlsZFwiOiBcIlx1MDQxNFx1MDQzRVx1MDQ0N1x1MDQzNVx1MDQ0MFx1MDQzRFx1MDQzOFx1MDQzOVwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJcdTA0MURcdTA0MzBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0M0VcdTA0MzlcdTA0M0FcdTA0MzggTWluZFpKXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiXHUwNDJGXHUwNDM3XHUwNDRCXHUwNDNBXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIlx1MDQyRlx1MDQzN1x1MDQ0Qlx1MDQzQSBcdTA0MzhcdTA0M0RcdTA0NDJcdTA0MzVcdTA0NDBcdTA0NDRcdTA0MzVcdTA0MzlcdTA0NDFcdTA0MzBcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiXHUwNDIyXHUwNDM1XHUwNDNDXHUwNDMwXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJcdTA0MjZcdTA0MzJcdTA0MzVcdTA0NDJcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NEYgXHUwNDQyXHUwNDM1XHUwNDNDXHUwNDMwXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIlx1MDQyMVx1MDQzMlx1MDQzNVx1MDQ0Mlx1MDQzQlx1MDQzMFx1MDQ0RlwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIlx1MDQyMlx1MDQ1MVx1MDQzQ1x1MDQzRFx1MDQzMFx1MDQ0RlwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlx1MDQxRlx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzQlx1MDQ0QyBcdTA0MzhcdTA0M0RcdTA0NDFcdTA0NDJcdTA0NDBcdTA0NDNcdTA0M0NcdTA0MzVcdTA0M0RcdTA0NDJcdTA0M0VcdTA0MzJcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiXHUwNDFGXHUwNDNFXHUwNDNBXHUwNDMwXHUwNDM3XHUwNDMwXHUwNDQyXHUwNDRDIFx1MDQzRlx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJcdTA0MjRcdTA0M0VcdTA0M0QgXHUwNDQ1XHUwNDNFXHUwNDNCXHUwNDQxXHUwNDQyXHUwNDMwXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJcdTA0MjZcdTA0MzJcdTA0MzVcdTA0NDIgXHUwNDQ0XHUwNDNFXHUwNDNEXHUwNDMwXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlx1MDQxRSBcdTA0M0ZcdTA0NDBcdTA0M0VcdTA0MzNcdTA0NDBcdTA0MzBcdTA0M0NcdTA0M0NcdTA0MzVcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJcdTA0MTJcdTA0MzVcdTA0NDBcdTA0NDFcdTA0MzhcdTA0NEZcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlx1MDQxMFx1MDQzMlx1MDQ0Mlx1MDQzRVx1MDQ0MFwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiXHUwNDFGXHUwNDQwXHUwNDM4XHUwNDNCXHUwNDNFXHUwNDM2XHUwNDM1XHUwNDNEXHUwNDM4XHUwNDM1IFx1MDQzNFx1MDQzQlx1MDQ0RiBcdTA0MzhcdTA0M0RcdTA0NDJcdTA0MzVcdTA0M0JcdTA0M0JcdTA0MzVcdTA0M0FcdTA0NDItXHUwNDNBXHUwNDMwXHUwNDQwXHUwNDQyIFx1MDQ0MSBcdTA0M0VcdTA0NDJcdTA0M0FcdTA0NDBcdTA0NEJcdTA0NDJcdTA0NEJcdTA0M0MgXHUwNDNBXHUwNDNFXHUwNDM0XHUwNDNFXHUwNDNDIFx1MDQzNFx1MDQzQlx1MDQ0RiBPYnNpZGlhbjogXHUwNDQxXHUwNDQyXHUwNDM4XHUwNDNCXHUwNDM4LCBcdTA0NDBcdTA0MzBcdTA0MzRcdTA0NDNcdTA0MzZcdTA0M0RcdTA0NEJcdTA0MzUgXHUwNDQxXHUwNDNFXHUwNDM1XHUwNDM0XHUwNDM4XHUwNDNEXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDRGLCBcdTA0M0NcdTA0M0RcdTA0M0VcdTA0MzZcdTA0MzVcdTA0NDFcdTA0NDJcdTA0MzJcdTA0MzVcdTA0M0RcdTA0M0RcdTA0NEJcdTA0MzkgXHUwNDMyXHUwNDRCXHUwNDMxXHUwNDNFXHUwNDQwLCBcdTA0M0ZcdTA0MzVcdTA0NDBcdTA0MzVcdTA0NDJcdTA0MzBcdTA0NDFcdTA0M0FcdTA0MzhcdTA0MzJcdTA0MzBcdTA0M0RcdTA0MzhcdTA0MzUgXHUwNDM4IE1hcmtkb3duLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlx1MDQxRVx1MDQzMVx1MDQzRFx1MDQzRVx1MDQzMlx1MDQzQlx1MDQzNVx1MDQzRFx1MDQzRVwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiXHUwNDIwXHUwNDM1XHUwNDNGXHUwNDNFXHUwNDM3XHUwNDM4XHUwNDQyXHUwNDNFXHUwNDQwXHUwNDM4XHUwNDM5IEdpdEh1YlwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiXHUwNDFGXHUwNDNFXHUwNDM0XHUwNDM0XHUwNDM1XHUwNDQwXHUwNDM2XHUwNDMwXHUwNDQyXHUwNDRDIFx1MDQzMFx1MDQzMlx1MDQ0Mlx1MDQzRVx1MDQ0MFx1MDQzMFwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlx1MDQyMVx1MDQzRVx1MDQ0N1x1MDQzNVx1MDQ0Mlx1MDQzMFx1MDQzRFx1MDQzOFx1MDQ0RiBcdTA0M0FcdTA0M0JcdTA0MzBcdTA0MzJcdTA0MzhcdTA0NDhcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiXHUwNDFEXHUwNDMwXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDNFXHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQzQVx1MDQzQlx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0OFx1MDQzOFwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJcdTA0MjBcdTA0MzVcdTA0MzRcdTA0MzBcdTA0M0FcdTA0NDJcdTA0MzhcdTA0NDBcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NDJcdTA0NEMgXHUwNDQzXHUwNDM3XHUwNDM1XHUwNDNCXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIlx1MDQxNFx1MDQzRVx1MDQzMVx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0Mlx1MDQ0QyBcdTA0NDFcdTA0M0VcdTA0NDFcdTA0MzVcdTA0MzRcdTA0M0RcdTA0MzhcdTA0MzlcIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIlx1MDQxNFx1MDQzRVx1MDQzMVx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0Mlx1MDQ0QyBcdTA0MzRcdTA0M0VcdTA0NDdcdTA0MzVcdTA0NDBcdTA0M0RcdTA0MzhcdTA0MzlcIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIlx1MDQyNFx1MDQzRVx1MDQzQVx1MDQ0M1x1MDQ0MSBcdTA0M0RcdTA0MzAgXHUwNDQzXHUwNDM3XHUwNDNCXHUwNDM1XCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIlx1MDQxRVx1MDQ0Mlx1MDQzQ1x1MDQzNVx1MDQzRFx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJcdTA0MUZcdTA0M0VcdTA0MzJcdTA0NDJcdTA0M0VcdTA0NDBcdTA0MzhcdTA0NDJcdTA0NENcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJcdTA0MUZcdTA0MzVcdTA0NDBcdTA0MzVcdTA0M0RcdTA0M0VcdTA0NDEgXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDNFXHUwNDNBXHUwNDM4IChcdTA0NDBcdTA0MzVcdTA0MzQuKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJcdTA0MUZcdTA0MzVcdTA0NDBcdTA0MzVcdTA0M0NcdTA0MzVcdTA0NDlcdTA0MzVcdTA0M0RcdTA0MzhcdTA0MzUgXHUwNDQ1XHUwNDNFXHUwNDNCXHUwNDQxXHUwNDQyXHUwNDMwXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiXHUwNDIzXHUwNDMyXHUwNDM1XHUwNDNCXHUwNDM4XHUwNDQ3XHUwNDM4XHUwNDQyXHUwNDRDXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlx1MDQyM1x1MDQzQ1x1MDQzNVx1MDQzRFx1MDQ0Q1x1MDQ0OFx1MDQzOFx1MDQ0Mlx1MDQ0Q1wiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlx1MDQyMVx1MDQzMVx1MDQ0MFx1MDQzRVx1MDQ0MVx1MDQzOFx1MDQ0Mlx1MDQ0QyBcdTA0M0NcdTA0MzBcdTA0NDFcdTA0NDhcdTA0NDJcdTA0MzBcdTA0MzFcIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIlx1MDQxMlx1MDQzMlx1MDQzNVx1MDQ0MFx1MDQ0NVwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJcdTA0MTJcdTA0M0RcdTA0MzhcdTA0MzdcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiXHUwNDEyXHUwNDNCXHUwNDM1XHUwNDMyXHUwNDNFXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJcdTA0MTJcdTA0M0ZcdTA0NDBcdTA0MzBcdTA0MzJcdTA0M0VcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlx1MDQxRFx1MDQzMFx1MDQzNlx1MDQzQ1x1MDQzOFx1MDQ0Mlx1MDQzNSBcdTA0M0FcdTA0M0JcdTA0MzBcdTA0MzJcdTA0MzhcdTA0NDhcdTA0NDMuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlx1MDQxRlx1MDQ0MFx1MDQzRVx1MDQzQVx1MDQ0MFx1MDQ0M1x1MDQ0Mlx1MDQzQVx1MDQzMCBcdTA0MzggXHUwNDNDXHUwNDMwXHUwNDQxXHUwNDQ4XHUwNDQyXHUwNDMwXHUwNDMxXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiXHUwNDE4XHUwNDNEXHUwNDMyXHUwNDM1XHUwNDQwXHUwNDQyLiBcdTA0MzJcdTA0MzVcdTA0NDBcdTA0NDIuIFx1MDQzRlx1MDQ0MFx1MDQzRVx1MDQzQVx1MDQ0MFx1MDQ0M1x1MDQ0Mlx1MDQzQVx1MDQ0M1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIlx1MDQxOFx1MDQzRFx1MDQzMlx1MDQzNVx1MDQ0MFx1MDQ0Mi4gXHUwNDMzXHUwNDNFXHUwNDQwXHUwNDM4XHUwNDM3LiBcdTA0M0ZcdTA0NDBcdTA0M0VcdTA0M0FcdTA0NDBcdTA0NDNcdTA0NDJcdTA0M0FcdTA0NDNcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJcdTA0MThcdTA0M0RcdTA0MzJcdTA0MzVcdTA0NDBcdTA0NDIuIFx1MDQzQ1x1MDQzMFx1MDQ0MVx1MDQ0OFx1MDQ0Mlx1MDQzMFx1MDQzMVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiXHUwNDIwXHUwNDM1XHUwNDM0LiBcdTA0M0ZcdTA0NDBcdTA0MzggXHUwNDQxXHUwNDNFXHUwNDM3XHUwNDM0XHUwNDMwXHUwNDNEXHUwNDM4XHUwNDM4XCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHUwNDIwXHUwNDM1XHUwNDM2XHUwNDM4XHUwNDNDIFx1MDQ0MFx1MDQzNVx1MDQzNC4gXHUwNDNGXHUwNDQwXHUwNDM4IFx1MDQ0MVx1MDQzRVx1MDQzN1x1MDQzNFx1MDQzMFx1MDQzRFx1MDQzOFx1MDQzOFwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJcdTA0MThcdTA0M0NcdTA0NEYgXHUwNDNBXHUwNDNFXHUwNDQwXHUwNDNEXHUwNDRGXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJcdTA0MThcdTA0M0NcdTA0NEYgXHUwNDNGXHUwNDNFIFx1MDQ0M1x1MDQzQ1x1MDQzRVx1MDQzQlx1MDQ0N1x1MDQzMFx1MDQzRFx1MDQzOFx1MDQ0RSBcdTA0MzRcdTA0M0JcdTA0NEYgXHUwNDNBXHUwNDNFXHUwNDQwXHUwNDNEXHUwNDM1XHUwNDM5XCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJcdTA0MThcdTA0M0NcdTA0NEYgXHUwNDM0XHUwNDNFXHUwNDQ3XHUwNDM1XHUwNDQwXHUwNDNEXHUwNDM1XHUwNDMzXHUwNDNFXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiXHUwNDE4XHUwNDNDXHUwNDRGIFx1MDQzRlx1MDQzRSBcdTA0NDNcdTA0M0NcdTA0M0VcdTA0M0JcdTA0NDdcdTA0MzBcdTA0M0RcdTA0MzhcdTA0NEUgXHUwNDM0XHUwNDNCXHUwNDRGIFx1MDQzNFx1MDQzRVx1MDQ0N1x1MDQzNVx1MDQ0MFx1MDQzRFx1MDQzOFx1MDQ0NVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlx1MDQxRlx1MDQzNVx1MDQ0N1x1MDQzMFx1MDQ0Mlx1MDQzMFx1MDQ0Mlx1MDQ0QyBcdTA0MzRcdTA0M0JcdTA0NEYgXHUwNDQwXHUwNDM1XHUwNDM0LlwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJcdTA0MjBcdTA0MzVcdTA0MzRcdTA0MzBcdTA0M0FcdTA0NDJcdTA0MzhcdTA0NDBcdTA0M0VcdTA0MzJcdTA0MzBcdTA0NDJcdTA0NEMgXHUwNDNGXHUwNDQwXHUwNDM4IFx1MDQzRFx1MDQzMFx1MDQzNlx1MDQzMFx1MDQ0Mlx1MDQzOFx1MDQzOCBcdTA0M0FcdTA0M0JcdTA0MzBcdTA0MzJcdTA0MzhcdTA0NDhcIixcclxufTtcclxuXHJcbmNvbnN0IF9zdjogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBSb3RcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTAwQzVuZ3JhXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgR1x1MDBGNnIgb21cIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIEthcnRhXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJGb2t1c1wiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJTXHUwMEY2a1wiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlNcdTAwRjZrIHwgTWVsbGFuc2xhZzpSZWRpZ2VyYSB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk55IHJvdFwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93bi1sXHUwMEU0Z2VcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJTdGlscGFuZWxcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJGb2t1c2VyYSBub2RcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiU1x1MDBGNmsgbm9kZXJcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJJbnN0XHUwMEU0bGxuaW5nYXJcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiWm9vbWEgaW5cIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlpvb21hIHV0XCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIEFucGFzc2FkXCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBSYWRlcmEgYWxsYVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFJlZGlnZXJhIHN0aWxcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTnkgcm90XCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFx1MDBDNW5ncmFcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgR1x1MDBGNnIgb21cIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbCBzdGlsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFJlZGlnZXJhXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIEtvcGllcmFcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBLbGlwcCB1dFwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgS2xpc3RyYSBpblwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgQmFyblwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFZcdTAwRTRuc3RlciBiYXJuXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFN5c2tvblwiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFJhZGVyYVwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJEXHUwMEY2bGogdmVya3R5Z3NmXHUwMEU0bHRcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsIHN0aWxcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJCYXJubm9kXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJSb3Rub2RcIixcclxuICAgIFwic20uYmdcIjogXCJCYWtncnVuZFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiVGV4dGZcdTAwRTRyZ1wiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlRlY2tlbnN0b3JsZWtcIixcclxuICAgIFwic20uZm9udFwiOiBcIlRlY2tlbnNuaXR0XCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiS2FudHN0aWxcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJLYW50Zlx1MDBFNHJnXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiS2FudGJyZWRkXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIkthbnRyYWRpZVwiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIk1pbi4gYnJlZGRcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiTWluLiBoXHUwMEY2amRcIixcclxuICAgIFwic20uY29ublwiOiBcIktvcHBsaW5nXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXBcIixcclxuICAgIFwic20uY29sb3JcIjogXCJGXHUwMEU0cmdcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJCcmVkZFwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTFx1MDBFNG5nZFwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IFJlZ25iXHUwMEU1Z2VcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIk5vZHJpa3RuaW5nXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiU3lza29ubWVsbGFucnVtXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiSFx1MDBGNmdlclwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiVlx1MDBFNG5zdGVyXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJCXHUwMEU1ZGFcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJQYWxldHRcIixcclxuICAgIFwic20uc2VsXCI6IFwiTWFya2VyaW5nXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiTWFya2VyaW5nc2ZcdTAwRTRyZ1wiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIk1hcmtlcmluZ3NicmVkZFwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJLb250dXJvZmZzZXRcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJSZWRpZ2VyaW5nc2tvbnR1cmZcdTAwRTRyZ1wiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiUmVkaWdlcmluZ3Nrb250dXJicmVkZFwiLFxyXG4gICAgXCJzbS5ib3hTZWxDb2xvclwiOiBcIk1hcmtlcmluZ3MgZlx1MDBFNHJnXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRleHRqdXN0ZXJpbmdcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJUZXh0YXZzdFx1MDBFNW5kXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiUmFkaFx1MDBGNmpkXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiRHVrYmFrZ3J1bmRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJcdTAwQzV0ZXJzdFx1MDBFNGxsXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiU3RcdTAwRTRuZ1wiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlZpc2EgdmVya3R5Z3NmXHUwMEU0bHRcIixcclxuICAgIFwic20udGJQYWRcIjogXCJGXHUwMEU0bHRzYXZzdFx1MDBFNW5kXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIk92YW5cIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiSFx1MDBGNmdlclwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJOZWRhblwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJWXHUwMEU0bnN0ZXJcIixcclxuICAgIFwic20udGJQb3NcIjogXCJGXHUwMEU0bHRzcG9zaXRpb25cIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJPdmFuXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiTmVkYW5cIixcclxuICAgIFwic20udGJCZ1wiOiBcIkZcdTAwRTRsdHNiYWtncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiS25hcHBiYWtncnVuZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIktuYXBwa2FudHN0aWxcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIktuYXBwa2FudGZcdTAwRTRyZ1wiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJLbmFwcHRleHRmXHUwMEU0cmdcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTAwQzV0ZXJzdFx1MDBFNGxsIGZcdTAwRTRsdFwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBOb2RzdGlsXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkxpbmplZlx1MDBFNHJnXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxpbmplYnJlZGRcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJSZW5zYVwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJLYW50cmFkaWVcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiU1x1MDBGNmsgbm9kZXIuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJSb3RcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOeSByb3RcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiQmFyblwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogSW5zdFx1MDBFNGxsbmluZ2FyXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiU3ByXHUwMEU1a1wiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJHclx1MDBFNG5zc25pdHRzc3ByXHUwMEU1a1wiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJUZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJGXHUwMEU0cmd0ZW1hXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkxqdXN0XCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiTVx1MDBGNnJrdFwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlZpc2EgdmVya3R5Z3NmXHUwMEU0bHRcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiVmlzYSB2ZXJrdHlnc2ZcdTAwRTRsdFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJEdWtiYWtncnVuZFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiQmFrZ3J1bmRzZlx1MDBFNHJnXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIk9tXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiRlx1MDBGNnJmYXR0YXJlXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJGdW5rdGlvbnNyaWsgbWluZG1hcC1hcHAgbWVkIFx1MDBGNnBwZW4ga1x1MDBFNGxsa29kIGZcdTAwRjZyIE9ic2lkaWFuIG1lZCBhbnBhc3NhZGUgc3RpbGFyLCByZWduYlx1MDBFNWdza29wcGxpbmdhciwgZmxlcnZhbCwgZHJhLW9jaC1zbFx1MDBFNHBwIG9jaCBNYXJrZG93bi1pbXBvcnQvZXhwb3J0LlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlVwcGRhdGVyYWRcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIkdpdEh1Yi1mXHUwMEY2cnJcdTAwRTVkXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJTdFx1MDBGNmQgZlx1MDBGNnJmYXR0YXJlblwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIktvcnRrb21tYW5kb25cIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiQW5wYXNzYSBrb3J0a29tbWFuZG9uXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlJlZGlnZXJhIG5vZFwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJMXHUwMEU0Z2cgdGlsbCBzeXNrb25cIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkxcdTAwRTRnZyB0aWxsIGJhcm5cIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkZva3VzZXJhIG5vZFwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdTAwQzVuZ3JhXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIkdcdTAwRjZyIG9tXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiUmFkYnJ5dG5pbmcgKHJlZGlnZXJpbmcpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIkRyYSBhcmJldHN5dGFcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJab29tYSBpblwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJab29tYSB1dFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlx1MDBDNXRlcnN0XHUwMEU0bGwgem9vbVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiTmF2aWdlcmEgdXBwXHUwMEU1dFwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJOYXZpZ2VyYSBuZWRcdTAwRTV0XCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIk5hdmlnZXJhIHZcdTAwRTRuc3RlclwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiTmF2aWdlcmEgaFx1MDBGNmdlclwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiVHJ5Y2suLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlNjcm9sbCBvY2ggem9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVydGVyYSBWLXNjcm9sbFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkludmVydGVyYSBILXNjcm9sbFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIkludmVydGVyYSB6b29tXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJSZWRpZ2VyYSB2aWQgc2thcGFuZGVcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJSZWRpZ2VyaW5nc2xcdTAwRTRnZSB2aWQgbnlhIG5vZGVyXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlJvdG5hbW5cIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmFtbiBmXHUwMEY2ciBueWEgclx1MDBGNnR0ZXJcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIkJhcm5uYW1uXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiU3RhbmRhcmRuYW1uIGZcdTAwRjZyIG55YSBiYXJuXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiU2tyaXYgZlx1MDBGNnIgYXR0IHJlZGlnZXJhXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlJlZGlnZXJhIGdlbm9tIGF0dCBza3JpdmFcIixcclxufTtcclxuXHJcbmNvbnN0IF9oaTogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdTA5MkVcdTA5NDJcdTA5MzJcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTA5MkFcdTA5NDJcdTA5MzBcdTA5NERcdTA5MzVcdTA5MzVcdTA5MjRcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdTA5MkJcdTA5M0ZcdTA5MzAgXHUwOTM4XHUwOTQ3XCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBcdTA5MkVcdTA5NDhcdTA5MkFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiXHUwOTJCXHUwOTNDXHUwOTRCXHUwOTE1XHUwOTM4XCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlx1MDkxNlx1MDk0Qlx1MDkxQ1x1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlx1MDkxNlx1MDk0Qlx1MDkxQ1x1MDk0N1x1MDkwMiB8IFNwYWNlOlx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOCB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIlx1MDkyOFx1MDkyRlx1MDkzRSBcdTA5MkVcdTA5NDJcdTA5MzJcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24gXHUwOTJFXHUwOTRCXHUwOTIxXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwIFx1MDkyQVx1MDk0OFx1MDkyOFx1MDkzMlwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIlx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MkFcdTA5MzAgXHUwOTJCXHUwOTNDXHUwOTRCXHUwOTE1XHUwOTM4XCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MTZcdTA5NEJcdTA5MUNcdTA5NDdcdTA5MDJcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJcdTA5MzhcdTA5NDdcdTA5MUZcdTA5M0ZcdTA5MDJcdTA5MTdcdTA5NERcdTA5MzhcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFIFx1MDkwN1x1MDkyOFwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFIFx1MDkwNlx1MDkwOVx1MDkxRlwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBcdTA5MTVcdTA5MzhcdTA5NERcdTA5MUZcdTA5MkVcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1MDkzOFx1MDkyRFx1MDk0MCBcdTA5MzlcdTA5MUZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA5MzZcdTA5NDhcdTA5MzJcdTA5NDAgXHUwOTM4XHUwOTAyXHUwOTJBXHUwOTNFXHUwOTI2XHUwOTNGXHUwOTI0IFx1MDkxNVx1MDkzMFx1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBcdTA5MjhcdTA5MkZcdTA5M0UgXHUwOTJFXHUwOTQyXHUwOTMyXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IFx1MDkyQVx1MDk0Mlx1MDkzMFx1MDk0RFx1MDkzNVx1MDkzNVx1MDkyNFwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBcdTA5MkJcdTA5M0ZcdTA5MzAgXHUwOTM4XHUwOTQ3XCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA5MzVcdTA5NDhcdTA5MzZcdTA5NERcdTA5MzVcdTA5M0ZcdTA5MTUgXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkzRlx1MDkyNCBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDkzNlx1MDk0OFx1MDkzMlx1MDk0MFwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBcdTA5MTVcdTA5NDlcdTA5MkFcdTA5NDBcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBcdTA5MTVcdTA5MUZcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIFx1MDkyQVx1MDk0N1x1MDkzOFx1MDk0RFx1MDkxRlwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgXHUwOTFBXHUwOTNFXHUwOTA3XHUwOTMyXHUwOTREXHUwOTIxXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgXHUwOTJDXHUwOTNFXHUwOTJGXHUwOTNFXHUwOTAyIFx1MDkxQVx1MDkzRVx1MDkwN1x1MDkzMlx1MDk0RFx1MDkyMVwiLFxyXG4gICAgXCJjdHguc2libGluZ1wiOiBcIlx1Mjc5NSBcdTA5MzhcdTA5M0ZcdTA5MkNcdTA5MzJcdTA5M0ZcdTA5MDJcdTA5MTdcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBcdTA5MzlcdTA5MUZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiXHUwOTFGXHUwOTQyXHUwOTMyXHUwOTJDXHUwOTNFXHUwOTMwIFx1MDkxQlx1MDk0MVx1MDkyQVx1MDkzRVx1MDkwRlx1MDkwMlwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA5MzVcdTA5NDhcdTA5MzZcdTA5NERcdTA5MzVcdTA5M0ZcdTA5MTUgXHUwOTM2XHUwOTQ4XHUwOTMyXHUwOTQwXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiXHUwOTFBXHUwOTNFXHUwOTA3XHUwOTMyXHUwOTREXHUwOTIxIFx1MDkyOFx1MDk0Qlx1MDkyMVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiXHUwOTJFXHUwOTQyXHUwOTMyIFx1MDkyOFx1MDk0Qlx1MDkyMVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlx1MDkyQVx1MDk0M1x1MDkzN1x1MDk0RFx1MDkyMFx1MDkyRFx1MDk0Mlx1MDkyRVx1MDkzRlwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiXHUwOTFGXHUwOTQ3XHUwOTE1XHUwOTREXHUwOTM4XHUwOTREXHUwOTFGIFx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlx1MDkyQlx1MDkzQ1x1MDk0OVx1MDkyOFx1MDk0RFx1MDkxRiBcdTA5MDZcdTA5MTVcdTA5M0VcdTA5MzBcIixcclxuICAgIFwic20uZm9udFwiOiBcIlx1MDkyQlx1MDkzQ1x1MDk0OVx1MDkyOFx1MDk0RFx1MDkxRlwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlx1MDkyQ1x1MDk0OVx1MDkzMFx1MDk0RFx1MDkyMVx1MDkzMCBcdTA5MzZcdTA5NDhcdTA5MzJcdTA5NDBcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJcdTA5MkNcdTA5NDlcdTA5MzBcdTA5NERcdTA5MjFcdTA5MzAgXHUwOTMwXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiXHUwOTJDXHUwOTQ5XHUwOTMwXHUwOTREXHUwOTIxXHUwOTMwIFx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJcdTA5MkNcdTA5NDlcdTA5MzBcdTA5NERcdTA5MjFcdTA5MzAgXHUwOTI0XHUwOTREXHUwOTMwXHUwOTNGXHUwOTFDXHUwOTREXHUwOTJGXHUwOTNFXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiXHUwOTI4XHUwOTREXHUwOTJGXHUwOTQyXHUwOTI4XHUwOTI0XHUwOTJFIFx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJcdTA5MjhcdTA5NERcdTA5MkZcdTA5NDJcdTA5MjhcdTA5MjRcdTA5MkUgXHUwOTBBXHUwOTAyXHUwOTFBXHUwOTNFXHUwOTA4XCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJcdTA5MTVcdTA5MjhcdTA5NDdcdTA5MTVcdTA5NERcdTA5MzZcdTA5MjhcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1MDkyQVx1MDk0RFx1MDkzMFx1MDkxNVx1MDkzRVx1MDkzMFwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHUwOTMyXHUwOTAyXHUwOTJDXHUwOTNFXHUwOTA4XCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggXHUwOTA3XHUwOTAyXHUwOTI2XHUwOTREXHUwOTMwXHUwOTI3XHUwOTI4XHUwOTQxXHUwOTM3XCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJcdTA5MjZcdTA5M0ZcdTA5MzZcdTA5M0VcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJcdTA5MzhcdTA5MzlcdTA5NEJcdTA5MjZcdTA5MzAgXHUwOTA1XHUwOTAyXHUwOTI0XHUwOTMwXHUwOTNFXHUwOTMyXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiXHUwOTI2XHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJcdTA5MkNcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIlx1MDkyNlx1MDk0Qlx1MDkyOFx1MDk0Qlx1MDkwMlwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlx1MDkyQVx1MDk0OFx1MDkzMlx1MDk0N1x1MDkxRlwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJcdTA5MUFcdTA5MkZcdTA5MjhcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJcdTA5MUFcdTA5MkZcdTA5MjggXHUwOTMwXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiXHUwOTFBXHUwOTJGXHUwOTI4IFx1MDkxQVx1MDk0Q1x1MDkyMVx1MDkzQ1x1MDkzRVx1MDkwOFwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJcdTA5MDZcdTA5MDlcdTA5MUZcdTA5MzJcdTA5M0VcdTA5MDdcdTA5MjggXHUwOTExXHUwOTJCXHUwOTM4XHUwOTQ3XHUwOTFGXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiXHUwOTM4XHUwOTAyXHUwOTJBXHUwOTNFXHUwOTI2XHUwOTI4IFx1MDkwNlx1MDkwOVx1MDkxRlx1MDkzMlx1MDkzRVx1MDkwN1x1MDkyOCBcdTA5MzBcdTA5MDJcdTA5MTdcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOCBcdTA5MDZcdTA5MDlcdTA5MUZcdTA5MzJcdTA5M0VcdTA5MDdcdTA5MjggXHUwOTFBXHUwOTRDXHUwOTIxXHUwOTNDXHUwOTNFXHUwOTA4XCIsXHJcbiAgICBcInNtLmJveFNlbENvbG9yXCI6IFwiXHUwOTJDXHUwOTQ5XHUwOTE1XHUwOTREXHUwOTM4IFx1MDkxQVx1MDkyRlx1MDkyOCBcdTA5MzBcdTA5MDJcdTA5MTdcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiXHUwOTFGXHUwOTQ3XHUwOTE1XHUwOTREXHUwOTM4XHUwOTREXHUwOTFGIFx1MDkzOFx1MDkwMlx1MDkzMFx1MDk0N1x1MDkxNlx1MDkyM1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlx1MDkxRlx1MDk0N1x1MDkxNVx1MDk0RFx1MDkzOFx1MDk0RFx1MDkxRiBcdTA5MkFcdTA5NDhcdTA5MjFcdTA5M0ZcdTA5MDJcdTA5MTdcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJcdTA5MkFcdTA5MDJcdTA5MTVcdTA5NERcdTA5MjRcdTA5M0YgXHUwOTBBXHUwOTAyXHUwOTFBXHUwOTNFXHUwOTA4XCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiXHUwOTE1XHUwOTQ4XHUwOTI4XHUwOTM1XHUwOTNFXHUwOTM4IFx1MDkyQVx1MDk0M1x1MDkzN1x1MDk0RFx1MDkyMFx1MDkyRFx1MDk0Mlx1MDkyRVx1MDkzRlwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlx1MDkzMFx1MDk0MFx1MDkzOFx1MDk0N1x1MDkxRlwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlx1MDkyQ1x1MDkwMlx1MDkyNlwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlx1MDkxRlx1MDk0Mlx1MDkzMlx1MDkyQ1x1MDkzRVx1MDkzMCBcdTA5MjZcdTA5M0ZcdTA5MTZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic20udGJQYWRcIjogXCJcdTA5MUZcdTA5NDJcdTA5MzJcdTA5MkNcdTA5M0VcdTA5MzAgXHUwOTJBXHUwOTQ4XHUwOTIxXHUwOTNGXHUwOTAyXHUwOTE3XCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1MDkwQVx1MDkyQVx1MDkzMFwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdTA5MjZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHUwOTI4XHUwOTQwXHUwOTFBXHUwOTQ3XCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1MDkyQ1x1MDkzRVx1MDkwRlx1MDkwMlwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1MDkxRlx1MDk0Mlx1MDkzMlx1MDkyQ1x1MDkzRVx1MDkzMCBcdTA5MzhcdTA5NERcdTA5MjVcdTA5M0ZcdTA5MjRcdTA5M0ZcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdTA5MEFcdTA5MkFcdTA5MzBcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdTA5MjhcdTA5NDBcdTA5MUFcdTA5NDdcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1MDkxRlx1MDk0Mlx1MDkzMlx1MDkyQ1x1MDkzRVx1MDkzMCBcdTA5MkFcdTA5NDNcdTA5MzdcdTA5NERcdTA5MjBcdTA5MkRcdTA5NDJcdTA5MkVcdTA5M0ZcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlx1MDkyQ1x1MDkxRlx1MDkyOCBcdTA5MkFcdTA5NDNcdTA5MzdcdTA5NERcdTA5MjBcdTA5MkRcdTA5NDJcdTA5MkVcdTA5M0ZcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdTA5MkNcdTA5MUZcdTA5MjggXHUwOTJDXHUwOTQ5XHUwOTMwXHUwOTREXHUwOTIxXHUwOTMwIFx1MDkzNlx1MDk0OFx1MDkzMlx1MDk0MFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiXHUwOTJDXHUwOTFGXHUwOTI4IFx1MDkyQ1x1MDk0OVx1MDkzMFx1MDk0RFx1MDkyMVx1MDkzMCBcdTA5MzBcdTA5MDJcdTA5MTdcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHUwOTJDXHUwOTFGXHUwOTI4IFx1MDkxRlx1MDk0N1x1MDkxNVx1MDk0RFx1MDkzOFx1MDk0RFx1MDkxRiBcdTA5MzBcdTA5MDJcdTA5MTdcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTA5MUZcdTA5NDJcdTA5MzJcdTA5MkNcdTA5M0VcdTA5MzAgXHUwOTMwXHUwOTQwXHUwOTM4XHUwOTQ3XHUwOTFGXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MzZcdTA5NDhcdTA5MzJcdTA5NDBcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiXHUwOTMyXHUwOTNFXHUwOTA3XHUwOTI4IFx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJcdTA5MzJcdTA5M0VcdTA5MDdcdTA5MjggXHUwOTFBXHUwOTRDXHUwOTIxXHUwOTNDXHUwOTNFXHUwOTA4XCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiXHUwOTE1XHUwOTM4XHUwOTREXHUwOTFGXHUwOTJFIFx1MDkzOFx1MDkzRVx1MDkyQlx1MDkzQyBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiXHUwOTJDXHUwOTQ5XHUwOTMwXHUwOTREXHUwOTIxXHUwOTMwIFx1MDkyNFx1MDk0RFx1MDkzMFx1MDkzRlx1MDkxQ1x1MDk0RFx1MDkyRlx1MDkzRVwiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJcdTA5MjhcdTA5NEJcdTA5MjEgXHUwOTE2XHUwOTRCXHUwOTFDXHUwOTQ3XHUwOTAyLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiXHUwOTJFXHUwOTQyXHUwOTMyXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiXHUwOTI4XHUwOTJGXHUwOTNFIFx1MDkyRVx1MDk0Mlx1MDkzMlwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJcdTA5MUFcdTA5M0VcdTA5MDdcdTA5MzJcdTA5NERcdTA5MjFcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIFx1MDkzOFx1MDk0N1x1MDkxRlx1MDkzRlx1MDkwMlx1MDkxN1x1MDk0RFx1MDkzOFwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlx1MDkyRFx1MDkzRVx1MDkzN1x1MDkzRVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJcdTA5MDdcdTA5MDJcdTA5MUZcdTA5MzBcdTA5MkJcdTA5M0NcdTA5NDdcdTA5MzggXHUwOTJEXHUwOTNFXHUwOTM3XHUwOTNFXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlx1MDkyNVx1MDk0MFx1MDkyRVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiXHUwOTMwXHUwOTAyXHUwOTE3IFx1MDkyNVx1MDk0MFx1MDkyRVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJcdTA5MzJcdTA5M0VcdTA5MDdcdTA5MUZcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJcdTA5MjFcdTA5M0VcdTA5MzBcdTA5NERcdTA5MTVcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJcdTA5MUZcdTA5NDJcdTA5MzJcdTA5MkNcdTA5M0VcdTA5MzAgXHUwOTI2XHUwOTNGXHUwOTE2XHUwOTNFXHUwOTBGXHUwOTAyXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlx1MDkxRlx1MDk0Mlx1MDkzMlx1MDkyQ1x1MDkzRVx1MDkzMCBcdTA5MjZcdTA5M0ZcdTA5MTZcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiXHUwOTE1XHUwOTQ4XHUwOTI4XHUwOTM1XHUwOTNFXHUwOTM4IFx1MDkyQVx1MDk0M1x1MDkzN1x1MDk0RFx1MDkyMFx1MDkyRFx1MDk0Mlx1MDkyRVx1MDkzRlwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiXHUwOTJBXHUwOTQzXHUwOTM3XHUwOTREXHUwOTIwXHUwOTJEXHUwOTQyXHUwOTJFXHUwOTNGIFx1MDkzMFx1MDkwMlx1MDkxN1wiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdTA5MkFcdTA5MzBcdTA5M0ZcdTA5MUFcdTA5MkZcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJcdTA5MzhcdTA5MDJcdTA5MzhcdTA5NERcdTA5MTVcdTA5MzBcdTA5MjNcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlx1MDkzMlx1MDk0N1x1MDkxNlx1MDkxNVwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiT2JzaWRpYW4gXHUwOTE1XHUwOTQ3IFx1MDkzMlx1MDkzRlx1MDkwRiBcdTA5MTVcdTA5MzhcdTA5NERcdTA5MUZcdTA5MkUgXHUwOTM4XHUwOTREXHUwOTFGXHUwOTNFXHUwOTA3XHUwOTMyLCBcdTA5MDdcdTA5MDJcdTA5MjZcdTA5NERcdTA5MzBcdTA5MjdcdTA5MjhcdTA5NDFcdTA5MzcgXHUwOTE1XHUwOTI4XHUwOTQ3XHUwOTE1XHUwOTREXHUwOTM2XHUwOTI4LCBcdTA5MkVcdTA5MzJcdTA5NERcdTA5MUZcdTA5NDAtXHUwOTM4XHUwOTQ3XHUwOTMyXHUwOTQ3XHUwOTE1XHUwOTREXHUwOTFGLCBcdTA5MjFcdTA5NERcdTA5MzBcdTA5NDhcdTA5MTcgXHUwOTBGXHUwOTAyXHUwOTIxIFx1MDkyMVx1MDk0RFx1MDkzMFx1MDk0OVx1MDkyQSBcdTA5MTRcdTA5MzAgTWFya2Rvd24gXHUwOTA2XHUwOTJGXHUwOTNFXHUwOTI0L1x1MDkyOFx1MDkzRlx1MDkzMFx1MDk0RFx1MDkyRlx1MDkzRVx1MDkyNCBcdTA5MTVcdTA5NDcgXHUwOTM4XHUwOTNFXHUwOTI1IFx1MDkyRVx1MDkzRVx1MDkwN1x1MDkwMlx1MDkyMSBcdTA5MkVcdTA5NDhcdTA5MkEgXHUwOTEwXHUwOTJBXHUwOTY0XCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiXHUwOTA1XHUwOTJBXHUwOTIxXHUwOTQ3XHUwOTFGXHUwOTQ3XHUwOTIxXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWIgXHUwOTMwXHUwOTNGXHUwOTJBXHUwOTQ5XHUwOTFDXHUwOTNDXHUwOTNGXHUwOTFGXHUwOTMwXHUwOTQwXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJcdTA5MTNcdTA5MkFcdTA5MjggXHUwOTM4XHUwOTRCXHUwOTMwXHUwOTREXHUwOTM4IFx1MDkzMlx1MDk0N1x1MDkxNlx1MDkxNSBcdTA5MTVcdTA5M0UgXHUwOTM4XHUwOTJFXHUwOTMwXHUwOTREXHUwOTI1XHUwOTI4IFx1MDkxNVx1MDkzMFx1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlx1MDkxNVx1MDk0MFx1MDkyQ1x1MDk0Qlx1MDkzMFx1MDk0RFx1MDkyMSBcdTA5MzZcdTA5NDlcdTA5MzBcdTA5NERcdTA5MUZcdTA5MTVcdTA5MUZcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiXHUwOTM2XHUwOTQ5XHUwOTMwXHUwOTREXHUwOTFGXHUwOTE1XHUwOTFGIFx1MDkwNVx1MDkyOFx1MDk0MVx1MDkxNVx1MDk0Mlx1MDkzMlx1MDkzRlx1MDkyNCBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHUwOTI4XHUwOTRCXHUwOTIxIFx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkzRlx1MDkyNCBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiXHUwOTM4XHUwOTNGXHUwOTJDXHUwOTMyXHUwOTNGXHUwOTAyXHUwOTE3IFx1MDkxQ1x1MDk0Qlx1MDkyMVx1MDkzQ1x1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiXHUwOTFBXHUwOTNFXHUwOTA3XHUwOTMyXHUwOTREXHUwOTIxIFx1MDkxQ1x1MDk0Qlx1MDkyMVx1MDkzQ1x1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiXHUwOTI4XHUwOTRCXHUwOTIxIFx1MDkyQVx1MDkzMCBcdTA5MkJcdTA5M0NcdTA5NEJcdTA5MTVcdTA5MzhcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiXHUwOTJBXHUwOTQyXHUwOTMwXHUwOTREXHUwOTM1XHUwOTM1XHUwOTI0XCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlx1MDkyQlx1MDkzRlx1MDkzMCBcdTA5MzhcdTA5NDdcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJcdTA5MzJcdTA5M0VcdTA5MDdcdTA5MjggXHUwOTJDXHUwOTREXHUwOTMwXHUwOTQ3XHUwOTE1IChcdTA5MzhcdTA5MDJcdTA5MkFcdTA5M0VcdTA5MjZcdTA5MjggXHUwOTJFXHUwOTQ3XHUwOTAyKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJcdTA5MTVcdTA5NDhcdTA5MjhcdTA5MzVcdTA5M0VcdTA5MzggXHUwOTE2XHUwOTQwXHUwOTAyXHUwOTFBXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFIFx1MDkwN1x1MDkyOFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJcdTA5MUNcdTA5M0NcdTA5NDJcdTA5MkUgXHUwOTA2XHUwOTA5XHUwOTFGXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFIFx1MDkzMFx1MDk0MFx1MDkzOFx1MDk0N1x1MDkxRlwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiXHUwOTBBXHUwOTJBXHUwOTMwXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIlx1MDkyOFx1MDk0MFx1MDkxQVx1MDk0N1wiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJcdTA5MkNcdTA5M0VcdTA5MEZcdTA5MDJcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlx1MDkyNlx1MDkzRVx1MDkwRlx1MDkwMlwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiXHUwOTE1XHUwOTQxXHUwOTAyXHUwOTFDXHUwOTQwIFx1MDkyNlx1MDkyQ1x1MDkzRVx1MDkwRlx1MDkwMi4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiXHUwOTM4XHUwOTREXHUwOTE1XHUwOTREXHUwOTMwXHUwOTQ5XHUwOTMyIFx1MDkxNFx1MDkzMCBcdTA5MUNcdTA5M0NcdTA5NDJcdTA5MkVcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJcdTA5MzVcdTA5MzBcdTA5NERcdTA5MUZcdTA5M0ZcdTA5MTVcdTA5MzIgXHUwOTM4XHUwOTREXHUwOTE1XHUwOTREXHUwOTMwXHUwOTQ5XHUwOTMyIFx1MDkwOVx1MDkzMlx1MDkxRlx1MDk0N1x1MDkwMlwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIlx1MDkzOVx1MDk0OVx1MDkzMFx1MDkzRlx1MDkxQ1x1MDkzQ1x1MDk0OVx1MDkyOFx1MDk0RFx1MDkxRlx1MDkzMiBcdTA5MzhcdTA5NERcdTA5MTVcdTA5NERcdTA5MzBcdTA5NDlcdTA5MzIgXHUwOTA5XHUwOTMyXHUwOTFGXHUwOTQ3XHUwOTAyXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiXHUwOTFDXHUwOTNDXHUwOTQyXHUwOTJFIFx1MDkyNlx1MDkzRlx1MDkzNlx1MDkzRSBcdTA5MDlcdTA5MzJcdTA5MUZcdTA5NDdcdTA5MDJcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIlx1MDkyQ1x1MDkyOFx1MDkzRVx1MDkyNFx1MDk0NyBcdTA5MzhcdTA5MkVcdTA5MkYgXHUwOTM4XHUwOTAyXHUwOTJBXHUwOTNFXHUwOTI2XHUwOTI4XCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHUwOTI4XHUwOTBGIFx1MDkyOFx1MDk0Qlx1MDkyMSBcdTA5MkNcdTA5MjhcdTA5M0VcdTA5MjRcdTA5NDcgXHUwOTM4XHUwOTJFXHUwOTJGIFx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOCBcdTA5MkVcdTA5NEJcdTA5MjFcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiXHUwOTJFXHUwOTQyXHUwOTMyIFx1MDkyOFx1MDkzRVx1MDkyRVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiXHUwOTI4XHUwOTBGIFx1MDkyRVx1MDk0Mlx1MDkzMiBcdTA5MTVcdTA5M0UgXHUwOTIxXHUwOTNGXHUwOTJCXHUwOTNDXHUwOTQ5XHUwOTMyXHUwOTREXHUwOTFGIFx1MDkyOFx1MDkzRVx1MDkyRVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiXHUwOTFBXHUwOTNFXHUwOTA3XHUwOTMyXHUwOTREXHUwOTIxIFx1MDkyOFx1MDkzRVx1MDkyRVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlx1MDkyOFx1MDkwRiBcdTA5MUFcdTA5M0VcdTA5MDdcdTA5MzJcdTA5NERcdTA5MjEgXHUwOTE1XHUwOTNFIFx1MDkyMVx1MDkzRlx1MDkyQlx1MDkzQ1x1MDk0OVx1MDkzMlx1MDk0RFx1MDkxRiBcdTA5MjhcdTA5M0VcdTA5MkVcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJcdTA5MUZcdTA5M0VcdTA5MDdcdTA5MkEgXHUwOTE1XHUwOTMwXHUwOTQ3XHUwOTAyIFx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOFwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJcdTA5MUFcdTA5MkZcdTA5MjhcdTA5M0ZcdTA5MjQgXHUwOTI4XHUwOTRCXHUwOTIxIFx1MDkyQVx1MDkzMCBcdTA5MUZcdTA5M0VcdTA5MDdcdTA5MkEgXHUwOTE1XHUwOTMwXHUwOTE1XHUwOTQ3IFx1MDkzOFx1MDkwMlx1MDkyQVx1MDkzRVx1MDkyNlx1MDkyOFwiLFxyXG59O1xyXG5cclxuY29uc3QgX2tvOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFx1QjhFOFx1RDJCOFwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IFx1QzJFNFx1RDU4OVx1Q0RFOFx1QzE4Q1wiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFx1QjJFNFx1QzJEQ1x1QzJFNFx1RDU4OVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgXHVCOUY1XCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1QzJBNFx1RDBDMFx1Qzc3Q1wiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIlx1RDNFQ1x1Q0VFNFx1QzJBNFwiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJcdUFDODBcdUMwQzlcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpcdUFDODBcdUMwQzkgfCBTcGFjZTpcdUQzQjhcdUM5RDEgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJcdUMwQzggXHVCOEU4XHVEMkI4XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1hcmtkb3duIFx1QkFBOFx1QjREQ1wiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlx1QzJBNFx1RDBDMFx1Qzc3QyBcdUQzMjhcdUIxMTBcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJcdUIxNzhcdUI0REMgXHVEM0VDXHVDRUU0XHVDMkE0XCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlx1QjE3OFx1QjREQyBcdUFDODBcdUMwQzlcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJcdUMxMjRcdUM4MTVcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiXHVENjU1XHVCMzAwXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJcdUNEOTVcdUMxOENcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgXHVDMEFDXHVDNkE5XHVDNzkwIFx1QzgxNVx1Qzc1OFwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHVDNzdDXHVBRDA0IFx1QzBBRFx1QzgxQ1wiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1QzJBNFx1RDBDMFx1Qzc3QyBcdUQzQjhcdUM5RDFcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgXHVDMEM4IFx1QjhFOFx1RDJCOFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBcdUMyRTRcdUQ1ODlcdUNERThcdUMxOENcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgXHVCMkU0XHVDMkRDXHVDMkU0XHVENTg5XCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdUM4MDRcdUM1RUQgXHVDMkE0XHVEMEMwXHVDNzdDXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFx1RDNCOFx1QzlEMVwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHVDMkE0XHVEMEMwXHVDNzdDXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIFx1QkNGNVx1QzBBQ1wiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFx1Qzc5OFx1Qjc3Q1x1QjBCNFx1QUUzMFwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgXHVCRDk5XHVDNUVDXHVCMTIzXHVBRTMwXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBcdUM3OTBcdUMyRERcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBcdUM2N0NcdUNBQkQgXHVDNzkwXHVDMkREXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFx1RDYxNVx1QzgxQ1wiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1QzBBRFx1QzgxQ1wiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJcdUIzQzRcdUFENkNcdUJBQThcdUM3NEMgXHVDMjI4XHVBRTMwXHVBRTMwXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1QzgwNFx1QzVFRCBcdUMyQTRcdUQwQzBcdUM3N0NcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJcdUM3OTBcdUMyREQgXHVCMTc4XHVCNERDXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJcdUI4RThcdUQyQjggXHVCMTc4XHVCNERDXCIsXHJcbiAgICBcInNtLmJnXCI6IFwiXHVCQzMwXHVBQ0JEXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJcdUQxNERcdUMyQTRcdUQyQjggXHVDMEM5XHVDMEMxXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiXHVBRTAwXHVBRjM0IFx1RDA2Q1x1QUUzMFwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiXHVBRTAwXHVBRjM0XCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiXHVEMTRDXHVCNDUwXHVCOUFDIFx1QzJBNFx1RDBDMFx1Qzc3Q1wiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlx1RDE0Q1x1QjQ1MFx1QjlBQyBcdUMwQzlcdUMwQzFcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJcdUQxNENcdUI0NTBcdUI5QUMgXHVCMTA4XHVCRTQ0XCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlx1RDE0Q1x1QjQ1MFx1QjlBQyBcdUJDMThcdUFDQkRcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJcdUNENUNcdUMxOEMgXHVCMTA4XHVCRTQ0XCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIlx1Q0Q1Q1x1QzE4QyBcdUIxOTJcdUM3NzRcIixcclxuICAgIFwic20uY29ublwiOiBcIlx1QzVGMFx1QUNCMFx1QzEyMFwiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiXHVDNzIwXHVENjE1XCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiXHVDMEM5XHVDMEMxXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiXHVCMTA4XHVCRTQ0XCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJcdUFFMzhcdUM3NzRcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBcdUI4MDhcdUM3NzhcdUJDRjRcdUM2QjBcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlx1QjE3OFx1QjREQyBcdUJDMjlcdUQ1QTVcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJcdUQ2MTVcdUM4MUMgXHVBQzA0XHVBQ0E5XCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiXHVDNjI0XHVCOTc4XHVDQUJEXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJcdUM2N0NcdUNBQkRcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIlx1QzU5MVx1Q0FCRFwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlx1RDMxNFx1QjgwOFx1RDJCOFwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJcdUMxMjBcdUQwRERcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJcdUMxMjBcdUQwREQgXHVDMEM5XHVDMEMxXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiXHVDMTIwXHVEMEREIFx1QjEwOFx1QkU0NFwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJcdUM3MjRcdUFDRkRcdUMxMjAgXHVDNjI0XHVENTA0XHVDMTRCXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiXHVEM0I4XHVDOUQxIFx1QzcyNFx1QUNGRFx1QzEyMCBcdUMwQzlcdUMwQzFcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlx1RDNCOFx1QzlEMSBcdUM3MjRcdUFDRkRcdUMxMjAgXHVCMTA4XHVCRTQ0XCIsXHJcbiAgICBcInNtLmJveFNlbENvbG9yXCI6IFwiXHVCQzE1XHVDMkE0IFx1QzEyMFx1RDBERCBcdUMwQzlcdUMwQzFcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiXHVEMTREXHVDMkE0XHVEMkI4IFx1QzgxNVx1QjgyQ1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlx1RDE0RFx1QzJBNFx1RDJCOCBcdUQzMjhcdUI1MjlcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJcdUM5MDQgXHVCMTkyXHVDNzc0XCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiXHVDRTk0XHVCQzg0XHVDMkE0IFx1QkMzMFx1QUNCRFwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlx1Q0QwOFx1QUUzMFx1RDY1NFwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlx1QjJFQlx1QUUzMFwiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlx1QjNDNFx1QUQ2Q1x1QkFBOFx1Qzc0QyBcdUQ0NUNcdUMyRENcIixcclxuICAgIFwic20udGJQYWRcIjogXCJcdUIzQzRcdUFENkNcdUJBQThcdUM3NEMgXHVEMzI4XHVCNTI5XCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1QzcwNFwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdUM2MjRcdUI5NzhcdUNBQkRcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHVDNTQ0XHVCNzk4XCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1QzY3Q1x1Q0FCRFwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1QjNDNFx1QUQ2Q1x1QkFBOFx1Qzc0QyBcdUM3MDRcdUNFNThcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdUM3MDRcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdUM1NDRcdUI3OThcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1QjNDNFx1QUQ2Q1x1QkFBOFx1Qzc0QyBcdUJDMzBcdUFDQkRcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlx1QkM4NFx1RDJCQyBcdUJDMzBcdUFDQkRcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdUJDODRcdUQyQkMgXHVEMTRDXHVCNDUwXHVCOUFDIFx1QzJBNFx1RDBDMFx1Qzc3Q1wiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiXHVCQzg0XHVEMkJDIFx1RDE0Q1x1QjQ1MFx1QjlBQyBcdUMwQzlcdUMwQzFcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHVCQzg0XHVEMkJDIFx1RDE0RFx1QzJBNFx1RDJCOCBcdUMwQzlcdUMwQzFcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdUIzQzRcdUFENkNcdUJBQThcdUM3NEMgXHVDRDA4XHVBRTMwXHVENjU0XCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1QjE3OFx1QjREQyBcdUMyQTRcdUQwQzBcdUM3N0NcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiXHVDMTIwIFx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJcdUMxMjAgXHVCMTA4XHVCRTQ0XCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiXHVDMEFDXHVDNkE5XHVDNzkwIFx1QzgxNVx1Qzc1OCBcdUM5QzBcdUM2QjBcdUFFMzBcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiXHVEMTRDXHVCNDUwXHVCOUFDIFx1QkMxOFx1QUNCRFwiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJcdUIxNzhcdUI0REMgXHVBQzgwXHVDMEM5Li4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiXHVCOEU4XHVEMkI4XCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiXHVDMEM4IFx1QjhFOFx1RDJCOFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJcdUM3OTBcdUMyRERcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiTWluZFpKIFx1QzEyNFx1QzgxNVwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlx1QzVCOFx1QzVCNFwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJcdUM3NzhcdUQxMzBcdUQzOThcdUM3NzRcdUMyQTQgXHVDNUI4XHVDNUI0XCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlx1RDE0Q1x1QjlDOFwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiXHVDMEM5XHVDMEMxIFx1RDE0Q1x1QjlDOFwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJcdUJDMURcdUFDOENcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJcdUM1QjRcdUI0NjFcdUFDOENcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJcdUIzQzRcdUFENkNcdUJBQThcdUM3NEMgXHVENDVDXHVDMkRDXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlx1QjNDNFx1QUQ2Q1x1QkFBOFx1Qzc0QyBcdUQ0NUNcdUMyRENcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiXHVDRTk0XHVCQzg0XHVDMkE0IFx1QkMzMFx1QUNCRFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiXHVCQzMwXHVBQ0JEIFx1QzBDOVx1QzBDMVwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJcdUM4MTVcdUJDRjRcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJcdUJDODRcdUM4MDRcIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlx1Qzc5MVx1QzEzMVx1Qzc5MFwiLFxyXG4gICAgXCJzZXQuZGVzY1wiOlxyXG4gICAgICAgIFwiT2JzaWRpYW5cdUM2QTkgXHVDNjI0XHVENTA4IFx1QzE4Q1x1QzJBNCBcdUI5QzhcdUM3NzhcdUI0RENcdUI5RjUgXHVDNTcxLiBcdUNFRTRcdUMyQTRcdUQxNDAgXHVDMkE0XHVEMEMwXHVDNzdDLCBcdUI4MDhcdUM3NzhcdUJDRjRcdUM2QjAgXHVDNUYwXHVBQ0IwLCBcdUIyRTRcdUM5MTEgXHVDMTIwXHVEMERELCBcdUI0RENcdUI3OThcdUFERjggXHVDNTY0IFx1QjREQ1x1Qjg2RCwgTWFya2Rvd24gXHVDOUMwXHVDNkQwLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlx1QzVDNVx1QjM3MFx1Qzc3NFx1RDJCOFwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViIFx1QzgwMFx1QzdBNVx1QzE4Q1wiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiXHVDNjI0XHVENTA4XHVDMThDXHVDMkE0IFx1Qzc5MVx1QUMwMCBcdUQ2QzRcdUM2RDBcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJcdUQwQTRcdUJDRjRcdUI0REMgXHVCMkU4XHVDRDk1XHVEMEE0XCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlx1QjJFOFx1Q0Q5NVx1RDBBNCBcdUMwQUNcdUM2QTlcdUM3OTAgXHVDODE1XHVDNzU4XCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIlx1QjE3OFx1QjREQyBcdUQzQjhcdUM5RDFcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiXHVENjE1XHVDODFDIFx1Q0Q5NFx1QUMwMFwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiXHVDNzkwXHVDMkREIFx1Q0Q5NFx1QUMwMFwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiXHVCMTc4XHVCNERDIFx1RDNFQ1x1Q0VFNFx1QzJBNFwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdUMyRTRcdUQ1ODlcdUNERThcdUMxOENcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiXHVCMkU0XHVDMkRDXHVDMkU0XHVENTg5XCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiXHVDOTA0XHVCQzE0XHVBRkM4IChcdUQzQjhcdUM5RDEgXHVDOTExKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJcdUNFOTRcdUJDODRcdUMyQTQgXHVCNERDXHVCNzk4XHVBREY4XCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiXHVENjU1XHVCMzAwXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlx1Q0Q5NVx1QzE4Q1wiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlx1RDY1NVx1QjMwMC9cdUNEOTVcdUMxOEMgXHVDRDA4XHVBRTMwXHVENjU0XCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJcdUM3MDRcdUI4NUNcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiXHVDNTQ0XHVCNzk4XHVCODVDXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlx1QzY3Q1x1Q0FCRFx1QzczQ1x1Qjg1Q1wiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiXHVDNjI0XHVCOTc4XHVDQUJEXHVDNzNDXHVCODVDXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJcdUQwQTRcdUI5N0MgXHVCMjA0XHVCOTc0XHVDMTM4XHVDNjk0Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJcdUMyQTRcdUQwNkNcdUI4NjQgXHVCQzBGIFx1RDY1NVx1QjMwMC9cdUNEOTVcdUMxOENcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJcdUMxMzhcdUI4NUMgXHVDMkE0XHVEMDZDXHVCODY0IFx1QkMxOFx1QzgwNFwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIlx1QUMwMFx1Qjg1QyBcdUMyQTRcdUQwNkNcdUI4NjQgXHVCQzE4XHVDODA0XCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiXHVENjU1XHVCMzAwL1x1Q0Q5NVx1QzE4QyBcdUJDMThcdUM4MDRcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIlx1QzBERFx1QzEzMSBcdUMyREMgXHVEM0I4XHVDOUQxXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHVDMEM4IFx1QjE3OFx1QjREQyBcdUMwRERcdUMxMzEgXHVDMkRDIFx1RDNCOFx1QzlEMSBcdUJBQThcdUI0RENcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiXHVCOEU4XHVEMkI4IFx1Qzc3NFx1Qjk4NFwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiXHVDMEM4IFx1QjhFOFx1RDJCOFx1Qzc1OCBcdUFFMzBcdUJDRjggXHVDNzc0XHVCOTg0XCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJcdUM3OTBcdUMyREQgXHVDNzc0XHVCOTg0XCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiXHVDMEM4IFx1Qzc5MFx1QzJERFx1Qzc1OCBcdUFFMzBcdUJDRjggXHVDNzc0XHVCOTg0XCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiXHVDNzg1XHVCODI1XHVENTU4XHVDNUVDIFx1RDNCOFx1QzlEMVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJcdUIxNzhcdUI0REMgXHVDMTIwXHVEMEREIFx1QzJEQyBcdUQwQTQgXHVDNzg1XHVCODI1XHVDNzNDXHVCODVDIFx1RDNCOFx1QzlEMVwiLFxyXG59O1xyXG5cclxuY29uc3QgX3B0OiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFJhaXpcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBEZXNmYXplclwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFJlZmF6ZXJcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIE1hcGFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiRm9jYXJcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiUGVzcXVpc2FyXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6UGVzcXVpc2FyIHwgRXNwYVx1MDBFN286RWRpdGFyIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiTm92YSByYWl6XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIk1vZG8gTWFya2Rvd25cIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJQYWluZWwgZGUgZXN0aWxvXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiRm9jYXIgbm8gblx1MDBGM1wiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJQZXNxdWlzYXIgblx1MDBGM3NcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJDb25maWd1cmFcdTAwRTdcdTAwRjVlc1wiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJBbXBsaWFyXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJSZWR1emlyXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFBlcnNvbmFsaXphZG9cIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEV4Y2x1aXIgZW0gbG90ZVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEVkaXRhciBlc3RpbG9cIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTm92YSByYWl6XCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IERlc2ZhemVyXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFJlZmF6ZXJcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEVzdGlsbyBnbG9iYWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgRWRpdGFyXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBFc3RpbG9cIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgQ29waWFyXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgUmVjb3J0YXJcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIENvbGFyXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBGaWxob1wiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IEZpbGhvIGVzcXVlcmRvXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IElybVx1MDBFM29cIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBFeGNsdWlyXCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIk9jdWx0YXIgYmFycmFcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggRXN0aWxvIGdsb2JhbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIk5cdTAwRjMgZmlsaG9cIixcclxuICAgIFwic20ucm9vdFwiOiBcIk5cdTAwRjMgcmFpelwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkZ1bmRvXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJDb3IgZG8gdGV4dG9cIixcclxuICAgIFwic20uZm9udFNpemVcIjogXCJUYW1hbmhvIGRhIGZvbnRlXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJGb250ZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIkVzdGlsbyBkYSBib3JkYVwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIkNvciBkYSBib3JkYVwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIkxhcmd1cmEgZGEgYm9yZGFcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiUmFpbyBkYSBib3JkYVwiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIkxhcmd1cmEgbVx1MDBFRG4uXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIkFsdHVyYSBtXHUwMEVEbi5cIixcclxuICAgIFwic20uY29ublwiOiBcIkNvbmV4XHUwMEUzb1wiLFxyXG4gICAgXCJzbS50eXBlXCI6IFwiVGlwb1wiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIkNvclwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkxhcmd1cmFcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIkNvbXByaW1lbnRvXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggQXJjby1cdTAwRURyaXNcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIkRpcmVcdTAwRTdcdTAwRTNvXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiRXNwYVx1MDBFN2FtZW50byBlbnRyZSBpcm1cdTAwRTNvc1wiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIkRpcmVpdGFcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIkVzcXVlcmRhXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJBbWJvc1wiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0YVwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJTZWxlXHUwMEU3XHUwMEUzb1wiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIkNvciBkZSBzZWxlXHUwMEU3XHUwMEUzb1wiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIkxhcmd1cmEgZGUgc2VsZVx1MDBFN1x1MDBFM29cIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiRGVzbG9jYW1lbnRvIGRvIGNvbnRvcm5vXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiQ29yIGNvbnRvcm5vIGVkaVx1MDBFN1x1MDBFM29cIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIkxhcmd1cmEgY29udG9ybm8gZWRpXHUwMEU3XHUwMEUzb1wiLFxyXG4gICAgXCJzbS5ib3hTZWxDb2xvclwiOiBcIkNvciBkZSBzZWxlXHUwMEU3XHUwMEUzb1wiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJBbGluaGFtZW50b1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlByZWVuY2hpbWVudG8gdGV4dG9cIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJBbHR1cmEgZGEgbGluaGFcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJGdW5kbyBkYSB0ZWxhXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiUmVkZWZpbmlyXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiRmVjaGFyXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiTW9zdHJhciBiYXJyYVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlByZWVuY2hpbWVudG8gYmFycmFcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiQ2ltYVwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJEaXJlaXRhXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIkJhaXhvXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIkVzcXVlcmRhXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiUG9zaVx1MDBFN1x1MDBFM28gYmFycmFcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJUb3BvXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiRnVuZG9cIixcclxuICAgIFwic20udGJCZ1wiOiBcIkZ1bmRvIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJGdW5kbyBib3RcdTAwRTNvXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiRXN0aWxvIGJvcmRhIGJvdFx1MDBFM29cIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIkNvciBib3JkYSBib3RcdTAwRTNvXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIkNvciB0ZXh0byBib3RcdTAwRTNvXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiUmVkZWZpbmlyIGJhcnJhXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEVzdGlsbyBkbyBuXHUwMEYzXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkNvciBkYSBsaW5oYVwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJMYXJndXJhIGRhIGxpbmhhXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiTGltcGFyIHBlcnNvbmFsaXphXHUwMEU3XHUwMEUzb1wiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJSYWlvIGRhIGJvcmRhXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlBlc3F1aXNhciBuXHUwMEYzcy4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlJhaXpcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOb3ZhIHJhaXpcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiRmlsaG9cIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiQ29uZmlndXJhXHUwMEU3XHUwMEY1ZXMgTWluZFpKXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiSWRpb21hXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIklkaW9tYSBkYSBpbnRlcmZhY2VcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiVGVtYSBkZSBjb3JcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiQ2xhcm9cIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJFc2N1cm9cIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJNb3N0cmFyIGJhcnJhXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIk1vc3RyYXIgYmFycmFcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiRnVuZG8gZGEgdGVsYVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiQ29yIGRlIGZ1bmRvXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlNvYnJlXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc1x1MDBFM29cIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIkF1dG9yXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJBcHAgZGUgbWFwYSBtZW50YWwgZGUgY1x1MDBGM2RpZ28gYWJlcnRvIHBhcmEgT2JzaWRpYW4gY29tIGVzdGlsb3MgcGVyc29uYWxpemFkb3MsIGNvbmV4XHUwMEY1ZXMgYXJjby1cdTAwRURyaXMsIHNlbGVcdTAwRTdcdTAwRTNvIG1cdTAwRkFsdGlwbGEsIGFycmFzdGFyIGUgc29sdGFyIGUgTWFya2Rvd24uXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiQXR1YWxpemFkb1wiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiUmVwb3NpdFx1MDBGM3JpbyBHaXRIdWJcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIkFwb2lhciBvIGF1dG9yXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiQXRhbGhvcyBkZSB0ZWNsYWRvXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlBlcnNvbmFsaXphciBhdGFsaG9zXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIkVkaXRhciBuXHUwMEYzXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkFkaWNpb25hciBpcm1cdTAwRTNvXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJBZGljaW9uYXIgZmlsaG9cIixcclxuICAgIFwic2V0LmtleS5mb2N1c1wiOiBcIkZvY2FyIG5vIG5cdTAwRjNcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiRGVzZmF6ZXJcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiUmVmYXplclwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlF1ZWJyYSBkZSBsaW5oYSAoZWRpXHUwMEU3XHUwMEUzbylcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiQXJyYXN0YXIgdGVsYVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIkFtcGxpYXJcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiUmVkdXppclwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlJlZGVmaW5pciB6b29tXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJDaW1hXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIkJhaXhvXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIkVzcXVlcmRhXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJEaXJlaXRhXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJQcmVzc2lvbmUuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlJvbGFnZW0gZSB6b29tXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiSW52ZXJ0ZXIgcm9sYWdlbSBWXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSW52ZXJ0ZXIgcm9sYWdlbSBIXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiSW52ZXJ0ZXIgem9vbVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiRWRpdGFyIGFvIGNyaWFyXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiTW9kbyBlZGlcdTAwRTdcdTAwRTNvIGFvIGNyaWFyIG5cdTAwRjNzXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIk5vbWUgZGEgcmFpelwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiTm9tZSBwYWRyXHUwMEUzbyBwYXJhIHJhXHUwMEVEemVzXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJOb21lIGRvIGZpbGhvXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiTm9tZSBwYWRyXHUwMEUzbyBwYXJhIGZpbGhvc1wiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIkRpZ2l0YXIgcGFyYSBlZGl0YXJcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiRWRpdGFyIGFvIGRpZ2l0YXIgY29tIG5cdTAwRjMgc2VsZWNpb25hZG9cIixcclxufTtcclxuXHJcbmNvbnN0IF9maTogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBKdXVyaVwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IEt1bW9hXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgVGVlIHV1ZGVsbGVlblwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgS2FydHRhXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFR5eWxpXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiS29oZGlzdGFcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiSGFrdVwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOkhha3UgfCBWXHUwMEU0bGlseVx1MDBGNm50aTpNdW9ra2FhIHwgQ3RybCtDL1YvWFwiLFxyXG4gICAgXCJ0Yi5uZXdSb290XCI6IFwiVXVzaSBqdXVyaVwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93bi10aWxhXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiVHl5bGlwYW5lZWxpXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiS29oZGlzdGEgc29sbXV1blwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJFdHNpIHNvbG11amFcIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJBc2V0dWtzZXRcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiTFx1MDBFNGhlbm5cdTAwRTRcIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIkxvaXRvbm5hXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIE11a2F1dGV0dHVcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFBvaXN0YSBrYWlra2lcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBNdW9ra2FhIHR5eWxpXHUwMEU0XCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IFV1c2kganV1cmlcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgS3Vtb2FcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgVGVlIHV1ZGVsbGVlblwiLFxyXG4gICAgXCJjdHguZ2xvYmFsU3R5bGVcIjogXCJcdUQ4M0NcdURGQTggWWxlaW5lbiB0eXlsaVwiLFxyXG4gICAgXCJjdHguZWRpdFwiOiBcIlx1MjcwRlx1RkUwRiBNdW9ra2FhXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBUeXlsaVwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBLb3Bpb2lcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBMZWlra2FhXCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBMaWl0XHUwMEU0XCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBMYXBzaVwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFZhc2VuIGxhcHNpXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFNpc2FydXNcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBQb2lzdGFcIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiUGlpbG90YSBwYWxra2lcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggWWxlaW5lbiB0eXlsaVwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIkxhcHNpc29sbXVcIixcclxuICAgIFwic20ucm9vdFwiOiBcIkp1dXJpc29sbXVcIixcclxuICAgIFwic20uYmdcIjogXCJUYXVzdGFcIixcclxuICAgIFwic20udGV4dFwiOiBcIlRla3N0aW4gdlx1MDBFNHJpXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiRm9udHRpa29rb1wiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiRm9udHRpXCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiUmV1bmFuIHR5eWxpXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiUmV1bmFuIHZcdTAwRTRyaVwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIlJldW5hbiBsZXZleXNcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiUmV1bmFuIHB5XHUwMEY2cmlzdHlzXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiVlx1MDBFNGhpbW1cdTAwRTRpc2xldmV5c1wiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJWXHUwMEU0aGltbVx1MDBFNGlza29ya2V1c1wiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiWWh0ZXlzXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXlwcGlcIixcclxuICAgIFwic20uY29sb3JcIjogXCJWXHUwMEU0cmlcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJMZXZleXNcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIlBpdHV1c1wiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiXHVEODNDXHVERjA4IFNhdGVlbmthYXJpXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJTb2xtdW4gc3V1bnRhXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiU2lzYXJ1c3ZcdTAwRTRsaVwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIk9pa2VhXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJWYXNlblwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiTW9sZW1tYXRcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJQYWxldHRpXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlZhbGludGFcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJWYWxpbm5hbiB2XHUwMEU0cmlcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJWYWxpbm5hbiBsZXZleXNcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiXHUwMEM0XHUwMEU0cml2aWl2YW4gc2lpcnR5bVx1MDBFNFwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIk11b2trYXVrc2VuIFx1MDBFNFx1MDBFNHJpdmlpdmFuIHZcdTAwRTRyaVwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiTXVva2thdWtzZW4gXHUwMEU0XHUwMEU0cml2aWl2YW4gbGV2ZXlzXCIsXHJcbiAgICBcInNtLmJveFNlbENvbG9yXCI6IFwiVmFsaW5uYW4gdlx1MDBFNHJpXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRla3N0aW4gdGFzYXVzXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiVGVrc3RpbiB0XHUwMEU0eXRlXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiUml2aW4ga29ya2V1c1wiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIkthbmthYW4gdGF1c3RhXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiUGFsYXV0YVwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlN1bGplXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiTlx1MDBFNHl0XHUwMEU0IHBhbGtraVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlBhbGtpbiB0XHUwMEU0eXRlXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIllsXHUwMEU0XCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIk9pa2VhXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIkFsYVwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJWYXNlblwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlBhbGtpbiBzaWphaW50aVwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIllsaFx1MDBFNFx1MDBFNGxsXHUwMEU0XCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiQWxoYWFsbGFcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlBhbGtpbiB0YXVzdGFcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlBhaW5pa2tlZW4gdGF1c3RhXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiUGFpbmlra2VlbiByZXVuYW4gdHl5bGlcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIlBhaW5pa2tlZW4gcmV1bmFuIHZcdTAwRTRyaVwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJQYWluaWtrZWVuIHRla3N0aW4gdlx1MDBFNHJpXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiUGFsYXV0YSBwYWxra2lcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggU29sbXVuIHR5eWxpXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlZpaXZhbiB2XHUwMEU0cmlcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiVmlpdmFuIGxldmV5c1wiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlR5aGplbm5cdTAwRTQgbXVrYXV0dXNcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiUmV1bmFuIHB5XHUwMEY2cmlzdHlzXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIkV0c2kgc29sbXVqYS4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIkp1dXJpXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiVXVzaSBqdXVyaVwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJMYXBzaVwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogQXNldHVrc2V0XCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiS2llbGlcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiS1x1MDBFNHl0dFx1MDBGNmxpaXR0eW1cdTAwRTRuIGtpZWxpXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlRlZW1hXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJWXHUwMEU0cml0ZWVtYVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJWYWFsZWFcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJUdW1tYVwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIk5cdTAwRTR5dFx1MDBFNCBwYWxra2lcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiTlx1MDBFNHl0XHUwMEU0IHBhbGtraVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJLYW5rYWFuIHRhdXN0YVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiVGF1c3Rhdlx1MDBFNHJpXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlRpZXRvamFcIixcclxuICAgIFwic2V0LnZlcnNpb25cIjogXCJWZXJzaW9cIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIlRla2lqXHUwMEU0XCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJPYnNpZGlhbmluIG1vbmlwdW9saW5lbiBhdm9pbWVuIGxcdTAwRTRoZGVrb29kaW4gbWllbGxla2FydHRhc292ZWxsdXMgbXVrYXV0ZXR1aWxsYSB0eXlsZWlsbFx1MDBFNCwgc2F0ZWVua2Fhcml2aWl2b2lsbGEgamEgTWFya2Rvd24tdHVlbGxhLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlBcdTAwRTRpdml0ZXR0eVwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViLXZhcmFzdG9cIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlR1ZSB0ZWtpalx1MDBFNFx1MDBFNFwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlBpa2FuXHUwMEU0cHBcdTAwRTRpbWV0XCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIk11b2trYWEgcGlrYW5cdTAwRTRwcFx1MDBFNGltaVx1MDBFNFwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJNdW9ra2FhIHNvbG11YVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJMaXNcdTAwRTRcdTAwRTQgc2lzYXJ1c1wiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiTGlzXHUwMEU0XHUwMEU0IGxhcHNpXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJLb2hkaXN0YSBzb2xtdXVuXCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIkt1bW9hXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlRlZSB1dWRlbGxlZW5cIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJSaXZpbnZhaWh0byAobXVva2thdWtzZXNzYSlcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiVmVkXHUwMEU0IGthbmdhc3RhXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiTFx1MDBFNGhlbm5cdTAwRTRcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiTG9pdG9ubmFcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJOb2xsYWEgem9vbWF1c1wiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiWWxcdTAwRjZzXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIkFsYXNcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiVmFzZW1tYWxsZVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiT2lrZWFsbGVcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlBhaW5hIG5cdTAwRTRwcFx1MDBFNGludFx1MDBFNC4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiVmllcml0eXMgamEgem9vbWF1c1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIktcdTAwRTRcdTAwRTRublx1MDBFNCBWLXZpZXJpdHlzXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiS1x1MDBFNFx1MDBFNG5uXHUwMEU0IEgtdmllcml0eXNcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJLXHUwMEU0XHUwMEU0bm5cdTAwRTQgem9vbWF1c1wiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiTXVva2thYSBsdW90YWVzc2FcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJNdW9ra2F1c3RpbGEgdXVzaWxsZSBzb2xtdWlsbGVcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiSnV1cmVuIG5pbWlcIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlV1c2llbiBqdXVyaWVuIG9sZXR1c25pbWlcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIkxhcHNlbiBuaW1pXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiVXVzaWVuIGxhc3RlbiBvbGV0dXNuaW1pXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiS2lyam9pdGEgbXVva2F0YWtzZXNpXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlBhaW5hIG5cdTAwRTRwcFx1MDBFNGludFx1MDBFNCBtdW9rYXRha3Nlc2kgdmFsaXR0dWEgc29sbXVhXCIsXHJcbn07XHJcblxyXG5jb25zdCBfbm86IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgUm90XCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgQW5ncmVcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBHalx1MDBGOHIgb21cIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIEthcnRcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZva3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlNcdTAwRjhrXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6U1x1MDBGOGsgfCBNZWxsb21yb206UmVkaWdlciB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk55IHJvdFwiLFxyXG4gICAgXCJ0Yi50aXBVbmRvXCI6IFwiQ3RybCtaXCIsXHJcbiAgICBcInRiLnRpcFJlZG9cIjogXCJDdHJsK1NoaWZ0K1pcIixcclxuICAgIFwidGIudGlwTWRcIjogXCJNYXJrZG93bi1tb2R1c1wiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlN0aWxwYW5lbFwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkZva3VzZXIgbm9kZVwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJTXHUwMEY4ayBub2RlclwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIklubnN0aWxsaW5nZXJcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiWm9vbSBpbm5cIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlpvb20gdXRcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgRWdlbmRlZmluZXJ0XCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBTbGV0dCBhbGxlXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggUmVkaWdlciBzdGlsXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IE55IHJvdFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBBbmdyZVwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBHalx1MDBGOHIgb21cIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbCBzdGlsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFJlZGlnZXJcIixcclxuICAgIFwiY3R4LnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgS29waWVyXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgS2xpcHAgdXRcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIExpbSBpbm5cIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IEJhcm5cIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBWZW5zdHJlIGJhcm5cIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgU1x1MDBGOHNrZW5cIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBTbGV0dFwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJTa2p1bCB2ZXJrdFx1MDBGOHlsaW5qZVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWwgc3RpbFwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIkJhcm5lbm9kZVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiUm90bm9kZVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIkJha2dydW5uXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJUZWtzdGZhcmdlXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiU2tyaWZ0c3RcdTAwRjhycmVsc2VcIixcclxuICAgIFwic20uZm9udFwiOiBcIlNrcmlmdHR5cGVcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJLYW50c3RpbFwiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIkthbnRmYXJnZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIkthbnRicmVkZGVcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiS2FudHJhZGl1c1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIk1pbi4gYnJlZGRlXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIk1pbi4gaFx1MDBGOHlkZVwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiRm9yYmluZGVsc2VcIixcclxuICAgIFwic20udHlwZVwiOiBcIlR5cGVcIixcclxuICAgIFwic20uY29sb3JcIjogXCJGYXJnZVwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIkJyZWRkZVwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiTGVuZ2RlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggUmVnbmJ1ZVwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiTm9kZXJldG5pbmdcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJTXHUwMEY4c2tlbmF2c3RhbmRcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJIXHUwMEY4eXJlXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJWZW5zdHJlXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJCZWdnZVwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0dFwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJWYWxnXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiVmFsZ2ZhcmdlXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiVmFsZ2JyZWRkZVwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJLb250dXJmb3Jza3l2bmluZ1wiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlJlZGlnZXJpbmdza29udHVyXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lV2lkdGhcIjogXCJSZWRpZ2VyaW5nc2tvbnR1cmJyZWRkZVwiLFxyXG4gICAgXCJzbS5ib3hTZWxDb2xvclwiOiBcIlV0dmFsZ3NmYXJnZVwiLFxyXG4gICAgXCJzbS50ZXh0QWxpZ25cIjogXCJUZWtzdGp1c3RlcmluZ1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlRla3N0dXRmeWxsaW5nXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiTGluamVoXHUwMEY4eWRlXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiTGVycmV0c2Jha2dydW5uXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiVGlsYmFrZXN0aWxsXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiTHVra1wiLFxyXG4gICAgXCJzbS5zaG93VG9vbGJhclwiOiBcIlZpcyB2ZXJrdFx1MDBGOHlsaW5qZVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlZlcmt0XHUwMEY4eWxpbmpldXRmeWxsaW5nXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlRvcHBcIixcclxuICAgIFwic20udGJQYWRSXCI6IFwiSFx1MDBGOHlyZVwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJCdW5uXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlZlbnN0cmVcIixcclxuICAgIFwic20udGJQb3NcIjogXCJWZXJrdFx1MDBGOHlsaW5qZXBvc2lzam9uXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiVG9wcFwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIkJ1bm5cIixcclxuICAgIFwic20udGJCZ1wiOiBcIlZlcmt0XHUwMEY4eWxpbmplYmFrZ3J1bm5cIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIktuYXBwYmFrZ3J1bm5cIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJLbmFwcGthbnRzdGlsXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJLbmFwcGthbnRmYXJnZVwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJLbmFwcHRla3N0ZmFyZ2VcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJUaWxiYWtlc3RpbGwgdmVya3RcdTAwRjh5bGluamVcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggTm9kZXN0aWxcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiTGluamVmYXJnZVwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJMaW5qZWJyZWRkZVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIkZqZXJuIHRpbHBhc25pbmdcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiS2FudHJhZGl1c1wiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJTXHUwMEY4ayBub2Rlci4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlJvdFwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk55IHJvdFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJCYXJuXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBJbm5zdGlsbGluZ2VyXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiU3ByXHUwMEU1a1wiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJHcmVuc2Vzbml0dHNwclx1MDBFNWtcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiRmFyZ2V0ZW1hXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIkx5c3RcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJNXHUwMEY4cmt0XCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiVmlzIHZlcmt0XHUwMEY4eWxpbmplXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlZpcyB2ZXJrdFx1MDBGOHlsaW5qZVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJMZXJyZXRzYmFrZ3J1bm5cIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkJha2dydW5uc2ZhcmdlXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIk9tXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2pvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiRm9yZmF0dGVyXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJGdW5rc2pvbnNyaWsgXHUwMEU1cGVuIGtpbGRla29kZSB0YW5rZWthcnQtYXBwIGZvciBPYnNpZGlhbiBtZWQgdGlscGFzc2VkZSBzdGlsZXIsIHJlZ25idWVmb3JiaW5kZWxzZXIgb2cgTWFya2Rvd24tc3RcdTAwRjh0dGUuXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiT3BwZGF0ZXJ0XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWItZGVwb3RcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlN0XHUwMEY4dHQgZm9yZmF0dGVyZW5cIixcclxuICAgIFwic2V0LmtleXNcIjogXCJIdXJ0aWd0YXN0ZXJcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiVGlscGFzcyBodXJ0aWd0YXN0ZXJcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiUmVkaWdlciBub2RlXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkxlZ2cgdGlsIHNcdTAwRjhza2VuXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJMZWdnIHRpbCBiYXJuXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJGb2t1c2VyIG5vZGVcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiQW5ncmVcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiR2pcdTAwRjhyIG9tXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiTGluamVza2lmdCAocmVkaWdlcmluZylcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiRHJhIGxlcnJldFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlpvb20gaW5uXCIsXHJcbiAgICBcInNldC5rZXkuem9vbU91dFwiOiBcIlpvb20gdXRcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJUaWxiYWtlc3RpbGwgem9vbVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiT3BwXCIsXHJcbiAgICBcInNldC5rZXkuZG93blwiOiBcIk5lZFwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJWZW5zdHJlXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJIXHUwMEY4eXJlXCIsXHJcbiAgICBcInNldC5rZXkucHJlc3NcIjogXCJUcnlrayBlbiB0YXN0Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJSdWxsaW5nIG9nIHpvb21cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJJbnZlcnRlciBWLXJ1bGxpbmdcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJJbnZlcnRlciBILXJ1bGxpbmdcIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJJbnZlcnRlciB6b29tXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJSZWRpZ2VyIHZlZCBvcHByZXR0ZWxzZVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIlJlZGlnZXJpbmdzbW9kdXMgdmVkIG55ZSBub2RlclwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJSb3RuYXZuXCIsXHJcbiAgICBcInNldC5yb290TmFtZURlc2NcIjogXCJTdGFuZGFyZG5hdm4gZm9yIG55ZSByXHUwMEY4dHRlclwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiQmFybmVuYXZuXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiU3RhbmRhcmRuYXZuIGZvciBueWUgYmFyblwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlNrcml2IGZvciBcdTAwRTUgcmVkaWdlcmVcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiU2tyaXYgZm9yIFx1MDBFNSByZWRpZ2VyZSB2YWxndCBub2RlXCIsXHJcbn07XHJcblxyXG5jb25zdCBfbmw6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgV29ydGVsXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgT25nZWRhYW5cIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBPcG5pZXV3XCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBLYWFydFwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlqbFwiLFxyXG4gICAgXCJ0Yi5mb2N1c1wiOiBcIkZvY3VzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlpvZWtlblwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlpvZWtlbiB8IFNwYXRpZTpCZXdlcmtlbiB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk5pZXV3ZSB3b3J0ZWxcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24tbW9kdXNcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJTdGlqbHBhbmVlbFwiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIkZvY3VzIG9wIGtub29wcHVudFwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJLbm9vcHB1bnRlbiB6b2VrZW5cIixcclxuICAgIFwidGIudGlwU2V0dGluZ3NcIjogXCJJbnN0ZWxsaW5nZW5cIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiSW56b29tZW5cIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlVpdHpvb21lblwiLFxyXG4gICAgXCJzbS5jdXN0b21SYWluYm93XCI6IFwiKyBBYW5nZXBhc3RcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEFsbGVzIHZlcndpamRlcmVuXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpamwgYmV3ZXJrZW5cIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTmlldXdlIHdvcnRlbFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBPbmdlZGFhblwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBPcG5pZXV3XCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWxlIHN0aWpsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIEJld2Vya2VuXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlqbFwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBLb3BpXHUwMEVCcmVuXCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgS25pcHBlblwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgUGxha2tlblwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgS2luZFwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IExpbmtzIGtpbmRcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgQnJvZXIvenVzXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgVmVyd2lqZGVyZW5cIixcclxuICAgIFwiY3R4LmhpZGVUb29sYmFyXCI6IFwiV2Vya2JhbGsgdmVyYmVyZ2VuXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbGUgc3RpamxcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJLaW5ka25vb3BwdW50XCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJXb3J0ZWxrbm9vcHB1bnRcIixcclxuICAgIFwic20uYmdcIjogXCJBY2h0ZXJncm9uZFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiVGVrc3RrbGV1clwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIkxldHRlcmdyb290dGVcIixcclxuICAgIFwic20uZm9udFwiOiBcIkxldHRlcnR5cGVcIixcclxuICAgIFwic20uYm9yZGVyU3R5bGVcIjogXCJSYW5kc3RpamxcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJSYW5ka2xldXJcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJSYW5kYnJlZWR0ZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJSYW5kcmFkaXVzXCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiTWluLiBicmVlZHRlXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIk1pbi4gaG9vZ3RlXCIsXHJcbiAgICBcInNtLmNvbm5cIjogXCJWZXJiaW5kaW5nXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXBlXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiS2xldXJcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJCcmVlZHRlXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMZW5ndGVcIixcclxuICAgIFwic20ucmFpbmJvd1wiOiBcIlx1RDgzQ1x1REYwOCBSZWdlbmJvb2dcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlJpY2h0aW5nXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiVHVzc2VuYWZzdGFuZFwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlJlY2h0c1wiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiTGlua3NcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkJlaWRlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXRcIixcclxuICAgIFwic20uc2VsXCI6IFwiU2VsZWN0aWVcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJTZWxlY3RpZWtsZXVyXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiU2VsZWN0aWVicmVlZHRlXCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIk9tdHJla29mZnNldFwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIkJld2Vya2luZ3NvbXRyZWtrbGV1clwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiQmV3ZXJraW5nc29tdHJla2JyZWVkdGVcIixcclxuICAgIFwic20uYm94U2VsQ29sb3JcIjogXCJTZWxlY3RpZWtsZXVyXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRla3N0dWl0bGlqbmluZ1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlRla3N0dnVsbGluZ1wiLFxyXG4gICAgXCJzbS5ub2RlTGluZUhlaWdodFwiOiBcIlJlZ2VsaG9vZ3RlXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiQ2FudmFzIGFjaHRlcmdyb25kXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiSGVyc3RlbGxlblwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlNsdWl0ZW5cIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJXZXJrYmFsayB0b25lblwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIldlcmtiYWxrdnVsbGluZ1wiLFxyXG4gICAgXCJzbS50YlBhZFRcIjogXCJCb3ZlblwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJSZWNodHNcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiT25kZXJcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiTGlua3NcIixcclxuICAgIFwic20udGJQb3NcIjogXCJXZXJrYmFsa3Bvc2l0aWVcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJCb3ZlblwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIk9uZGVyXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJXZXJrYmFsayBhY2h0ZXJncm9uZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiS25vcCBhY2h0ZXJncm9uZFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIktub3AgcmFuZHN0aWpsXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJLbm9wIHJhbmRrbGV1clwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJLbm9wIHRla3N0a2xldXJcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJXZXJrYmFsayBoZXJzdGVsbGVuXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEtub29wcHVudHN0aWpsXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIkxpam5rbGV1clwiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJMaWpuYnJlZWR0ZVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIkFhbnBhc3Npbmcgd2lzc2VuXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlJhbmRyYWRpdXNcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiS25vb3BwdW50ZW4gem9la2VuLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiV29ydGVsXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiTmlldXdlIHdvcnRlbFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJLaW5kXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBJbnN0ZWxsaW5nZW5cIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJUYWFsXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIkludGVyZmFjZXRhYWxcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGhlbWFcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIktsZXVyZW50aGVtYVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJMaWNodFwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIkRvbmtlclwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIldlcmtiYWxrIHRvbmVuXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIldlcmtiYWxrIHRvbmVuXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIkNhbnZhcyBhY2h0ZXJncm9uZFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiQWNodGVyZ3JvbmRrbGV1clwiLFxyXG4gICAgXCJzZXQuYWJvdXRcIjogXCJPdmVyXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2llXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJBdXRldXJcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIlVpdGdlYnJlaWRlIG9wZW4gc291cmNlIG1pbmRtYXAtYXBwIHZvb3IgT2JzaWRpYW4gbWV0IGFhbmdlcGFzdGUgc3RpamxlbiwgcmVnZW5ib29ndmVyYmluZGluZ2VuIGVuIE1hcmtkb3duLW9uZGVyc3RldW5pbmcuXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiQmlqZ2V3ZXJrdFwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViLXJlcG9zaXRvcnlcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIk9uZGVyc3RldW4gZGUgYXV0ZXVyXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiU25lbHRvZXRzZW5cIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiU25lbHRvZXRzZW4gYWFucGFzc2VuXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIktub29wcHVudCBiZXdlcmtlblwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJCcm9lci96dXMgdG9ldm9lZ2VuXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJLaW5kIHRvZXZvZWdlblwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiRm9jdXMgb3Aga25vb3BwdW50XCIsXHJcbiAgICBcInNldC5rZXkudW5kb1wiOiBcIk9uZ2VkYWFuIG1ha2VuXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIk9wbmlldXdcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJSZWdlbGFmYnJla2luZyAoYmV3ZXJraW5nKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJDYW52YXMgc2xlcGVuXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiSW56b29tZW5cIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiVWl0em9vbWVuXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiWm9vbSBoZXJzdGVsbGVuXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJPbWhvb2dcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiT21sYWFnXCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIkxpbmtzXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJSZWNodHNcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIkRydWsgb3AgZWVuIHRvZXRzLi4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJTY3JvbGxlbiBlbiB6b29tZW5cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJWZXJ0aWNhYWwgb21rZXJlblwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkhvcml6b250YWFsIG9ta2VyZW5cIixcclxuICAgIFwic2V0LmludmVydFpvb21cIjogXCJab29tIG9ta2VyZW5cIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIkJld2Vya2VuIGJpaiBhYW5tYWtlblwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIkJld2Vya2luZ3Ntb2R1cyBiaWogbmlldXdlIGtub29wcHVudGVuXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIldvcnRlbG5hYW1cIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlN0YW5kYWFyZG5hYW0gdm9vciB3b3J0ZWxzXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJLaW5kbmFhbVwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlN0YW5kYWFyZG5hYW0gdm9vciBraW5kZXJlblwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdFwiOiBcIlR5cCBvbSB0ZSBiZXdlcmtlblwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJCZXdlcmsgZG9vciB0ZSB0eXBlbiBiaWogZ2VzZWxlY3RlZXJkIGtub29wcHVudFwiLFxyXG59O1xyXG5cclxuY29uc3QgX2xpOiB0eXBlb2YgX2VuID0ge1xyXG4gICAgXCJ0Yi5yb290XCI6IFwiXHUyNzk1IFd1cnplbFwiLFxyXG4gICAgXCJ0Yi51bmRvXCI6IFwiXHUyMUE5IFJcdTAwRkNja2dcdTAwRTRuZ2lnXCIsXHJcbiAgICBcInRiLnJlZG9cIjogXCJcdTIxQUEgV2llZGVyaG9sYVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgQ2hhcnRhXCIsXHJcbiAgICBcInRiLnN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFN0aWxcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJGb2t1c1wiLFxyXG4gICAgXCJ0Yi5zZWFyY2hcIjogXCJTdWVjaGVcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpTdWVjaGUgfCBMZWVydGFzY2h0OkJlYXJiZWl0YSB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIk5cdTAwRjZpaSBXdXJ6ZWxcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24tTW9kdXNcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJTdGlsLVBhbmVsXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiQ2hub3RhIGZva3Vzc2llcmFcIixcclxuICAgIFwidGIudGlwU2VhcmNoXCI6IFwiQ2hub3RhIHN1ZWNoZVwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIklzdGVsbGlnYVwiLFxyXG4gICAgXCJ0Yi56b29tSW5cIjogXCJWZXJnclx1MDBGNlx1MDBERmVyYVwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiVmVya2xlaW5lcmFcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgRWlnZXRzXCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBBbGxpIGxcdTAwRjZzY2hhXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbCBiZWFyYmVpdGFcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTlx1MDBGNmlpIFd1cnplbFwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBSXHUwMEZDY2tnXHUwMEU0bmdpZ1wiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBXaWVkZXJob2xhXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBHbG9iYWxlIFN0aWxcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgQmVhcmJlaXRhXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsXCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIEtvcGllcmFcIixcclxuICAgIFwiY3R4LmN1dFwiOiBcIlx1MjcwMlx1RkUwRiBVc3NjaG5pZGFcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIElpZlx1MDBGQ2VnZVwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgQ2hpbmRcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBMZWNodHMgQ2hpbmRcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgR3NjaHdcdTAwRjZzY2h0ZXJcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBMXHUwMEY2c2NoYVwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJMZWlzY2h0YSB2ZXJzdGVja2FcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggR2xvYmFsZSBTdGlsXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiQ2hpbmQtQ2hub3RhXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJXdXJ6ZWwtQ2hub3RhXCIsXHJcbiAgICBcInNtLmJnXCI6IFwiSGludGVyZ3J1bmRcIixcclxuICAgIFwic20udGV4dFwiOiBcIlRleHRmYXJiXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiU2NocmlmdGdyXHUwMEY2c3NlXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJTY2hyaWZ0XCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiUmFuZHN0aWxcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJSYW5kZmFyYlwiLFxyXG4gICAgXCJzbS5ib3JkZXJXaWR0aFwiOiBcIlJhbmRicmVpdGlcIixcclxuICAgIFwic20uYm9yZGVyUmFkaXVzXCI6IFwiUnVuZHVuZ1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIk1pbi4gQnJlaXRpXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIk1pbi4gSFx1MDBGNmNoaVwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiVmVyYmluZGlnXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXBcIixcclxuICAgIFwic20uY29sb3JcIjogXCJGYXJiXCIsXHJcbiAgICBcInNtLndpZHRoXCI6IFwiQnJlaXRpXCIsXHJcbiAgICBcInNtLmNvbm5MZW5ndGhcIjogXCJMXHUwMEU0bmdpXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdUQ4M0NcdURGMDggUlx1MDBFNGdhYm9nYVwiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiUmljaHRpZ1wiLFxyXG4gICAgXCJzbS5ub2RlR2FwWVwiOiBcIkdlc2Nod2lzdGVyYWJzdGFuZFwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlJlY2h0c1wiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiTGVjaHRzXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJCZWlkaVwiLFxyXG4gICAgXCJzbS5yYWluYm93UGFsZXR0ZVwiOiBcIlBhbGV0dGFcIixcclxuICAgIFwic20uc2VsXCI6IFwiVXN3YWhsXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiVXN3YWhsZmFyYlwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIlVzd2FobGJyZWl0aVwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJLb250dXJ2ZXJzYXR6XCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiQmVhcmJlaXRpZ3NyYWhtZWZhcmJcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIkJlYXJiZWl0aWdzcmFobWVicmVpdGlcIixcclxuICAgIFwic20uYm94U2VsQ29sb3JcIjogXCJBdXN3YWhsZmFyYmVcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiVGV4dHVzcmljaHRpZ1wiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlRleHRhYnN0YW5kXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiWmlsZWhcdTAwRjZjaGlcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJMZWlud2FuZGhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiWnJ1Z2dzZXR6YVwiLFxyXG4gICAgXCJzbS5jbG9zZVwiOiBcIlp1YW1hY2hhXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiTGVpc2NodGEgemVpZ2FcIixcclxuICAgIFwic20udGJQYWRcIjogXCJMZWlzY2h0YS1BYnN0YW5kXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIk9iYVwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJSZWNodHNcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiVW50YVwiLFxyXG4gICAgXCJzbS50YlBhZExcIjogXCJMZWNodHNcIixcclxuICAgIFwic20udGJQb3NcIjogXCJMZWlzY2h0YS1Qb3NpdGlvblwiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIk9iYVwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIlVudGFcIixcclxuICAgIFwic20udGJCZ1wiOiBcIkxlaXNjaHRhaGludGVyZ3J1bmRcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIkNobm9wZmhpbnRlcmdydW5kXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyXCI6IFwiQ2hub3BmcmFuZHN0aWxcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJDb2xvclwiOiBcIkNobm9wZnJhbmRmYXJiXCIsXHJcbiAgICBcInNtLnRiQnRuVGV4dFwiOiBcIkNobm9wZnRleHRmYXJiXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiTGVpc2NodGEgenJ1Z2dzZXR6YVwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBDaG5vdGEtU3RpbFwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJMaW5pZWZhcmJcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiTGluaWVicmVpdGlcIixcclxuICAgIFwibnMuY2xlYXJcIjogXCJBcFx1MDBFNHNzaWcgbFx1MDBGNnNjaGVcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiUnVuZHVuZ1wiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJDaG5vdGEgc3VlY2hlLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiV3VyemVsXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiTlx1MDBGNmlpIFd1cnplbFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJDaGluZFwiLFxyXG4gICAgXCJzZXQudGl0bGVcIjogXCJNaW5kWkogSXN0ZWxsaWdhXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiU3Byb2NoXCIsXHJcbiAgICBcInNldC5sYW5nRGVzY1wiOiBcIk9iZXJmbFx1MDBFNGNoYS1TcHJvY2hcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGhlbWFcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIkZhcmJ0aGVtYVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJIZWxsXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiRHVua2VsXCIsXHJcbiAgICBcInNldC50b29sYmFyXCI6IFwiTGVpc2NodGEgemVpZ2FcIixcclxuICAgIFwic2V0LnRvb2xiYXJEZXNjXCI6IFwiTGVpc2NodGEgemVpZ2FcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiTGVpbndhbmRoaW50ZXJncnVuZFwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdEZXNjXCI6IFwiSGludGVyZ3J1bmRmYXJiXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlx1MDBEQ2JlclwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNpb25cIixcclxuICAgIFwic2V0LmF1dGhvclwiOiBcIkF1dG9yXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJGdW5rdGlvbnNyaWljaGkgT3Blbi1Tb3VyY2UgTWluZG1hcC1BcHAgZlx1MDBGQ3IgT2JzaWRpYW4gbWl0IGVpZ2VuYSBTdGlsYSwgUlx1MDBFNGdhYm9nYS1WZXJiaW5kaWdhIHVuZCBNYXJrZG93bi1TdXBwb3J0LlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIkFrdHVhbGlzaWVydFwiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiR2l0SHViLUFibGFnYVwiLFxyXG4gICAgXCJzZXQuZG9uYXRlXCI6IFwiT3Blbi1Tb3VyY2UtQXV0b3IgdW5kZXJzdFx1MDBGQ3R6YVwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlRhc3Rla29tYmluYXRpb25hXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlRhc3Rla29tYmluYXRpb25hIGFwYXNzYVwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJDaG5vdGEgYmVhcmJlaXRhXCIsXHJcbiAgICBcInNldC5rZXkuc2libGluZ1wiOiBcIkdzY2h3XHUwMEY2c2NodGVyIGRlenVlZlx1MDBGQ2VnYVwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiQ2hpbmQgZGV6dWVmXHUwMEZDZWdhXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJDaG5vdGEgZm9rdXNzaWVyYVwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJSXHUwMEZDY2tnXHUwMEU0bmdpZ1wiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJXaWVkZXJob2xhXCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiWmlsYXVtYnJ1Y2ggKGJpbSBCZWFyYmVpdGEpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIkxlaW53YW5kIHpcdTAwRkNjaGFcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJWZXJnclx1MDBGNlx1MDBERmVyYVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJWZXJrbGVpbmVyYVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21SZXNldFwiOiBcIlpvb20genJ1Z2dzZXR6YVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiVWZcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiQWJcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiTGVjaHRzXCIsXHJcbiAgICBcInNldC5rZXkucmlnaHRcIjogXCJSZWNodHNcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlRhc2NodCBkclx1MDBGQ2NrYS4uLlwiLFxyXG4gICAgXCJzZXQuc2Nyb2xsXCI6IFwiU2Nyb2xsYSB1bmQgWm9vbWFcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJWZXJ0aWthbHMgU2Nyb2xsYSB1bWtlaHJhXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSG9yaXpvbnRhbHMgU2Nyb2xsYSB1bWtlaHJhXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiWm9vbXJpY2h0aWcgdW1rZWhyYVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlXCI6IFwiQmkgRXJzdGVsbGlnIGJlYXJiZWl0YVwiLFxyXG4gICAgXCJzZXQuZWRpdE9uQ3JlYXRlRGVzY1wiOiBcIkJlYXJiZWl0aWdzbW9kdXMgYmkgblx1MDBGNmllIENobm90YVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJXdXJ6ZWxuYW1cIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmFtIGZcdTAwRkNyIG5cdTAwRjZpaSBXdXJ6bGFcIixcclxuICAgIFwic2V0LmNoaWxkTmFtZVwiOiBcIkNoaW5kbmFtXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiU3RhbmRhcmRuYW0gZlx1MDBGQ3Igblx1MDBGNmlpIENoaW5kZXJcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJUaXBwYSB6dW0gQmVhcmJlaXRhXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIkJpIHVzZ3dcdTAwRTRobHRlbSBDaG5vdGEgYmVhcmJlaXRhXCIsXHJcbn07XHJcblxyXG5jb25zdCBfZGE6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgUm9kXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgRm9ydHJ5ZFwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIEdlbnRhZ1wiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgS29ydFwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiRm9rdXNcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiU1x1MDBGOGdcIixcclxuICAgIFwidGIuc2V0dGluZ3NcIjogXCJcdTI2OTlcdUZFMEZcIixcclxuICAgIFwidGIuaGVscFwiOiBcIkN0cmwrRjpTXHUwMEY4ZyB8IE1lbGxlbXJ1bTpSZWRpZ1x1MDBFOXIgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOeSByb2RcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTWFya2Rvd24tdGlsc3RhbmRcIixcclxuICAgIFwidGIudGlwU3R5bGVcIjogXCJTdGlscGFuZWxcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJGb2t1c1x1MDBFOXIgcFx1MDBFNSBrbnVkZVwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJTXHUwMEY4ZyBpIGtudWRlclwiLFxyXG4gICAgXCJ0Yi50aXBTZXR0aW5nc1wiOiBcIkluZHN0aWxsaW5nZXJcIixcclxuICAgIFwidGIuem9vbUluXCI6IFwiWm9vbSBpbmRcIixcclxuICAgIFwidGIuem9vbU91dFwiOiBcIlpvb20gdWRcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgQnJ1Z2VyZGVmaW5lcmV0XCIsXHJcbiAgICBcImN0eC5iYXRjaERlbFwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBTbGV0IGFsbGVcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBSZWRpZ1x1MDBFOXIgc3RpbFwiLFxyXG4gICAgXCJjdHgubmV3Um9vdFwiOiBcIlx1Mjc5NSBOeSByb2RcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgRm9ydHJ5ZFwiLFxyXG4gICAgXCJjdHgucmVkb1wiOiBcIlx1MjFBQSBHZW50YWdcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbCBzdGlsXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFJlZGlnXHUwMEU5clwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbFwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBLb3BpXHUwMEU5clwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIEtsaXBcIixcclxuICAgIFwiY3R4LnBhc3RlXCI6IFwiXHVEODNEXHVEQ0NDIEluZHNcdTAwRTZ0XCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBCYXJuXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgVmVuc3RyZSBiYXJuXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFNcdTAwRjhza2VuZGVcIixcclxuICAgIFwiY3R4LmRlbGV0ZVwiOiBcIlx1RDgzRFx1REREMVx1RkUwRiBTbGV0XCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIlNranVsIHZcdTAwRTZya3RcdTAwRjhqc2xpbmplXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEdsb2JhbCBzdGlsXCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiQmFybmVrbnVkZVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiUm9ka251ZGVcIixcclxuICAgIFwic20uYmdcIjogXCJCYWdncnVuZFwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiVGVrc3RmYXJ2ZVwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlNrcmlmdHN0XHUwMEY4cnJlbHNlXCIsXHJcbiAgICBcInNtLmZvbnRcIjogXCJTa3JpZnR0eXBlXCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiS2FudHN0aWxcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJLYW50ZmFydmVcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJLYW50YnJlZGRlXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIkthbnRyYWRpdXNcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJNaW4uIGJyZWRkZVwiLFxyXG4gICAgXCJzbS5taW5IZWlnaHRcIjogXCJNaW4uIGhcdTAwRjhqZGVcIixcclxuICAgIFwic20uY29ublwiOiBcIkZvcmJpbmRlbHNlXCIsXHJcbiAgICBcInNtLnR5cGVcIjogXCJUeXBlXCIsXHJcbiAgICBcInNtLmNvbG9yXCI6IFwiRmFydmVcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJCcmVkZGVcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIkxcdTAwRTZuZ2RlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJSZWduYnVlXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJLbnVkZXJldG5pbmdcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJTXHUwMEY4c2tlbmRlYWZzdGFuZFwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIkhcdTAwRjhqcmVcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlZlbnN0cmVcIixcclxuICAgIFwic20uZGlyQm90aFwiOiBcIkJlZ2dlXCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiUGFsZXRcIixcclxuICAgIFwic20uc2VsXCI6IFwiTWFya2VyaW5nXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiTWFya2VyaW5nc2ZhcnZlXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiTWFya2VyaW5nc2JyZWRkZVwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJLb250dXJmb3Jza3lkbmluZ1wiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVwiOiBcIlJlZGlnZXJpbmdza29udHVyZmFydmVcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlJlZGlnZXJpbmdza29udHVyYnJlZGRlXCIsXHJcbiAgICBcInNtLmJveFNlbENvbG9yXCI6IFwiVmFsZ2ZhcnZlXCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlRla3N0anVzdGVyaW5nXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiVGVrc3R1ZGZ5bGRuaW5nXCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiTGluamVoXHUwMEY4amRlXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiTFx1MDBFNnJyZWRzYmFnZ3J1bmRcIixcclxuICAgIFwic20ucmVzZXRcIjogXCJOdWxzdGlsXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiTHVrXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiVmlzIHZcdTAwRTZya3RcdTAwRjhqc2xpbmplXCIsXHJcbiAgICBcInNtLnRiUGFkXCI6IFwiVlx1MDBFNnJrdFx1MDBGOGpzbGluamV1ZGZ5bGRuaW5nXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlRvcFwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJIXHUwMEY4anJlXCIsXHJcbiAgICBcInNtLnRiUGFkQlwiOiBcIkJ1bmRcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiVmVuc3RyZVwiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlZcdTAwRTZya3RcdTAwRjhqc2xpbmplcG9zaXRpb25cIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJUb3BcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJCdW5kXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJWXHUwMEU2cmt0XHUwMEY4anNsaW5qZWJhZ2dydW5kXCIsXHJcbiAgICBcInNtLnRiQnRuQmdcIjogXCJLbmFwYmFnZ3J1bmRcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJLbmFwIGthbnRzdGlsXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJLbmFwIGthbnRmYXJ2ZVwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJLbmFwIHRla3N0ZmFydmVcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJOdWxzdGlsIHZcdTAwRTZya3RcdTAwRjhqc2xpbmplXCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IEtudWRlc3RpbFwiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJMaW5qZWZhcnZlXCIsXHJcbiAgICBcIm5zLmNvbm5XaWR0aFwiOiBcIkxpbmplYnJlZGRlXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiUnlkIHRpbHBhc25pbmdcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiS2FudHJhZGl1c1wiLFxyXG4gICAgXCJzZWFyY2gucGxhY2Vob2xkZXJcIjogXCJTXHUwMEY4ZyBpIGtudWRlci4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlJvZFwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIk55IHJvZFwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJCYXJuXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIk1pbmRaSiBJbmRzdGlsbGluZ2VyXCIsXHJcbiAgICBcInNldC5sYW5nXCI6IFwiU3Byb2dcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiR3JcdTAwRTZuc2VmbGFkZXNwcm9nXCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlRlbWFcIixcclxuICAgIFwic2V0LnRoZW1lRGVzY1wiOiBcIkZhcnZldGVtYVwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJMeXN0XCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiTVx1MDBGOHJrdFwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlZpcyB2XHUwMEU2cmt0XHUwMEY4anNsaW5qZVwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJWaXMgdlx1MDBFNnJrdFx1MDBGOGpzbGluamVcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiTFx1MDBFNnJyZWRzYmFnZ3J1bmRcIixcclxuICAgIFwic2V0LmNhbnZhc0JnRGVzY1wiOiBcIkJhZ2dydW5kc2ZhcnZlXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIk9tXCIsXHJcbiAgICBcInNldC52ZXJzaW9uXCI6IFwiVmVyc2lvblwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiRm9yZmF0dGVyXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJFbiBmdW5rdGlvbnNyaWcgb3BlbiBzb3VyY2UtdGFua2Vrb3J0YXBwIHRpbCBPYnNpZGlhbiBtZWQgYnJ1Z2VyZGVmaW5lcmVkZSBzdGlsYXJ0ZXIsIHJlZ25idWVmb3JiaW5kZWxzZXIsIG11bHRpdmFsZywgdHJcdTAwRTZrLW9nLXNsaXAgb2cgTWFya2Rvd24taW1wb3J0L2Vrc3BvcnQuXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiT3BkYXRlcmV0XCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJHaXRIdWItYXJraXZcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlN0XHUwMEY4dCBvcGVuIHNvdXJjZS1mb3JmYXR0ZXJlblwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlRhc3RhdHVyZ2VudmVqZVwiLFxyXG4gICAgXCJzZXQua2V5c0Rlc2NcIjogXCJUaWxwYXMgZ2VudmVqZVwiLFxyXG4gICAgXCJzZXQua2V5LmVkaXRcIjogXCJSZWRpZ1x1MDBFOXIga251ZGVcIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiVGlsZlx1MDBGOGogc1x1MDBGOHNrZW5kZVwiLFxyXG4gICAgXCJzZXQua2V5LmNoaWxkXCI6IFwiVGlsZlx1MDBGOGogYmFyblwiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiRm9rdXNcdTAwRTlyIHBcdTAwRTUga251ZGVcIixcclxuICAgIFwic2V0LmtleS51bmRvXCI6IFwiRm9ydHJ5ZFwiLFxyXG4gICAgXCJzZXQua2V5LnJlZG9cIjogXCJHZW50YWdcIixcclxuICAgIFwic2V0LmtleS5saW5lQnJlYWtcIjogXCJMaW5qZXNraWZ0ICh1bmRlciByZWRpZ2VyaW5nKVwiLFxyXG4gICAgXCJzZXQua2V5LmRyYWdDYW52YXNcIjogXCJUclx1MDBFNmsgbFx1MDBFNnJyZWRcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJab29tIGluZFwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJab29tIHVkXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiTnVsc3RpbCB6b29tXCIsXHJcbiAgICBcInNldC5rZXkudXBcIjogXCJOYXZpZ1x1MDBFOXIgb3BcIixcclxuICAgIFwic2V0LmtleS5kb3duXCI6IFwiTmF2aWdcdTAwRTlyIG5lZFwiLFxyXG4gICAgXCJzZXQua2V5LmxlZnRcIjogXCJOYXZpZ1x1MDBFOXIgdmVuc3RyZVwiLFxyXG4gICAgXCJzZXQua2V5LnJpZ2h0XCI6IFwiTmF2aWdcdTAwRTlyIGhcdTAwRjhqcmVcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlRyeWsgcFx1MDBFNSBlbiB0YXN0Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJSdWxuaW5nIG9nIHpvb21cIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJJbnZlcnRlciBsb2RyZXQgcnVsbmluZ1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIkludmVydGVyIHZhbmRyZXQgcnVsbmluZ1wiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIkludmVydGVyIHpvb21yZXRuaW5nXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJSZWRpZ1x1MDBFOXIgdmVkIG9wcmV0dGVsc2VcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIjogXCJSZWRpZ2VyaW5nc3RpbHN0YW5kIHZlZCBueWUga251ZGVyXCIsXHJcbiAgICBcInNldC5yb290TmFtZVwiOiBcIlJvZG5hdm5cIixcclxuICAgIFwic2V0LnJvb3ROYW1lRGVzY1wiOiBcIlN0YW5kYXJkbmF2biBmb3IgbnllIHJcdTAwRjhkZGVyXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJCYXJuZW5hdm5cIixcclxuICAgIFwic2V0LmNoaWxkTmFtZURlc2NcIjogXCJTdGFuZGFyZG5hdm4gZm9yIG55ZSBiXHUwMEY4cm5cIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJTa3JpdiBmb3IgYXQgcmVkaWdlcmVcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXREZXNjXCI6IFwiUmVkaWdcdTAwRTlyIHZlZCBhdCBza3JpdmUgblx1MDBFNXIgZW4ga251ZGUgZXIgdmFsZ3RcIixcclxufTtcclxuXHJcbmNvbnN0IF9oZTogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdTA1RTlcdTA1RDVcdTA1RThcdTA1RTlcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTA1RDFcdTA1RDhcdTA1RENcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdTA1RDFcdTA1RTZcdTA1RTIgXHUwNUU5XHUwNUQ1XHUwNUQxXCIsXHJcbiAgICBcInRiLm1kXCI6IFwiXHVEODNEXHVEQ0M0IE1EXCIsXHJcbiAgICBcInRiLm1hcFwiOiBcIlx1RDgzRFx1RERGQVx1RkUwRiBcdTA1REVcdTA1RTRcdTA1RDRcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNUUxXHUwNUQyXHUwNUUwXHUwNUQ1XHUwNURGXCIsXHJcbiAgICBcInRiLmZvY3VzXCI6IFwiXHUwNURFXHUwNUQ5XHUwNUU3XHUwNUQ1XHUwNUQzXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIlx1MDVEN1x1MDVEOVx1MDVFNFx1MDVENVx1MDVFOVwiLFxyXG4gICAgXCJ0Yi5zZXR0aW5nc1wiOiBcIlx1MjY5OVx1RkUwRlwiLFxyXG4gICAgXCJ0Yi5oZWxwXCI6IFwiQ3RybCtGOlx1MDVEN1x1MDVEOVx1MDVFNFx1MDVENVx1MDVFOSB8IFx1MDVFOFx1MDVENVx1MDVENVx1MDVENzpcdTA1RTJcdTA1RThcdTA1RDlcdTA1REJcdTA1RDQgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJcdTA1RTlcdTA1RDVcdTA1RThcdTA1RTkgXHUwNUQ3XHUwNUQzXHUwNUU5XCIsXHJcbiAgICBcInRiLnRpcFVuZG9cIjogXCJDdHJsK1pcIixcclxuICAgIFwidGIudGlwUmVkb1wiOiBcIkN0cmwrU2hpZnQrWlwiLFxyXG4gICAgXCJ0Yi50aXBNZFwiOiBcIlx1MDVERVx1MDVFNlx1MDVEMSBNYXJrZG93blwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlx1MDVEN1x1MDVEQ1x1MDVENVx1MDVFMFx1MDVEOVx1MDVFQSBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REZcIixcclxuICAgIFwidGIudGlwRm9jdXNcIjogXCJcdTA1REVcdTA1RTdcdTA1RDMgXHUwNUUyXHUwNURDIFx1MDVFNlx1MDVENVx1MDVERVx1MDVFQVwiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJcdTA1RDdcdTA1RTRcdTA1RTkgXHUwNUU2XHUwNURFXHUwNUVBXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiXHUwNUQ0XHUwNUQyXHUwNUQzXHUwNUU4XHUwNUQ1XHUwNUVBXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlx1MDVENFx1MDVEMlx1MDVEM1x1MDVEQ1wiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHUwNUQ0XHUwNUU3XHUwNUQ4XHUwNURGXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFx1MDVERVx1MDVENVx1MDVFQVx1MDVEMFx1MDVERCBcdTA1RDBcdTA1RDlcdTA1RTlcdTA1RDlcdTA1RUFcIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1MDVERVx1MDVEN1x1MDVEOVx1MDVFN1x1MDVENCBcdTA1RDJcdTA1RDVcdTA1RThcdTA1RTRcdTA1RUFcIixcclxuICAgIFwiY3R4LmVkaXRTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA1RTJcdTA1RThcdTA1RDVcdTA1REEgXHUwNUUxXHUwNUQyXHUwNUUwXHUwNUQ1XHUwNURGXCIsXHJcbiAgICBcImN0eC5uZXdSb290XCI6IFwiXHUyNzk1IFx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOSBcdTA1RDdcdTA1RDNcdTA1RTlcIixcclxuICAgIFwiY3R4LnVuZG9cIjogXCJcdTIxQTkgXHUwNUQxXHUwNUQ4XHUwNURDXCIsXHJcbiAgICBcImN0eC5yZWRvXCI6IFwiXHUyMUFBIFx1MDVEMVx1MDVFNlx1MDVFMiBcdTA1RTlcdTA1RDVcdTA1RDFcIixcclxuICAgIFwiY3R4Lmdsb2JhbFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDVFMVx1MDVEMlx1MDVFMFx1MDVENVx1MDVERiBcdTA1REJcdTA1RENcdTA1RENcdTA1RDlcIixcclxuICAgIFwiY3R4LmVkaXRcIjogXCJcdTI3MEZcdUZFMEYgXHUwNUUyXHUwNUU4XHUwNUQ1XHUwNURBXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REZcIixcclxuICAgIFwiY3R4LmNvcHlcIjogXCJcdUQ4M0RcdURDQ0IgXHUwNUQ0XHUwNUUyXHUwNUVBXHUwNUU3XCIsXHJcbiAgICBcImN0eC5jdXRcIjogXCJcdTI3MDJcdUZFMEYgXHUwNUQyXHUwNUQ2XHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcImN0eC5wYXN0ZVwiOiBcIlx1RDgzRFx1RENDQyBcdTA1RDRcdTA1RDNcdTA1RDFcdTA1RTdcIixcclxuICAgIFwiY3R4LmNoaWxkXCI6IFwiXHUyNzk1IFx1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMFwiLFxyXG4gICAgXCJjdHgubGVmdENoaWxkXCI6IFwiXHUyQjA1IFx1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMCBcdTA1RTlcdTA1REVcdTA1RDBcdTA1RENcdTA1RDlcIixcclxuICAgIFwiY3R4LnNpYmxpbmdcIjogXCJcdTI3OTUgXHUwNUQwXHUwNUQ3XCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHUwNURFXHUwNUQ3XHUwNUU3XCIsXHJcbiAgICBcImN0eC5oaWRlVG9vbGJhclwiOiBcIlx1MDVENFx1MDVFMVx1MDVFQVx1MDVFOCBcdTA1RTFcdTA1RThcdTA1RDJcdTA1REMgXHUwNURCXHUwNURDXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNtLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDVFMVx1MDVEMlx1MDVFMFx1MDVENVx1MDVERiBcdTA1REJcdTA1RENcdTA1RENcdTA1RDlcIixcclxuICAgIFwic20uY2hpbGRcIjogXCJcdTA1RTZcdTA1RDVcdTA1REVcdTA1RUEgXHUwNUU2XHUwNUQwXHUwNUU2XHUwNUQwXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJcdTA1RTZcdTA1RDVcdTA1REVcdTA1RUEgXHUwNUU5XHUwNUQ1XHUwNUU4XHUwNUU5XCIsXHJcbiAgICBcInNtLmJnXCI6IFwiXHUwNUU4XHUwNUU3XHUwNUUyXCIsXHJcbiAgICBcInNtLnRleHRcIjogXCJcdTA1RTZcdTA1RDFcdTA1RTIgXHUwNUQ4XHUwNUU3XHUwNUUxXHUwNUQ4XCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiXHUwNUQyXHUwNUQ1XHUwNUQzXHUwNURDIFx1MDVEMlx1MDVENVx1MDVFNFx1MDVERlwiLFxyXG4gICAgXCJzbS5mb250XCI6IFwiXHUwNUQyXHUwNUQ1XHUwNUU0XHUwNURGXCIsXHJcbiAgICBcInNtLmJvcmRlclN0eWxlXCI6IFwiXHUwNUUxXHUwNUQyXHUwNUUwXHUwNUQ1XHUwNURGIFx1MDVEMlx1MDVEMVx1MDVENVx1MDVEQ1wiLFxyXG4gICAgXCJzbS5ib3JkZXJDb2xvclwiOiBcIlx1MDVFNlx1MDVEMVx1MDVFMiBcdTA1RDJcdTA1RDFcdTA1RDVcdTA1RENcIixcclxuICAgIFwic20uYm9yZGVyV2lkdGhcIjogXCJcdTA1RTJcdTA1RDVcdTA1RDFcdTA1RDkgXHUwNUQyXHUwNUQxXHUwNUQ1XHUwNURDXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlx1MDVFMlx1MDVEOVx1MDVEMlx1MDVENVx1MDVEQyBcdTA1RTRcdTA1RDlcdTA1RTBcdTA1RDVcdTA1RUFcIixcclxuICAgIFwic20ubWluV2lkdGhcIjogXCJcdTA1RThcdTA1RDVcdTA1RDdcdTA1RDEgXHUwNURFXHUwNUQ5XHUwNUUwXHUwNUQ5XHUwNURFXHUwNURDXHUwNUQ5XCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIlx1MDVEMlx1MDVENVx1MDVEMVx1MDVENCBcdTA1REVcdTA1RDlcdTA1RTBcdTA1RDlcdTA1REVcdTA1RENcdTA1RDlcIixcclxuICAgIFwic20uY29ublwiOiBcIlx1MDVFN1x1MDVENSBcdTA1RDdcdTA1RDlcdTA1RDFcdTA1RDVcdTA1RThcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1MDVFMVx1MDVENVx1MDVEMlwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1MDVFNlx1MDVEMVx1MDVFMlwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1MDVFOFx1MDVENVx1MDVEN1x1MDVEMVwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHUwNUQwXHUwNUQ1XHUwNUU4XHUwNURBXCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdTA1RTdcdTA1RTlcdTA1RUFcIixcclxuICAgIFwic20ubm9kZURpclwiOiBcIlx1MDVEQlx1MDVEOVx1MDVENVx1MDVENVx1MDVERiBcdTA1RTZcdTA1REVcdTA1RUFcdTA1RDlcdTA1RERcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJcdTA1REVcdTA1RThcdTA1RDVcdTA1RDVcdTA1RDcgXHUwNUQxXHUwNUQ5XHUwNURGIFx1MDVEMFx1MDVEN1x1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJzbS5kaXJSaWdodFwiOiBcIlx1MDVEOVx1MDVERVx1MDVEOVx1MDVERlwiLFxyXG4gICAgXCJzbS5kaXJMZWZ0XCI6IFwiXHUwNUU5XHUwNURFXHUwNUQwXHUwNURDXCIsXHJcbiAgICBcInNtLmRpckJvdGhcIjogXCJcdTA1RTlcdTA1RTBcdTA1RDlcdTA1RDRcdTA1RERcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJcdTA1RENcdTA1RDVcdTA1RDcgXHUwNUU2XHUwNUQxXHUwNUUyXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNtLnNlbFwiOiBcIlx1MDVEMVx1MDVEN1x1MDVEOVx1MDVFOFx1MDVENFwiLFxyXG4gICAgXCJzbS5zZWxDb2xvclwiOiBcIlx1MDVFNlx1MDVEMVx1MDVFMiBcdTA1RDFcdTA1RDdcdTA1RDlcdTA1RThcdTA1RDRcIixcclxuICAgIFwic20uc2VsV2lkdGhcIjogXCJcdTA1RTJcdTA1RDVcdTA1RDFcdTA1RDkgXHUwNUQxXHUwNUQ3XHUwNUQ5XHUwNUU4XHUwNUQ0XCIsXHJcbiAgICBcInNtLnNlbE9mZnNldFwiOiBcIlx1MDVENFx1MDVEOVx1MDVFMVx1MDVEOCBcdTA1REVcdTA1RUFcdTA1RDBcdTA1RThcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJcdTA1RTZcdTA1RDFcdTA1RTIgXHUwNURFXHUwNUVBXHUwNUQwXHUwNUU4IFx1MDVFMlx1MDVFOFx1MDVEOVx1MDVEQlx1MDVENFwiLFxyXG4gICAgXCJzbS5lZGl0T3V0bGluZVdpZHRoXCI6IFwiXHUwNUUyXHUwNUQ1XHUwNUQxXHUwNUQ5IFx1MDVERVx1MDVFQVx1MDVEMFx1MDVFOCBcdTA1RTJcdTA1RThcdTA1RDlcdTA1REJcdTA1RDRcIixcclxuICAgIFwic20uYm94U2VsQ29sb3JcIjogXCJcdTA1RTZcdTA1RDFcdTA1RTIgXHUwNUQxXHUwNUQ3XHUwNUQ5XHUwNUU4XHUwNUQ0XCIsXHJcbiAgICBcInNtLnRleHRBbGlnblwiOiBcIlx1MDVEOVx1MDVEOVx1MDVFOVx1MDVENVx1MDVFOCBcdTA1RDhcdTA1RTdcdTA1RTFcdTA1RDhcIixcclxuICAgIFwic20ubm9kZVBhZFhcIjogXCJcdTA1RThcdTA1RDlcdTA1RTRcdTA1RDVcdTA1RDMgXHUwNUQ4XHUwNUU3XHUwNUUxXHUwNUQ4XCIsXHJcbiAgICBcInNtLm5vZGVMaW5lSGVpZ2h0XCI6IFwiXHUwNUQyXHUwNUQ1XHUwNUQxXHUwNUQ0IFx1MDVFOVx1MDVENVx1MDVFOFx1MDVENFwiLFxyXG4gICAgXCJzbS5jYW52YXNCZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMiBcdTA1RDFcdTA1RDMgXHUwNUU2XHUwNUQ5XHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNtLnJlc2V0XCI6IFwiXHUwNUQwXHUwNUU0XHUwNUUxXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiXHUwNUUxXHUwNUQyXHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiXHUwNUQ0XHUwNUU2XHUwNUQyIFx1MDVFMVx1MDVFOFx1MDVEMlx1MDVEQyBcdTA1REJcdTA1RENcdTA1RDlcdTA1RERcIixcclxuICAgIFwic20udGJQYWRcIjogXCJcdTA1RThcdTA1RDlcdTA1RTRcdTA1RDVcdTA1RDMgXHUwNUUxXHUwNUU4XHUwNUQyXHUwNURDXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlx1MDVFMlx1MDVEQ1x1MDVEOVx1MDVENVx1MDVERlwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJcdTA1RDlcdTA1REVcdTA1RDlcdTA1REZcIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiXHUwNUVBXHUwNUQ3XHUwNUVBXHUwNUQ1XHUwNURGXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlx1MDVFOVx1MDVERVx1MDVEMFx1MDVEQ1wiLFxyXG4gICAgXCJzbS50YlBvc1wiOiBcIlx1MDVERVx1MDVEOVx1MDVFN1x1MDVENVx1MDVERCBcdTA1RTFcdTA1RThcdTA1RDJcdTA1RENcIixcclxuICAgIFwic20udGJQb3NUb3BcIjogXCJcdTA1RTJcdTA1RENcdTA1RDlcdTA1RDVcdTA1REZcIixcclxuICAgIFwic20udGJQb3NCb3R0b21cIjogXCJcdTA1RUFcdTA1RDdcdTA1RUFcdTA1RDVcdTA1REZcIixcclxuICAgIFwic20udGJCZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMiBcdTA1RTFcdTA1RThcdTA1RDJcdTA1RENcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMiBcdTA1REJcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RThcIixcclxuICAgIFwic20udGJCdG5Cb3JkZXJcIjogXCJcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REYgXHUwNUQyXHUwNUQxXHUwNUQ1XHUwNURDIFx1MDVEQlx1MDVFNFx1MDVFQVx1MDVENVx1MDVFOFwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlckNvbG9yXCI6IFwiXHUwNUU2XHUwNUQxXHUwNUUyIFx1MDVEMlx1MDVEMVx1MDVENVx1MDVEQyBcdTA1REJcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RThcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiXHUwNUU2XHUwNUQxXHUwNUUyIFx1MDVEOFx1MDVFN1x1MDVFMVx1MDVEOCBcdTA1REJcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RThcIixcclxuICAgIFwic20udGJSZXNldERlZmF1bHRcIjogXCJcdTA1RDBcdTA1RTRcdTA1RTEgXHUwNUUxXHUwNUU4XHUwNUQyXHUwNURDIFx1MDVEQlx1MDVEQ1x1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJucy50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1REYgXHUwNUU2XHUwNUQ1XHUwNURFXHUwNUVBXCIsXHJcbiAgICBcIm5zLmNvbm5Db2xvclwiOiBcIlx1MDVFNlx1MDVEMVx1MDVFMiBcdTA1RTdcdTA1RDVcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiXHUwNUUyXHUwNUQ1XHUwNUQxXHUwNUQ5IFx1MDVFN1x1MDVENVwiLFxyXG4gICAgXCJucy5jbGVhclwiOiBcIlx1MDVFMFx1MDVFN1x1MDVENCBcdTA1RDRcdTA1RUFcdTA1RDBcdTA1REVcdTA1RDQgXHUwNUQwXHUwNUQ5XHUwNUU5XHUwNUQ5XHUwNUVBXCIsXHJcbiAgICBcIm5zLmJvcmRlclJhZGl1c1wiOiBcIlx1MDVFMlx1MDVEOVx1MDVEMlx1MDVENVx1MDVEQyBcdTA1RTRcdTA1RDlcdTA1RTBcdTA1RDVcdTA1RUFcIixcclxuICAgIFwic2VhcmNoLnBsYWNlaG9sZGVyXCI6IFwiXHUwNUQ3XHUwNUU0XHUwNUU5IFx1MDVFNlx1MDVERVx1MDVFQVx1MDVEOVx1MDVERC4uLlwiLFxyXG4gICAgXCJkZWYucm9vdFwiOiBcIlx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOVwiLFxyXG4gICAgXCJkZWYubmV3Um9vdFwiOiBcIlx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOSBcdTA1RDdcdTA1RDNcdTA1RTlcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiXHUwNUU2XHUwNUQwXHUwNUU2XHUwNUQwXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIlx1MDVENFx1MDVEMlx1MDVEM1x1MDVFOFx1MDVENVx1MDVFQSBNaW5kWkpcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJcdTA1RTlcdTA1RTRcdTA1RDRcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiXHUwNUU5XHUwNUU0XHUwNUVBIFx1MDVERVx1MDVERVx1MDVFOVx1MDVFN1wiLFxyXG4gICAgXCJzZXQudGhlbWVcIjogXCJcdTA1RTJcdTA1RThcdTA1REJcdTA1RUEgXHUwNUUwXHUwNUQ1XHUwNUU5XHUwNUQwXCIsXHJcbiAgICBcInNldC50aGVtZURlc2NcIjogXCJcdTA1RTJcdTA1RThcdTA1REJcdTA1RUEgXHUwNUU2XHUwNUQxXHUwNUUyXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNldC5saWdodFwiOiBcIlx1MDVEMVx1MDVENFx1MDVEOVx1MDVFOFwiLFxyXG4gICAgXCJzZXQuZGFya1wiOiBcIlx1MDVEQlx1MDVENFx1MDVENFwiLFxyXG4gICAgXCJzZXQudG9vbGJhclwiOiBcIlx1MDVENFx1MDVFNlx1MDVEMiBcdTA1RTFcdTA1RThcdTA1RDJcdTA1REMgXHUwNURCXHUwNURDXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIlx1MDVENFx1MDVFNlx1MDVEMiBcdTA1RTFcdTA1RThcdTA1RDJcdTA1REMgXHUwNURCXHUwNURDXHUwNUQ5XHUwNUREXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ1wiOiBcIlx1MDVFOFx1MDVFN1x1MDVFMiBcdTA1RDFcdTA1RDMgXHUwNUU2XHUwNUQ5XHUwNUQ1XHUwNUU4XCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJcdTA1RTZcdTA1RDFcdTA1RTIgXHUwNUU4XHUwNUU3XHUwNUUyXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlx1MDVEMFx1MDVENVx1MDVEM1x1MDVENVx1MDVFQVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlx1MDVEMlx1MDVFOFx1MDVFMVx1MDVENFwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiXHUwNURFXHUwNUQ3XHUwNUQxXHUwNUU4XCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJcdTA1RDBcdTA1RTRcdTA1RENcdTA1RDlcdTA1RTdcdTA1RTZcdTA1RDlcdTA1RDlcdTA1RUEgXHUwNURFXHUwNUU0XHUwNUVBIFx1MDVEN1x1MDVFOVx1MDVEOVx1MDVEMVx1MDVENCBcdTA1RDFcdTA1RTdcdTA1RDVcdTA1RDMgXHUwNUU0XHUwNUVBXHUwNUQ1XHUwNUQ3IFx1MDVFMlx1MDVFOVx1MDVEOVx1MDVFOFx1MDVENCBcdTA1RDFcdTA1RUFcdTA1REJcdTA1RDVcdTA1RTBcdTA1RDVcdTA1RUEgXHUwNUUyXHUwNUQxXHUwNUQ1XHUwNUU4IE9ic2lkaWFuIFx1MDVFMlx1MDVERCBcdTA1RTFcdTA1RDJcdTA1RTBcdTA1RDVcdTA1RTBcdTA1RDVcdTA1RUEgXHUwNURFXHUwNUQ1XHUwNUVBXHUwNUQwXHUwNURFXHUwNUQ5XHUwNURELCBcdTA1RDdcdTA1RDlcdTA1RDFcdTA1RDVcdTA1RThcdTA1RDkgXHUwNUU3XHUwNUU5XHUwNUVBLCBcdTA1RDFcdTA1RDdcdTA1RDlcdTA1RThcdTA1RDQgXHUwNURFXHUwNUU4XHUwNUQ1XHUwNUQxXHUwNUQ0LCBcdTA1RDJcdTA1RThcdTA1RDlcdTA1RThcdTA1RDQgXHUwNUQ1XHUwNUU5XHUwNUQ3XHUwNUU4XHUwNUQ1XHUwNUU4IFx1MDVENVx1MDVEOVx1MDVEOVx1MDVEMVx1MDVENVx1MDVEMC9cdTA1RDlcdTA1RDlcdTA1RTZcdTA1RDVcdTA1RDAgTWFya2Rvd24uXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiXHUwNUUyXHUwNUQ1XHUwNUQzXHUwNURCXHUwNURGXCIsXHJcbiAgICBcInNldC5naXRodWJcIjogXCJcdTA1REVcdTA1RDBcdTA1RDJcdTA1RTggR2l0SHViXCIsXHJcbiAgICBcInNldC5kb25hdGVcIjogXCJcdTA1RUFcdTA1REVcdTA1RDVcdTA1REEgXHUwNUQxXHUwNURFXHUwNUQ3XHUwNUQxXHUwNUU4IFx1MDVENFx1MDVFN1x1MDVENVx1MDVEMyBcdTA1RDRcdTA1RTRcdTA1RUFcdTA1RDVcdTA1RDdcIixcclxuICAgIFwic2V0LmtleXNcIjogXCJcdTA1RTdcdTA1RDlcdTA1RTZcdTA1RDVcdTA1RThcdTA1RDkgXHUwNURFXHUwNUU3XHUwNURDXHUwNUQzXHUwNUVBXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlx1MDVENFx1MDVFQVx1MDVEMFx1MDVERCBcdTA1RTdcdTA1RDlcdTA1RTZcdTA1RDVcdTA1RThcdTA1RDlcdTA1RERcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHUwNUUyXHUwNUU4XHUwNUQ1XHUwNURBIFx1MDVFNlx1MDVENVx1MDVERVx1MDVFQVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJcdTA1RDRcdTA1RDVcdTA1RTFcdTA1RTMgXHUwNUQwXHUwNUQ3XCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJcdTA1RDRcdTA1RDVcdTA1RTFcdTA1RTMgXHUwNUU2XHUwNUQwXHUwNUU2XHUwNUQwXCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJcdTA1REVcdTA1RTdcdTA1RDMgXHUwNUUyXHUwNURDIFx1MDVFNlx1MDVENVx1MDVERVx1MDVFQVwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdTA1RDFcdTA1RDhcdTA1RENcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiXHUwNUQxXHUwNUU2XHUwNUUyIFx1MDVFOVx1MDVENVx1MDVEMVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIlx1MDVFOVx1MDVEMVx1MDVEOVx1MDVFOFx1MDVFQSBcdTA1RTlcdTA1RDVcdTA1RThcdTA1RDQgKFx1MDVEMVx1MDVFMlx1MDVFOFx1MDVEOVx1MDVEQlx1MDVENClcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiXHUwNUQyXHUwNUU4XHUwNUQ1XHUwNUU4IFx1MDVEMVx1MDVEMyBcdTA1RTZcdTA1RDlcdTA1RDVcdTA1RThcIixcclxuICAgIFwic2V0LmtleS56b29tSW5cIjogXCJcdTA1RDRcdTA1RDJcdTA1RDNcdTA1RENcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiXHUwNUQ0XHUwNUU3XHUwNUQ4XHUwNURGXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiXHUwNUQwXHUwNUU0XHUwNUUxIFx1MDVFQVx1MDVFN1x1MDVFOFx1MDVEOVx1MDVEMVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiXHUwNUUwXHUwNUQ1XHUwNUQ1XHUwNUQ4IFx1MDVEQ1x1MDVERVx1MDVFMlx1MDVEQ1x1MDVENFwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJcdTA1RTBcdTA1RDVcdTA1RDVcdTA1RDggXHUwNURDXHUwNURFXHUwNUQ4XHUwNUQ0XCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlx1MDVFMFx1MDVENVx1MDVENVx1MDVEOCBcdTA1RTlcdTA1REVcdTA1RDBcdTA1RENcdTA1RDRcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlx1MDVFMFx1MDVENVx1MDVENVx1MDVEOCBcdTA1RDlcdTA1REVcdTA1RDlcdTA1RTBcdTA1RDRcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlx1MDVEQ1x1MDVEN1x1MDVFNSBcdTA1RTJcdTA1REMgXHUwNURFXHUwNUU3XHUwNUU5Li4uXCIsXHJcbiAgICBcInNldC5zY3JvbGxcIjogXCJcdTA1RDJcdTA1RENcdTA1RDlcdTA1RENcdTA1RDQgXHUwNUQ1XHUwNUVBXHUwNUU3XHUwNUU4XHUwNUQ5XHUwNUQxXCIsXHJcbiAgICBcInNldC5pbnZlcnRZXCI6IFwiXHUwNUQ0XHUwNUU0XHUwNUQ1XHUwNURBIFx1MDVEMlx1MDVEQ1x1MDVEOVx1MDVEQ1x1MDVENCBcdTA1RDBcdTA1RTBcdTA1REJcdTA1RDlcdTA1RUFcIixcclxuICAgIFwic2V0LmludmVydFhcIjogXCJcdTA1RDRcdTA1RTRcdTA1RDVcdTA1REEgXHUwNUQyXHUwNURDXHUwNUQ5XHUwNURDXHUwNUQ0IFx1MDVEMFx1MDVENVx1MDVFNFx1MDVFN1x1MDVEOVx1MDVFQVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIlx1MDVENFx1MDVFNFx1MDVENVx1MDVEQSBcdTA1REJcdTA1RDlcdTA1RDVcdTA1RDVcdTA1REYgXHUwNUVBXHUwNUU3XHUwNUU4XHUwNUQ5XHUwNUQxXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVcIjogXCJcdTA1RTJcdTA1RThcdTA1RDVcdTA1REEgXHUwNUQxXHUwNUQ5XHUwNUU2XHUwNUQ5XHUwNUU4XHUwNUQ0XCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHUwNURFXHUwNUU2XHUwNUQxIFx1MDVFMlx1MDVFOFx1MDVEOVx1MDVEQlx1MDVENCBcdTA1RDFcdTA1RTJcdTA1RUEgXHUwNUQ5XHUwNUU2XHUwNUQ5XHUwNUU4XHUwNUVBIFx1MDVFNlx1MDVERVx1MDVFQVx1MDVEOVx1MDVERCBcdTA1RDdcdTA1RDNcdTA1RTlcdTA1RDlcdTA1RERcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiXHUwNUU5XHUwNUREIFx1MDVFOVx1MDVENVx1MDVFOFx1MDVFOVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiXHUwNUU5XHUwNUREIFx1MDVEMVx1MDVFOFx1MDVEOVx1MDVFOFx1MDVFQSBcdTA1REVcdTA1RDdcdTA1RDNcdTA1REMgXHUwNURDXHUwNUU5XHUwNUQ1XHUwNUU4XHUwNUU5XHUwNUQ5XHUwNUREIFx1MDVEN1x1MDVEM1x1MDVFOVx1MDVEOVx1MDVERFwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lXCI6IFwiXHUwNUU5XHUwNUREIFx1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMFwiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIlx1MDVFOVx1MDVERCBcdTA1RDFcdTA1RThcdTA1RDlcdTA1RThcdTA1RUEgXHUwNURFXHUwNUQ3XHUwNUQzXHUwNURDIFx1MDVEQ1x1MDVFNlx1MDVEMFx1MDVFNlx1MDVEMFx1MDVEOVx1MDVERCBcdTA1RDdcdTA1RDNcdTA1RTlcdTA1RDlcdTA1RERcIixcclxuICAgIFwic2V0LnR5cGVUb0VkaXRcIjogXCJcdTA1RDRcdTA1RTdcdTA1RENcdTA1RDMgXHUwNURDXHUwNUUyXHUwNUU4XHUwNUQ5XHUwNURCXHUwNUQ0XCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIlx1MDVFMlx1MDVFOFx1MDVENVx1MDVEQSBcdTA1RTJcdTA1REMgXHUwNUQ5XHUwNUQzXHUwNUQ5IFx1MDVENFx1MDVFN1x1MDVEQ1x1MDVEM1x1MDVENCBcdTA1REJcdTA1RTlcdTA1RTZcdTA1RDVcdTA1REVcdTA1RUEgXHUwNUUwXHUwNUQxXHUwNUQ3XHUwNUU4XCIsXHJcbn07XHJcblxyXG5jb25zdCBfaXQ6IHR5cGVvZiBfZW4gPSB7XHJcbiAgICBcInRiLnJvb3RcIjogXCJcdTI3OTUgUmFkaWNlXCIsXHJcbiAgICBcInRiLnVuZG9cIjogXCJcdTIxQTkgQW5udWxsYVwiLFxyXG4gICAgXCJ0Yi5yZWRvXCI6IFwiXHUyMUFBIFJpcGV0aVwiLFxyXG4gICAgXCJ0Yi5tZFwiOiBcIlx1RDgzRFx1RENDNCBNRFwiLFxyXG4gICAgXCJ0Yi5tYXBcIjogXCJcdUQ4M0RcdURERkFcdUZFMEYgTWFwcGFcIixcclxuICAgIFwidGIuc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbGVcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJNZXNzYSBhIGZ1b2NvXCIsXHJcbiAgICBcInRiLnNlYXJjaFwiOiBcIkNlcmNhXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6Q2VyY2EgfCBTcGF6aW86TW9kaWZpY2EgfCBDdHJsK0MvVi9YXCIsXHJcbiAgICBcInRiLm5ld1Jvb3RcIjogXCJOdW92YSByYWRpY2VcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiTW9kYWxpdFx1MDBFMCBNYXJrZG93blwiLFxyXG4gICAgXCJ0Yi50aXBTdHlsZVwiOiBcIlBhbm5lbGxvIHN0aWxlXCIsXHJcbiAgICBcInRiLnRpcEZvY3VzXCI6IFwiTWVzc2EgYSBmdW9jbyBzdWwgbm9kb1wiLFxyXG4gICAgXCJ0Yi50aXBTZWFyY2hcIjogXCJDZXJjYSBub2RpXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiSW1wb3N0YXppb25pXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIkluZ3JhbmRpc2NpXCIsXHJcbiAgICBcInRiLnpvb21PdXRcIjogXCJSaWR1Y2lcIixcclxuICAgIFwic20uY3VzdG9tUmFpbmJvd1wiOiBcIisgUGVyc29uYWxpenphdG9cIixcclxuICAgIFwiY3R4LmJhdGNoRGVsXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIEVsaW1pbmEgaW4gYmxvY2NvXCIsXHJcbiAgICBcImN0eC5lZGl0U3R5bGVcIjogXCJcdUQ4M0NcdURGQTggTW9kaWZpY2Egc3RpbGVcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgTnVvdmEgcmFkaWNlXCIsXHJcbiAgICBcImN0eC51bmRvXCI6IFwiXHUyMUE5IEFubnVsbGFcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgUmlwZXRpXCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsZSBnbG9iYWxlXCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIE1vZGlmaWNhXCIsXHJcbiAgICBcImN0eC5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBTdGlsZVwiLFxyXG4gICAgXCJjdHguY29weVwiOiBcIlx1RDgzRFx1RENDQiBDb3BpYVwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFRhZ2xpYVwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgSW5jb2xsYVwiLFxyXG4gICAgXCJjdHguY2hpbGRcIjogXCJcdTI3OTUgRmlnbGlvXCIsXHJcbiAgICBcImN0eC5sZWZ0Q2hpbGRcIjogXCJcdTJCMDUgRmlnbGlvIHNpbmlzdHJvXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IEZyYXRlbGxvXCIsXHJcbiAgICBcImN0eC5kZWxldGVcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgRWxpbWluYVwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJOYXNjb25kaSBiYXJyYSBkZWdsaSBzdHJ1bWVudGlcIixcclxuICAgIFwic20udGl0bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbGUgZ2xvYmFsZVwiLFxyXG4gICAgXCJzbS5jaGlsZFwiOiBcIk5vZG8gZmlnbGlvXCIsXHJcbiAgICBcInNtLnJvb3RcIjogXCJOb2RvIHJhZGljZVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlNmb25kb1wiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiQ29sb3JlIHRlc3RvXCIsXHJcbiAgICBcInNtLmZvbnRTaXplXCI6IFwiRGltZW5zaW9uZSBjYXJhdHRlcmVcIixcclxuICAgIFwic20uZm9udFwiOiBcIkNhcmF0dGVyZVwiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlN0aWxlIGJvcmRvXCIsXHJcbiAgICBcInNtLmJvcmRlckNvbG9yXCI6IFwiQ29sb3JlIGJvcmRvXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiTGFyZ2hlenphIGJvcmRvXCIsXHJcbiAgICBcInNtLmJvcmRlclJhZGl1c1wiOiBcIlJhZ2dpbyBib3Jkb1wiLFxyXG4gICAgXCJzbS5taW5XaWR0aFwiOiBcIkxhcmdoZXp6YSBtaW4uXCIsXHJcbiAgICBcInNtLm1pbkhlaWdodFwiOiBcIkFsdGV6emEgbWluLlwiLFxyXG4gICAgXCJzbS5jb25uXCI6IFwiQ29ubmVzc2lvbmVcIixcclxuICAgIFwic20udHlwZVwiOiBcIlRpcG9cIixcclxuICAgIFwic20uY29sb3JcIjogXCJDb2xvcmVcIixcclxuICAgIFwic20ud2lkdGhcIjogXCJMYXJnaGV6emFcIixcclxuICAgIFwic20uY29ubkxlbmd0aFwiOiBcIkx1bmdoZXp6YVwiLFxyXG4gICAgXCJzbS5yYWluYm93XCI6IFwiQXJjb2JhbGVub1wiLFxyXG4gICAgXCJzbS5ub2RlRGlyXCI6IFwiRGlyZXppb25lIG5vZGlcIixcclxuICAgIFwic20ubm9kZUdhcFlcIjogXCJTcGF6aWF0dXJhIGZyYXRlbGxpXCIsXHJcbiAgICBcInNtLmRpclJpZ2h0XCI6IFwiRGVzdHJhXCIsXHJcbiAgICBcInNtLmRpckxlZnRcIjogXCJTaW5pc3RyYVwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiRW50cmFtYmlcIixcclxuICAgIFwic20ucmFpbmJvd1BhbGV0dGVcIjogXCJUYXZvbG96emFcIixcclxuICAgIFwic20uc2VsXCI6IFwiU2VsZXppb25lXCIsXHJcbiAgICBcInNtLnNlbENvbG9yXCI6IFwiQ29sb3JlIHNlbGV6aW9uZVwiLFxyXG4gICAgXCJzbS5zZWxXaWR0aFwiOiBcIkxhcmdoZXp6YSBzZWxlemlvbmVcIixcclxuICAgIFwic20uc2VsT2Zmc2V0XCI6IFwiU2Nvc3RhbWVudG8gY29udG9ybm9cIixcclxuICAgIFwic20uZWRpdE91dGxpbmVcIjogXCJDb2xvcmUgY29udG9ybm8gbW9kaWZpY2FcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIkxhcmdoZXp6YSBjb250b3JubyBtb2RpZmljYVwiLFxyXG4gICAgXCJzbS5ib3hTZWxDb2xvclwiOiBcIkNvbG9yZSBzZWxlemlvbmVcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiQWxsaW5lYW1lbnRvIHRlc3RvXCIsXHJcbiAgICBcInNtLm5vZGVQYWRYXCI6IFwiUmllbXBpbWVudG8gdGVzdG9cIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJBbHRlenphIHJpZ2FcIixcclxuICAgIFwic20uY2FudmFzQmdcIjogXCJTZm9uZG8gYXJlYSBkaSBsYXZvcm9cIixcclxuICAgIFwic20ucmVzZXRcIjogXCJSaXByaXN0aW5hXCIsXHJcbiAgICBcInNtLmNsb3NlXCI6IFwiQ2hpdWRpXCIsXHJcbiAgICBcInNtLnNob3dUb29sYmFyXCI6IFwiTW9zdHJhIGJhcnJhIHN0cnVtZW50aVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlJpZW1waW1lbnRvIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiUGFkVFwiOiBcIlN1cGVyaW9yZVwiLFxyXG4gICAgXCJzbS50YlBhZFJcIjogXCJEZXN0cm9cIixcclxuICAgIFwic20udGJQYWRCXCI6IFwiSW5mZXJpb3JlXCIsXHJcbiAgICBcInNtLnRiUGFkTFwiOiBcIlNpbmlzdHJvXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiUG9zaXppb25lIGJhcnJhXCIsXHJcbiAgICBcInNtLnRiUG9zVG9wXCI6IFwiU3VwZXJpb3JlXCIsXHJcbiAgICBcInNtLnRiUG9zQm90dG9tXCI6IFwiSW5mZXJpb3JlXCIsXHJcbiAgICBcInNtLnRiQmdcIjogXCJTZm9uZG8gYmFycmFcIixcclxuICAgIFwic20udGJCdG5CZ1wiOiBcIlNmb25kbyBwdWxzYW50ZVwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlN0aWxlIGJvcmRvIHB1bHNhbnRlXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJDb2xvcmUgYm9yZG8gcHVsc2FudGVcIixcclxuICAgIFwic20udGJCdG5UZXh0XCI6IFwiQ29sb3JlIHRlc3RvIHB1bHNhbnRlXCIsXHJcbiAgICBcInNtLnRiUmVzZXREZWZhdWx0XCI6IFwiUmlwcmlzdGluYSBiYXJyYSBzdHJ1bWVudGlcIixcclxuICAgIFwibnMudGl0bGVcIjogXCJcdUQ4M0NcdURGQTggU3RpbGUgbm9kb1wiLFxyXG4gICAgXCJucy5jb25uQ29sb3JcIjogXCJDb2xvcmUgbGluZWFcIixcclxuICAgIFwibnMuY29ubldpZHRoXCI6IFwiTGFyZ2hlenphIGxpbmVhXCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiQ2FuY2VsbGEgcGVyc29uYWxpenphemlvbmVcIixcclxuICAgIFwibnMuYm9yZGVyUmFkaXVzXCI6IFwiUmFnZ2lvIGJvcmRvXCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIkNlcmNhIG5vZGkuLi5cIixcclxuICAgIFwiZGVmLnJvb3RcIjogXCJSYWRpY2VcIixcclxuICAgIFwiZGVmLm5ld1Jvb3RcIjogXCJOdW92YSByYWRpY2VcIixcclxuICAgIFwiZGVmLmNoaWxkXCI6IFwiRmlnbGlvXCIsXHJcbiAgICBcInNldC50aXRsZVwiOiBcIkltcG9zdGF6aW9uaSBNaW5kWkpcIixcclxuICAgIFwic2V0LmxhbmdcIjogXCJMaW5ndWFcIixcclxuICAgIFwic2V0LmxhbmdEZXNjXCI6IFwiTGluZ3VhIGRlbGwnaW50ZXJmYWNjaWFcIixcclxuICAgIFwic2V0LnRoZW1lXCI6IFwiVGVtYVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiVGVtYSBjb2xvcmlcIixcclxuICAgIFwic2V0LmxpZ2h0XCI6IFwiQ2hpYXJvXCIsXHJcbiAgICBcInNldC5kYXJrXCI6IFwiU2N1cm9cIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJNb3N0cmEgYmFycmEgc3RydW1lbnRpXCIsXHJcbiAgICBcInNldC50b29sYmFyRGVzY1wiOiBcIk1vc3RyYSBiYXJyYSBzdHJ1bWVudGlcIixcclxuICAgIFwic2V0LmNhbnZhc0JnXCI6IFwiU2ZvbmRvIGFyZWEgZGkgbGF2b3JvXCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJDb2xvcmUgZGkgc2ZvbmRvXCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIkluZm9ybWF6aW9uaVwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlZlcnNpb25lXCIsXHJcbiAgICBcInNldC5hdXRob3JcIjogXCJBdXRvcmVcIixcclxuICAgIFwic2V0LmRlc2NcIjpcclxuICAgICAgICBcIkFwcCBkaSBtYXBwZSBtZW50YWxpIG9wZW4gc291cmNlIHJpY2NhIGRpIGZ1bnppb25hbGl0XHUwMEUwIHBlciBPYnNpZGlhbiBjb24gc3RpbGkgcGVyc29uYWxpenphdGksIGNvbm5lc3Npb25pIGFyY29iYWxlbm8sIHNlbGV6aW9uZSBtdWx0aXBsYSwgdHJhc2NpbmFtZW50byBlIGltcG9ydGF6aW9uZS9lc3BvcnRhemlvbmUgTWFya2Rvd24uXCIsXHJcbiAgICBcInNldC51cGRhdGVkXCI6IFwiQWdnaW9ybmF0b1wiLFxyXG4gICAgXCJzZXQuZ2l0aHViXCI6IFwiUmVwb3NpdG9yeSBHaXRIdWJcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlN1cHBvcnRhIGwnYXV0b3JlIG9wZW4gc291cmNlXCIsXHJcbiAgICBcInNldC5rZXlzXCI6IFwiU2NvcmNpYXRvaWUgZGEgdGFzdGllcmFcIixcclxuICAgIFwic2V0LmtleXNEZXNjXCI6IFwiUGVyc29uYWxpenphIHNjb3JjaWF0b2llXCIsXHJcbiAgICBcInNldC5rZXkuZWRpdFwiOiBcIk1vZGlmaWNhIG5vZG9cIixcclxuICAgIFwic2V0LmtleS5zaWJsaW5nXCI6IFwiQWdnaXVuZ2kgZnJhdGVsbG9cIixcclxuICAgIFwic2V0LmtleS5jaGlsZFwiOiBcIkFnZ2l1bmdpIGZpZ2xpb1wiLFxyXG4gICAgXCJzZXQua2V5LmZvY3VzXCI6IFwiTWVzc2EgYSBmdW9jbyBzdWwgbm9kb1wiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJBbm51bGxhXCIsXHJcbiAgICBcInNldC5rZXkucmVkb1wiOiBcIlJpcGV0aVwiLFxyXG4gICAgXCJzZXQua2V5LmxpbmVCcmVha1wiOiBcIkEgY2FwbyAoaW4gbW9kaWZpY2EpXCIsXHJcbiAgICBcInNldC5rZXkuZHJhZ0NhbnZhc1wiOiBcIlRyYXNjaW5hIGFyZWEgZGkgbGF2b3JvXCIsXHJcbiAgICBcInNldC5rZXkuem9vbUluXCI6IFwiSW5ncmFuZGlzY2lcIixcclxuICAgIFwic2V0LmtleS56b29tT3V0XCI6IFwiUmlkdWNpXCIsXHJcbiAgICBcInNldC5rZXkuem9vbVJlc2V0XCI6IFwiUmVpbXBvc3RhIHpvb21cIixcclxuICAgIFwic2V0LmtleS51cFwiOiBcIk5hdmlnYSBzdVwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJOYXZpZ2EgZ2lcdTAwRjlcIixcclxuICAgIFwic2V0LmtleS5sZWZ0XCI6IFwiTmF2aWdhIGEgc2luaXN0cmFcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIk5hdmlnYSBhIGRlc3RyYVwiLFxyXG4gICAgXCJzZXQua2V5LnByZXNzXCI6IFwiUHJlbWkgdW4gdGFzdG8uLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlNjb3JyaW1lbnRvIGUgem9vbVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WVwiOiBcIkludmVydGkgc2NvcnJpbWVudG8gdmVydGljYWxlXCIsXHJcbiAgICBcInNldC5pbnZlcnRYXCI6IFwiSW52ZXJ0aSBzY29ycmltZW50byBvcml6em9udGFsZVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0Wm9vbVwiOiBcIkludmVydGkgZGlyZXppb25lIHpvb21cIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIk1vZGlmaWNhIGFsbGEgY3JlYXppb25lXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiTW9kYWxpdFx1MDBFMCBtb2RpZmljYSBhbGxhIGNyZWF6aW9uZSBkZWkgbm9kaVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVcIjogXCJOb21lIHJhZGljZVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiTm9tZSBwcmVkZWZpbml0byBwZXIgbnVvdmUgcmFkaWNpXCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJOb21lIGZpZ2xpb1wiLFxyXG4gICAgXCJzZXQuY2hpbGROYW1lRGVzY1wiOiBcIk5vbWUgcHJlZGVmaW5pdG8gcGVyIG51b3ZpIGZpZ2xpXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiRGlnaXRhIHBlciBtb2RpZmljYXJlXCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0RGVzY1wiOiBcIk1vZGlmaWNhIGRpZ2l0YW5kbyBxdWFuZG8gdW4gbm9kbyBcdTAwRTggc2VsZXppb25hdG9cIixcclxufTtcclxuXHJcbmNvbnN0IF9hcjogdHlwZW9mIF9lbiA9IHtcclxuICAgIFwidGIucm9vdFwiOiBcIlx1Mjc5NSBcdTA2MkNcdTA2MzBcdTA2MzFcIixcclxuICAgIFwidGIudW5kb1wiOiBcIlx1MjFBOSBcdTA2MkFcdTA2MzFcdTA2MjdcdTA2MkNcdTA2MzlcIixcclxuICAgIFwidGIucmVkb1wiOiBcIlx1MjFBQSBcdTA2MjVcdTA2MzlcdTA2MjdcdTA2MkZcdTA2MjlcIixcclxuICAgIFwidGIubWRcIjogXCJcdUQ4M0RcdURDQzQgTURcIixcclxuICAgIFwidGIubWFwXCI6IFwiXHVEODNEXHVEREZBXHVGRTBGIFx1MDYyRVx1MDYzMVx1MDY0QVx1MDYzN1x1MDYyOVwiLFxyXG4gICAgXCJ0Yi5zdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA2NDZcdTA2NDVcdTA2MzdcIixcclxuICAgIFwidGIuZm9jdXNcIjogXCJcdTA2MkFcdTA2MzFcdTA2NDNcdTA2NEFcdTA2MzJcIixcclxuICAgIFwidGIuc2VhcmNoXCI6IFwiXHUwNjI4XHUwNjJEXHUwNjJCXCIsXHJcbiAgICBcInRiLnNldHRpbmdzXCI6IFwiXHUyNjk5XHVGRTBGXCIsXHJcbiAgICBcInRiLmhlbHBcIjogXCJDdHJsK0Y6XHUwNjI4XHUwNjJEXHUwNjJCIHwgXHUwNjQ1XHUwNjMzXHUwNjI3XHUwNjQxXHUwNjI5Olx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSB8IEN0cmwrQy9WL1hcIixcclxuICAgIFwidGIubmV3Um9vdFwiOiBcIlx1MDYyQ1x1MDYzMFx1MDYzMSBcdTA2MkNcdTA2MkZcdTA2NEFcdTA2MkZcIixcclxuICAgIFwidGIudGlwVW5kb1wiOiBcIkN0cmwrWlwiLFxyXG4gICAgXCJ0Yi50aXBSZWRvXCI6IFwiQ3RybCtTaGlmdCtaXCIsXHJcbiAgICBcInRiLnRpcE1kXCI6IFwiXHUwNjQ4XHUwNjM2XHUwNjM5IE1hcmtkb3duXCIsXHJcbiAgICBcInRiLnRpcFN0eWxlXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjJEXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDY0Nlx1MDY0NVx1MDYyN1x1MDYzN1wiLFxyXG4gICAgXCJ0Yi50aXBGb2N1c1wiOiBcIlx1MDYyN1x1MDY0NFx1MDYyQVx1MDYzMVx1MDY0M1x1MDY0QVx1MDYzMiBcdTA2MzlcdTA2NDRcdTA2NDkgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjQyXHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcInRiLnRpcFNlYXJjaFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyOFx1MDYyRFx1MDYyQiBcdTA2NDFcdTA2NEEgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjQyXHUwNjJGXCIsXHJcbiAgICBcInRiLnRpcFNldHRpbmdzXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjI1XHUwNjM5XHUwNjJGXHUwNjI3XHUwNjJGXHUwNjI3XHUwNjJBXCIsXHJcbiAgICBcInRiLnpvb21JblwiOiBcIlx1MDYyQVx1MDY0M1x1MDYyOFx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJ0Yi56b29tT3V0XCI6IFwiXHUwNjJBXHUwNjM1XHUwNjNBXHUwNjRBXHUwNjMxXCIsXHJcbiAgICBcInNtLmN1c3RvbVJhaW5ib3dcIjogXCIrIFx1MDY0NVx1MDYyRVx1MDYzNVx1MDYzNVwiLFxyXG4gICAgXCJjdHguYmF0Y2hEZWxcIjogXCJcdUQ4M0RcdURERDFcdUZFMEYgXHUwNjJEXHUwNjMwXHUwNjQxIFx1MDYyQ1x1MDY0NVx1MDYyN1x1MDYzOVx1MDY0QVwiLFxyXG4gICAgXCJjdHguZWRpdFN0eWxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSBcdTA2MjdcdTA2NDRcdTA2NDZcdTA2NDVcdTA2MzdcIixcclxuICAgIFwiY3R4Lm5ld1Jvb3RcIjogXCJcdTI3OTUgXHUwNjJDXHUwNjMwXHUwNjMxIFx1MDYyQ1x1MDYyRlx1MDY0QVx1MDYyRlwiLFxyXG4gICAgXCJjdHgudW5kb1wiOiBcIlx1MjFBOSBcdTA2MkFcdTA2MzFcdTA2MjdcdTA2MkNcdTA2MzlcIixcclxuICAgIFwiY3R4LnJlZG9cIjogXCJcdTIxQUEgXHUwNjI1XHUwNjM5XHUwNjI3XHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcImN0eC5nbG9iYWxTdHlsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA2MjdcdTA2NDRcdTA2NDZcdTA2NDVcdTA2MzcgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjI3XHUwNjQ1XCIsXHJcbiAgICBcImN0eC5lZGl0XCI6IFwiXHUyNzBGXHVGRTBGIFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJjdHguc3R5bGVcIjogXCJcdUQ4M0NcdURGQTggXHUwNjQ2XHUwNjQ1XHUwNjM3XCIsXHJcbiAgICBcImN0eC5jb3B5XCI6IFwiXHVEODNEXHVEQ0NCIFx1MDY0Nlx1MDYzM1x1MDYyRVwiLFxyXG4gICAgXCJjdHguY3V0XCI6IFwiXHUyNzAyXHVGRTBGIFx1MDY0Mlx1MDYzNVwiLFxyXG4gICAgXCJjdHgucGFzdGVcIjogXCJcdUQ4M0RcdURDQ0MgXHUwNjQ0XHUwNjM1XHUwNjQyXCIsXHJcbiAgICBcImN0eC5jaGlsZFwiOiBcIlx1Mjc5NSBcdTA2NDFcdTA2MzFcdTA2MzlcIixcclxuICAgIFwiY3R4LmxlZnRDaGlsZFwiOiBcIlx1MkIwNSBcdTA2NDFcdTA2MzFcdTA2MzkgXHUwNjIzXHUwNjRBXHUwNjMzXHUwNjMxXCIsXHJcbiAgICBcImN0eC5zaWJsaW5nXCI6IFwiXHUyNzk1IFx1MDYzNFx1MDY0Mlx1MDY0QVx1MDY0MlwiLFxyXG4gICAgXCJjdHguZGVsZXRlXCI6IFwiXHVEODNEXHVEREQxXHVGRTBGIFx1MDYyRFx1MDYzMFx1MDY0MVwiLFxyXG4gICAgXCJjdHguaGlkZVRvb2xiYXJcIjogXCJcdTA2MjVcdTA2MkVcdTA2NDFcdTA2MjdcdTA2MjEgXHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0OFx1MDYyN1x1MDYyQVwiLFxyXG4gICAgXCJzbS50aXRsZVwiOiBcIlx1RDgzQ1x1REZBOCBcdTA2MjdcdTA2NDRcdTA2NDZcdTA2NDVcdTA2MzcgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjI3XHUwNjQ1XCIsXHJcbiAgICBcInNtLmNoaWxkXCI6IFwiXHUwNjM5XHUwNjQyXHUwNjJGXHUwNjI5IFx1MDY0MVx1MDYzMVx1MDYzOVx1MDY0QVx1MDYyOVwiLFxyXG4gICAgXCJzbS5yb290XCI6IFwiXHUwNjM5XHUwNjQyXHUwNjJGXHUwNjI5IFx1MDYyQ1x1MDYzMFx1MDYzMVx1MDY0QVx1MDYyOVwiLFxyXG4gICAgXCJzbS5iZ1wiOiBcIlx1MDYyN1x1MDY0NFx1MDYyRVx1MDY0NFx1MDY0MVx1MDY0QVx1MDYyOVwiLFxyXG4gICAgXCJzbS50ZXh0XCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDY0Nlx1MDYzNVwiLFxyXG4gICAgXCJzbS5mb250U2l6ZVwiOiBcIlx1MDYyRFx1MDYyQ1x1MDY0NSBcdTA2MjdcdTA2NDRcdTA2MkVcdTA2MzdcIixcclxuICAgIFwic20uZm9udFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyRVx1MDYzN1wiLFxyXG4gICAgXCJzbS5ib3JkZXJTdHlsZVwiOiBcIlx1MDY0Nlx1MDY0NVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2MkRcdTA2MkZcdTA2NDhcdTA2MkZcIixcclxuICAgIFwic20uYm9yZGVyQ29sb3JcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjI3XHUwNjQ0XHUwNjJEXHUwNjJGXHUwNjQ4XHUwNjJGXCIsXHJcbiAgICBcInNtLmJvcmRlcldpZHRoXCI6IFwiXHUwNjM5XHUwNjMxXHUwNjM2IFx1MDYyN1x1MDY0NFx1MDYyRFx1MDYyRlx1MDY0OFx1MDYyRlwiLFxyXG4gICAgXCJzbS5ib3JkZXJSYWRpdXNcIjogXCJcdTA2MkFcdTA2NDJcdTA2NDhcdTA2NEFcdTA2MzMgXHUwNjI3XHUwNjQ0XHUwNjMyXHUwNjQ4XHUwNjI3XHUwNjRBXHUwNjI3XCIsXHJcbiAgICBcInNtLm1pbldpZHRoXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjJEXHUwNjJGIFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0Nlx1MDY0OSBcdTA2NDRcdTA2NDRcdTA2MzlcdTA2MzFcdTA2MzZcIixcclxuICAgIFwic20ubWluSGVpZ2h0XCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjJEXHUwNjJGIFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0Nlx1MDY0OSBcdTA2NDRcdTA2NDRcdTA2MjdcdTA2MzFcdTA2MkFcdTA2NDFcdTA2MjdcdTA2MzlcIixcclxuICAgIFwic20uY29ublwiOiBcIlx1MDYyRVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2NDhcdTA2MzVcdTA2NDRcIixcclxuICAgIFwic20udHlwZVwiOiBcIlx1MDYyN1x1MDY0NFx1MDY0Nlx1MDY0OFx1MDYzOVwiLFxyXG4gICAgXCJzbS5jb2xvclwiOiBcIlx1MDYyN1x1MDY0NFx1MDY0NFx1MDY0OFx1MDY0NlwiLFxyXG4gICAgXCJzbS53aWR0aFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYzOVx1MDYzMVx1MDYzNlwiLFxyXG4gICAgXCJzbS5jb25uTGVuZ3RoXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjM3XHUwNjQ4XHUwNjQ0XCIsXHJcbiAgICBcInNtLnJhaW5ib3dcIjogXCJcdTA2NDJcdTA2NDhcdTA2MzMgXHUwNjQyXHUwNjMyXHUwNjJEXCIsXHJcbiAgICBcInNtLm5vZGVEaXJcIjogXCJcdTA2MjdcdTA2MkFcdTA2MkNcdTA2MjdcdTA2NDcgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjQyXHUwNjJGXCIsXHJcbiAgICBcInNtLm5vZGVHYXBZXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjMzXHUwNjI3XHUwNjQxXHUwNjI5IFx1MDYyOFx1MDY0QVx1MDY0NiBcdTA2MjdcdTA2NDRcdTA2MjNcdTA2MzRcdTA2NDJcdTA2MjdcdTA2MjFcIixcclxuICAgIFwic20uZGlyUmlnaHRcIjogXCJcdTA2NEFcdTA2NDVcdTA2NEFcdTA2NDZcIixcclxuICAgIFwic20uZGlyTGVmdFwiOiBcIlx1MDY0QVx1MDYzM1x1MDYyN1x1MDYzMVwiLFxyXG4gICAgXCJzbS5kaXJCb3RoXCI6IFwiXHUwNjQzXHUwNjQ0XHUwNjI3XHUwNjQ3XHUwNjQ1XHUwNjI3XCIsXHJcbiAgICBcInNtLnJhaW5ib3dQYWxldHRlXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjJEIFx1MDYyN1x1MDY0NFx1MDYyM1x1MDY0NFx1MDY0OFx1MDYyN1x1MDY0NlwiLFxyXG4gICAgXCJzbS5zZWxcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MkZcdTA2NEFcdTA2MkZcIixcclxuICAgIFwic20uc2VsQ29sb3JcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjJEXHUwNjJGXHUwNjRBXHUwNjJGXCIsXHJcbiAgICBcInNtLnNlbFdpZHRoXCI6IFwiXHUwNjM5XHUwNjMxXHUwNjM2IFx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRFx1MDYyRlx1MDY0QVx1MDYyRlwiLFxyXG4gICAgXCJzbS5zZWxPZmZzZXRcIjogXCJcdTA2MjVcdTA2MzJcdTA2MjdcdTA2MkRcdTA2MjkgXHUwNjI3XHUwNjQ0XHUwNjI1XHUwNjM3XHUwNjI3XHUwNjMxXCIsXHJcbiAgICBcInNtLmVkaXRPdXRsaW5lXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDYyNVx1MDYzN1x1MDYyN1x1MDYzMSBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MzFcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic20uZWRpdE91dGxpbmVXaWR0aFwiOiBcIlx1MDYzOVx1MDYzMVx1MDYzNiBcdTA2MjVcdTA2MzdcdTA2MjdcdTA2MzEgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjJEXHUwNjMxXHUwNjRBXHUwNjMxXCIsXHJcbiAgICBcInNtLmJveFNlbENvbG9yXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRFx1MDYyRlx1MDY0QVx1MDYyRiBcdTA2MjdcdTA2NDRcdTA2NDVcdTA2MzFcdTA2MjhcdTA2MzlcIixcclxuICAgIFwic20udGV4dEFsaWduXCI6IFwiXHUwNjQ1XHUwNjJEXHUwNjI3XHUwNjMwXHUwNjI3XHUwNjI5IFx1MDYyN1x1MDY0NFx1MDY0Nlx1MDYzNVwiLFxyXG4gICAgXCJzbS5ub2RlUGFkWFwiOiBcIlx1MDYyRFx1MDYzNFx1MDY0OCBcdTA2MjdcdTA2NDRcdTA2NDZcdTA2MzVcIixcclxuICAgIFwic20ubm9kZUxpbmVIZWlnaHRcIjogXCJcdTA2MjdcdTA2MzFcdTA2MkFcdTA2NDFcdTA2MjdcdTA2MzkgXHUwNjI3XHUwNjQ0XHUwNjMzXHUwNjM3XHUwNjMxXCIsXHJcbiAgICBcInNtLmNhbnZhc0JnXCI6IFwiXHUwNjJFXHUwNjQ0XHUwNjQxXHUwNjRBXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDY0NFx1MDY0OFx1MDYyRFx1MDYyOVwiLFxyXG4gICAgXCJzbS5yZXNldFwiOiBcIlx1MDYyNVx1MDYzOVx1MDYyN1x1MDYyRlx1MDYyOSBcdTA2MkFcdTA2MzlcdTA2NEFcdTA2NEFcdTA2NDZcIixcclxuICAgIFwic20uY2xvc2VcIjogXCJcdTA2MjVcdTA2M0FcdTA2NDRcdTA2MjdcdTA2NDJcIixcclxuICAgIFwic20uc2hvd1Rvb2xiYXJcIjogXCJcdTA2MjVcdTA2MzhcdTA2NDdcdTA2MjdcdTA2MzEgXHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0OFx1MDYyN1x1MDYyQVwiLFxyXG4gICAgXCJzbS50YlBhZFwiOiBcIlx1MDYyRFx1MDYzNFx1MDY0OCBcdTA2MjdcdTA2NDRcdTA2MzRcdTA2MzFcdTA2NEFcdTA2MzdcIixcclxuICAgIFwic20udGJQYWRUXCI6IFwiXHUwNjIzXHUwNjM5XHUwNjQ0XHUwNjQ5XCIsXHJcbiAgICBcInNtLnRiUGFkUlwiOiBcIlx1MDY0QVx1MDY0NVx1MDY0QVx1MDY0NlwiLFxyXG4gICAgXCJzbS50YlBhZEJcIjogXCJcdTA2MjNcdTA2MzNcdTA2NDFcdTA2NDRcIixcclxuICAgIFwic20udGJQYWRMXCI6IFwiXHUwNjRBXHUwNjMzXHUwNjI3XHUwNjMxXCIsXHJcbiAgICBcInNtLnRiUG9zXCI6IFwiXHUwNjQ1XHUwNjQ4XHUwNjM2XHUwNjM5IFx1MDYyN1x1MDY0NFx1MDYzNFx1MDYzMVx1MDY0QVx1MDYzN1wiLFxyXG4gICAgXCJzbS50YlBvc1RvcFwiOiBcIlx1MDYyM1x1MDYzOVx1MDY0NFx1MDY0OVwiLFxyXG4gICAgXCJzbS50YlBvc0JvdHRvbVwiOiBcIlx1MDYyM1x1MDYzM1x1MDY0MVx1MDY0NFwiLFxyXG4gICAgXCJzbS50YkJnXCI6IFwiXHUwNjJFXHUwNjQ0XHUwNjQxXHUwNjRBXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDYzNFx1MDYzMVx1MDY0QVx1MDYzN1wiLFxyXG4gICAgXCJzbS50YkJ0bkJnXCI6IFwiXHUwNjJFXHUwNjQ0XHUwNjQxXHUwNjRBXHUwNjI5IFx1MDYyN1x1MDY0NFx1MDYzMlx1MDYzMVwiLFxyXG4gICAgXCJzbS50YkJ0bkJvcmRlclwiOiBcIlx1MDY0Nlx1MDY0NVx1MDYzNyBcdTA2MkRcdTA2MkZcdTA2NDhcdTA2MkYgXHUwNjI3XHUwNjQ0XHUwNjMyXHUwNjMxXCIsXHJcbiAgICBcInNtLnRiQnRuQm9yZGVyQ29sb3JcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjJEXHUwNjJGXHUwNjQ4XHUwNjJGIFx1MDYyN1x1MDY0NFx1MDYzMlx1MDYzMVwiLFxyXG4gICAgXCJzbS50YkJ0blRleHRcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjQ2XHUwNjM1IFx1MDYyN1x1MDY0NFx1MDYzMlx1MDYzMVwiLFxyXG4gICAgXCJzbS50YlJlc2V0RGVmYXVsdFwiOiBcIlx1MDYyNVx1MDYzOVx1MDYyN1x1MDYyRlx1MDYyOSBcdTA2MkFcdTA2MzlcdTA2NEFcdTA2NEFcdTA2NDYgXHUwNjI3XHUwNjQ0XHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3XCIsXHJcbiAgICBcIm5zLnRpdGxlXCI6IFwiXHVEODNDXHVERkE4IFx1MDY0Nlx1MDY0NVx1MDYzNyBcdTA2MjdcdTA2NDRcdTA2MzlcdTA2NDJcdTA2MkZcdTA2MjlcIixcclxuICAgIFwibnMuY29ubkNvbG9yXCI6IFwiXHUwNjQ0XHUwNjQ4XHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDYyRVx1MDYzN1wiLFxyXG4gICAgXCJucy5jb25uV2lkdGhcIjogXCJcdTA2MzlcdTA2MzFcdTA2MzYgXHUwNjI3XHUwNjQ0XHUwNjJFXHUwNjM3XCIsXHJcbiAgICBcIm5zLmNsZWFyXCI6IFwiXHUwNjQ1XHUwNjMzXHUwNjJEIFx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRVx1MDYzNVx1MDY0QVx1MDYzNVwiLFxyXG4gICAgXCJucy5ib3JkZXJSYWRpdXNcIjogXCJcdTA2MkFcdTA2NDJcdTA2NDhcdTA2NEFcdTA2MzMgXHUwNjI3XHUwNjQ0XHUwNjMyXHUwNjQ4XHUwNjI3XHUwNjRBXHUwNjI3XCIsXHJcbiAgICBcInNlYXJjaC5wbGFjZWhvbGRlclwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyOFx1MDYyRFx1MDYyQiBcdTA2NDFcdTA2NEEgXHUwNjI3XHUwNjQ0XHUwNjM5XHUwNjQyXHUwNjJGLi4uXCIsXHJcbiAgICBcImRlZi5yb290XCI6IFwiXHUwNjJDXHUwNjMwXHUwNjMxXCIsXHJcbiAgICBcImRlZi5uZXdSb290XCI6IFwiXHUwNjJDXHUwNjMwXHUwNjMxIFx1MDYyQ1x1MDYyRlx1MDY0QVx1MDYyRlwiLFxyXG4gICAgXCJkZWYuY2hpbGRcIjogXCJcdTA2NDFcdTA2MzFcdTA2MzlcIixcclxuICAgIFwic2V0LnRpdGxlXCI6IFwiXHUwNjI1XHUwNjM5XHUwNjJGXHUwNjI3XHUwNjJGXHUwNjI3XHUwNjJBIE1pbmRaSlwiLFxyXG4gICAgXCJzZXQubGFuZ1wiOiBcIlx1MDYyN1x1MDY0NFx1MDY0NFx1MDYzQVx1MDYyOVwiLFxyXG4gICAgXCJzZXQubGFuZ0Rlc2NcIjogXCJcdTA2NDRcdTA2M0FcdTA2MjkgXHUwNjI3XHUwNjQ0XHUwNjQ4XHUwNjI3XHUwNjJDXHUwNjQ3XHUwNjI5XCIsXHJcbiAgICBcInNldC50aGVtZVwiOiBcIlx1MDYyN1x1MDY0NFx1MDYzM1x1MDY0NVx1MDYyOVwiLFxyXG4gICAgXCJzZXQudGhlbWVEZXNjXCI6IFwiXHUwNjMzXHUwNjQ1XHUwNjI5IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDY0NFx1MDY0OFx1MDYyN1x1MDY0NlwiLFxyXG4gICAgXCJzZXQubGlnaHRcIjogXCJcdTA2NDFcdTA2MjdcdTA2MkFcdTA2MkRcIixcclxuICAgIFwic2V0LmRhcmtcIjogXCJcdTA2MkZcdTA2MjdcdTA2NDNcdTA2NDZcIixcclxuICAgIFwic2V0LnRvb2xiYXJcIjogXCJcdTA2MjVcdTA2MzhcdTA2NDdcdTA2MjdcdTA2MzEgXHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0OFx1MDYyN1x1MDYyQVwiLFxyXG4gICAgXCJzZXQudG9vbGJhckRlc2NcIjogXCJcdTA2MjVcdTA2MzhcdTA2NDdcdTA2MjdcdTA2MzEgXHUwNjM0XHUwNjMxXHUwNjRBXHUwNjM3IFx1MDYyN1x1MDY0NFx1MDYyM1x1MDYyRlx1MDY0OFx1MDYyN1x1MDYyQVwiLFxyXG4gICAgXCJzZXQuY2FudmFzQmdcIjogXCJcdTA2MkVcdTA2NDRcdTA2NDFcdTA2NEFcdTA2MjkgXHUwNjI3XHUwNjQ0XHUwNjQ0XHUwNjQ4XHUwNjJEXHUwNjI5XCIsXHJcbiAgICBcInNldC5jYW52YXNCZ0Rlc2NcIjogXCJcdTA2NDRcdTA2NDhcdTA2NDYgXHUwNjI3XHUwNjQ0XHUwNjJFXHUwNjQ0XHUwNjQxXHUwNjRBXHUwNjI5XCIsXHJcbiAgICBcInNldC5hYm91dFwiOiBcIlx1MDYyRFx1MDY0OFx1MDY0NFwiLFxyXG4gICAgXCJzZXQudmVyc2lvblwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyNVx1MDYzNVx1MDYyRlx1MDYyN1x1MDYzMVwiLFxyXG4gICAgXCJzZXQuYXV0aG9yXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjI0XHUwNjQ0XHUwNjQxXCIsXHJcbiAgICBcInNldC5kZXNjXCI6XHJcbiAgICAgICAgXCJcdTA2MkFcdTA2MzdcdTA2MjhcdTA2NEFcdTA2NDIgXHUwNjJFXHUwNjMxXHUwNjI3XHUwNjI2XHUwNjM3IFx1MDYzMFx1MDY0N1x1MDY0Nlx1MDY0QVx1MDYyOSBcdTA2NDVcdTA2NDFcdTA2MkFcdTA2NDhcdTA2MkQgXHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjM1XHUwNjJGXHUwNjMxIFx1MDYzQVx1MDY0Nlx1MDY0QSBcdTA2MjhcdTA2MjdcdTA2NDRcdTA2NDVcdTA2NEFcdTA2MzJcdTA2MjdcdTA2MkEgXHUwNjQ0XHUwNjQwIE9ic2lkaWFuIFx1MDY0NVx1MDYzOSBcdTA2MjNcdTA2NDZcdTA2NDVcdTA2MjdcdTA2MzcgXHUwNjQ1XHUwNjJFXHUwNjM1XHUwNjM1XHUwNjI5XHUwNjBDIFx1MDY0OFx1MDYzNVx1MDY0NFx1MDYyN1x1MDYyQSBcdTA2NDJcdTA2NDhcdTA2MzMgXHUwNjQyXHUwNjMyXHUwNjJEXHUwNjBDIFx1MDYyQVx1MDYyRFx1MDYyRlx1MDY0QVx1MDYyRiBcdTA2NDVcdTA2MkFcdTA2MzlcdTA2MkZcdTA2MkZcdTA2MEMgXHUwNjMzXHUwNjJEXHUwNjI4IFx1MDY0OFx1MDYyNVx1MDY0MVx1MDY0NFx1MDYyN1x1MDYyQVx1MDYwQyBcdTA2NDhcdTA2MjdcdTA2MzNcdTA2MkFcdTA2NEFcdTA2MzFcdTA2MjdcdTA2MkYvXHUwNjJBXHUwNjM1XHUwNjJGXHUwNjRBXHUwNjMxIE1hcmtkb3duLlwiLFxyXG4gICAgXCJzZXQudXBkYXRlZFwiOiBcIlx1MDYyQVx1MDY0NSBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MkRcdTA2MkZcdTA2NEFcdTA2MkJcIixcclxuICAgIFwic2V0LmdpdGh1YlwiOiBcIlx1MDY0NVx1MDYzM1x1MDYyQVx1MDY0OFx1MDYyRlx1MDYzOSBHaXRIdWJcIixcclxuICAgIFwic2V0LmRvbmF0ZVwiOiBcIlx1MDYyN1x1MDYyRlx1MDYzOVx1MDY0NSBcdTA2NDVcdTA2MjRcdTA2NDRcdTA2NDEgXHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjM1XHUwNjJGXHUwNjMxIFx1MDYyN1x1MDY0NFx1MDY0NVx1MDY0MVx1MDYyQVx1MDY0OFx1MDYyRFwiLFxyXG4gICAgXCJzZXQua2V5c1wiOiBcIlx1MDYyN1x1MDYyRVx1MDYyQVx1MDYzNVx1MDYyN1x1MDYzMVx1MDYyN1x1MDYyQSBcdTA2NDRcdTA2NDhcdTA2MkRcdTA2MjkgXHUwNjI3XHUwNjQ0XHUwNjQ1XHUwNjQxXHUwNjI3XHUwNjJBXHUwNjRBXHUwNjJEXCIsXHJcbiAgICBcInNldC5rZXlzRGVzY1wiOiBcIlx1MDYyQVx1MDYyRVx1MDYzNVx1MDY0QVx1MDYzNSBcdTA2MjdcdTA2NDRcdTA2MjdcdTA2MkVcdTA2MkFcdTA2MzVcdTA2MjdcdTA2MzFcdTA2MjdcdTA2MkFcIixcclxuICAgIFwic2V0LmtleS5lZGl0XCI6IFwiXHUwNjJBXHUwNjJEXHUwNjMxXHUwNjRBXHUwNjMxIFx1MDYyN1x1MDY0NFx1MDYzOVx1MDY0Mlx1MDYyRlx1MDYyOVwiLFxyXG4gICAgXCJzZXQua2V5LnNpYmxpbmdcIjogXCJcdTA2MjVcdTA2MzZcdTA2MjdcdTA2NDFcdTA2MjkgXHUwNjM0XHUwNjQyXHUwNjRBXHUwNjQyXCIsXHJcbiAgICBcInNldC5rZXkuY2hpbGRcIjogXCJcdTA2MjVcdTA2MzZcdTA2MjdcdTA2NDFcdTA2MjkgXHUwNjQxXHUwNjMxXHUwNjM5XCIsXHJcbiAgICBcInNldC5rZXkuZm9jdXNcIjogXCJcdTA2MjdcdTA2NDRcdTA2MkFcdTA2MzFcdTA2NDNcdTA2NEFcdTA2MzIgXHUwNjM5XHUwNjQ0XHUwNjQ5IFx1MDYyN1x1MDY0NFx1MDYzOVx1MDY0Mlx1MDYyRlx1MDYyOVwiLFxyXG4gICAgXCJzZXQua2V5LnVuZG9cIjogXCJcdTA2MkFcdTA2MzFcdTA2MjdcdTA2MkNcdTA2MzlcIixcclxuICAgIFwic2V0LmtleS5yZWRvXCI6IFwiXHUwNjI1XHUwNjM5XHUwNjI3XHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcInNldC5rZXkubGluZUJyZWFrXCI6IFwiXHUwNjQxXHUwNjI3XHUwNjM1XHUwNjQ0IFx1MDYzM1x1MDYzN1x1MDYzMSAoXHUwNjIzXHUwNjJCXHUwNjQ2XHUwNjI3XHUwNjIxIFx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSlcIixcclxuICAgIFwic2V0LmtleS5kcmFnQ2FudmFzXCI6IFwiXHUwNjMzXHUwNjJEXHUwNjI4IFx1MDYyN1x1MDY0NFx1MDY0NFx1MDY0OFx1MDYyRFx1MDYyOVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21JblwiOiBcIlx1MDYyQVx1MDY0M1x1MDYyOFx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJzZXQua2V5Lnpvb21PdXRcIjogXCJcdTA2MkFcdTA2MzVcdTA2M0FcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic2V0LmtleS56b29tUmVzZXRcIjogXCJcdTA2MjVcdTA2MzlcdTA2MjdcdTA2MkZcdTA2MjkgXHUwNjJBXHUwNjM5XHUwNjRBXHUwNjRBXHUwNjQ2IFx1MDYyN1x1MDY0NFx1MDYyQVx1MDY0M1x1MDYyOFx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJzZXQua2V5LnVwXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjQ2XHUwNjQyXHUwNjQ0IFx1MDY0NFx1MDYyM1x1MDYzOVx1MDY0NFx1MDY0OVwiLFxyXG4gICAgXCJzZXQua2V5LmRvd25cIjogXCJcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDZcdTA2NDJcdTA2NDQgXHUwNjQ0XHUwNjIzXHUwNjMzXHUwNjQxXHUwNjQ0XCIsXHJcbiAgICBcInNldC5rZXkubGVmdFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyQVx1MDY0Nlx1MDY0Mlx1MDY0NCBcdTA2NDRcdTA2NDRcdTA2NEFcdTA2MzNcdTA2MjdcdTA2MzFcIixcclxuICAgIFwic2V0LmtleS5yaWdodFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyQVx1MDY0Nlx1MDY0Mlx1MDY0NCBcdTA2NDRcdTA2NDRcdTA2NEFcdTA2NDVcdTA2NEFcdTA2NDZcIixcclxuICAgIFwic2V0LmtleS5wcmVzc1wiOiBcIlx1MDYyN1x1MDYzNlx1MDYzQVx1MDYzNyBcdTA2NDVcdTA2NDFcdTA2MkFcdTA2MjdcdTA2MkRcdTA2MjdcdTA2NEIuLi5cIixcclxuICAgIFwic2V0LnNjcm9sbFwiOiBcIlx1MDYyN1x1MDY0NFx1MDYyQVx1MDY0NVx1MDYzMVx1MDY0QVx1MDYzMSBcdTA2NDhcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDNcdTA2MjhcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic2V0LmludmVydFlcIjogXCJcdTA2MzlcdTA2NDNcdTA2MzMgXHUwNjI3XHUwNjQ0XHUwNjJBXHUwNjQ1XHUwNjMxXHUwNjRBXHUwNjMxIFx1MDYyN1x1MDY0NFx1MDYzOVx1MDY0NVx1MDY0OFx1MDYyRlx1MDY0QVwiLFxyXG4gICAgXCJzZXQuaW52ZXJ0WFwiOiBcIlx1MDYzOVx1MDY0M1x1MDYzMyBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDVcdTA2MzFcdTA2NEFcdTA2MzEgXHUwNjI3XHUwNjQ0XHUwNjIzXHUwNjQxXHUwNjQyXHUwNjRBXCIsXHJcbiAgICBcInNldC5pbnZlcnRab29tXCI6IFwiXHUwNjM5XHUwNjQzXHUwNjMzIFx1MDYyN1x1MDYyQVx1MDYyQ1x1MDYyN1x1MDY0NyBcdTA2MjdcdTA2NDRcdTA2MkFcdTA2NDNcdTA2MjhcdTA2NEFcdTA2MzFcIixcclxuICAgIFwic2V0LmVkaXRPbkNyZWF0ZVwiOiBcIlx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSBcdTA2MzlcdTA2NDZcdTA2MkYgXHUwNjI3XHUwNjQ0XHUwNjI1XHUwNjQ2XHUwNjM0XHUwNjI3XHUwNjIxXCIsXHJcbiAgICBcInNldC5lZGl0T25DcmVhdGVEZXNjXCI6IFwiXHUwNjQ4XHUwNjM2XHUwNjM5IFx1MDYyN1x1MDY0NFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMSBcdTA2MzlcdTA2NDZcdTA2MkYgXHUwNjI1XHUwNjQ2XHUwNjM0XHUwNjI3XHUwNjIxIFx1MDYzOVx1MDY0Mlx1MDYyRiBcdTA2MkNcdTA2MkZcdTA2NEFcdTA2MkZcdTA2MjlcIixcclxuICAgIFwic2V0LnJvb3ROYW1lXCI6IFwiXHUwNjI3XHUwNjMzXHUwNjQ1IFx1MDYyN1x1MDY0NFx1MDYyQ1x1MDYzMFx1MDYzMVwiLFxyXG4gICAgXCJzZXQucm9vdE5hbWVEZXNjXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjI3XHUwNjMzXHUwNjQ1IFx1MDYyN1x1MDY0NFx1MDYyN1x1MDY0MVx1MDYyQVx1MDYzMVx1MDYyN1x1MDYzNlx1MDY0QSBcdTA2NDRcdTA2NDRcdTA2MkNcdTA2MzBcdTA2NDhcdTA2MzEgXHUwNjI3XHUwNjQ0XHUwNjJDXHUwNjJGXHUwNjRBXHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVcIjogXCJcdTA2MjdcdTA2MzNcdTA2NDUgXHUwNjI3XHUwNjQ0XHUwNjQxXHUwNjMxXHUwNjM5XCIsXHJcbiAgICBcInNldC5jaGlsZE5hbWVEZXNjXCI6IFwiXHUwNjI3XHUwNjQ0XHUwNjI3XHUwNjMzXHUwNjQ1IFx1MDYyN1x1MDY0NFx1MDYyN1x1MDY0MVx1MDYyQVx1MDYzMVx1MDYyN1x1MDYzNlx1MDY0QSBcdTA2NDRcdTA2NDRcdTA2NDFcdTA2MzFcdTA2NDhcdTA2MzkgXHUwNjI3XHUwNjQ0XHUwNjJDXHUwNjJGXHUwNjRBXHUwNjJGXHUwNjI5XCIsXHJcbiAgICBcInNldC50eXBlVG9FZGl0XCI6IFwiXHUwNjI3XHUwNjQzXHUwNjJBXHUwNjI4IFx1MDY0NFx1MDY0NFx1MDYyQVx1MDYyRFx1MDYzMVx1MDY0QVx1MDYzMVwiLFxyXG4gICAgXCJzZXQudHlwZVRvRWRpdERlc2NcIjogXCJcdTA2MkRcdTA2MzFcdTA2NTFcdTA2MzEgXHUwNjI4XHUwNjI3XHUwNjQ0XHUwNjQzXHUwNjJBXHUwNjI3XHUwNjI4XHUwNjI5IFx1MDYzOVx1MDY0Nlx1MDYyRiBcdTA2MkFcdTA2MkRcdTA2MkZcdTA2NEFcdTA2MkYgXHUwNjM5XHUwNjQyXHUwNjJGXHUwNjI5XCIsXHJcbn07XHJcblxyXG5jb25zdCBBTEw6IFJlY29yZDxMYW5ndWFnZSwgdHlwZW9mIF9lbj4gPSB7XHJcbiAgICBlbjogX2VuLFxyXG4gICAgemg6IF96aCxcclxuICAgIGphOiBfamEsXHJcbiAgICBmcjogX2ZyLFxyXG4gICAgZGU6IF9kZSxcclxuICAgIGVzOiBfZXMsXHJcbiAgICBydTogX3J1LFxyXG4gICAgc3Y6IF9zdixcclxuICAgIGhpOiBfaGksXHJcbiAgICBrbzogX2tvLFxyXG4gICAgcHQ6IF9wdCxcclxuICAgIGZpOiBfZmksXHJcbiAgICBubzogX25vLFxyXG4gICAgbmw6IF9ubCxcclxuICAgIGxpOiBfbGksXHJcbiAgICBkYTogX2RhLFxyXG4gICAgaGU6IF9oZSxcclxuICAgIGl0OiBfaXQsXHJcbiAgICBhcjogX2FyLFxyXG59O1xyXG5cclxubGV0IF9sYW5nOiBMYW5ndWFnZSA9IFwiZW5cIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldExhbmcobDogTGFuZ3VhZ2UpIHtcclxuICAgIF9sYW5nID0gbDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZygpOiBMYW5ndWFnZSB7XHJcbiAgICByZXR1cm4gX2xhbmc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIChBTExbX2xhbmddIGFzIGFueSk/LltrZXldID8/IChBTExbXCJlblwiXSBhcyBhbnkpPy5ba2V5XSA/PyBrZXk7XHJcbn1cclxuIiwgIi8vIHNyYy9TdHlsZVBhbmVsVmlldy50c1xyXG5pbXBvcnQgeyBJdGVtVmlldywgV29ya3NwYWNlTGVhZiwgU2V0dGluZyB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQge1xyXG4gICAgVklFV19UWVBFX01JTkRNQVBfU1RZTEUsXHJcbiAgICBWSUVXX1RZUEVfTUlORE1BUCxcclxuICAgIE1pbmRNYXBTdHlsZSxcclxuICAgIERFRkFVTFRfU1RZTEUsXHJcbiAgICBGT05UX0xJU1QsXHJcbiAgICBDT05ORUNUSU9OX1NUWUxFUyxcclxuICAgIFJBSU5CT1dfUEFMRVRURVMsXHJcbn0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgdCB9IGZyb20gXCIuL2kxOG5cIjtcclxuaW1wb3J0IHsgTWluZE1hcFZpZXcgfSBmcm9tIFwiLi9NaW5kTWFwVmlld1wiO1xyXG5pbXBvcnQgdHlwZSBNaW5kTm9kZVBsdWdpbiBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3R5bGVQYW5lbFZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XHJcbiAgICBwcml2YXRlIHBsdWdpbjogTWluZE5vZGVQbHVnaW47XHJcbiAgICBjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBwbHVnaW46IE1pbmROb2RlUGx1Z2luKSB7XHJcbiAgICAgICAgc3VwZXIobGVhZik7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcbiAgICB9XHJcbiAgICBnZXRWaWV3VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gVklFV19UWVBFX01JTkRNQVBfU1RZTEU7XHJcbiAgICB9XHJcbiAgICBnZXREaXNwbGF5VGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gXCJNaW5kWkogXCIgKyB0KFwidGIuc3R5bGVcIik7XHJcbiAgICB9XHJcbiAgICBnZXRJY29uKCkge1xyXG4gICAgICAgIHJldHVybiBcInBhbGV0dGVcIjtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVxdWlyZS1hd2FpdFxyXG4gICAgYXN5bmMgb25PcGVuKCkge1xyXG4gICAgICAgIHRoaXMuYnVpbGQoKTtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVxdWlyZS1hd2FpdFxyXG4gICAgYXN5bmMgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvKiBubyBjbGVhbnVwIG5lZWRlZCAqL1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VmlldygpOiBNaW5kTWFwVmlldyB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGwgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9NSU5ETUFQKTtcclxuICAgICAgICByZXR1cm4gbC5sZW5ndGggPiAwICYmIGxbMF0udmlldyBpbnN0YW5jZW9mIE1pbmRNYXBWaWV3XHJcbiAgICAgICAgICAgID8gbFswXS52aWV3XHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkKCkge1xyXG4gICAgICAgIGNvbnN0IGN0ID0gdGhpcy5jb250YWluZXJFbC5jaGlsZHJlblsxXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBjdC5lbXB0eSgpO1xyXG4gICAgICAgIGN0LmFkZENsYXNzKFwibXotc3AtY3RcIik7XHJcblxyXG4gICAgICAgIG5ldyBTZXR0aW5nKGN0KS5zZXROYW1lKHQoXCJzbS50aXRsZVwiKSkuc2V0SGVhZGluZygpO1xyXG5cclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5nZXRWaWV3KCk7XHJcbiAgICAgICAgY29uc3QgczogTWluZE1hcFN0eWxlID0gdmlldz8uc3R5bGVcclxuICAgICAgICAgICAgPyB7IC4uLnZpZXcuc3R5bGUgfVxyXG4gICAgICAgICAgICA6IHRoaXMucGx1Z2luLmdldFN0eWxlKCk7XHJcbiAgICAgICAgY29uc3QgdXBkID0gKHA6IFBhcnRpYWw8TWluZE1hcFN0eWxlPikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5nZXRWaWV3KCk7XHJcbiAgICAgICAgICAgIGlmICh2KSB2LmFwcGx5U3R5bGUocCk7XHJcbiAgICAgICAgICAgIGVsc2Ugdm9pZCB0aGlzLnBsdWdpbi51cGRhdGVTdHlsZShwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzYWZlU3RyID0gKHZhbDogTWluZE1hcFN0eWxlW2tleW9mIE1pbmRNYXBTdHlsZV0pOiBzdHJpbmcgPT5cclxuICAgICAgICAgICAgdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgPyB2YWxcclxuICAgICAgICAgICAgICAgIDogdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICA/IFN0cmluZyh2YWwpXHJcbiAgICAgICAgICAgICAgICAgIDogdHlwZW9mIHZhbCA9PT0gXCJib29sZWFuXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFN0cmluZyh2YWwpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xyXG5cclxuICAgICAgICBjb25zdCBta1NlYyA9IChpY29uOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VjID0gY3QuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHNlYy5hZGRDbGFzcyhcIm16LXNwLXNlY1wiKTtcclxuICAgICAgICAgICAgY29uc3QgaGRyID0gc2VjLmNyZWF0ZUVsKFwiZGl2XCIsIHsgdGV4dDogaWNvbiArIFwiICBcIiArIHRpdGxlIH0pO1xyXG4gICAgICAgICAgICBoZHIuYWRkQ2xhc3MoXCJtei1zcC1zZWMtaGRyXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gc2VjLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBiLmFkZENsYXNzKFwibXotc3Atc2VjLWJvZHlcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWtSb3cgPSAocDogSFRNTEVsZW1lbnQsIGw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByID0gcC5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgci5hZGRDbGFzcyhcIm16LXNwLXJvd1wiKTtcclxuICAgICAgICAgICAgY29uc3QgbGJsID0gci5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBsIH0pO1xyXG4gICAgICAgICAgICBsYmwuYWRkQ2xhc3MoXCJtei1zcC1sYmxcIik7XHJcbiAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbWtDb2xvciA9IChwOiBIVE1MRWxlbWVudCwgbDogc3RyaW5nLCBrOiBrZXlvZiBNaW5kTWFwU3R5bGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG1rUm93KHAsIGwpO1xyXG4gICAgICAgICAgICBjb25zdCBpID0gci5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGkudHlwZSA9IFwiY29sb3JcIjtcclxuICAgICAgICAgICAgY29uc3QgY3YgPSBzW2tdO1xyXG4gICAgICAgICAgICBpLnZhbHVlID1cclxuICAgICAgICAgICAgICAgIHR5cGVvZiBjdiA9PT0gXCJzdHJpbmdcIiAmJiBjdi5zdGFydHNXaXRoKFwidmFyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIiNmZmZmZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogc2FmZVN0cihjdik7XHJcbiAgICAgICAgICAgIGkuYWRkQ2xhc3MoXCJtei1zcC1jb2xvclwiKTtcclxuICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT5cclxuICAgICAgICAgICAgICAgIHVwZCh7IFtrXTogaS52YWx1ZSB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBta1JhbmdlID0gKFxyXG4gICAgICAgICAgICBwOiBIVE1MRWxlbWVudCxcclxuICAgICAgICAgICAgbDogc3RyaW5nLFxyXG4gICAgICAgICAgICBrOiBrZXlvZiBNaW5kTWFwU3R5bGUsXHJcbiAgICAgICAgICAgIG1pbjogbnVtYmVyLFxyXG4gICAgICAgICAgICBtYXg6IG51bWJlcixcclxuICAgICAgICAgICAgc3RlcD86IG51bWJlcixcclxuICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG1rUm93KHAsIGwpO1xyXG4gICAgICAgICAgICBjb25zdCB3ID0gci5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICAgICAgdy5hZGRDbGFzcyhcIm16LXNwLXJhbmdlLXdyYXBcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGkgPSB3LmNyZWF0ZUVsKFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgaS50eXBlID0gXCJyYW5nZVwiO1xyXG4gICAgICAgICAgICBpLm1pbiA9IFN0cmluZyhtaW4pO1xyXG4gICAgICAgICAgICBpLm1heCA9IFN0cmluZyhtYXgpO1xyXG4gICAgICAgICAgICBpZiAoc3RlcCkgaS5zdGVwID0gU3RyaW5nKHN0ZXApO1xyXG4gICAgICAgICAgICBpLnZhbHVlID0gc2FmZVN0cihzW2tdKTtcclxuICAgICAgICAgICAgaS5hZGRDbGFzcyhcIm16LXNwLXJhbmdlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBuID0gdy5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBzYWZlU3RyKHNba10pIH0pO1xyXG4gICAgICAgICAgICBuLmFkZENsYXNzKFwibXotc3AtcmFuZ2UtdmFsXCIpO1xyXG4gICAgICAgICAgICBpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuLnRleHRDb250ZW50ID0gaS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHVwZCh7IFtrXTogTnVtYmVyKGkudmFsdWUpIH0gYXMgUGFydGlhbDxNaW5kTWFwU3R5bGU+KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBta051bSA9IChcclxuICAgICAgICAgICAgcDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgICAgIGw6IHN0cmluZyxcclxuICAgICAgICAgICAgazoga2V5b2YgTWluZE1hcFN0eWxlLFxyXG4gICAgICAgICAgICBtaW46IG51bWJlcixcclxuICAgICAgICAgICAgbWF4OiBudW1iZXIsXHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBta1JvdyhwLCBsKTtcclxuICAgICAgICAgICAgY29uc3QgaSA9IHIuY3JlYXRlRWwoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgICAgICBpLm1pbiA9IFN0cmluZyhtaW4pO1xyXG4gICAgICAgICAgICBpLm1heCA9IFN0cmluZyhtYXgpO1xyXG4gICAgICAgICAgICBpLnZhbHVlID0gc2FmZVN0cihzW2tdKTtcclxuICAgICAgICAgICAgaS5hZGRDbGFzcyhcIm16LXNwLW51bVwiKTtcclxuICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICB1cGQoeyBba106IE51bWJlcihpLnZhbHVlKSB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBta1NlbCA9IChcclxuICAgICAgICAgICAgcDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgICAgIGw6IHN0cmluZyxcclxuICAgICAgICAgICAgazoga2V5b2YgTWluZE1hcFN0eWxlLFxyXG4gICAgICAgICAgICBvcHRzOiBzdHJpbmdbXSxcclxuICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgciA9IG1rUm93KHAsIGwpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWwgPSByLmNyZWF0ZUVsKFwic2VsZWN0XCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgICAgICAgICBzZWwuYWRkQ2xhc3MoXCJtei1zcC1zZWxcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbyBvZiBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgICAgICBvcC52YWx1ZSA9IG87XHJcbiAgICAgICAgICAgICAgICBvcC50ZXh0ID0gbztcclxuICAgICAgICAgICAgICAgIGlmIChvID09PSBzYWZlU3RyKHNba10pKSBvcC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZWwuYXBwZW5kQ2hpbGQob3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XHJcbiAgICAgICAgICAgICAgICB1cGQoeyBba106IHNlbC52YWx1ZSB9IGFzIFBhcnRpYWw8TWluZE1hcFN0eWxlPiksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQ2hpbGQgbm9kZVxyXG4gICAgICAgIGNvbnN0IHMxID0gbWtTZWMoXCJcdUQ4M0RcdURDRTZcIiwgdChcInNtLmNoaWxkXCIpKTtcclxuICAgICAgICBta0NvbG9yKHMxLCB0KFwic20uYmdcIiksIFwibm9kZUJnQ29sb3JcIik7XHJcbiAgICAgICAgbWtDb2xvcihzMSwgdChcInNtLnRleHRcIiksIFwibm9kZVRleHRDb2xvclwiKTtcclxuICAgICAgICBta1JhbmdlKHMxLCB0KFwic20uZm9udFNpemVcIiksIFwibm9kZUZvbnRTaXplXCIsIDEwLCAzMik7XHJcbiAgICAgICAgbWtTZWwoczEsIHQoXCJzbS5mb250XCIpLCBcIm5vZGVGb250RmFtaWx5XCIsIEZPTlRfTElTVCk7XHJcbiAgICAgICAgbWtTZWwoczEsIHQoXCJzbS5ib3JkZXJTdHlsZVwiKSwgXCJub2RlQm9yZGVyU3R5bGVcIiwgW1xyXG4gICAgICAgICAgICBcInNvbGlkXCIsXHJcbiAgICAgICAgICAgIFwiZGFzaGVkXCIsXHJcbiAgICAgICAgICAgIFwiZG90dGVkXCIsXHJcbiAgICAgICAgICAgIFwiZG91YmxlXCIsXHJcbiAgICAgICAgICAgIFwibm9uZVwiLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIG1rQ29sb3IoczEsIHQoXCJzbS5ib3JkZXJDb2xvclwiKSwgXCJub2RlQm9yZGVyQ29sb3JcIik7XHJcbiAgICAgICAgbWtSYW5nZShzMSwgdChcInNtLmJvcmRlcldpZHRoXCIpLCBcIm5vZGVCb3JkZXJXaWR0aFwiLCAwLCA4KTtcclxuICAgICAgICBta1JhbmdlKHMxLCB0KFwic20uYm9yZGVyUmFkaXVzXCIpLCBcIm5vZGVCb3JkZXJSYWRpdXNcIiwgMCwgMzIpO1xyXG4gICAgICAgIG1rTnVtKHMxLCB0KFwic20ubWluV2lkdGhcIiksIFwibm9kZU1pbldpZHRoXCIsIDMwLCA0MDApO1xyXG4gICAgICAgIG1rTnVtKHMxLCB0KFwic20ubWluSGVpZ2h0XCIpLCBcIm5vZGVNaW5IZWlnaHRcIiwgMjAsIDIwMCk7XHJcblxyXG4gICAgICAgIC8vIFJvb3Qgbm9kZVxyXG4gICAgICAgIGNvbnN0IHMyID0gbWtTZWMoXCJcdUQ4M0NcdURGRTBcIiwgdChcInNtLnJvb3RcIikpO1xyXG4gICAgICAgIG1rQ29sb3IoczIsIHQoXCJzbS5iZ1wiKSwgXCJyb290QmdDb2xvclwiKTtcclxuICAgICAgICBta0NvbG9yKHMyLCB0KFwic20udGV4dFwiKSwgXCJyb290VGV4dENvbG9yXCIpO1xyXG4gICAgICAgIG1rUmFuZ2UoczIsIHQoXCJzbS5mb250U2l6ZVwiKSwgXCJyb290Rm9udFNpemVcIiwgMTAsIDMyKTtcclxuICAgICAgICBta1NlbChzMiwgdChcInNtLmZvbnRcIiksIFwicm9vdEZvbnRGYW1pbHlcIiwgRk9OVF9MSVNUKTtcclxuICAgICAgICBta1NlbChzMiwgdChcInNtLmJvcmRlclN0eWxlXCIpLCBcInJvb3RCb3JkZXJTdHlsZVwiLCBbXHJcbiAgICAgICAgICAgIFwic29saWRcIixcclxuICAgICAgICAgICAgXCJkYXNoZWRcIixcclxuICAgICAgICAgICAgXCJkb3R0ZWRcIixcclxuICAgICAgICAgICAgXCJkb3VibGVcIixcclxuICAgICAgICAgICAgXCJub25lXCIsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgbWtDb2xvcihzMiwgdChcInNtLmJvcmRlckNvbG9yXCIpLCBcInJvb3RCb3JkZXJDb2xvclwiKTtcclxuICAgICAgICBta1JhbmdlKHMyLCB0KFwic20uYm9yZGVyV2lkdGhcIiksIFwicm9vdEJvcmRlcldpZHRoXCIsIDAsIDgpO1xyXG4gICAgICAgIG1rUmFuZ2UoczIsIHQoXCJzbS5ib3JkZXJSYWRpdXNcIiksIFwicm9vdEJvcmRlclJhZGl1c1wiLCAwLCAzMik7XHJcbiAgICAgICAgbWtOdW0oczIsIHQoXCJzbS5taW5XaWR0aFwiKSwgXCJyb290TWluV2lkdGhcIiwgNTAsIDQwMCk7XHJcbiAgICAgICAgbWtOdW0oczIsIHQoXCJzbS5taW5IZWlnaHRcIiksIFwicm9vdE1pbkhlaWdodFwiLCAyMCwgMjAwKTtcclxuXHJcbiAgICAgICAgLy8gQ29ubmVjdGlvblxyXG4gICAgICAgIGNvbnN0IHMzID0gbWtTZWMoXCJcdUQ4M0RcdUREMTdcIiwgdChcInNtLmNvbm5cIikpO1xyXG4gICAgICAgIG1rU2VsKHMzLCB0KFwic20udHlwZVwiKSwgXCJjb25uZWN0aW9uU3R5bGVcIiwgQ09OTkVDVElPTl9TVFlMRVMpO1xyXG4gICAgICAgIG1rQ29sb3IoczMsIHQoXCJzbS5jb2xvclwiKSwgXCJjb25uZWN0aW9uQ29sb3JcIik7XHJcbiAgICAgICAgbWtSYW5nZShzMywgdChcInNtLndpZHRoXCIpLCBcImNvbm5lY3Rpb25XaWR0aFwiLCAxLCA4KTtcclxuICAgICAgICBta051bShzMywgdChcInNtLmNvbm5MZW5ndGhcIiksIFwiY29ubmVjdGlvbkxlbmd0aFwiLCAzMCwgMzAwKTtcclxuICAgICAgICBta1NlbChzMywgdChcInNtLm5vZGVEaXJcIiksIFwibm9kZURpcmVjdGlvblwiLCBbXCJyaWdodFwiLCBcImxlZnRcIiwgXCJib3RoXCJdKTtcclxuICAgICAgICBta1JhbmdlKHMzLCB0KFwic20ubm9kZUdhcFlcIiksIFwibm9kZUdhcFlcIiwgOCwgODApO1xyXG5cclxuICAgICAgICAvLyBSYWluYm93XHJcbiAgICAgICAgY29uc3QgY3RSb3cgPSBzMy5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBjdFJvdy5hZGRDbGFzcyhcIm16LXJhaW5ib3ctY3RcIik7XHJcbiAgICAgICAgY29uc3QgcmxibCA9IGN0Um93LmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IHQoXCJzbS5yYWluYm93XCIpIH0pO1xyXG4gICAgICAgIHJsYmwuYWRkQ2xhc3MoXCJtei1yYWluYm93LWxibFwiKTtcclxuICAgICAgICBjb25zdCBhbGxQOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7XHJcbiAgICAgICAgICAgIC4uLlJBSU5CT1dfUEFMRVRURVMsXHJcbiAgICAgICAgICAgIC4uLihzLmN1c3RvbVJhaW5ib3dzIHx8IHt9KSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGN1clAgPSBzLmNvbm5lY3Rpb25SYWluYm93ID8gcy5yYWluYm93UGFsZXR0ZSA6IFwib2ZmXCI7XHJcbiAgICAgICAgY29uc3QgbHcgPSBjdFJvdy5jcmVhdGVFbChcImRpdlwiKTtcclxuICAgICAgICBsdy5hZGRDbGFzcyhcIm16LXJhaW5ib3ctbGlzdFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWtJID0gKGtleTogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBjb2xvcnM6IHN0cmluZ1tdIHwgbnVsbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdCA9IGx3LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBpdC5hZGRDbGFzcyhcIm16LXJhaW5ib3ctaXRlbVwiKTtcclxuICAgICAgICAgICAgaXQudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIiwga2V5ID09PSBjdXJQKTtcclxuICAgICAgICAgICAgY29uc3QgbGJsRWwgPSBpdC5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBsYWJlbCB9KTtcclxuICAgICAgICAgICAgbGJsRWwuYWRkQ2xhc3MoXCJtei1yYWluYm93LWl0ZW0tbGJsXCIpO1xyXG4gICAgICAgICAgICBpZiAoY29sb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkcyA9IGl0LmNyZWF0ZUVsKFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgIGRzLmFkZENsYXNzKFwibXotcmFpbmJvdy1kb3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIGNvbG9ycy5zbGljZSgwLCAxMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkID0gZHMuY3JlYXRlRWwoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGQuYWRkQ2xhc3MoXCJtei1yYWluYm93LWRvdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh7IFwiLS1tei1kb3QtY29sb3JcIjogYyB9KS5mb3JFYWNoKChbaywgdl0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuc3R5bGUuc2V0UHJvcGVydHkoaywgdiksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJvZmZcIikgdXBkKHsgY29ubmVjdGlvblJhaW5ib3c6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB1cGQoeyBjb25uZWN0aW9uUmFpbmJvdzogdHJ1ZSwgcmFpbmJvd1BhbGV0dGU6IGtleSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBta0koXCJvZmZcIiwgXCJTb2xpZFwiLCBudWxsKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb2xvcnNdIG9mIE9iamVjdC5lbnRyaWVzKGFsbFApKVxyXG4gICAgICAgICAgICBta0kobmFtZSwgbmFtZSwgY29sb3JzKTtcclxuXHJcbiAgICAgICAgLy8gVGV4dFxyXG4gICAgICAgIGNvbnN0IHMzYiA9IG1rU2VjKFwiXHVEODNEXHVEQ0REXCIsIHQoXCJzbS50ZXh0QWxpZ25cIikpO1xyXG4gICAgICAgIG1rU2VsKHMzYiwgdChcInNtLnRleHRBbGlnblwiKSwgXCJ0ZXh0QWxpZ25cIiwgW1wibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdKTtcclxuXHJcbiAgICAgICAgLy8gU2VsZWN0aW9uXHJcbiAgICAgICAgY29uc3QgczQgPSBta1NlYyhcIlx1MjcwNVwiLCB0KFwic20uc2VsXCIpKTtcclxuICAgICAgICBta0NvbG9yKHM0LCB0KFwic20uc2VsQ29sb3JcIiksIFwic2VsZWN0aW9uQ29sb3JcIik7XHJcbiAgICAgICAgbWtSYW5nZShzNCwgdChcInNtLnNlbFdpZHRoXCIpLCBcInNlbGVjdGlvbldpZHRoXCIsIDEsIDgpO1xyXG4gICAgICAgIG1rTnVtKHM0LCB0KFwic20uc2VsT2Zmc2V0XCIpLCBcInNlbGVjdGlvbk91dGxpbmVPZmZzZXRcIiwgLTUsIDIwKTtcclxuICAgICAgICBta0NvbG9yKHM0LCB0KFwic20uZWRpdE91dGxpbmVcIiksIFwiZWRpdE91dGxpbmVDb2xvclwiKTtcclxuICAgICAgICBta1JhbmdlKHM0LCB0KFwic20uZWRpdE91dGxpbmVXaWR0aFwiKSwgXCJlZGl0T3V0bGluZVdpZHRoXCIsIDAsIDgpO1xyXG4gICAgICAgIG1rQ29sb3IoczQsIHQoXCJzbS5ib3hTZWxDb2xvclwiKSwgXCJib3hTZWxlY3Rpb25Db2xvclwiKTtcclxuXHJcbiAgICAgICAgLy8gQ2FudmFzXHJcbiAgICAgICAgY29uc3QgczUgPSBta1NlYyhcIlx1RDgzRFx1RERCQ1x1RkUwRlwiLCB0KFwic20uY2FudmFzQmdcIikpO1xyXG4gICAgICAgIG1rQ29sb3IoczUsIHQoXCJzbS5jYW52YXNCZ1wiKSwgXCJjYW52YXNCZ1wiKTtcclxuXHJcbiAgICAgICAgLy8gVG9vbGJhclxyXG4gICAgICAgIGNvbnN0IHM2ID0gbWtTZWMoXCJcdUQ4M0RcdUREMjdcIiwgdChcInNtLnNob3dUb29sYmFyXCIpKTtcclxuICAgICAgICBjb25zdCB0YlJvdyA9IG1rUm93KHM2LCB0KFwic20uc2hvd1Rvb2xiYXJcIikpO1xyXG4gICAgICAgIGNvbnN0IHRiQ2IgPSB0YlJvdy5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgdGJDYi50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIHRiQ2IuY2hlY2tlZCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dUb29sYmFyO1xyXG4gICAgICAgIHRiQ2IuYWRkQ2xhc3MoXCJtei1zcC10Yi1jaGtcIik7XHJcbiAgICAgICAgdGJDYi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1Rvb2xiYXIgPSB0YkNiLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgIHZvaWQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2hBbGxWaWV3cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1rU2VsKHM2LCB0KFwic20udGJQb3NcIiksIFwidG9vbGJhclBvc2l0aW9uXCIsIFtcInRvcFwiLCBcImJvdHRvbVwiXSk7XHJcbiAgICAgICAgbWtOdW0oczYsIHQoXCJzbS50YlBhZFRcIiksIFwidG9vbGJhclBhZFRvcFwiLCAwLCA0MCk7XHJcbiAgICAgICAgbWtOdW0oczYsIHQoXCJzbS50YlBhZFJcIiksIFwidG9vbGJhclBhZFJpZ2h0XCIsIDAsIDQwKTtcclxuICAgICAgICBta051bShzNiwgdChcInNtLnRiUGFkQlwiKSwgXCJ0b29sYmFyUGFkQm90dG9tXCIsIDAsIDQwKTtcclxuICAgICAgICBta051bShzNiwgdChcInNtLnRiUGFkTFwiKSwgXCJ0b29sYmFyUGFkTGVmdFwiLCAwLCA0MCk7XHJcbiAgICAgICAgbWtDb2xvcihzNiwgdChcInNtLnRiQmdcIiksIFwidG9vbGJhckJnQ29sb3JcIik7XHJcbiAgICAgICAgbWtDb2xvcihzNiwgdChcInNtLnRiQnRuQmdcIiksIFwidG9vbGJhckJ0bkJnQ29sb3JcIik7XHJcbiAgICAgICAgbWtTZWwoczYsIHQoXCJzbS50YkJ0bkJvcmRlclwiKSwgXCJ0b29sYmFyQnRuQm9yZGVyU3R5bGVcIiwgW1xyXG4gICAgICAgICAgICBcInNvbGlkXCIsXHJcbiAgICAgICAgICAgIFwiZGFzaGVkXCIsXHJcbiAgICAgICAgICAgIFwiZG90dGVkXCIsXHJcbiAgICAgICAgICAgIFwibm9uZVwiLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIG1rQ29sb3IoczYsIHQoXCJzbS50YkJ0bkJvcmRlckNvbG9yXCIpLCBcInRvb2xiYXJCdG5Cb3JkZXJDb2xvclwiKTtcclxuICAgICAgICBta0NvbG9yKHM2LCB0KFwic20udGJCdG5UZXh0XCIpLCBcInRvb2xiYXJCdG5UZXh0Q29sb3JcIik7XHJcblxyXG4gICAgICAgIC8vIEJ1dHRvbnNcclxuICAgICAgICBjb25zdCBiciA9IGN0LmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGJyLmFkZENsYXNzKFwibXotc3AtYnRuc1wiKTtcclxuICAgICAgICBici5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IHQoXCJzbS5yZXNldFwiKSB9KS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLmdldFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIGlmICh2KSB2LmFwcGx5U3R5bGUoeyAuLi5ERUZBVUxUX1NUWUxFIH0pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB2b2lkIHRoaXMucGx1Z2luLnVwZGF0ZVN0eWxlKHsgLi4uREVGQVVMVF9TVFlMRSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHJmID0gYnIuY3JlYXRlRWwoXCJidXR0b25cIiwgeyB0ZXh0OiBcIlx1MjFCQlwiIH0pO1xyXG4gICAgICAgIHJmLmFkZENsYXNzKFwibXotc3AtcmVmcmVzaFwiKTtcclxuICAgICAgICByZi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5idWlsZCgpKTtcclxuICAgIH1cclxufVxyXG4iLCAiLy8gc3JjL1NldHRpbmdzVGFiLnRzXHJcbmltcG9ydCB7IFBsdWdpblNldHRpbmdUYWIsIEFwcCwgU2V0dGluZywgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIm9ic2lkaWFuXCI7XHJcbmltcG9ydCB0eXBlIE1pbmROb2RlUGx1Z2luIGZyb20gXCIuL21haW5cIjtcclxuaW1wb3J0IHsgTEFOR1VBR0VTLCBMYW5ndWFnZSwgdCwgc2V0TGFuZyB9IGZyb20gXCIuL2kxOG5cIjtcclxuaW1wb3J0IHsgREVGQVVMVF9LRVlCSU5ESU5HUywgS2V5QmluZGluZ3MgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxudHlwZSBTdHJpbmdLZXlPZjxUPiA9IHtcclxuICAgIFtLIGluIGtleW9mIFRdOiBUW0tdIGV4dGVuZHMgc3RyaW5nID8gSyA6IG5ldmVyO1xyXG59W2tleW9mIFRdO1xyXG50eXBlIFN0cmluZ0tleXMgPSBTdHJpbmdLZXlPZjxLZXlCaW5kaW5ncz47XHJcblxyXG5leHBvcnQgY2xhc3MgTWluZE1hcFNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcclxuICAgIHBsdWdpbjogTWluZE5vZGVQbHVnaW47XHJcbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBNaW5kTm9kZVBsdWdpbikge1xyXG4gICAgICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcclxuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuICAgIH1cclxuICAgIGRpc3BsYXkoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcclxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBjb250YWluZXJFbC5zY3JvbGxUb3A7XHJcbiAgICAgICAgY29udGFpbmVyRWwuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgLy8gQWJvdXRcclxuICAgICAgICBjb25zdCBhYm91dCA9IGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGFib3V0LmFkZENsYXNzKFwibXotYWJvdXRcIik7XHJcbiAgICAgICAgY29uc3QgaWNvbkVsID0gYWJvdXQuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgaWNvbkVsLmFkZENsYXNzKFwibXotYWJvdXQtaWNvblwiKTtcclxuICAgICAgICBpY29uRWwuaW5uZXJUZXh0ID0gXCJcdUQ4M0RcdURERkFcdUZFMEZcIjtcclxuICAgICAgICBjb25zdCB0aXRsZUVsID0gYWJvdXQuY3JlYXRlRWwoXCJoMlwiLCB7IHRleHQ6IFwiTWluZFpKXCIgfSk7XHJcbiAgICAgICAgdGl0bGVFbC5hZGRDbGFzcyhcIm16LWFib3V0LXRpdGxlXCIpO1xyXG4gICAgICAgIGNvbnN0IHZlckVsID0gYWJvdXQuY3JlYXRlRWwoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICB0ZXh0OiBgJHt0KFwic2V0LnZlcnNpb25cIil9OiAke3RoaXMucGx1Z2luLm1hbmlmZXN0LnZlcnNpb259YCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB2ZXJFbC5hZGRDbGFzcyhcIm16LWFib3V0LW1ldGFcIik7XHJcbiAgICAgICAgY29uc3QgYXV0aEVsID0gYWJvdXQuY3JlYXRlRWwoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICB0ZXh0OiBgJHt0KFwic2V0LmF1dGhvclwiKX06ICR7dGhpcy5wbHVnaW4ubWFuaWZlc3QuYXV0aG9yfWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXV0aEVsLmFkZENsYXNzKFwibXotYWJvdXQtbWV0YS1sYXN0XCIpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NFbCA9IGFib3V0LmNyZWF0ZUVsKFwicFwiLCB7IHRleHQ6IHQoXCJzZXQuZGVzY1wiKSB9KTtcclxuICAgICAgICBkZXNjRWwuYWRkQ2xhc3MoXCJtei1hYm91dC1kZXNjXCIpO1xyXG4gICAgICAgIGNvbnN0IGdoTGluayA9IGFib3V0LmNyZWF0ZUVsKFwiZGl2XCIpLmNyZWF0ZUVsKFwiYVwiLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IGBcdUQ4M0RcdURDRTYgJHt0KFwic2V0LmdpdGh1YlwiKX1gLFxyXG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS96am9rL21pbmR6alwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdoTGluay5hZGRDbGFzcyhcIm16LWFib3V0LWxpbmtcIik7XHJcbiAgICAgICAgZ2hMaW5rLnNldEF0dHIoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XHJcblxyXG4gICAgICAgIC8vIERvbmF0aW9uXHJcbiAgICAgICAgY29uc3QgZG9uU2VjID0gY29udGFpbmVyRWwuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgICAgZG9uU2VjLmFkZENsYXNzKFwibXotZG9uYXRlLXNlY1wiKTtcclxuICAgICAgICBjb25zdCBkb25UaXRsZSA9IGRvblNlYy5jcmVhdGVFbChcImgzXCIsIHtcclxuICAgICAgICAgICAgdGV4dDogYFx1MjYxNSAke3QoXCJzZXQuZG9uYXRlXCIpfWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9uVGl0bGUuYWRkQ2xhc3MoXCJtei1kb25hdGUtaGVhZGluZ1wiKTtcclxuICAgICAgICBjb25zdCBkb25CdG5zID0gZG9uU2VjLmNyZWF0ZUVsKFwiZGl2XCIpO1xyXG4gICAgICAgIGRvbkJ0bnMuYWRkQ2xhc3MoXCJtei1kb25hdGUtYnRuc1wiKTtcclxuICAgICAgICBjb25zdCBta0RvbiA9IChsYWJlbDogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCB1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gZG9uQnRucy5jcmVhdGVFbChcImFcIiwgeyBocmVmOiB1cmwgfSk7XHJcbiAgICAgICAgICAgIGEuc2V0QXR0cihcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcclxuICAgICAgICAgICAgYS5hZGRDbGFzcyhcIm16LWRvbmF0ZS1idG5cIik7XHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHsgXCItLW16LWJ0bi1jb2xvclwiOiBjb2xvciB9KS5mb3JFYWNoKChbaywgdl0pID0+XHJcbiAgICAgICAgICAgICAgICBhLnN0eWxlLnNldFByb3BlcnR5KGssIHYpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBhLmlubmVyVGV4dCA9IGxhYmVsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWtEb24oXHJcbiAgICAgICAgICAgIFwiXHUyNjE1IEJ1eSBNZSBhIENvZmZlZVwiLFxyXG4gICAgICAgICAgICBcIiNGRkREMDBcIixcclxuICAgICAgICAgICAgXCJodHRwczovL3d3dy5idXltZWFjb2ZmZWUuY29tL3N1cGVyam9oblwiLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtEb24oXCJcdTI3NjRcdUZFMEYgS28tZmlcIiwgXCIjRkY1RTVCXCIsIFwiaHR0cHM6Ly9rby1maS5jb20vc3VwZXJqb2huXCIpO1xyXG4gICAgICAgIG1rRG9uKFwiXHVEODNEXHVEQ0IwIFBheVBhbFwiLCBcIiMwMDcwYmFcIiwgXCJodHRwczovL3BheXBhbC5tZS9UYW5DYXQ5OTdcIik7XHJcblxyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKS5zZXROYW1lKHQoXCJzZXQudGl0bGVcIikpLnNldEhlYWRpbmcoKTtcclxuXHJcbiAgICAgICAgLy8gQmFzaWMgc2V0dGluZ3NcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUodChcInNldC5sYW5nXCIpKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyh0KFwic2V0LmxhbmdEZXNjXCIpKVxyXG4gICAgICAgICAgICAuYWRkRHJvcGRvd24oKGRkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGwgb2YgTEFOR1VBR0VTKSBkZC5hZGRPcHRpb24obC52YWx1ZSwgbC5sYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBkZC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5sYW5ndWFnZSk7XHJcbiAgICAgICAgICAgICAgICBkZC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmxhbmd1YWdlID0gdiBhcyBMYW5ndWFnZTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMYW5nKHYgYXMgTGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2hBbGxWaWV3cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSh0KFwic2V0LnRoZW1lXCIpKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyh0KFwic2V0LnRoZW1lRGVzY1wiKSlcclxuICAgICAgICAgICAgLmFkZERyb3Bkb3duKChkZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGQuYWRkT3B0aW9uKFwibGlnaHRcIiwgdChcInNldC5saWdodFwiKSk7XHJcbiAgICAgICAgICAgICAgICBkZC5hZGRPcHRpb24oXCJkYXJrXCIsIHQoXCJzZXQuZGFya1wiKSk7XHJcbiAgICAgICAgICAgICAgICBkZC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZSk7XHJcbiAgICAgICAgICAgICAgICBkZC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnN3aXRjaFRoZW1lKHYgYXMgXCJsaWdodFwiIHwgXCJkYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSh0KFwic2V0LmNhbnZhc0JnXCIpKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyh0KFwic2V0LmNhbnZhc0JnRGVzY1wiKSlcclxuICAgICAgICAgICAgLmFkZENvbG9yUGlja2VyKChjcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3R5bGUuY2FudmFzQmc7XHJcbiAgICAgICAgICAgICAgICBjcC5zZXRWYWx1ZShjdXIuc3RhcnRzV2l0aChcIiNcIikgPyBjdXIgOiBcIiNmZmZmZmZcIik7XHJcbiAgICAgICAgICAgICAgICBjcC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnN0eWxlLmNhbnZhc0JnID0gdjtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5hcHBseVN0eWxlVG9BbGxWaWV3cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUodChcInNldC50b29sYmFyXCIpKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyh0KFwic2V0LnRvb2xiYXJEZXNjXCIpKVxyXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0ZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGcuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1Rvb2xiYXIpO1xyXG4gICAgICAgICAgICAgICAgdGcub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93VG9vbGJhciA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaEFsbFZpZXdzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKHQoXCJzZXQuZWRpdE9uQ3JlYXRlXCIpKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyh0KFwic2V0LmVkaXRPbkNyZWF0ZURlc2NcIikpXHJcbiAgICAgICAgICAgIC5hZGRUb2dnbGUoKHRnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0Zy5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5lZGl0T25DcmVhdGUpO1xyXG4gICAgICAgICAgICAgICAgdGcub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5lZGl0T25DcmVhdGUgPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDdXN0b20gbm9kZSBuYW1lc1xyXG4gICAgICAgIGNvbnN0IGxhbmcgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5sYW5ndWFnZTtcclxuICAgICAgICBjb25zdCBkZWZSb290ID0gdChcImRlZi5yb290XCIpO1xyXG4gICAgICAgIGNvbnN0IGRlZkNoaWxkID0gdChcImRlZi5jaGlsZFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWtOYW1lU2V0dGluZyA9IChcclxuICAgICAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBkZXNjOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGZpZWxkOiBcInJvb3RcIiB8IFwiY2hpbGRcIixcclxuICAgICAgICAgICAgZGVmVmFsOiBzdHJpbmcsXHJcbiAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmcgPSBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgICAgIC5zZXROYW1lKG5hbWUpXHJcbiAgICAgICAgICAgICAgICAuc2V0RGVzYyhkZXNjKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzZXRFbCA9IHNldHRpbmcuY29udHJvbEVsLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHsgdGV4dDogXCJcdTIxQkFcIiB9KTtcclxuICAgICAgICAgICAgcmVzZXRFbC5hZGRDbGFzcyhcIm16LXJlc2V0LWJ0blwiKTtcclxuICAgICAgICAgICAgY29uc3QgY3VyVmFsID0gKHRoaXMucGx1Z2luLnNldHRpbmdzLmN1c3RvbU5vZGVOYW1lc1tsYW5nXSB8fCB7fSlbXHJcbiAgICAgICAgICAgICAgICBmaWVsZFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICByZXNldEVsLnRvZ2dsZUNsYXNzKFwibXotaGlkZGVuXCIsICEoY3VyVmFsICYmIGN1clZhbCAhPT0gZGVmVmFsKSk7XHJcbiAgICAgICAgICAgIHJlc2V0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSB7IC4uLnRoaXMucGx1Z2luLnNldHRpbmdzLmN1c3RvbU5vZGVOYW1lcyB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGNbbGFuZ10pIGRlbGV0ZSBjW2xhbmddW2ZpZWxkXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmN1c3RvbU5vZGVOYW1lcyA9IGM7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIGlucC52YWx1ZSA9IGRlZlZhbDtcclxuICAgICAgICAgICAgICAgIHJlc2V0RWwudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBpbnAgPSBzZXR0aW5nLmNvbnRyb2xFbC5jcmVhdGVFbChcImlucHV0XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlucC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgICAgIGlucC52YWx1ZSA9IGN1clZhbCB8fCBkZWZWYWw7XHJcbiAgICAgICAgICAgIGlucC5hZGRDbGFzcyhcIm16LW5hbWUtaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGlucC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gaW5wLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSB7IC4uLnRoaXMucGx1Z2luLnNldHRpbmdzLmN1c3RvbU5vZGVOYW1lcyB9O1xyXG4gICAgICAgICAgICAgICAgY1tsYW5nXSA9IHsgLi4uKGNbbGFuZ10gfHwge30pLCBbZmllbGRdOiB2IHx8IHVuZGVmaW5lZCB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY3VzdG9tTm9kZU5hbWVzID0gYztcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgcmVzZXRFbC50b2dnbGVDbGFzcyhcIm16LWhpZGRlblwiLCAhKHYgJiYgdiAhPT0gZGVmVmFsKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWtOYW1lU2V0dGluZyhcclxuICAgICAgICAgICAgdChcInNldC5yb290TmFtZVwiKSxcclxuICAgICAgICAgICAgdChcInNldC5yb290TmFtZURlc2NcIiksXHJcbiAgICAgICAgICAgIFwicm9vdFwiLFxyXG4gICAgICAgICAgICBkZWZSb290LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWtOYW1lU2V0dGluZyhcclxuICAgICAgICAgICAgdChcInNldC5jaGlsZE5hbWVcIiksXHJcbiAgICAgICAgICAgIHQoXCJzZXQuY2hpbGROYW1lRGVzY1wiKSxcclxuICAgICAgICAgICAgXCJjaGlsZFwiLFxyXG4gICAgICAgICAgICBkZWZDaGlsZCxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUodChcInNldC50eXBlVG9FZGl0XCIpKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyh0KFwic2V0LnR5cGVUb0VkaXREZXNjXCIpKVxyXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0ZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGcuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudHlwZVRvRWRpdCk7XHJcbiAgICAgICAgICAgICAgICB0Zy5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnR5cGVUb0VkaXQgPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBLZXlib2FyZCBzaG9ydGN1dHNcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuc2V0TmFtZSh0KFwic2V0LmtleXNcIikpLnNldEhlYWRpbmcoKTtcclxuICAgICAgICBjb25zdCBrYiA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmtleUJpbmRpbmdzO1xyXG4gICAgICAgIGNvbnN0IGtleU1hcDogeyBrZXk6IFN0cmluZ0tleXM7IGxhYmVsOiBzdHJpbmcgfVtdID0gW1xyXG4gICAgICAgICAgICB7IGtleTogXCJlZGl0Tm9kZVwiLCBsYWJlbDogdChcInNldC5rZXkuZWRpdFwiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJhZGRTaWJsaW5nXCIsIGxhYmVsOiB0KFwic2V0LmtleS5zaWJsaW5nXCIpIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBcImFkZENoaWxkXCIsIGxhYmVsOiB0KFwic2V0LmtleS5jaGlsZFwiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJmb2N1c05vZGVcIiwgbGFiZWw6IHQoXCJzZXQua2V5LmZvY3VzXCIpIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBcInVuZG9cIiwgbGFiZWw6IHQoXCJzZXQua2V5LnVuZG9cIikgfSxcclxuICAgICAgICAgICAgeyBrZXk6IFwicmVkb1wiLCBsYWJlbDogdChcInNldC5rZXkucmVkb1wiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJkcmFnQ2FudmFzXCIsIGxhYmVsOiB0KFwic2V0LmtleS5kcmFnQ2FudmFzXCIpIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBcIm5hdlVwXCIsIGxhYmVsOiB0KFwic2V0LmtleS51cFwiKSB9LFxyXG4gICAgICAgICAgICB7IGtleTogXCJuYXZEb3duXCIsIGxhYmVsOiB0KFwic2V0LmtleS5kb3duXCIpIH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBcIm5hdkxlZnRcIiwgbGFiZWw6IHQoXCJzZXQua2V5LmxlZnRcIikgfSxcclxuICAgICAgICAgICAgeyBrZXk6IFwibmF2UmlnaHRcIiwgbGFiZWw6IHQoXCJzZXQua2V5LnJpZ2h0XCIpIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Yga2V5TWFwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmcgPSBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuc2V0TmFtZShpdGVtLmxhYmVsKTtcclxuICAgICAgICAgICAgY29uc3QgY3VyVmFsID0ga2JbaXRlbS5rZXldO1xyXG4gICAgICAgICAgICBjb25zdCBkZWZWYWwgPSBERUZBVUxUX0tFWUJJTkRJTkdTW2l0ZW0ua2V5XSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0RWwgPSBzZXR0aW5nLmNvbnRyb2xFbC5jcmVhdGVFbChcImJ1dHRvblwiLCB7IHRleHQ6IFwiXHUyMUJBXCIgfSk7XHJcbiAgICAgICAgICAgIHJlc2V0RWwuYWRkQ2xhc3MoXCJtei1yZXNldC1idG5cIik7XHJcbiAgICAgICAgICAgIHJlc2V0RWwudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgY3VyVmFsID09PSBkZWZWYWwpO1xyXG4gICAgICAgICAgICByZXNldEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBrYltpdGVtLmtleV0gPSBkZWZWYWw7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2hBbGxWaWV3cygpO1xyXG4gICAgICAgICAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoZGVmVmFsKTtcclxuICAgICAgICAgICAgICAgIHJlc2V0RWwudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgYnRuOiBCdXR0b25Db21wb25lbnQ7XHJcbiAgICAgICAgICAgIHNldHRpbmcuYWRkQnV0dG9uKChiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBidG4gPSBiO1xyXG4gICAgICAgICAgICAgICAgYi5zZXRCdXR0b25UZXh0KFN0cmluZyhjdXJWYWwpIHx8IFwiLi4uXCIpO1xyXG4gICAgICAgICAgICAgICAgYi5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBiLnNldEJ1dHRvblRleHQodChcInNldC5rZXkucHJlc3NcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Q29tYm8gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNNYWluS2V5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVvdXQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1aWxkQ29tYm8gPSAoZTogS2V5Ym9hcmRFdmVudCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkgcGFydHMucHVzaChcImN0cmxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSBwYXJ0cy5wdXNoKFwic2hpZnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmFsdEtleSkgcGFydHMucHVzaChcImFsdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIVtcIkNvbnRyb2xcIiwgXCJTaGlmdFwiLCBcIkFsdFwiLCBcIk1ldGFcIl0uaW5jbHVkZXMoZS5rZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goZS5rZXkgPT09IFwiIFwiID8gXCJTcGFjZVwiIDogZS5rZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFydHMuam9pbihcIitcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmluaXNoID0gKGNvbWJvOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWNvcmRpbmcpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbkRvd24sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIG9uVXAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrYltpdGVtLmtleV0gPSBjb21ibztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5zZXRCdXR0b25UZXh0KGNvbWJvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaEFsbFZpZXdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0RWwudG9nZ2xlQ2xhc3MoXCJtei1oaWRkZW5cIiwgY29tYm8gPT09IGRlZlZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlY29yZGluZykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uRG93biwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgb25VcCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuc2V0QnV0dG9uVGV4dChTdHJpbmcoa2JbaXRlbS5rZXldKSB8fCBcIi4uLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvbkRvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbWJvID0gYnVpbGRDb21ibyhlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWFpbktleSA9ICFbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRyb2xcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2hpZnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1ldGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXS5pbmNsdWRlcyhlLmtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuc2V0QnV0dG9uVGV4dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb21ibyArIChoYXNNYWluS2V5ID8gXCJcIiA6IFwiK1x1MjAyNlwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgdGltZW91dCBvbiBlYWNoIGtleWRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoY2FuY2VsLCA1MDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvblVwID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5hbGl6ZSB3aGVuIGEgbm9uLW1vZGlmaWVyIGtleSBpcyByZWxlYXNlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzTWFpbktleSAmJiBjdXJyZW50Q29tYm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaChjdXJyZW50Q29tYm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uRG93biwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBvblVwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChjYW5jZWwsIDUwMDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpLnNldE5hbWUodChcInNldC5zY3JvbGxcIikpLnNldEhlYWRpbmcoKTtcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuc2V0TmFtZSh0KFwic2V0LmludmVydFlcIikpLmFkZFRvZ2dsZSgodGcpID0+IHtcclxuICAgICAgICAgICAgdGcuc2V0VmFsdWUoa2IuaW52ZXJ0U2Nyb2xsWSk7XHJcbiAgICAgICAgICAgIHRnLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBrYi5pbnZlcnRTY3JvbGxZID0gdjtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuc2V0TmFtZSh0KFwic2V0LmludmVydFhcIikpLmFkZFRvZ2dsZSgodGcpID0+IHtcclxuICAgICAgICAgICAgdGcuc2V0VmFsdWUoa2IuaW52ZXJ0U2Nyb2xsWCk7XHJcbiAgICAgICAgICAgIHRnLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBrYi5pbnZlcnRTY3JvbGxYID0gdjtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUodChcInNldC5pbnZlcnRab29tXCIpKVxyXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0ZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGcuc2V0VmFsdWUoa2IuaW52ZXJ0Wm9vbSk7XHJcbiAgICAgICAgICAgICAgICB0Zy5vbkNoYW5nZShhc3luYyAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGtiLmludmVydFpvb20gPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29udGFpbmVyRWwuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsSUFBQUEsbUJBQXFEOzs7QUNBckQsc0JBQWtEOzs7QUN3STNDLElBQU0sd0JBQTRDO0FBQUEsRUFDckQsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsdUJBQXVCO0FBQUEsRUFDdkIsdUJBQXVCO0FBQUEsRUFDdkIscUJBQXFCO0FBQUEsRUFDckIsb0JBQW9CO0FBQUEsRUFDcEIsb0JBQW9CO0FBQ3hCO0FBRU8sSUFBTSx1QkFBMkM7QUFBQSxFQUNwRCxnQkFBZ0I7QUFBQSxFQUNoQixtQkFBbUI7QUFBQSxFQUNuQix1QkFBdUI7QUFBQSxFQUN2Qix1QkFBdUI7QUFBQSxFQUN2QixxQkFBcUI7QUFBQSxFQUNyQixvQkFBb0I7QUFBQSxFQUNwQixvQkFBb0I7QUFDeEI7QUFFTyxJQUFNLG1CQUE2QztBQUFBLEVBQ3RELFNBQVM7QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNIO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0g7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNIO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFB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QztBQUVBLElBQU0sTUFBTTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsYUFBYTtBQUFBLEVBQ2IsY0FBYztBQUFBLEVBQ2Qsb0JBQW9CO0FBQUEsRUFDcEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsa0JBQWtCO0FBQUEsRUFDbEIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2Is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LEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsa0JBQWtCO0FBQUEsRUFDbEIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JB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RUFDakIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsa0JBQWtCO0FBQUEsRUFDbEIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGtCQUFrQjtBQUFBLEVBQ2xCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLHFCQUFxQjtBQUFBLEVBQ3JCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdCQUFnQjtBQUFBLEVBQ2hCLHFCQUFxQjtBQUFBLEVBQ3JCLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLHNCQUFzQjtBQUFBLEVBQ3RCLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLG1CQUFtQjtBQUFB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Q2IsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsa0JBQWtCO0FBQUEsRUFDbEIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGtCQUFrQjtBQUFBLEVBQ2xCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLHFCQUFxQjtBQUFBLEVBQ3JCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdCQUFnQjtBQUFBLEVBQ2hCLHFCQUFxQjtBQUFBLEVBQ3JCLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLHNCQUFzQjtBQUFBLEVBQ3RCLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxF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Q1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsa0JBQWtCO0FBQUEsRUFDbEIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGtCQUFrQjtBQUFBLEVBQ2xCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLHFCQUFxQjtBQUFBLEVBQ3JCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdCQUFnQjtBQUFBLEVBQ2hCLHFCQUFxQjtBQUFBLEVBQ3JCLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLHNCQUFzQjtBQUFBLEVBQ3RCLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVB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Q1osYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsa0JBQWtCO0FBQUEsRUFDbEIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGtCQUFrQjtBQUFBLEVBQ2xCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLHFCQUFxQjtBQUFBLEVBQ3JCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdCQUFnQjtBQUFBLEVBQ2hCLHFCQUFxQjtBQUFBLEVBQ3JCLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLHNCQUFzQjtBQUFBLEVBQ3RCLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hC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bUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QscUJBQXFCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsa0JBQWtCO0FBQUEsRUFDbEIsZ0JBQWdCO0FBQUEsRUFDaEIsZUFBZTtBQUFBLEVBQ2YscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsWUFDSTtBQUFBLEVBQ0osZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIscUJBQXFCO0FBQUEsRUFDckIsc0JBQXNCO0FBQUEsRUFDdEIsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsd0JBQXdCO0FBQUEsRUFDeEIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQzFCO0FBRUEsSUFBTSxNQUFrQjtBQUFBLEVBQ3BCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLGdCQUFnQjtBQUFBLEVBQ2hCLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGlCQUFpQjtBQUFBLEVBQ2pCLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVc7QUFBQSxFQUNYLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGlCQUFpQjtBQUFBLEVBQ2pCLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGNBQWM7QUFBQSxFQUNkLGNBQWM7QUFBQSxFQUNkLHFCQUFxQjtBQUFBLEVBQ3JCLFVBQVU7QUFBQSxFQUNWLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGtCQUFrQjtBQUFBLEVBQ2xCLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLHFCQUFxQjtBQUFBLEVBQ3JCLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxFQUNaLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLFdBQVc7QUFBQSxFQUNYLGNBQWM7QUFBQSxFQUNkLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdCQUFnQjtBQUFBLEVBQ2hCLHFCQUFxQjtBQUFBLEVBQ3JCLFlBQVk7QUFBQSxFQUNaLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLG1CQUFtQjtBQUFBLEVBQ25CLHNCQUFzQjtBQUFBLEVBQ3RCLFlBQVk7QUFBQSxFQUNaLGVBQWU7QUFBQSxFQUNmLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLFlB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QUFTLENBQUM7QUFDckIsV0FBSyxJQUFJLFVBQVUsY0FBYyxNQUFNLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFBQSxJQUMxRCxTQUFRLEdBQU47QUFBQSxJQUVGO0FBQUEsRUFDSjtBQUFBLEVBQ0EsTUFBTSxpQkFBaUI7QUFwUTNCO0FBcVFRLFVBQU0sS0FBSyxLQUFLLElBQUksVUFBVSxnQkFBZ0IsdUJBQXVCO0FBQ3JFLFFBQUk7QUFDSixRQUFJLEdBQUc7QUFBUSxVQUFJLEdBQUcsQ0FBQztBQUFBLFNBQ2xCO0FBQ0QsV0FDSSxVQUFLLElBQUksVUFBVSxhQUFhLEtBQUssTUFBckMsWUFDQSxLQUFLLElBQUksVUFBVSxRQUFRLElBQUk7QUFDbkMsWUFBTSxFQUFFLGFBQWE7QUFBQSxRQUNqQixNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsTUFDWixDQUFDO0FBQUEsSUFDTDtBQUNBLFNBQUssSUFBSSxVQUFVLFdBQVcsQ0FBQztBQUFBLEVBQ25DO0FBQ0o7IiwKICAibmFtZXMiOiBbImltcG9ydF9vYnNpZGlhbiIsICJjYiIsICJfYSIsICJ0IiwgImRuIiwgImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAiX2EiXQp9Cg==
