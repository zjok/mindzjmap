// src/StylePanelView.ts
import { ItemView, WorkspaceLeaf, Setting } from "obsidian";
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
    // eslint-disable-next-line @typescript-eslint/require-await
    async onOpen() {
        this.build();
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async onClose(): Promise<void> {
        /* no cleanup needed */
    }

    private getView(): MindMapView | null {
        const l = this.app.workspace.getLeavesOfType(VIEW_TYPE_MINDMAP);
        return l.length > 0 && l[0].view instanceof MindMapView
            ? l[0].view
            : null;
    }

    private build() {
        const ct = this.containerEl.children[1] as HTMLElement;
        ct.empty();
        ct.addClass("mz-sp-ct");

        new Setting(ct).setName(t("sm.title")).setHeading();

        const view = this.getView();
        const s: MindMapStyle = view?.style
            ? { ...view.style }
            : this.plugin.getStyle();
        const upd = (p: Partial<MindMapStyle>) => {
            const v = this.getView();
            if (v) v.applyStyle(p);
            else void this.plugin.updateStyle(p);
        };

        const safeStr = (val: MindMapStyle[keyof MindMapStyle]): string =>
            typeof val === "string"
                ? val
                : typeof val === "number"
                  ? String(val)
                  : typeof val === "boolean"
                    ? String(val)
                    : "";

        const mkSec = (icon: string, title: string) => {
            const sec = ct.createEl("div");
            sec.addClass("mz-sp-sec");
            const hdr = sec.createEl("div", { text: icon + "  " + title });
            hdr.addClass("mz-sp-sec-hdr");
            const b = sec.createEl("div");
            b.addClass("mz-sp-sec-body");
            return b;
        };
        const mkRow = (p: HTMLElement, l: string) => {
            const r = p.createEl("div");
            r.addClass("mz-sp-row");
            const lbl = r.createEl("span", { text: l });
            lbl.addClass("mz-sp-lbl");
            return r;
        };
        const mkColor = (p: HTMLElement, l: string, k: keyof MindMapStyle) => {
            const r = mkRow(p, l);
            const i = r.createEl("input") as HTMLInputElement;
            i.type = "color";
            const cv = s[k];
            i.value =
                typeof cv === "string" && cv.startsWith("var")
                    ? "#ffffff"
                    : safeStr(cv);
            i.addClass("mz-sp-color");
            i.addEventListener("input", () =>
                upd({ [k]: i.value } as Partial<MindMapStyle>),
            );
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
            w.addClass("mz-sp-range-wrap");
            const i = w.createEl("input") as HTMLInputElement;
            i.type = "range";
            i.min = String(min);
            i.max = String(max);
            if (step) i.step = String(step);
            i.value = safeStr(s[k]);
            i.addClass("mz-sp-range");
            const n = w.createEl("span", { text: safeStr(s[k]) });
            n.addClass("mz-sp-range-val");
            i.addEventListener("input", () => {
                n.textContent = i.value;
                upd({ [k]: Number(i.value) } as Partial<MindMapStyle>);
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
            i.value = safeStr(s[k]);
            i.addClass("mz-sp-num");
            i.addEventListener("change", () =>
                upd({ [k]: Number(i.value) } as Partial<MindMapStyle>),
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
            sel.addClass("mz-sp-sel");
            for (const o of opts) {
                const op = document.createElement("option");
                op.value = o;
                op.text = o;
                if (o === safeStr(s[k])) op.selected = true;
                sel.appendChild(op);
            }
            sel.addEventListener("change", () =>
                upd({ [k]: sel.value } as Partial<MindMapStyle>),
            );
        };

        // Child node
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

        // Root node
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
        mkRange(s3, t("sm.nodeGapY"), "nodeGapY", 8, 80);

        // Rainbow
        const ctRow = s3.createEl("div");
        ctRow.addClass("mz-rainbow-ct");
        const rlbl = ctRow.createEl("span", { text: t("sm.rainbow") });
        rlbl.addClass("mz-rainbow-lbl");
        const allP: Record<string, string[]> = {
            ...RAINBOW_PALETTES,
            ...(s.customRainbows || {}),
        };
        const curP = s.connectionRainbow ? s.rainbowPalette : "off";
        const lw = ctRow.createEl("div");
        lw.addClass("mz-rainbow-list");

        const mkI = (key: string, label: string, colors: string[] | null) => {
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
                    Object.entries({ "--mz-dot-color": c }).forEach(([k, v]) =>
                        d.style.setProperty(k, v),
                    );
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
            "none",
        ]);
        mkColor(s6, t("sm.tbBtnBorderColor"), "toolbarBtnBorderColor");
        mkColor(s6, t("sm.tbBtnText"), "toolbarBtnTextColor");

        // Buttons
        const br = ct.createEl("div");
        br.addClass("mz-sp-btns");
        br.createEl("button", { text: t("sm.reset") }).addEventListener(
            "click",
            () => {
                const v = this.getView();
                if (v) v.applyStyle({ ...DEFAULT_STYLE });
                else void this.plugin.updateStyle({ ...DEFAULT_STYLE });
                this.build();
            },
        );
        const rf = br.createEl("button", { text: "↻" });
        rf.addClass("mz-sp-refresh");
        rf.addEventListener("click", () => this.build());
    }
}
