// src/types.ts
import type { Language } from "./i18n";

export interface MindNodeData {
    id: string;
    text: string;
    children: MindNodeData[];
    isRoot?: boolean;
    x: number;
    y: number;
    width: number;
    height: number;
    styleOverride?: NodeStyleOverride;
    connectionColor?: string;
    connectionWidth?: number;
    side?: "left" | "right";
}
export interface NodeStyleOverride {
    bgColor?: string;
    textColor?: string;
    fontSize?: number;
    fontFamily?: string;
    borderStyle?: BorderStyle;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
}
export type BorderStyle = "solid" | "dashed" | "dotted" | "double" | "none";
export type ConnectionLineStyle =
    | "bezier"
    | "straight"
    | "curved"
    | "step"
    | "bracket"
    | "loose";
export type TextAlign = "left" | "center" | "right";
export type NodeDirection = "right" | "left" | "both";

export interface MindMapStyle {
    nodeBgColor: string;
    nodeTextColor: string;
    nodeFontSize: number;
    nodeFontFamily: string;
    nodeBorderStyle: BorderStyle;
    nodeBorderColor: string;
    nodeBorderWidth: number;
    nodeBorderRadius: number;
    nodeMinWidth: number;
    nodeMinHeight: number;
    rootBgColor: string;
    rootTextColor: string;
    rootFontSize: number;
    rootFontFamily: string;
    rootBorderStyle: BorderStyle;
    rootBorderColor: string;
    rootBorderWidth: number;
    rootBorderRadius: number;
    rootMinWidth: number;
    rootMinHeight: number;
    connectionStyle: ConnectionLineStyle;
    connectionColor: string;
    connectionWidth: number;
    connectionLength: number;
    connectionRainbow: boolean;
    rainbowPalette: string;
    customRainbows: Record<string, string[]>;
    nodeDirection: NodeDirection;
    selectionColor: string;
    selectionWidth: number;
    selectionOutlineOffset: number;
    editOutlineColor: string;
    editOutlineWidth: number;
    textAlign: TextAlign;
    nodePadX: number;
    nodeLineHeight: number;
    nodeGapY: number;
    canvasBg: string;
    toolbarPadTop: number;
    toolbarPadRight: number;
    toolbarPadBottom: number;
    toolbarPadLeft: number;
    toolbarPosition: "top" | "bottom";
    toolbarBgColor: string;
    toolbarBtnBgColor: string;
    toolbarBtnBorderStyle: string;
    toolbarBtnBorderColor: string;
    toolbarBtnTextColor: string;
    toolbarBorderColor: string;
    toolbarBorderWidth: number;
}

export interface KeyBindings {
    editNode: string;
    addSibling: string;
    addChild: string;
    focusNode: string;
    undo: string;
    redo: string;
    lineBreak: string;
    dragCanvas: string;
    zoomIn: string;
    zoomOut: string;
    zoomReset: string;
    navUp: string;
    navDown: string;
    navLeft: string;
    navRight: string;
    invertScrollY: boolean;
    invertScrollX: boolean;
    invertZoom: boolean;
}

export interface PluginSettings {
    style: MindMapStyle;
    language: Language;
    theme: "light" | "dark";
    showToolbar: boolean;
    keyBindings: KeyBindings;
    developerMode: boolean;
    editOnCreate: boolean;
    typeToEdit: boolean;
    customNodeNames: Record<string, { root?: string; child?: string }>;
    toolbarStyleLight?: ToolbarThemeColors;
    toolbarStyleDark?: ToolbarThemeColors;
}

export interface ToolbarThemeColors {
    toolbarBgColor: string;
    toolbarBtnBgColor: string;
    toolbarBtnBorderStyle: string;
    toolbarBtnBorderColor: string;
    toolbarBtnTextColor: string;
    toolbarBorderColor: string;
    toolbarBorderWidth: number;
}

export const DEFAULT_TOOLBAR_LIGHT: ToolbarThemeColors = {
    toolbarBgColor: "#f5f5f5",
    toolbarBtnBgColor: "#ffffff",
    toolbarBtnBorderStyle: "solid",
    toolbarBtnBorderColor: "#d1d5db",
    toolbarBtnTextColor: "#333333",
    toolbarBorderColor: "#e0e0e0",
    toolbarBorderWidth: 1,
};

export const DEFAULT_TOOLBAR_DARK: ToolbarThemeColors = {
    toolbarBgColor: "#2b2b2b",
    toolbarBtnBgColor: "#3c3c3c",
    toolbarBtnBorderStyle: "solid",
    toolbarBtnBorderColor: "#555555",
    toolbarBtnTextColor: "#e0e0e0",
    toolbarBorderColor: "#505050",
    toolbarBorderWidth: 1,
};

export const RAINBOW_PALETTES: Record<string, string[]> = {
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
        "#910fcd",
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
        "#baffea",
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
        "#90EE90",
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
        "#C34A36",
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
        "#00ff00",
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
        "#556B2F",
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
        "#e6f2ff",
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
        "#130f40",
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
        "#ffffff",
    ],
};

export const FONT_LIST = [
    "inherit",
    "Arial",
    "Helvetica Neue",
    "Georgia",
    "Times New Roman",
    "Courier New",
    "Verdana",
    "monospace",
    "sans-serif",
    "serif",
];
export const CONNECTION_STYLES: ConnectionLineStyle[] = [
    "bezier",
    "straight",
    "curved",
    "step",
    "bracket",
    "loose",
];

export const DEFAULT_KEYBINDINGS: KeyBindings = {
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
    invertZoom: false,
};

export const DEFAULT_STYLE: MindMapStyle = {
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
    toolbarBorderWidth: 1,
};
export const DEFAULT_SETTINGS: PluginSettings = {
    style: { ...DEFAULT_STYLE },
    language: "en",
    theme: "light",
    showToolbar: true,
    keyBindings: { ...DEFAULT_KEYBINDINGS },
    developerMode: false,
    editOnCreate: false,
    typeToEdit: true,
    customNodeNames: {},
};
export const VIEW_TYPE_MINDMAP = "mindzj-view";
export const VIEW_TYPE_MINDMAP_STYLE = "mindzj-style-panel";
export const MINDMAP_FILE_EXTENSION = "mindzj";
