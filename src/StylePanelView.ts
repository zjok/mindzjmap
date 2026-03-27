// src/StylePanelView.ts
import { ItemView, WorkspaceLeaf } from "obsidian";
import {
    VIEW_TYPE_MINDMAP_STYLE,
    VIEW_TYPE_MINDMAP,
    MindMapStyle,
    DEFAULT_STYLE,
    FONT_LIST,
    CONNECTION_STYLES,
    RAINBOW_PALETTES,
} from "./types";
import { t } from "./i18n";
import { MindMapView } from "./MindMapView";
import type MindNodePlugin from "./main";

export class StylePanelView extends ItemView {
    private plugin: MindNodePlugin;
    constructor(leaf: WorkspaceLeaf, plugin: MindNodePlugin) {
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
    async onOpen() {
        this.build();
    }
    async onClose() {}
    private getView(): MindMapView | null {
        const l = this.app.workspace.getLeavesOfType(VIEW_TYPE_MINDMAP);
        return l.length > 0 && l[0].view instanceof MindMapView
            ? (l[0].view as MindMapView)
            : null;
    }
    private build() {
        const ct = this.containerEl.children[1] as HTMLElement;
        ct.empty();
        ct.style.cssText = "padding:12px;overflow-y:auto;font-size:13px;";
        ct.createEl("h4", { text: t("sm.title") }).style.cssText =
            "margin:0 0 14px;";
        const s: MindMapStyle = this.getView()?.style
            ? { ...this.getView()!.style }
            : this.plugin.getStyle();
        const upd = (p: Partial<MindMapStyle>) => {
            const v = this.getView();
            if (v) v.applyStyle(p);
            else this.plugin.updateStyle(p);
        };
        const mkSec = (icon: string, title: string) => {
            const sec = ct.createEl("div");
            sec.style.cssText =
                "margin-bottom:18px;border:1px solid var(--background-modifier-border);border-radius:10px;overflow:hidden;";
            sec.createEl("div", { text: icon + "  " + title }).style.cssText =
                "padding:8px 12px;background:var(--background-secondary);font-weight:700;font-size:12px;color:var(--text-accent);border-bottom:1px solid var(--background-modifier-border);";
            const b = sec.createEl("div");
            b.style.cssText =
                "padding:10px 12px;display:flex;flex-direction:column;gap:7px;";
            return b;
        };
        const mkRow = (p: HTMLElement, l: string) => {
            const r = p.createEl("div");
            r.style.cssText =
                "display:flex;align-items:center;justify-content:space-between;gap:8px;";
            r.createEl("span", { text: l }).style.cssText =
                "flex:1;font-size:12px;";
            return r;
        };
        const mkColor = (p: HTMLElement, l: string, k: keyof MindMapStyle) => {
            const r = mkRow(p, l);
            const i = r.createEl("input") as HTMLInputElement;
            i.type = "color";
            const v = s[k];
            i.value =
                typeof v === "string" && v.startsWith("var")
                    ? "#ffffff"
                    : String(v);
            i.style.cssText =
                "width:36px;height:22px;border:none;cursor:pointer;border-radius:4px;";
            i.addEventListener("input", () => upd({ [k]: i.value } as any));
        };
        const mkRange = (
            p: HTMLElement,
            l: string,
            k: keyof MindMapStyle,
            min: number,
            max: number,
            step?: number,
        ) => {
            const r = mkRow(p, l);
            const w = r.createEl("div");
            w.style.cssText = "display:flex;align-items:center;gap:4px;";
            const i = w.createEl("input") as HTMLInputElement;
            i.type = "range";
            i.min = String(min);
            i.max = String(max);
            if (step) i.step = String(step);
            i.value = String(s[k]);
            i.style.cssText = "width:65px;";
            const n = w.createEl("span", { text: String(s[k]) });
            n.style.cssText =
                "width:30px;text-align:right;color:var(--text-muted);font-size:11px;";
            i.addEventListener("input", () => {
                n.textContent = i.value;
                upd({ [k]: Number(i.value) } as any);
            });
        };
        const mkNum = (
            p: HTMLElement,
            l: string,
            k: keyof MindMapStyle,
            min: number,
            max: number,
        ) => {
            const r = mkRow(p, l);
            const i = r.createEl("input") as HTMLInputElement;
            i.type = "number";
            i.min = String(min);
            i.max = String(max);
            i.value = String(s[k]);
            i.style.cssText =
                "width:60px;padding:2px 4px;border:1px solid var(--background-modifier-border);border-radius:4px;font-size:11px;";
            i.addEventListener("change", () =>
                upd({ [k]: Number(i.value) } as any),
            );
        };
        const mkSel = (
            p: HTMLElement,
            l: string,
            k: keyof MindMapStyle,
            opts: string[],
        ) => {
            const r = mkRow(p, l);
            const sel = r.createEl("select") as HTMLSelectElement;
            sel.style.cssText =
                "padding:2px 4px;border:1px solid var(--background-modifier-border);border-radius:4px;font-size:11px;";
            for (const o of opts) {
                const op = document.createElement("option");
                op.value = o;
                op.text = o;
                if (o === String(s[k])) op.selected = true;
                sel.appendChild(op);
            }
            sel.addEventListener("change", () =>
                upd({ [k]: sel.value } as any),
            );
        };
        const mkTog = (p: HTMLElement, l: string, k: keyof MindMapStyle) => {
            const r = mkRow(p, l);
            const cb = r.createEl("input") as HTMLInputElement;
            cb.type = "checkbox";
            cb.checked = !!s[k];
            cb.style.cssText =
                "width:16px;height:16px;cursor:pointer;accent-color:var(--interactive-accent);";
            cb.addEventListener("change", () =>
                upd({ [k]: cb.checked } as any),
            );
        };
        // Child
        const s1 = mkSec("📦", t("sm.child"));
        mkColor(s1, t("sm.bg"), "nodeBgColor");
        mkColor(s1, t("sm.text"), "nodeTextColor");
        mkRange(s1, t("sm.fontSize"), "nodeFontSize", 10, 32);
        mkSel(s1, t("sm.font"), "nodeFontFamily", FONT_LIST);
        mkSel(s1, t("sm.borderStyle"), "nodeBorderStyle", [
            "solid",
            "dashed",
            "dotted",
            "double",
            "none",
        ]);
        mkColor(s1, t("sm.borderColor"), "nodeBorderColor");
        mkRange(s1, t("sm.borderWidth"), "nodeBorderWidth", 0, 8);
        mkRange(s1, t("sm.borderRadius"), "nodeBorderRadius", 0, 32);
        mkNum(s1, t("sm.minWidth"), "nodeMinWidth", 30, 400);
        mkNum(s1, t("sm.minHeight"), "nodeMinHeight", 20, 200);
        // Root
        const s2 = mkSec("🏠", t("sm.root"));
        mkColor(s2, t("sm.bg"), "rootBgColor");
        mkColor(s2, t("sm.text"), "rootTextColor");
        mkRange(s2, t("sm.fontSize"), "rootFontSize", 10, 32);
        mkSel(s2, t("sm.font"), "rootFontFamily", FONT_LIST);
        mkSel(s2, t("sm.borderStyle"), "rootBorderStyle", [
            "solid",
            "dashed",
            "dotted",
            "double",
            "none",
        ]);
        mkColor(s2, t("sm.borderColor"), "rootBorderColor");
        mkRange(s2, t("sm.borderWidth"), "rootBorderWidth", 0, 8);
        mkRange(s2, t("sm.borderRadius"), "rootBorderRadius", 0, 32);
        mkNum(s2, t("sm.minWidth"), "rootMinWidth", 50, 400);
        mkNum(s2, t("sm.minHeight"), "rootMinHeight", 20, 200);
        // Connection
        const s3 = mkSec("🔗", t("sm.conn"));
        mkSel(s3, t("sm.type"), "connectionStyle", CONNECTION_STYLES);
        mkColor(s3, t("sm.color"), "connectionColor");
        mkRange(s3, t("sm.width"), "connectionWidth", 1, 8);
        mkNum(s3, t("sm.connLength"), "connectionLength", 30, 300);
        mkSel(s3, t("sm.nodeDir"), "nodeDirection", ["right", "left", "both"]);
        // Rainbow with real color dots
        const ctRow = s3.createEl("div");
        ctRow.style.cssText = "margin-top:4px;";
        ctRow.createEl("span", {
            text: "🌈 " + t("sm.rainbow"),
        }).style.cssText = "font-size:12px;display:block;margin-bottom:4px;";
        const allP: { [k: string]: string[] } = {
            ...RAINBOW_PALETTES,
            ...(s.customRainbows || {}),
        };
        const curP = s.connectionRainbow ? s.rainbowPalette : "off";
        const lw = ctRow.createEl("div");
        lw.style.cssText =
            "max-height:160px;overflow-y:auto;border:1px solid var(--background-modifier-border);border-radius:6px;";
        const mkI = (key: string, label: string, colors: string[] | null) => {
            const it = lw.createEl("div");
            it.style.cssText = `padding:4px 8px;cursor:pointer;display:flex;align-items:center;gap:4px;font-size:11px;background:${key === curP ? "var(--background-modifier-hover)" : "transparent"};`;
            it.addEventListener("mouseenter", () => {
                if (key !== curP)
                    it.style.background = "var(--background-secondary)";
            });
            it.addEventListener("mouseleave", () => {
                it.style.background =
                    key === curP
                        ? "var(--background-modifier-hover)"
                        : "transparent";
            });
            it.createEl("span", { text: label }).style.cssText =
                "min-width:55px;font-weight:" +
                (key === curP ? "700" : "400") +
                ";";
            if (colors) {
                const ds = it.createEl("span");
                ds.style.cssText = "display:flex;gap:1px;";
                for (const c of colors.slice(0, 10)) {
                    const d = ds.createEl("span");
                    d.style.cssText = `display:inline-block;width:10px;height:10px;border-radius:50%;background:${c};`;
                }
            }
            it.addEventListener("click", () => {
                if (key === "off") upd({ connectionRainbow: false });
                else upd({ connectionRainbow: true, rainbowPalette: key });
            });
        };
        mkI("off", "Solid", null);
        for (const [name, colors] of Object.entries(allP))
            mkI(name, name, colors);
        rpv(s.connectionRainbow ? s.rainbowPalette : "off");
        function rpv(_v: string) {} // preview handled inline
        // Text
        const s3b = mkSec("📝", t("sm.textAlign"));
        mkSel(s3b, t("sm.textAlign"), "textAlign", ["left", "center", "right"]);
        // Selection
        const s4 = mkSec("✅", t("sm.sel"));
        mkColor(s4, t("sm.selColor"), "selectionColor");
        mkRange(s4, t("sm.selWidth"), "selectionWidth", 1, 8);
        mkNum(s4, t("sm.selOffset"), "selectionOutlineOffset", -5, 20);
        mkColor(s4, t("sm.editOutline"), "editOutlineColor");
        mkRange(s4, t("sm.editOutlineWidth"), "editOutlineWidth", 0, 8);
        // Canvas
        const s5 = mkSec("🖼️", t("sm.canvasBg"));
        mkColor(s5, t("sm.canvasBg"), "canvasBg");
        // Toolbar
        const s6 = mkSec("🔧", t("sm.showToolbar"));
        const tbRow = mkRow(s6, t("sm.showToolbar"));
        const tbCb = tbRow.createEl("input") as HTMLInputElement;
        tbCb.type = "checkbox";
        tbCb.checked = this.plugin.settings.showToolbar;
        tbCb.style.cssText = "width:16px;height:16px;cursor:pointer;";
        tbCb.addEventListener("change", () => {
            this.plugin.settings.showToolbar = tbCb.checked;
            this.plugin.saveSettings();
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
            "none",
        ]);
        mkColor(s6, t("sm.tbBtnBorderColor"), "toolbarBtnBorderColor");
        mkColor(s6, t("sm.tbBtnText"), "toolbarBtnTextColor");
        // Buttons
        const br = ct.createEl("div");
        br.style.cssText = "display:flex;gap:8px;margin-top:10px;";
        br.createEl("button", { text: t("sm.reset") }).addEventListener(
            "click",
            () => {
                const v = this.getView();
                if (v) v.applyStyle({ ...DEFAULT_STYLE });
                else this.plugin.updateStyle({ ...DEFAULT_STYLE });
                this.build();
            },
        );
        const rf = br.createEl("button", { text: "↻" });
        rf.style.cssText =
            "flex:1;padding:6px;border:none;background:var(--interactive-accent);color:var(--text-on-accent);border-radius:8px;cursor:pointer;font-size:12px;";
        rf.addEventListener("click", () => this.build());
    }
}
