// src/MindMapView.ts
import { TextFileView, WorkspaceLeaf, Menu } from "obsidian";
import {
    VIEW_TYPE_MINDMAP,
    MindNodeData,
    MindMapStyle,
    DEFAULT_STYLE,
    RAINBOW_PALETTES,
    FONT_LIST,
    CONNECTION_STYLES,
    KeyBindings,
} from "./types";
import { t } from "./i18n";
import type MindNodePlugin from "./main";

interface RootDrag {
    isRootDrag: true;
    nodeId: string;
    startX: number;
    startY: number;
    nsx: number;
    nsy: number;
    peers?: { id: string; sx: number; sy: number }[];
}
interface ChildDrag {
    isRootDrag: false;
    nodeId: string;
    startX: number;
    startY: number;
    ghostEl: SVGElement | null;
    indicatorEl: SVGRectElement | null;
    snap: string;
}
type DragState = ({ isDragging: boolean } & (RootDrag | ChildDrag)) | null;

export class MindMapView extends TextFileView {
    private svgEl!: SVGSVGElement;
    private gEl!: SVGGElement;
    private edgesG!: SVGGElement;
    private nodesG!: SVGGElement;
    private overlayG!: SVGGElement;
    private cc!: HTMLElement;
    private svgCt!: HTMLElement;
    private mdCt!: HTMLTextAreaElement;
    private tbEl!: HTMLElement;
    private devEl: HTMLElement | null = null;
    private panX = 0;
    private panY = 0;
    private zoom = 1;
    private spaceDown = false;
    private dragCv = false;
    private smx = 0;
    private smy = 0;
    private selId: string | null = null;
    private multiSel = new Set<string>();
    private editId: string | null = null;
    private roots: MindNodeData[] = [];
    private lct = 0;
    private lcnid: string | null = null;
    private commitEdit: (() => void) | null = null;
    private undoS: string[] = [];
    private redoS: string[] = [];
    public style: MindMapStyle = { ...DEFAULT_STYLE };
    private ds: DragState = null;
    private plugin: MindNodePlugin;
    private uiOk = false;
    private boxSel = false;
    private bsx = 0;
    private bsy = 0;
    private bcx = 0;
    private bcy = 0;
    private boxShift = false;
    private boxEl: SVGRectElement | null = null;
    private popClose: (() => void) | null = null;
    private mdMode = false;
    private mdBtn: HTMLButtonElement | null = null;
    private clipboard: { data: string; isRoot: boolean; cut: boolean } | null =
        null;
    private activeMenu: Menu | null = null;
    private searchBar: HTMLDivElement | null = null;
    private searchResults: MindNodeData[] = [];
    private searchIdx = 0;
    private oldPos = new Map<string, { x: number; y: number }>();
    private animId: number | null = null;
    private liveTA: HTMLTextAreaElement | null = null;
    private mdSnapshot: string | null = null;
    private zoomLabel: HTMLSpanElement | null = null;
    private proxyTA: HTMLTextAreaElement | null = null;

    constructor(leaf: WorkspaceLeaf, plugin: MindNodePlugin) {
        super(leaf);
        this.plugin = plugin;
        this.style = plugin.getStyle();
    }
    private get kb(): KeyBindings {
        return this.plugin.settings.keyBindings;
    }
    private getRainbow(): string[] {
        const p = this.style.rainbowPalette;
        if (this.style.customRainbows?.[p]) return this.style.customRainbows[p];
        return RAINBOW_PALETTES[p] || RAINBOW_PALETTES.classic;
    }
    private mkRoot(txt: string): MindNodeData {
        return {
            id: crypto.randomUUID(),
            text: txt,
            x: 0,
            y: 0,
            width: this.calcW(txt, true),
            height: this.calcH(txt, true),
            children: [],
            isRoot: true,
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

    getViewData(): string {
        if (this.editId && this.liveTA) {
            const nd = this.fAll(this.editId);
            if (nd) nd.text = this.liveTA.value;
        }
        return JSON.stringify({ rootNodes: this.roots }, null, 2);
    }
    setViewData(data: string, clear: boolean): void {
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
            this.roots =
                Array.isArray(p.rootNodes) && p.rootNodes.length
                    ? p.rootNodes
                    : [this.mkRoot(this.plugin.getRootName())];
        } catch {
            this.roots = [this.mkRoot(this.plugin.getRootName())];
        }
        if (this.roots.length && !this.selId) this.selId = this.roots[0].id;
        if (this.uiOk) {
            if (this.mdMode) this.renderMd();
            else this.fitAll();
        }
    }
    clear() {
        this.roots = [];
        this.selId = null;
        this.editId = null;
        this.multiSel.clear();
    }
    private doSave() {
        this.requestSave();
    }
    private fitAll() {
        if (!this.cc || !this.roots.length) return;
        const rc = this.cc.getBoundingClientRect();
        // Guard: container not yet laid out — retry on next frame
        if (rc.width < 1 || rc.height < 1) {
            requestAnimationFrame(() => this.fitAll());
            return;
        }
        for (const r of this.roots) this.doLayout(r);
        let x1 = Infinity,
            x2 = -Infinity,
            y1 = Infinity,
            y2 = -Infinity;
        const vis = (n: MindNodeData) => {
            x1 = Math.min(x1, n.x - n.width / 2);
            x2 = Math.max(x2, n.x + n.width / 2);
            y1 = Math.min(y1, n.y - n.height / 2);
            y2 = Math.max(y2, n.y + n.height / 2);
            for (const c of n.children) vis(c);
        };
        for (const r of this.roots) vis(r);
        this.zoom = Math.min(
            1,
            Math.min(rc.width / (x2 - x1 + 100), rc.height / (y2 - y1 + 100)),
        );
        if (!isFinite(this.zoom) || this.zoom <= 0) this.zoom = 1;
        this.panX = rc.width / 2 - ((x1 + x2) / 2) * this.zoom;
        this.panY = rc.height / 2 - ((y1 + y2) / 2) * this.zoom;
        this.updTx();
        this.render();
    }
    private focusNode(nd: MindNodeData) {
        if (!this.cc) return;
        const r = this.cc.getBoundingClientRect();
        this.panX = r.width / 2 - nd.x * this.zoom - r.width * 0.17;
        this.panY = r.height / 2 - nd.y * this.zoom - r.height * 0.05;
        this.updTx();
    }
    public refreshUI() {
        if (!this.uiOk) return;
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

    async onOpen() {
        const ct = this.containerEl.children[1] as HTMLElement;
        ct.empty();
        ct.style.cssText =
            "display:flex;flex-direction:column;height:100%;padding-top:0!important;";
        const styleTag = document.createElement("style");
        styleTag.textContent =
            ".workspace-leaf-content .view-content{padding-top:0!important;}";
        ct.appendChild(styleTag);
        this.tbEl = ct.createEl("div");
        this.applyToolbarStyle();
        this.buildTb(this.tbEl);
        this.svgCt = ct.createEl("div", {
            attr: {
                tabindex: "0",
                style: "width:100%;flex:1;position:relative;overflow:hidden;outline:none;order:1;",
            },
        });
        this.cc = this.svgCt;
        // FIX: prevent browser from scrolling the container — panning uses CSS transform only
        this.svgCt.addEventListener("scroll", () => {
            this.svgCt!.scrollTop = 0;
            this.svgCt!.scrollLeft = 0;
        });
        this.applyCanvasBg();
        this.svgEl = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg",
        );
        this.svgEl.setAttribute("width", "100%");
        this.svgEl.setAttribute("height", "100%");
        this.svgEl.style.display = "block";
        this.cc.appendChild(this.svgEl);
        this.gEl = document.createElementNS("http://www.w3.org/2000/svg", "g");
        this.svgEl.appendChild(this.gEl);
        this.edgesG = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "g",
        );
        this.gEl.appendChild(this.edgesG);
        this.nodesG = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "g",
        );
        this.gEl.appendChild(this.nodesG);
        this.overlayG = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "g",
        );
        this.gEl.appendChild(this.overlayG);
        this.mdCt = ct.createEl("textarea") as HTMLTextAreaElement;
        this.mdCt.style.cssText =
            "width:100%;flex:1;padding:16px 24px;box-sizing:border-box;font-family:var(--font-monospace);display:none;font-size:14px;color:var(--text-normal);background:var(--background-primary);border:none;outline:none;resize:none;overflow:auto;white-space:pre;tab-size:4;order:1;";
        this.bindEvts();
        window.addEventListener("keydown", this._kd, true);
        window.addEventListener("keyup", this._ku, true);
        window.addEventListener("mouseup", this._mu, true);
        this.uiOk = true;
        this.updateToolbarVisibility();
        this.updateDevPanel();
        setTimeout(() => {
            if (this.roots.length) this.fitAll();
            this.cc?.focus({ preventScroll: true });
        }, 0);
    }
    async onClose() {
        if (this.commitEdit) this.commitEdit();
        this.clearProxy();
        this.uiOk = false;
        this.spaceDown = false;
        this.dragCv = false;
        this.liveTA = null;
        window.removeEventListener("keydown", this._kd, true);
        window.removeEventListener("keyup", this._ku, true);
        window.removeEventListener("mouseup", this._mu, true);
        if (this.animId) cancelAnimationFrame(this.animId);
    }

    private applyCanvasBg() {
        if (this.svgCt) this.svgCt.style.background = this.style.canvasBg;
    }
    private applyToolbarStyle() {
        const s = this.style;
        const pos = s.toolbarPosition === "bottom" ? 2 : 0;
        this.tbEl.style.cssText = `height:42px;display:flex;align-items:center;gap:6px;padding:${s.toolbarPadTop}px ${s.toolbarPadRight}px ${s.toolbarPadBottom}px ${s.toolbarPadLeft}px;background:${s.toolbarBgColor};border-${s.toolbarPosition === "bottom" ? "top" : "bottom"}:1px solid var(--background-modifier-border);flex-shrink:0;order:${pos};`;
    }
    private updateToolbarVisibility() {
        if (this.tbEl)
            this.tbEl.style.display = this.plugin.settings.showToolbar
                ? "flex"
                : "none";
    }
    private isSel(id: string) {
        return this.selId === id || this.multiSel.has(id);
    }
    private clrSel() {
        this.selId = null;
        this.multiSel.clear();
    }
    private sel1(id: string) {
        this.multiSel.clear();
        this.selId = id;
    }
    private togSel(id: string) {
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
    private allSel(): Set<string> {
        const s = new Set(this.multiSel);
        if (this.selId) s.add(this.selId);
        return s;
    }
    private isMulti() {
        return this.allSel().size > 1;
    }
    private closePop() {
        if (this.popClose) {
            this.popClose();
            this.popClose = null;
        }
    }
    private updateDevPanel() {
        if (!this.plugin.settings.developerMode) {
            if (this.devEl) {
                this.devEl.remove();
                this.devEl = null;
            }
            return;
        }
        if (!this.devEl && this.svgCt) {
            this.devEl = document.createElement("div");
            this.devEl.style.cssText =
                "position:absolute;bottom:8px;left:8px;z-index:100;background:rgba(0,0,0,0.85);color:#0f0;font-family:monospace;font-size:11px;padding:8px 12px;border-radius:8px;max-width:400px;max-height:200px;overflow:auto;pointer-events:auto;white-space:pre;user-select:text;";
            this.svgCt.appendChild(this.devEl);
        }
        if (this.devEl) {
            const nd = this.selId ? this.fAll(this.selId) : null;
            this.devEl.textContent = JSON.stringify(
                {
                    sel: this.selId?.substring(0, 8),
                    editId: this.editId?.substring(0, 8),
                    zoom: +this.zoom.toFixed(3),
                    pan: [+this.panX.toFixed(0), +this.panY.toFixed(0)],
                    roots: this.roots.length,
                    node: nd
                        ? {
                              text: nd.text.substring(0, 20),
                              x: +nd.x.toFixed(0),
                              y: +nd.y.toFixed(0),
                              children: nd.children.length,
                          }
                        : null,
                },
                null,
                1,
            );
        }
    }

    private buildTb(tb: HTMLElement) {
        tb.empty();
        const s = this.style;
        const btnBg = s.toolbarBtnBgColor;
        const btnBdr = s.toolbarBtnBorderColor;
        const btnBdrS = s.toolbarBtnBorderStyle;
        const btnTx = s.toolbarBtnTextColor;
        const btn = (txt: string, tip: string, fn: () => void) => {
            const b = tb.createEl("button", { title: tip });
            b.style.cssText = `padding:4px 10px;border:1px ${btnBdrS} ${btnBdr};background:${btnBg};color:${btnTx};border-radius:6px;cursor:pointer;font-size:12px;white-space:nowrap;transition:background .15s;`;
            b.innerText = txt;
            b.addEventListener("click", fn);
            b.addEventListener(
                "mouseenter",
                () => (b.style.background = "var(--background-modifier-hover)"),
            );
            b.addEventListener(
                "mouseleave",
                () => (b.style.background = btnBg),
            );
            return b;
        };
        btn(t("tb.root"), t("tb.newRoot"), () => this.addRoot());
        btn(t("tb.undo"), t("tb.tipUndo"), () => this.undo());
        btn(t("tb.redo"), t("tb.tipRedo"), () => this.redo());
        tb.createEl("div").style.cssText =
            "width:1px;height:20px;background:var(--background-modifier-border);";
        this.mdBtn = btn(t("tb.md"), t("tb.tipMd"), () => this.toggleMd());
        btn(t("tb.style"), t("tb.tipStyle"), () => this.showStyleModal());
        btn("👓 " + t("tb.focus"), t("tb.tipFocus"), () => this.focusSel());
        btn("🔍 " + t("tb.search"), t("tb.tipSearch"), () =>
            this.toggleSearch(),
        );
        btn(t("tb.settings"), t("tb.tipSettings"), () =>
            this.plugin.openPluginSettings(),
        );
        tb.createEl("div").style.cssText =
            "width:1px;height:20px;background:var(--background-modifier-border);";
        btn("−", t("tb.zoomOut"), () => this.zoomBy(0.9));
        this.zoomLabel = tb.createEl("span");
        this.zoomLabel.style.cssText =
            "font-size:11px;color:var(--text-muted);min-width:40px;text-align:center;cursor:pointer;user-select:none;";
        this.zoomLabel.innerText = Math.round(this.zoom * 100) + "%";
        this.zoomLabel.addEventListener("click", () => this.zoomTo(1));
        btn("+", t("tb.zoomIn"), () => this.zoomBy(1.1));
        const h = tb.createEl("span");
        h.style.cssText =
            "font-size:10px;color:var(--text-muted);margin-left:auto;white-space:nowrap;";
        h.innerText = t("tb.help");
    }
    private focusSel() {
        let nd: MindNodeData | null = null;
        if (this.selId) nd = this.fAll(this.selId);
        if (!nd && this.roots.length) nd = this.roots[this.roots.length - 1];
        if (nd) {
            this.focusNode(nd);
            this.render();
        }
    }
    private toggleMd() {
        if (this.mdMode) {
            this.mdMode = false;
            if (this.mdBtn) this.mdBtn.innerText = t("tb.md");
            // Restore from snapshot if text unchanged, else parse
            const newMd = this.mdCt.value;
            const oldMd = this.mdSnapshot ? this.roots2mdFromSnap() : null;
            if (oldMd && newMd === oldMd) {
                /* no changes, keep original roots */
            } else {
                this.parseMd(newMd);
            }
            this.mdSnapshot = null;
            this.mdCt.style.display = "none";
            this.svgCt.style.display = "block";
            for (const r of this.roots) this.doLayout(r);
            this.render();
            this.doSave();
        } else {
            if (this.commitEdit) this.commitEdit();
            this.mdMode = true;
            if (this.mdBtn) this.mdBtn.innerText = t("tb.map");
            this.mdSnapshot = JSON.stringify(this.roots);
            this.svgCt.style.display = "none";
            this.mdCt.style.display = "block";
            this.mdCt.value = this.roots2md();
        }
    }
    private roots2mdFromSnap(): string | null {
        if (!this.mdSnapshot) return null;
        try {
            const rs = JSON.parse(this.mdSnapshot) as MindNodeData[];
            let m = "";
            const n2md = (
                nd: MindNodeData,
                d: number,
                marker: string,
            ): string => {
                const tx = nd.text.replace(/\n/g, " ");
                const l = "\t".repeat(d - 1) + marker + " " + tx;
                let r = l + "\n";
                for (const c of nd.children) r += n2md(c, d + 1, marker);
                return r;
            };
            for (let i = 0; i < rs.length; i++) {
                const r = rs[i];
                const rightCh = r.children.filter((c) => c.side !== "left");
                const leftCh = r.children.filter((c) => c.side === "left");
                m += r.text.replace(/\n/g, " ") + "\n";
                for (const c of rightCh) m += n2md(c, 1, "-");
                for (const c of leftCh) m += n2md(c, 1, "*");
                if (i < rs.length - 1) m += "\n";
            }
            return m;
        } catch {
            return null;
        }
    }
    private roots2md() {
        let m = "";
        for (let i = 0; i < this.roots.length; i++) {
            const r = this.roots[i];
            const rightCh = r.children.filter((c) => c.side !== "left");
            const leftCh = r.children.filter((c) => c.side === "left");
            m += r.text.replace(/\n/g, " ") + "\n";
            for (const c of rightCh) m += this.n2md(c, 1, "-");
            for (const c of leftCh) m += this.n2md(c, 1, "*");
            if (i < this.roots.length - 1) m += "\n";
        }
        return m;
    }
    private n2md(nd: MindNodeData, d: number, marker: string): string {
        const tx = nd.text.replace(/\n/g, " ");
        const l = "\t".repeat(d - 1) + marker + " " + tx;
        let r = l + "\n";
        for (const c of nd.children) r += this.n2md(c, d + 1, marker);
        return r;
    }
    private renderMd() {
        this.mdCt.value = this.roots2md();
    }
    private parseMd(text: string) {
        const lines = text.split("\n").filter((l) => l.trim());
        if (!lines.length) return;
        const nr: MindNodeData[] = [];
        let cur: MindNodeData | null = null;
        const stk: [number, MindNodeData][] = [];
        for (const line of lines) {
            const m = line.match(/^(\t*)([\-\*])\s+(.*)/);
            if (m) {
                const dep = m[1].length + 1,
                    marker = m[2],
                    txt = m[3].trim();
                const side = marker === "*" ? "left" : "right";
                const nd: MindNodeData = {
                    id: crypto.randomUUID(),
                    text: txt,
                    x: 0,
                    y: 0,
                    width: this.calcW(txt, false),
                    height: this.calcH(txt, false),
                    children: [],
                    side,
                };
                while (stk.length && stk[stk.length - 1][0] >= dep) stk.pop();
                if (stk.length) stk[stk.length - 1][1].children.push(nd);
                else if (cur) cur.children.push(nd);
                stk.push([dep, nd]);
            } else {
                const txt = line.trim();
                if (!txt) continue;
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
        if (nr.length) this.roots = nr;
    }

    private addRoot(text?: string, x?: number, y?: number) {
        this.saveS();
        const n = this.mkRoot(text ?? this.plugin.getRootName());
        const last = this.roots[this.roots.length - 1];
        // Compute bottom-most Y including all descendants of last root
        let maxY = 0;
        if (last) {
            this.doLayout(last);
            const findMaxY = (nd: MindNodeData) => {
                const bot = nd.y + nd.height / 2;
                if (bot > maxY) maxY = bot;
                for (const c of nd.children) findMaxY(c);
            };
            findMaxY(last);
        }
        n.x = x ?? (last ? last.x : 0);
        n.y = y ?? (last ? maxY + 80 : 0);
        this.roots.push(n);
        this.sel1(n.id);
        if (this.plugin.settings.editOnCreate) this.editId = n.id;
        this.render();
        this.focusNode(n);
        this.render();
        this.doSave();
    }
    private saveS() {
        this.undoS.push(JSON.stringify(this.roots));
        if (this.undoS.length > 50) this.undoS.shift();
        this.redoS = [];
    }
    private undo() {
        if (!this.undoS.length) return;
        this.redoS.push(JSON.stringify(this.roots));
        this.roots = JSON.parse(this.undoS.pop()!);
        if (this.selId && !this.fAll(this.selId)) this.selId = null;
        this.multiSel.clear();
        this.render();
        this.doSave();
    }
    private redo() {
        if (!this.redoS.length) return;
        this.undoS.push(JSON.stringify(this.roots));
        this.roots = JSON.parse(this.redoS.pop()!);
        this.render();
        this.doSave();
    }
    private fAll(id: string): MindNodeData | null {
        for (const r of this.roots) {
            const f = this.fN(id, r);
            if (f) return f;
        }
        return null;
    }
    public applyStyle(p: Partial<MindMapStyle>) {
        this.style = { ...this.style, ...p };
        this.plugin.updateStyle(p);
        this.applyCanvasBg();
        if (
            p.toolbarPosition !== undefined ||
            p.toolbarPadTop !== undefined ||
            p.toolbarPadRight !== undefined ||
            p.toolbarPadBottom !== undefined ||
            p.toolbarPadLeft !== undefined ||
            p.toolbarBgColor !== undefined
        )
            this.applyToolbarStyle();
        if (
            p.toolbarBtnBgColor !== undefined ||
            p.toolbarBtnBorderStyle !== undefined ||
            p.toolbarBtnBorderColor !== undefined ||
            p.toolbarBtnTextColor !== undefined
        ) {
            this.tbEl.empty();
            this.buildTb(this.tbEl);
            this.applyToolbarStyle();
        }
        this.render();
    }

    private assignRainbowColor(parent: MindNodeData, child: MindNodeData) {
        if (!this.style.connectionRainbow || !parent.isRoot) return;
        if (!child.connectionColor) {
            const rb = this.getRainbow();
            const idx = parent.children.indexOf(child);
            child.connectionColor =
                rb[(idx >= 0 ? idx : parent.children.length) % rb.length];
        }
    }
    private matchKey(e: KeyboardEvent, combo: string): boolean {
        const parts = combo.toLowerCase().split("+");
        const needCtrl = parts.includes("ctrl");
        const needShift = parts.includes("shift");
        const needAlt = parts.includes("alt");
        const mainKey =
            parts.filter(
                (p) => p !== "ctrl" && p !== "shift" && p !== "alt",
            )[0] || "";
        if (needCtrl !== (e.ctrlKey || e.metaKey)) return false;
        if (needShift !== e.shiftKey) return false;
        if (needAlt !== e.altKey) return false;
        const eKey = e.key === " " ? "space" : e.key.toLowerCase();
        const eCode = e.code.toLowerCase();
        // Map e.code to base unshifted key for reliable matching
        const codeMap: Record<string, string> = {
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
            slash: "/",
        };
        const baseKey = codeMap[eCode] || "";
        return eKey === mainKey || eCode === mainKey || baseKey === mainKey;
    }

    // ═══ Modals - all close on Esc ═══
    private showStyleModal() {
        this.closePop();
        const ov = document.createElement("div");
        ov.style.cssText =
            "position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9999;";
        const m = document.createElement("div");
        m.style.cssText =
            "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:var(--background-primary);border:1px solid var(--background-modifier-border);border-radius:14px;padding:24px;z-index:10000;min-width:440px;max-height:85vh;overflow-y:auto;box-shadow:0 12px 40px rgba(0,0,0,.25);";
        m.createEl("h3", { text: t("sm.title") }).style.cssText =
            "margin:0 0 16px;font-size:16px;";
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
            true,
        );
        const sec = (icon: string, title: string) => {
            const s = m.createEl("div");
            s.style.cssText = "margin-bottom:20px;";
            s.createEl("div", { text: icon + " " + title }).style.cssText =
                "font-weight:700;color:var(--text-accent);font-size:13px;margin-bottom:10px;padding-bottom:6px;border-bottom:2px solid var(--background-modifier-border);";
            return s;
        };
        const R = (
            p: HTMLElement,
            l: string,
            k: keyof MindMapStyle,
            tp: string,
            o?: {
                min?: number;
                max?: number;
                options?: string[];
                step?: number;
            },
        ) => {
            const row = p.createEl("div");
            row.style.cssText =
                "display:flex;align-items:center;justify-content:space-between;margin-bottom:7px;gap:10px;";
            row.createEl("label", { text: l }).style.cssText =
                "font-size:12px;flex:1;color:var(--text-normal);";
            const cv = this.style[k];
            if (tp === "color") {
                const i = row.createEl("input") as HTMLInputElement;
                i.type = "color";
                i.value =
                    typeof cv === "string" && cv.startsWith("var")
                        ? "#ffffff"
                        : String(cv);
                i.style.cssText =
                    "width:44px;height:26px;border:none;cursor:pointer;border-radius:4px;";
                i.addEventListener("change", () =>
                    this.applyStyle({ [k]: i.value } as any),
                );
            } else if (tp === "number") {
                const i = row.createEl("input") as HTMLInputElement;
                i.type = "number";
                i.min = String(o?.min ?? 0);
                i.max = String(o?.max ?? 999);
                if (o?.step) i.step = String(o.step);
                i.value = String(cv);
                i.style.cssText =
                    "width:64px;padding:4px;border:1px solid var(--background-modifier-border);border-radius:6px;font-size:12px;background:var(--background-secondary);color:var(--text-normal);";
                i.addEventListener("change", () =>
                    this.applyStyle({ [k]: Number(i.value) } as any),
                );
            } else if (tp === "select") {
                const s = row.createEl("select") as HTMLSelectElement;
                s.style.cssText =
                    "padding:4px;border:1px solid var(--background-modifier-border);border-radius:6px;font-size:12px;background:var(--background-secondary);color:var(--text-normal);";
                for (const v of o?.options ?? []) {
                    const op = document.createElement("option");
                    op.value = v;
                    op.text = v;
                    if (v === String(cv)) op.selected = true;
                    s.appendChild(op);
                }
                s.addEventListener("change", () =>
                    this.applyStyle({ [k]: s.value } as any),
                );
            } else if (tp === "toggle") {
                const cb = row.createEl("input") as HTMLInputElement;
                cb.type = "checkbox";
                cb.checked = !!cv;
                cb.style.cssText = "width:18px;height:18px;cursor:pointer;";
                cb.addEventListener("change", () =>
                    this.applyStyle({ [k]: cb.checked } as any),
                );
            }
        };
        const s1 = sec("📦", t("sm.child"));
        R(s1, t("sm.bg"), "nodeBgColor", "color");
        R(s1, t("sm.text"), "nodeTextColor", "color");
        R(s1, t("sm.fontSize"), "nodeFontSize", "number", { min: 10, max: 32 });
        R(s1, t("sm.font"), "nodeFontFamily", "select", { options: FONT_LIST });
        R(s1, t("sm.borderStyle"), "nodeBorderStyle", "select", {
            options: ["solid", "dashed", "dotted", "double", "none"],
        });
        R(s1, t("sm.borderColor"), "nodeBorderColor", "color");
        R(s1, t("sm.borderWidth"), "nodeBorderWidth", "number", {
            min: 0,
            max: 8,
        });
        R(s1, t("sm.borderRadius"), "nodeBorderRadius", "number", {
            min: 0,
            max: 32,
        });
        R(s1, t("sm.minWidth"), "nodeMinWidth", "number", {
            min: 30,
            max: 400,
        });
        R(s1, t("sm.minHeight"), "nodeMinHeight", "number", {
            min: 20,
            max: 200,
        });
        const s2 = sec("🏠", t("sm.root"));
        R(s2, t("sm.bg"), "rootBgColor", "color");
        R(s2, t("sm.text"), "rootTextColor", "color");
        R(s2, t("sm.fontSize"), "rootFontSize", "number", { min: 10, max: 32 });
        R(s2, t("sm.font"), "rootFontFamily", "select", { options: FONT_LIST });
        R(s2, t("sm.borderStyle"), "rootBorderStyle", "select", {
            options: ["solid", "dashed", "dotted", "double", "none"],
        });
        R(s2, t("sm.borderColor"), "rootBorderColor", "color");
        R(s2, t("sm.borderWidth"), "rootBorderWidth", "number", {
            min: 0,
            max: 8,
        });
        R(s2, t("sm.borderRadius"), "rootBorderRadius", "number", {
            min: 0,
            max: 32,
        });
        R(s2, t("sm.minWidth"), "rootMinWidth", "number", {
            min: 50,
            max: 400,
        });
        R(s2, t("sm.minHeight"), "rootMinHeight", "number", {
            min: 20,
            max: 200,
        });
        const s3 = sec("🔗", t("sm.conn"));
        R(s3, t("sm.type"), "connectionStyle", "select", {
            options: CONNECTION_STYLES,
        });
        R(s3, t("sm.color"), "connectionColor", "color");
        R(s3, t("sm.width"), "connectionWidth", "number", { min: 1, max: 8 });
        R(s3, t("sm.connLength"), "connectionLength", "number", {
            min: 30,
            max: 300,
        });
        R(s3, t("sm.nodeDir"), "nodeDirection", "select", {
            options: ["right", "left", "both"],
        });
        // Rainbow: list with real color dots, delete buttons, no modal reopen
        const ctRow = s3.createEl("div");
        ctRow.style.cssText = "margin-bottom:7px;";
        ctRow.createEl("label", {
            text: "🌈 " + t("sm.rainbow"),
        }).style.cssText =
            "font-size:12px;color:var(--text-normal);display:block;margin-bottom:6px;";
        const allPals: { [k: string]: string[] } = {
            ...RAINBOW_PALETTES,
            ...(this.style.customRainbows || {}),
        };
        let curPal = this.style.connectionRainbow
            ? this.style.rainbowPalette
            : "off";
        const listWrap = ctRow.createEl("div");
        listWrap.style.cssText =
            "max-height:200px;overflow-y:auto;border:1px solid var(--background-modifier-border);border-radius:8px;";
        const rebuildList = () => {
            listWrap.innerHTML = "";
            const updated = {
                ...RAINBOW_PALETTES,
                ...(this.style.customRainbows || {}),
            };
            const mkItem = (
                key: string,
                label: string,
                colors: string[] | null,
            ) => {
                const it = listWrap.createEl("div");
                it.style.cssText = `padding:6px 10px;cursor:pointer;display:flex;align-items:center;gap:6px;font-size:12px;background:${key === curPal ? "var(--background-modifier-hover)" : "transparent"};`;
                it.addEventListener("mouseenter", () => {
                    if (key !== curPal)
                        it.style.background = "var(--background-secondary)";
                });
                it.addEventListener("mouseleave", () => {
                    it.style.background =
                        key === curPal
                            ? "var(--background-modifier-hover)"
                            : "transparent";
                });
                const nm = it.createEl("span", { text: label });
                nm.style.cssText =
                    "min-width:60px;font-weight:" +
                    (key === curPal ? "700" : "400") +
                    ";flex-shrink:0;";
                if (colors) {
                    const dots = it.createEl("span");
                    dots.style.cssText =
                        "display:flex;gap:1px;flex:1;flex-wrap:wrap;";
                    for (const c of colors.slice(0, 10)) {
                        const d = dots.createEl("span");
                        d.style.cssText = `display:inline-block;width:12px;height:12px;border-radius:50%;background:${c};`;
                    }
                }
                it.addEventListener("click", (ev) => {
                    if (
                        (ev.target as HTMLElement).classList.contains("pal-del")
                    )
                        return;
                    if (key === "off") {
                        this.applyStyle({ connectionRainbow: false });
                        curPal = "off";
                    } else {
                        this.applyStyle({
                            connectionRainbow: true,
                            rainbowPalette: key,
                        });
                        curPal = key;
                    }
                    rebuildList();
                });
                // Delete button (not for Solid or built-in palettes)
                if (key !== "off" && !RAINBOW_PALETTES[key]) {
                    const del = it.createEl("span", { text: "✕" });
                    del.className = "pal-del";
                    del.style.cssText =
                        "margin-left:auto;color:var(--text-muted);cursor:pointer;font-size:11px;padding:2px 4px;flex-shrink:0;";
                    del.addEventListener("click", (ev) => {
                        ev.stopPropagation();
                        const cr = { ...(this.style.customRainbows || {}) };
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
        // Add custom palette
        const addRow = ctRow.createEl("div");
        addRow.style.cssText = "margin-top:8px;";
        const addBtn = addRow.createEl("button", {
            text: t("sm.customRainbow"),
        });
        addBtn.style.cssText =
            "padding:4px 12px;border:1px dashed var(--background-modifier-border);background:var(--background-secondary);border-radius:6px;cursor:pointer;font-size:11px;";
        addBtn.addEventListener("click", () => {
            addBtn.style.display = "none";
            const ed = addRow.createEl("div");
            ed.style.cssText = "margin-top:6px;";
            const nameInp = ed.createEl("input") as HTMLInputElement;
            nameInp.type = "text";
            nameInp.placeholder = "Palette name";
            nameInp.value = "Custom";
            nameInp.style.cssText =
                "width:120px;padding:3px 6px;border:1px solid var(--background-modifier-border);border-radius:4px;font-size:11px;margin-bottom:6px;display:block;";
            const colors = [
                "#ff0000",
                "#00ff00",
                "#0000ff",
                "#ffff00",
                "#ff00ff",
                "#00ffff",
            ];
            const cDiv = ed.createEl("div");
            cDiv.style.cssText =
                "display:flex;gap:3px;flex-wrap:wrap;align-items:center;margin-bottom:6px;";
            const rebuild = () => {
                cDiv.innerHTML = "";
                for (let i = 0; i < colors.length; i++) {
                    const ci = cDiv.createEl("input") as HTMLInputElement;
                    ci.type = "color";
                    ci.value = colors[i];
                    ci.style.cssText =
                        "width:24px;height:24px;border:none;cursor:pointer;border-radius:4px;";
                    ci.addEventListener("change", () => {
                        colors[i] = ci.value;
                    });
                }
                const ab = cDiv.createEl("button", { text: "+" });
                ab.style.cssText =
                    "width:24px;height:24px;border:1px dashed var(--text-muted);background:none;border-radius:50%;cursor:pointer;font-size:14px;color:var(--text-muted);";
                ab.addEventListener("click", () => {
                    colors.push("#888888");
                    rebuild();
                });
            };
            rebuild();
            const saveBtn = ed.createEl("button", { text: "✓ Save" });
            saveBtn.style.cssText =
                "padding:4px 12px;border:none;background:var(--interactive-accent);color:var(--text-on-accent);border-radius:6px;cursor:pointer;font-size:12px;";
            saveBtn.addEventListener("click", () => {
                let nm = nameInp.value.trim() || "Custom";
                const existing = this.style.customRainbows || {};
                if (existing[nm] || RAINBOW_PALETTES[nm]) {
                    let i = 2;
                    while (
                        existing[nm + " " + i] ||
                        RAINBOW_PALETTES[nm + " " + i]
                    )
                        i++;
                    nm = nm + " " + i;
                }
                const newCR = { ...existing, [nm]: [...colors] };
                this.applyStyle({
                    customRainbows: newCR,
                    connectionRainbow: true,
                    rainbowPalette: nm,
                });
                curPal = nm;
                ed.remove();
                addBtn.style.display = "";
                rebuildList();
            });
        });
        const s3b = sec("📝", t("sm.textAlign"));
        R(s3b, t("sm.textAlign"), "textAlign", "select", {
            options: ["left", "center", "right"],
        });
        const s4 = sec("✅", t("sm.sel"));
        R(s4, t("sm.selColor"), "selectionColor", "color");
        R(s4, t("sm.selWidth"), "selectionWidth", "number", { min: 1, max: 8 });
        R(s4, t("sm.selOffset"), "selectionOutlineOffset", "number", {
            min: -5,
            max: 20,
        });
        R(s4, t("sm.editOutline"), "editOutlineColor", "color");
        R(s4, t("sm.editOutlineWidth"), "editOutlineWidth", "number", {
            min: 0,
            max: 8,
        });
        const s5 = sec("🖼️", t("sm.canvasBg"));
        R(s5, t("sm.canvasBg"), "canvasBg", "color");
        const s6 = sec("🔧", t("sm.showToolbar"));
        const tbRow = s6.createEl("div");
        tbRow.style.cssText =
            "display:flex;align-items:center;justify-content:space-between;margin-bottom:7px;";
        tbRow.createEl("label", { text: t("sm.showToolbar") }).style.cssText =
            "font-size:12px;flex:1;";
        const tbCb = tbRow.createEl("input") as HTMLInputElement;
        tbCb.type = "checkbox";
        tbCb.checked = this.plugin.settings.showToolbar;
        tbCb.style.cssText = "width:18px;height:18px;cursor:pointer;";
        tbCb.addEventListener("change", () => {
            this.plugin.settings.showToolbar = tbCb.checked;
            this.plugin.saveSettings();
            this.updateToolbarVisibility();
        });
        R(s6, t("sm.tbPos"), "toolbarPosition", "select", {
            options: ["top", "bottom"],
        });
        R(s6, t("sm.tbPadT"), "toolbarPadTop", "number", { min: 0, max: 40 });
        R(s6, t("sm.tbPadR"), "toolbarPadRight", "number", { min: 0, max: 40 });
        R(s6, t("sm.tbPadB"), "toolbarPadBottom", "number", {
            min: 0,
            max: 40,
        });
        R(s6, t("sm.tbPadL"), "toolbarPadLeft", "number", { min: 0, max: 40 });
        R(s6, t("sm.tbBg"), "toolbarBgColor", "color");
        R(s6, t("sm.tbBtnBg"), "toolbarBtnBgColor", "color");
        R(s6, t("sm.tbBtnBorder"), "toolbarBtnBorderStyle", "select", {
            options: ["solid", "dashed", "dotted", "none"],
        });
        R(s6, t("sm.tbBtnBorderColor"), "toolbarBtnBorderColor", "color");
        R(s6, t("sm.tbBtnText"), "toolbarBtnTextColor", "color");
        // Reset toolbar button
        const tbResetBtn = s6.createEl("button", {
            text: "↺ " + t("sm.tbResetDefault"),
        });
        tbResetBtn.style.cssText =
            "margin-top:6px;width:100%;padding:5px;border:1px solid var(--background-modifier-border);background:var(--background-secondary);border-radius:6px;cursor:pointer;font-size:11px;";
        tbResetBtn.addEventListener("click", () => {
            this.applyStyle({
                toolbarBgColor: "#f5f5f5",
                toolbarBtnBgColor: "#ffffff",
                toolbarBtnBorderStyle: "solid",
                toolbarBtnBorderColor: "#d1d5db",
                toolbarBtnTextColor: "#333333",
                toolbarPadTop: 0,
                toolbarPadRight: 12,
                toolbarPadBottom: 0,
                toolbarPadLeft: 12,
                toolbarPosition: "top",
            });
            close();
            this.showStyleModal();
        });
        const br = m.createEl("div");
        br.style.cssText =
            "display:flex;gap:8px;justify-content:flex-end;margin-top:16px;";
        br.createEl("button", { text: t("sm.reset") }).addEventListener(
            "click",
            () => {
                this.applyStyle({ ...DEFAULT_STYLE });
                close();
                this.showStyleModal();
            },
        );
        const cb = br.createEl("button", { text: t("sm.close") });
        cb.style.cssText =
            "padding:6px 16px;border:none;background:var(--interactive-accent);color:var(--text-on-accent);border-radius:8px;cursor:pointer;";
        cb.addEventListener("click", close);
        document.body.appendChild(ov);
        document.body.appendChild(m);
    }

    private showNodeStyleEditor(e: MouseEvent) {
        this.closePop();
        const ids = this.allSel();
        const first = this.fAll([...ids][0]);
        const so = first?.styleOverride ?? {};
        const isR = !!first?.isRoot;
        const ov = document.createElement("div");
        ov.style.cssText =
            "position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9999;";
        const m = document.createElement("div");
        m.style.cssText =
            "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:var(--background-primary);border:1px solid var(--background-modifier-border);border-radius:14px;padding:20px;z-index:10000;min-width:360px;max-height:75vh;overflow-y:auto;box-shadow:0 12px 40px rgba(0,0,0,.25);";
        m.createEl("h4", {
            text: t("ns.title") + " (" + ids.size + ")",
        }).style.cssText = "margin:0 0 12px;";
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
            true,
        );
        const apply = (fn: (n: MindNodeData) => void) => {
            this.saveS();
            for (const id of ids) {
                const n = this.fAll(id);
                if (n) fn(n);
            }
            this.render();
            this.doSave();
        };
        const mkC = (l: string, cur: string, fn: (v: string) => void) => {
            const r = m.createEl("div");
            r.style.cssText =
                "display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;gap:10px;";
            r.createEl("span", { text: l }).style.cssText =
                "font-size:12px;flex:1;";
            const i = r.createEl("input") as HTMLInputElement;
            i.type = "color";
            i.value = cur;
            i.style.cssText =
                "width:40px;height:24px;border:none;cursor:pointer;border-radius:4px;";
            i.addEventListener("change", () => fn(i.value));
        };
        const mkN = (
            l: string,
            cur: number,
            min: number,
            max: number,
            fn: (v: number) => void,
        ) => {
            const r = m.createEl("div");
            r.style.cssText =
                "display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;gap:10px;";
            r.createEl("span", { text: l }).style.cssText =
                "font-size:12px;flex:1;";
            const i = r.createEl("input") as HTMLInputElement;
            i.type = "number";
            i.min = String(min);
            i.max = String(max);
            i.value = String(cur);
            i.style.cssText =
                "width:60px;padding:3px;border:1px solid var(--background-modifier-border);border-radius:6px;font-size:12px;";
            i.addEventListener("change", () => fn(Number(i.value)));
        };
        const mkS = (
            l: string,
            cur: string,
            opts: string[],
            fn: (v: string) => void,
        ) => {
            const r = m.createEl("div");
            r.style.cssText =
                "display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;gap:10px;";
            r.createEl("span", { text: l }).style.cssText =
                "font-size:12px;flex:1;";
            const s = r.createEl("select") as HTMLSelectElement;
            s.style.cssText =
                "padding:3px;border:1px solid var(--background-modifier-border);border-radius:6px;font-size:12px;";
            for (const o of opts) {
                const op = document.createElement("option");
                op.value = o;
                op.text = o;
                if (o === cur) op.selected = true;
                s.appendChild(op);
            }
            s.addEventListener("change", () => fn(s.value));
        };
        mkC(
            t("sm.bg"),
            so.bgColor ??
                (isR ? this.style.rootBgColor : this.style.nodeBgColor),
            (v) =>
                apply((n) => {
                    n.styleOverride = n.styleOverride ?? {};
                    n.styleOverride.bgColor = v;
                }),
        );
        mkC(
            t("sm.text"),
            so.textColor ??
                (isR ? this.style.rootTextColor : this.style.nodeTextColor),
            (v) =>
                apply((n) => {
                    n.styleOverride = n.styleOverride ?? {};
                    n.styleOverride.textColor = v;
                }),
        );
        mkN(
            t("sm.fontSize"),
            so.fontSize ??
                (isR ? this.style.rootFontSize : this.style.nodeFontSize),
            10,
            32,
            (v) =>
                apply((n) => {
                    n.styleOverride = n.styleOverride ?? {};
                    n.styleOverride.fontSize = v;
                    n.width = this.calcW(n.text, !!n.isRoot);
                    n.height = this.calcH(n.text, !!n.isRoot);
                }),
        );
        mkS(
            t("sm.font"),
            so.fontFamily ??
                (isR ? this.style.rootFontFamily : this.style.nodeFontFamily),
            FONT_LIST,
            (v) =>
                apply((n) => {
                    n.styleOverride = n.styleOverride ?? {};
                    n.styleOverride.fontFamily =
                        v === "inherit" ? undefined : v;
                }),
        );
        mkS(
            t("sm.borderStyle"),
            so.borderStyle ??
                (isR ? this.style.rootBorderStyle : this.style.nodeBorderStyle),
            ["solid", "dashed", "dotted", "double", "none"],
            (v) =>
                apply((n) => {
                    n.styleOverride = n.styleOverride ?? {};
                    n.styleOverride.borderStyle = v as any;
                }),
        );
        mkC(
            t("sm.borderColor"),
            so.borderColor ??
                (isR ? this.style.rootBorderColor : this.style.nodeBorderColor),
            (v) =>
                apply((n) => {
                    n.styleOverride = n.styleOverride ?? {};
                    n.styleOverride.borderColor = v;
                }),
        );
        mkN(
            t("sm.borderWidth"),
            so.borderWidth ??
                (isR ? this.style.rootBorderWidth : this.style.nodeBorderWidth),
            0,
            8,
            (v) =>
                apply((n) => {
                    n.styleOverride = n.styleOverride ?? {};
                    n.styleOverride.borderWidth = v;
                }),
        );
        mkN(
            t("ns.borderRadius"),
            so.borderRadius ??
                (isR
                    ? this.style.rootBorderRadius
                    : this.style.nodeBorderRadius),
            0,
            32,
            (v) =>
                apply((n) => {
                    n.styleOverride = n.styleOverride ?? {};
                    n.styleOverride.borderRadius = v;
                }),
        );
        mkC(
            t("ns.connColor"),
            first?.connectionColor ?? this.style.connectionColor,
            (v) =>
                apply((n) => {
                    n.connectionColor = v;
                }),
        );
        mkN(
            t("ns.connWidth"),
            first?.connectionWidth ?? this.style.connectionWidth,
            1,
            8,
            (v) =>
                apply((n) => {
                    n.connectionWidth = v;
                }),
        );
        // Connection type with color swatches for root nodes
        if (isR) {
            const ctDiv = m.createEl("div");
            ctDiv.style.cssText = "margin-bottom:10px;";
            ctDiv.createEl("span", {
                text: "🌈 " + t("sm.rainbow"),
            }).style.cssText =
                "font-size:12px;display:block;margin-bottom:6px;";
            const nPals: { [k: string]: string[] } = {
                ...RAINBOW_PALETTES,
                ...(this.style.customRainbows || {}),
            };
            // Detect current palette by matching first child's color
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
            nList.style.cssText =
                "max-height:160px;overflow-y:auto;border:1px solid var(--background-modifier-border);border-radius:6px;";
            const rebuildNL = () => {
                nList.innerHTML = "";
                const mkNI = (
                    key: string,
                    label: string,
                    colors: string[] | null,
                ) => {
                    const it = nList.createEl("div");
                    it.style.cssText = `padding:5px 8px;cursor:pointer;display:flex;align-items:center;gap:5px;font-size:11px;background:${key === activePal ? "var(--background-modifier-hover)" : "transparent"};`;
                    it.addEventListener("mouseenter", () => {
                        if (key !== activePal)
                            it.style.background = "var(--background-secondary)";
                    });
                    it.addEventListener("mouseleave", () => {
                        it.style.background =
                            key === activePal
                                ? "var(--background-modifier-hover)"
                                : "transparent";
                    });
                    it.createEl("span", { text: label }).style.cssText =
                        "min-width:60px;font-weight:" +
                        (key === activePal ? "700" : "400") +
                        ";flex-shrink:0;";
                    if (colors) {
                        const dots = it.createEl("span");
                        dots.style.cssText = "display:flex;gap:1px;flex:1;";
                        for (const c of colors.slice(0, 8)) {
                            const d = dots.createEl("span");
                            d.style.cssText = `display:inline-block;width:10px;height:10px;border-radius:50%;background:${c};`;
                        }
                    }
                    it.addEventListener("click", () => {
                        if (!colors) return;
                        apply((n) => {
                            if (!n.isRoot) return;
                            for (let i = 0; i < n.children.length; i++) {
                                n.children[i].connectionColor =
                                    colors[i % colors.length];
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
        clr.style.cssText =
            "margin-top:10px;width:100%;padding:6px;border:1px solid var(--background-modifier-border);background:var(--background-secondary);border-radius:8px;cursor:pointer;font-size:12px;";
        clr.addEventListener("click", () =>
            apply((n) => {
                n.styleOverride = undefined;
                n.connectionColor = undefined;
                n.connectionWidth = undefined;
            }),
        );
        const cbtn = m.createEl("button", { text: t("sm.close") });
        cbtn.style.cssText =
            "margin-top:8px;width:100%;padding:6px;border:none;background:var(--interactive-accent);color:var(--text-on-accent);border-radius:8px;cursor:pointer;";
        cbtn.addEventListener("click", close);
        document.body.appendChild(ov);
        document.body.appendChild(m);
    }

    private toggleSearch() {
        if (this.searchBar) {
            this.searchBar.remove();
            this.searchBar = null;
            this.cc?.focus({ preventScroll: true });
            this.ensureProxy();
            return;
        }
        this.searchBar = document.createElement("div");
        this.searchBar.style.cssText =
            "position:absolute;top:10px;right:10px;z-index:100;display:flex;gap:4px;align-items:center;background:var(--background-primary);border:1px solid var(--background-modifier-border);border-radius:10px;padding:6px 12px;box-shadow:0 4px 16px rgba(0,0,0,.15);";
        const inp = document.createElement("input");
        inp.type = "text";
        inp.placeholder = t("search.placeholder");
        inp.style.cssText =
            "width:180px;padding:5px 10px;border:1px solid var(--background-modifier-border);border-radius:6px;font-size:13px;background:var(--background-secondary);color:var(--text-normal);outline:none;";
        const info = document.createElement("span");
        info.style.cssText =
            "font-size:11px;color:var(--text-muted);min-width:40px;text-align:center;";
        const closeBtn = document.createElement("button");
        closeBtn.innerText = "✕";
        closeBtn.style.cssText =
            "border:none;background:none;cursor:pointer;font-size:14px;color:var(--text-muted);padding:2px 4px;";
        closeBtn.addEventListener("click", () => {
            this.searchBar?.remove();
            this.searchBar = null;
            this.cc?.focus({ preventScroll: true });
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
            const vis = (n: MindNodeData) => {
                if (n.text.toLowerCase().includes(q))
                    this.searchResults.push(n);
                for (const c of n.children) vis(c);
            };
            for (const r of this.roots) vis(r);
            if (this.searchResults.length) {
                info.textContent = "1/" + this.searchResults.length;
                this.sel1(this.searchResults[0].id);
                this.focusNode(this.searchResults[0]);
                this.render();
            } else info.textContent = "0";
        };
        inp.addEventListener("input", doSearch);
        inp.addEventListener(
            "keydown",
            (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                if (e.key === "Enter") {
                    e.preventDefault();
                    if (!this.searchResults.length) return;
                    if (e.shiftKey)
                        this.searchIdx =
                            (this.searchIdx - 1 + this.searchResults.length) %
                            this.searchResults.length;
                    else
                        this.searchIdx =
                            (this.searchIdx + 1) % this.searchResults.length;
                    info.textContent =
                        this.searchIdx + 1 + "/" + this.searchResults.length;
                    const nd = this.searchResults[this.searchIdx];
                    this.sel1(nd.id);
                    this.focusNode(nd);
                    this.render();
                    requestAnimationFrame(() => inp.focus());
                    return;
                }
                if (e.key === "Escape") {
                    this.searchBar?.remove();
                    this.searchBar = null;
                    this.cc?.focus({ preventScroll: true });
                    this.ensureProxy();
                }
            },
            true,
        );
        setTimeout(() => inp.focus(), 0);
    }
    private getCC(
        ch: MindNodeData,
        pR: boolean,
        idx: number,
        inh?: string,
    ): string {
        if (ch.connectionColor) return ch.connectionColor;
        if (inh) return inh;
        const rb = this.getRainbow();
        if (this.style.connectionRainbow && pR) return rb[idx % rb.length];
        return this.style.connectionColor;
    }

    private isAct() {
        return (
            (this.app.workspace as any).getActiveViewOfType(MindMapView) ===
            this
        );
    }
    private isExtInput(e: KeyboardEvent): boolean {
        const t = e.target as HTMLElement;
        if (!t) return false;
        const tag = t.tagName.toLowerCase();
        if (tag === "input" || tag === "textarea" || tag === "select") {
            return !this.svgCt?.contains(t);
        }
        return false;
    }
    private _kd = (e: KeyboardEvent) => {
        if (!this.isAct() || this.mdMode || this.isExtInput(e)) return;
        if (this.searchBar && this.searchBar.contains(document.activeElement))
            return;
        // FIX #7: when modal is open, Esc closes it; block all other keys
        if (this.popClose) {
            if (e.key === "Escape") {
                e.preventDefault();
                e.stopPropagation();
                this.popClose();
                this.popClose = null;
            }
            return;
        }
        // FIX #6: disable all keys during drag
        if (this.ds?.isDragging) {
            e.preventDefault();
            e.stopPropagation();
            if (e.key === "Escape") this.cancelDrag();
            return;
        }
        // Edit mode
        if (this.editId) {
            if (
                (e.ctrlKey || e.metaKey) &&
                e.key.toLowerCase() === "a" &&
                this.liveTA
            ) {
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
        if (
            (e.ctrlKey || e.metaKey) &&
            e.key.toLowerCase() === "c" &&
            !e.shiftKey &&
            this.selId
        ) {
            e.preventDefault();
            e.stopPropagation();
            this.copyNode(false);
            return;
        }
        if (
            (e.ctrlKey || e.metaKey) &&
            e.key.toLowerCase() === "x" &&
            this.selId
        ) {
            e.preventDefault();
            e.stopPropagation();
            this.copyNode(true);
            return;
        }
        if (
            (e.ctrlKey || e.metaKey) &&
            e.key.toLowerCase() === "v" &&
            this.clipboard
        ) {
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
        // Zoom keybindings
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
            // shift+tab = left child (on root or any node)
            if (e.shiftKey && this.selId) {
                this.addLeftChild();
                return;
            }
            if (this.selId) this.addChildNode();
            return;
        }
        if (this.matchKey(e, this.kb.addSibling) && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            e.stopPropagation();
            // shift+enter = left child on root
            if (e.shiftKey && this.selId) {
                const sel = this.fAll(this.selId);
                if (sel?.isRoot) {
                    this.addLeftChild();
                    return;
                }
            }
            if (!e.shiftKey && this.selId) this.addSibling();
            return;
        }
        // Space: single node selected = edit, no/multi = pan
        // editNode: single node = edit
        if (
            this.matchKey(e, this.kb.editNode) &&
            !e.repeat &&
            this.selId &&
            !this.isMulti()
        ) {
            e.preventDefault();
            e.stopPropagation();
            this.editId = this.selId;
            this.render();
            return;
        }
        // dragCanvas: pan mode
        if (this.matchKey(e, this.kb.dragCanvas) && !e.repeat) {
            e.preventDefault();
            e.stopPropagation();
            this.spaceDown = true;
            if (this.cc) this.cc.style.cursor = "grab";
            return;
        }
        // Ctrl+Enter enters edit mode
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
            if (this.isMulti()) this.batchDel();
            else if (this.selId) this.delNode();
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
    private _ku = (e: KeyboardEvent) => {
        if (
            e.code === "Space" ||
            this.matchKey(e, this.kb.editNode) ||
            this.matchKey(e, this.kb.dragCanvas)
        ) {
            this.spaceDown = false;
            this.dragCv = false;
            if (this.cc) this.cc.style.cursor = "default";
        }
    };
    // IME-compatible typeToEdit via proxy textarea positioned below selected node
    private ensureProxy() {
        this.clearProxy();
        if (
            !this.plugin.settings.typeToEdit ||
            !this.selId ||
            this.isMulti() ||
            this.editId ||
            !this.svgCt ||
            this.searchBar
        )
            return;
        if (this.searchBar && this.searchBar.contains(document.activeElement))
            return;
        const nd = this.fAll(this.selId);
        if (!nd) return;
        const p = document.createElement("textarea");
        // Position below the selected node in screen coordinates
        const screenX = nd.x * this.zoom + this.panX;
        const screenY = (nd.y + nd.height / 2) * this.zoom + this.panY + 4;
        p.style.cssText = `position:absolute;left:${screenX}px;top:${screenY}px;width:1px;height:1px;opacity:0;pointer-events:none;z-index:999;font-size:14px;`;
        this.svgCt.appendChild(p);
        this.proxyTA = p;
        let composing = false;
        p.addEventListener("compositionstart", () => {
            composing = true;
            p.style.opacity = "1";
            p.style.width = "120px";
            p.style.height = "24px";
            p.style.background = "var(--background-primary)";
            p.style.border = "1px solid var(--background-modifier-border)";
            p.style.borderRadius = "4px";
            p.style.padding = "2px 4px";
            p.style.pointerEvents = "auto";
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
                        document.execCommand("insertText", false, val);
                    }
                }, 0);
            }
        });
        p.addEventListener("input", () => {
            if (composing) return;
            const val = p.value;
            if (val && this.selId && !this.editId) {
                this.editId = this.selId;
                this.render();
                setTimeout(() => {
                    if (this.liveTA) {
                        this.liveTA.focus({ preventScroll: true });
                        this.liveTA.select();
                        document.execCommand("insertText", false, val);
                    }
                }, 0);
            }
        });
        setTimeout(() => p.focus({ preventScroll: true }), 0);
    }
    private clearProxy() {
        if (this.proxyTA) {
            this.proxyTA.remove();
            this.proxyTA = null;
        }
    }
    private copyNode(cut: boolean) {
        if (!this.selId) return;
        const nd = this.fAll(this.selId);
        if (!nd) return;
        this.clipboard = { data: JSON.stringify(nd), isRoot: !!nd.isRoot, cut };
        if (cut) {
            this.saveS();
            if (nd.isRoot)
                this.roots = this.roots.filter((r) => r.id !== nd.id);
            else this.remAll(nd.id);
            this.clrSel();
            this.render();
            this.doSave();
        }
    }
    private pasteNode(strip: boolean) {
        if (!this.clipboard) return;
        const clone: MindNodeData = JSON.parse(this.clipboard.data);
        if (!this.clipboard.cut) {
            const reId = (n: MindNodeData) => {
                n.id = crypto.randomUUID();
                for (const c of n.children) reId(c);
            };
            reId(clone);
        } else this.clipboard = null;
        if (strip) {
            const s = (n: MindNodeData) => {
                n.styleOverride = undefined;
                n.connectionColor = undefined;
                n.connectionWidth = undefined;
                for (const c of n.children) s(c);
            };
            s(clone);
        }
        this.saveS();
        if (clone.isRoot) {
            const last = this.roots[this.roots.length - 1];
            clone.x = last?.x ?? 0;
            clone.y = (last?.y ?? 0) + 200;
            this.roots.push(clone);
        } else {
            clone.isRoot = false;
            if (this.selId) {
                const p = this.fAll(this.selId);
                if (p) p.children.push(clone);
            } else this.roots.push({ ...clone, isRoot: true });
        }
        this.sel1(clone.id);
        this.render();
        this.doSave();
    }
    private cancelDrag() {
        if (!this.ds) return;
        if (!this.ds.isRootDrag) {
            const d = this.ds as ChildDrag;
            if (d.snap) this.roots = JSON.parse(d.snap);
            d.ghostEl?.remove();
            d.indicatorEl?.remove();
        }
        this.ds = null;
        if (this.cc) this.cc.style.cursor = "default";
        this.render();
    }
    private _mu = (e: MouseEvent) => {
        if (this.boxSel) {
            this.endBox(e);
            return;
        }
        if (this.dragCv) {
            this.dragCv = false;
            if (this.cc)
                this.cc.style.cursor = this.spaceDown ? "grab" : "default";
        }
        if (!this.ds) return;
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
        const d = this.ds as ChildDrag;
        const rc = this.cc.getBoundingClientRect();
        const mx = (e.clientX - rc.left - this.panX) / this.zoom,
            my = (e.clientY - rc.top - this.panY) / this.zoom;
        const dx = mx - d.startX,
            dy = my - d.startY;
        const dn = this.fAll(d.nodeId);
        const gx = dn ? dn.x + dx : mx,
            gy = dn ? dn.y + dy : my;
        const tgt = this.detTgt(gx, gy, d.nodeId);
        if (tgt) {
            this.recPos();
            this.saveS();
            const selIds = this.allSel();
            // FIX #6: collect nodes in original tree order, preserve their sequence
            const toMove: MindNodeData[] = [];
            const collectOrdered = (parent: MindNodeData) => {
                for (let i = parent.children.length - 1; i >= 0; i--) {
                    const c = parent.children[i];
                    if (selIds.has(c.id) && !c.isRoot) {
                        toMove.unshift(parent.children.splice(i, 1)[0]);
                    } else {
                        collectOrdered(c);
                    }
                }
            };
            for (const r of this.roots) collectOrdered(r);
            if (!toMove.length) {
                const det = this.remAll(d.nodeId);
                if (det) toMove.push(det);
            }
            // Update side of moved nodes to match target's side
            const tgtNode = this.fAll(tgt.id);
            const tgtSide =
                tgtNode?.side || (tgtNode?.isRoot ? undefined : "right");
            if (tgtSide) {
                const setSide = (n: MindNodeData, s: "left" | "right") => {
                    n.side = s;
                    for (const c of n.children) setSide(c, s);
                };
                for (const m of toMove) setSide(m, tgtSide);
            }
            // Insert preserving order
            for (let i = 0; i < toMove.length; i++) {
                if (i === 0) this.insTree(toMove[i], tgt.id, tgt.zone);
                else this.insTree(toMove[i], toMove[i - 1].id, "after");
            }
            // Keep all moved nodes selected
            this.multiSel.clear();
            for (const m of toMove) this.multiSel.add(m.id);
            this.selId = toMove.length ? toMove[0].id : null;
        }
        d.ghostEl?.remove();
        d.indicatorEl?.remove();
        this.ds = null;
        if (tgt) this.animRender();
        else this.render();
        this.doSave();
    };

    private updTx() {
        this.gEl.style.transform =
            "translate(" +
            this.panX +
            "px," +
            this.panY +
            "px) scale(" +
            this.zoom +
            ")";
        if (this.zoomLabel)
            this.zoomLabel.innerText = Math.round(this.zoom * 100) + "%";
    }
    private zoomBy(factor: number) {
        const rc = this.cc.getBoundingClientRect();
        if (rc.width < 1 || rc.height < 1) return;
        const cx = rc.width / 2,
            cy = rc.height / 2;
        const nz = Math.max(0.1, Math.min(this.zoom * factor, 3));
        this.panX = cx - (cx - this.panX) * (nz / this.zoom);
        this.panY = cy - (cy - this.panY) * (nz / this.zoom);
        this.zoom = nz;
        this.updTx();
    }
    private zoomTo(level: number) {
        const rc = this.cc.getBoundingClientRect();
        if (rc.width < 1 || rc.height < 1) return;
        const cx = rc.width / 2,
            cy = rc.height / 2;
        this.panX = cx - (cx - this.panX) * (level / this.zoom);
        this.panY = cy - (cy - this.panY) * (level / this.zoom);
        this.zoom = level;
        this.updTx();
    }
    private doLayout(n: MindNodeData) {
        this.cSH(n);
        this.cXY(n);
    }
    private cSH(n: MindNodeData): number {
        const vm = 24;
        if (!n.children?.length) {
            (n as any)._sh = n.height + vm;
            return (n as any)._sh;
        }
        let total = 0;
        for (const c of n.children) total += this.cSH(c);
        (n as any)._sh = Math.max(n.height + vm, total);
        return (n as any)._sh;
    }
    private cXY(n: MindNodeData) {
        if (!n.children?.length) return;
        const hm = this.style.connectionLength || 80;
        // Split children by side for root nodes
        const rightCh = n.children.filter((c) => c.side !== "left");
        const leftCh = n.children.filter((c) => c.side === "left");
        // Layout right children
        if (rightCh.length) {
            let tot = 0;
            for (const c of rightCh) tot += (c as any)._sh;
            let cy = n.y - tot / 2;
            for (const c of rightCh) {
                c.x = n.x + n.width / 2 + hm + c.width / 2;
                c.y = cy + (c as any)._sh / 2;
                this.cXY(c);
                cy += (c as any)._sh;
            }
        }
        // Layout left children (mirror)
        if (leftCh.length) {
            let tot = 0;
            for (const c of leftCh) tot += (c as any)._sh;
            let cy = n.y - tot / 2;
            for (const c of leftCh) {
                c.x = n.x - n.width / 2 - hm - c.width / 2;
                c.y = cy + (c as any)._sh / 2;
                this.cXY(c);
                cy += (c as any)._sh;
            }
        }
    }
    private calcW(txt: string, isR: boolean): number {
        const fs = isR ? this.style.rootFontSize : this.style.nodeFontSize;
        const ff = isR ? this.style.rootFontFamily : this.style.nodeFontFamily;
        let mw = 0;
        for (const l of txt.split("\n")) {
            const d = document.createElement("span");
            d.style.cssText =
                "font-family:" +
                ff +
                ";font-size:" +
                fs +
                "px;font-weight:bold;visibility:hidden;position:absolute;white-space:pre;";
            d.innerText = l || " ";
            document.body.appendChild(d);
            if (d.offsetWidth > mw) mw = d.offsetWidth;
            document.body.removeChild(d);
        }
        return Math.max(
            isR ? this.style.rootMinWidth : this.style.nodeMinWidth,
            mw + this.style.nodePadX * 2 + 4,
        );
    }
    private calcH(txt: string, isR: boolean): number {
        const fs = isR ? this.style.rootFontSize : this.style.nodeFontSize;
        const lh = this.style.nodeLineHeight || 1.5;
        return Math.max(
            isR ? this.style.rootMinHeight : this.style.nodeMinHeight,
            txt.split("\n").length * fs * lh + 14,
        );
    }
    private recPos() {
        this.oldPos.clear();
        const v = (n: MindNodeData) => {
            this.oldPos.set(n.id, { x: n.x, y: n.y });
            for (const c of n.children) v(c);
        };
        for (const r of this.roots) v(r);
    }
    private animRender() {
        if (!this.nodesG || !this.edgesG || !this.oldPos.size) {
            this.render();
            return;
        }
        const np = new Map<string, { x: number; y: number }>();
        for (const r of this.roots) {
            this.doLayout(r);
            const v = (n: MindNodeData) => {
                np.set(n.id, { x: n.x, y: n.y });
                for (const c of n.children) v(c);
            };
            v(r);
        }
        const sp = new Map<string, { x: number; y: number }>();
        for (const [id, p] of np) sp.set(id, this.oldPos.get(id) ?? p);
        const dur = 200,
            t0 = performance.now();
        if (this.animId) cancelAnimationFrame(this.animId);
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
        for (const r of this.roots) this.drawEdges(r);
        const step = (now: number) => {
            const tt = Math.min((now - t0) / dur, 1),
                ease = 1 - Math.pow(1 - tt, 3);
            for (const [id, fp] of np) {
                const s = sp.get(id)!;
                const n = this.fAll(id);
                if (n) {
                    n.x = s.x + (fp.x - s.x) * ease;
                    n.y = s.y + (fp.y - s.y) * ease;
                }
            }
            this.edgesG!.innerHTML = "";
            for (const r of this.roots) this.drawEdges(r);
            this.updateFO();
            if (tt < 1) this.animId = requestAnimationFrame(step);
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
    private softRender() {
        if (!this.edgesG || !this.nodesG) return;
        for (const r of this.roots) this.doLayout(r);
        this.updateFO();
        this.edgesG.innerHTML = "";
        for (const r of this.roots) this.drawEdges(r);
        this.updateDevPanel();
    }
    private render() {
        if (!this.edgesG || !this.nodesG || !this.overlayG) return;
        this.edgesG.innerHTML = "";
        this.nodesG.innerHTML = "";
        this.overlayG.innerHTML = "";
        this.liveTA = null;
        for (const r of this.roots) {
            this.doLayout(r);
            this.drawEdges(r);
        }
        for (const r of this.roots) this.drawNodes(r);
        if (this.boxSel && this.boxEl) this.overlayG.appendChild(this.boxEl);
        this.updateDevPanel();
        if (this.editId) this.clearProxy();
        else this.ensureProxy();
    }
    private bPath(sx: number, sy: number, ex: number, ey: number) {
        const dx = ex - sx;
        switch (this.style.connectionStyle) {
            case "straight":
                return "M" + sx + " " + sy + "L" + ex + " " + ey;
            case "curved":
                return (
                    "M" +
                    sx +
                    " " +
                    sy +
                    "Q" +
                    (sx + dx * 0.7) +
                    " " +
                    sy +
                    "," +
                    ex +
                    " " +
                    ey
                );
            case "step": {
                const mx = (sx + ex) / 2;
                return "M" + sx + " " + sy + "H" + mx + "V" + ey + "H" + ex;
            }
            case "bracket": {
                const mx = sx + dx * 0.5;
                return (
                    "M" +
                    sx +
                    " " +
                    sy +
                    "C" +
                    mx +
                    " " +
                    sy +
                    " " +
                    mx +
                    " " +
                    ey +
                    " " +
                    ex +
                    " " +
                    ey
                );
            }
            case "loose":
                return (
                    "M" +
                    sx +
                    " " +
                    sy +
                    "C" +
                    (sx + dx * 0.6) +
                    " " +
                    (sy + (ey - sy) * 0.1) +
                    "," +
                    (ex - dx * 0.3) +
                    " " +
                    (ey - (ey - sy) * 0.1) +
                    "," +
                    ex +
                    " " +
                    ey
                );
            default:
                return (
                    "M" +
                    sx +
                    " " +
                    sy +
                    "C" +
                    (sx + dx * 0.4) +
                    " " +
                    sy +
                    "," +
                    (ex - dx * 0.4) +
                    " " +
                    ey +
                    "," +
                    ex +
                    " " +
                    ey
                );
        }
    }
    private drawEdges(nd: MindNodeData, inh?: string) {
        const pR = !!nd.isRoot;
        // For step/bracket styles, z-order matters. Draw children furthest from center first,
        // closest to center last (on top), so each child's color is visible at the junction.
        const above: number[] = [];
        const below: number[] = [];
        for (let i = 0; i < nd.children.length; i++) {
            if (nd.children[i].y < nd.y) above.push(i);
            else below.push(i);
        }
        // Above: top-to-bottom (furthest first, closest to center last = on top)
        // Below: bottom-to-top (furthest first, closest to center last = on top)
        const order = [...above, ...below.reverse()];
        for (const i of order) {
            const ch = nd.children[i];
            const col = this.getCC(ch, pR, i, inh);
            const isLeft = ch.side === "left";
            const sx = isLeft ? nd.x - nd.width / 2 : nd.x + nd.width / 2;
            const ex = isLeft ? ch.x + ch.width / 2 : ch.x - ch.width / 2;
            const p = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path",
            );
            p.setAttribute("d", this.bPath(sx, nd.y, ex, ch.y));
            p.setAttribute("stroke", col);
            p.setAttribute(
                "stroke-width",
                String(ch.connectionWidth ?? this.style.connectionWidth),
            );
            p.setAttribute("fill", "none");
            p.setAttribute("stroke-linecap", "round");
            if (
                this.ds?.isDragging &&
                !this.ds.isRootDrag &&
                (this.ds as ChildDrag).nodeId === ch.id
            )
                p.style.opacity = "0.15";
            this.edgesG.appendChild(p);
            this.drawEdges(
                ch,
                ch.connectionColor ??
                    (this.style.connectionRainbow && pR ? col : inh),
            );
        }
    }
    private drawNodes(n: MindNodeData) {
        this.drawOne(n);
        for (const c of n.children) this.drawNodes(c);
    }
    private drawOne(nd: MindNodeData) {
        const fo = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "foreignObject",
        );
        fo.id = "mn-" + nd.id;
        const selEx = this.isSel(nd.id) ? this.style.selectionWidth + 4 : 0;
        fo.setAttribute("x", String(nd.x - nd.width / 2 - selEx));
        fo.setAttribute("y", String(nd.y - nd.height / 2 - selEx));
        fo.setAttribute("width", String(nd.width + selEx * 2));
        fo.setAttribute("height", String(nd.height + selEx * 2));
        fo.setAttribute("overflow", "visible");
        fo.style.overflow = "visible";
        if (
            this.ds?.isDragging &&
            !this.ds.isRootDrag &&
            (this.ds as ChildDrag).nodeId === nd.id
        )
            fo.style.opacity = "0.15";
        const wrap = document.createElement("div");
        wrap.style.cssText =
            "width:100%;height:100%;display:flex;align-items:center;justify-content:center;";
        if (this.editId === nd.id) wrap.appendChild(this.mkTA(nd));
        else wrap.appendChild(this.mkDiv(nd));
        fo.appendChild(wrap);
        this.nodesG.appendChild(fo);
    }

    private nodeVis(nd: MindNodeData) {
        const isR = !!nd.isRoot;
        const so = nd.styleOverride ?? {};
        const bg =
            so.bgColor ??
            (isR ? this.style.rootBgColor : this.style.nodeBgColor);
        const tc =
            so.textColor ??
            (isR ? this.style.rootTextColor : this.style.nodeTextColor);
        const fs =
            so.fontSize ??
            (isR ? this.style.rootFontSize : this.style.nodeFontSize);
        const ff =
            so.fontFamily ??
            (isR ? this.style.rootFontFamily : this.style.nodeFontFamily);
        const bS =
            so.borderStyle ??
            (isR ? this.style.rootBorderStyle : this.style.nodeBorderStyle);
        const bW =
            so.borderWidth ??
            (isR ? this.style.rootBorderWidth : this.style.nodeBorderWidth);
        let bC =
            so.borderColor ??
            (isR ? this.style.rootBorderColor : this.style.nodeBorderColor);
        if (
            this.style.connectionRainbow &&
            !so.borderColor &&
            !isR &&
            nd.connectionColor
        )
            bC = nd.connectionColor;
        const rad =
            so.borderRadius ??
            (isR ? this.style.rootBorderRadius : this.style.nodeBorderRadius);
        return { isR, bg, tc, fs, ff, bS, bW, bC, rad };
    }
    private mkDiv(nd: MindNodeData): HTMLDivElement {
        const div = document.createElement("div");
        const v = this.nodeVis(nd);
        const sel = this.isSel(nd.id);
        const ta = this.style.textAlign;
        const padX = this.style.nodePadX;
        const lh = this.style.nodeLineHeight;
        const off = this.style.selectionOutlineOffset;
        const borderCSS =
            v.bS !== "none"
                ? `border:${v.bW}px ${v.bS} ${v.bC};`
                : "border:none;";
        const selCSS = sel
            ? `outline:${this.style.selectionWidth}px solid ${this.style.selectionColor};outline-offset:${off}px;`
            : "";
        div.style.cssText = `width:${nd.width}px;height:${nd.height}px;display:flex;align-items:center;justify-content:${ta === "left" ? "flex-start" : ta === "right" ? "flex-end" : "center"};border-radius:${v.rad}px;font-weight:${v.isR ? 700 : 500};user-select:none;box-sizing:border-box;font-size:${v.fs}px;font-family:${v.ff};overflow:visible;white-space:pre-wrap;word-break:break-word;text-align:${ta};line-height:${lh};background:${v.bg};color:${v.tc};padding:6px ${padX}px;cursor:${v.isR ? "move" : "grab"};${borderCSS}${selCSS}`;
        div.innerText = nd.text;
        div.addEventListener("mousedown", (e) => {
            if (this.spaceDown) return;
            e.stopPropagation();
            this.cc?.focus({ preventScroll: true });
            this.closeMenu();
            const now = Date.now();
            const isDbl = this.lcnid === nd.id && now - this.lct < 300;
            this.lct = now;
            this.lcnid = nd.id;
            if (this.commitEdit && this.editId !== nd.id) this.commitEdit();
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
            if (!this.multiSel.has(nd.id)) this.sel1(nd.id);
            this.render();
            const rc = this.cc.getBoundingClientRect();
            const lx = (e.clientX - rc.left - this.panX) / this.zoom,
                ly = (e.clientY - rc.top - this.panY) / this.zoom;
            if (nd.isRoot) {
                const peers: { id: string; sx: number; sy: number }[] = [];
                if (this.multiSel.size > 1)
                    for (const mid of this.multiSel) {
                        if (mid === nd.id) continue;
                        const mn = this.fAll(mid);
                        if (mn?.isRoot)
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
                    peers: peers.length ? peers : undefined,
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
                    snap: JSON.stringify(this.roots),
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

    private mkTA(nd: MindNodeData): HTMLTextAreaElement {
        const ta = document.createElement("textarea");
        ta.value = nd.text;
        const v = this.nodeVis(nd);
        const tAlign = this.style.textAlign;
        const editOC = this.style.editOutlineColor;
        const padX = this.style.nodePadX;
        const lh = this.style.nodeLineHeight;
        const off = this.style.selectionOutlineOffset;
        const borderCSS =
            v.bS !== "none"
                ? `border:${v.bW}px ${v.bS} ${v.bC};`
                : "border:none;";
        const editOW = this.style.editOutlineWidth;
        const editCSS = `outline:${editOW}px solid ${editOC};outline-offset:${off}px;transition:none;animation:none;`;
        ta.style.cssText = `width:${nd.width}px;height:${nd.height}px;display:block;border-radius:${v.rad}px;font-weight:${v.isR ? 700 : 500};box-sizing:border-box;font-size:${v.fs}px;font-family:${v.ff};white-space:pre-wrap;word-break:break-word;text-align:${tAlign};line-height:${lh};background:${v.bg};color:${v.tc};padding:6px ${padX}px;margin:0;resize:none;overflow:hidden;cursor:text;${borderCSS}${editCSS}`;
        const editSelId = "mm-edit-sel-" + nd.id.substring(0, 8);
        ta.classList.add(editSelId);
        const styleEl = document.createElement("style");
        styleEl.textContent = `.${editSelId}::selection{background:${editOC}40!important;}.${editSelId}:focus{outline:${editOW}px solid ${editOC}!important;outline-offset:${off}px!important;transition:none!important;animation:none!important;box-shadow:none!important;}`;
        document.head.appendChild(styleEl);
        ta.addEventListener("mousedown", (e) => e.stopPropagation());
        // FIX: input handler — recalc size both grow AND shrink
        ta.addEventListener("input", () => {
            const txt = ta.value || " ";
            const nw = this.calcW(txt, !!nd.isRoot);
            const nh = this.calcH(txt, !!nd.isRoot);
            if (nw !== nd.width || nh !== nd.height) {
                nd.width = nw;
                nd.height = nh;
                ta.style.width = nd.width + "px";
                ta.style.height = nd.height + "px";
                this.softRender();
            }
        });
        this.liveTA = ta;
        const save = () => {
            if (this.editId !== nd.id) return;
            styleEl.remove();
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
                } else if (
                    e.key === "Enter" &&
                    !e.shiftKey &&
                    !this.matchKey(e, this.kb.lineBreak)
                ) {
                    e.preventDefault();
                    save();
                } else if (e.key === "Tab") {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    // Insert tab at cursor position
                    const s = ta.selectionStart,
                        end = ta.selectionEnd;
                    ta.value =
                        ta.value.substring(0, s) +
                        "\t" +
                        ta.value.substring(end);
                    ta.selectionStart = ta.selectionEnd = s + 1;
                    ta.dispatchEvent(new Event("input"));
                }
                // Ctrl+Up = Home, Ctrl+Down = End, Ctrl+Shift+Up = Shift+Home, Ctrl+Shift+Down = Shift+End
                else if ((e.ctrlKey || e.metaKey) && e.key === "ArrowUp") {
                    e.preventDefault();
                    ta.selectionStart = 0;
                    if (!e.shiftKey) ta.selectionEnd = 0;
                } else if ((e.ctrlKey || e.metaKey) && e.key === "ArrowDown") {
                    e.preventDefault();
                    const len = ta.value.length;
                    ta.selectionEnd = len;
                    if (!e.shiftKey) ta.selectionStart = len;
                }
            },
            true,
        );
        setTimeout(() => {
            ta.focus({ preventScroll: true });
            ta.select();
        }, 0);
        return ta;
    }

    private updateFO() {
        const v = (n: MindNodeData) => {
            const sel = this.isSel(n.id);
            const ex = sel ? this.style.selectionWidth + 4 : 0;
            const fo = document.getElementById("mn-" + n.id);
            if (fo) {
                fo.setAttribute("x", String(n.x - n.width / 2 - ex));
                fo.setAttribute("y", String(n.y - n.height / 2 - ex));
                fo.setAttribute("width", String(n.width + ex * 2));
                fo.setAttribute("height", String(n.height + ex * 2));
            }
            for (const c of n.children) v(c);
        };
        for (const r of this.roots) v(r);
    }
    private closeMenu() {
        if (this.activeMenu) {
            this.activeMenu.close();
            this.activeMenu = null;
        }
    }
    private showMenu(menu: Menu, e: MouseEvent) {
        this.closeMenu();
        this.activeMenu = menu;
        menu.showAtMouseEvent(e);
    }
    private showCanvasCtx(e: MouseEvent) {
        this.closePop();
        const menu = new Menu();
        if (this.isMulti()) {
            menu.addItem((i) =>
                i
                    .setTitle(
                        t("ctx.batchDel") + " (" + this.allSel().size + ")",
                    )
                    .setIcon("trash")
                    .onClick(() => this.batchDel()),
            );
            menu.addItem((i) =>
                i
                    .setTitle(t("ctx.editStyle"))
                    .setIcon("palette")
                    .onClick(() => this.showNodeStyleEditor(e)),
            );
            menu.addSeparator();
        }
        menu.addItem((i) =>
            i
                .setTitle(t("ctx.newRoot"))
                // .setIcon("plus-circle")
                .onClick(() => {
                    const r = this.cc.getBoundingClientRect();
                    this.addRoot(
                        this.plugin.getRootName(),
                        (e.clientX - r.left - this.panX) / this.zoom,
                        (e.clientY - r.top - this.panY) / this.zoom,
                    );
                }),
        );
        menu.addSeparator();
        menu.addItem((i) =>
            i
                .setTitle(t("ctx.undo"))
                // .setIcon("undo")
                .onClick(() => this.undo()),
        );
        menu.addItem((i) =>
            i
                .setTitle(t("ctx.redo"))
                // .setIcon("redo")
                .onClick(() => this.redo()),
        );
        menu.addSeparator();
        menu.addItem((i) =>
            i
                .setTitle(t("ctx.globalStyle"))
                // .setIcon("palette")
                .onClick(() => this.showStyleModal()),
        );
        this.showMenu(menu, e);
    }
    private showNodeCtx(e: MouseEvent, nd: MindNodeData) {
        this.closePop();
        const menu = new Menu();
        if (this.isMulti()) {
            menu.addItem((i) =>
                i
                    .setTitle(
                        t("ctx.batchDel") + " (" + this.allSel().size + ")",
                    )
                    // .setIcon("trash")
                    .onClick(() => this.batchDel()),
            );
            menu.addItem((i) =>
                i
                    .setTitle(t("ctx.editStyle"))
                    // .setIcon("palette")
                    .onClick(() => this.showNodeStyleEditor(e)),
            );
        } else {
            menu.addItem((i) =>
                i
                    .setTitle(t("ctx.edit"))
                    // .setIcon("pencil")
                    .onClick(() => {
                        this.editId = nd.id;
                        this.render();
                    }),
            );
            menu.addItem((i) =>
                i
                    .setTitle(t("ctx.style"))
                    // .setIcon("palette")
                    .onClick(() => this.showNodeStyleEditor(e)),
            );
            menu.addSeparator();
            menu.addItem((i) =>
                i
                    .setTitle(t("ctx.copy"))
                    // .setIcon("copy")
                    .onClick(() => {
                        this.sel1(nd.id);
                        this.copyNode(false);
                    }),
            );
            menu.addItem((i) =>
                i
                    .setTitle(t("ctx.cut"))
                    // .setIcon("scissors")
                    .onClick(() => {
                        this.sel1(nd.id);
                        this.copyNode(true);
                    }),
            );
            if (this.clipboard)
                menu.addItem((i) =>
                    i
                        .setTitle(t("ctx.paste"))
                        // .setIcon("clipboard")
                        .onClick(() => {
                            this.sel1(nd.id);
                            this.pasteNode(false);
                        }),
                );
            menu.addSeparator();
            menu.addItem((i) =>
                i
                    .setTitle(t("ctx.child"))
                    // .setIcon("plus")
                    .onClick(() => {
                        this.sel1(nd.id);
                        this.addChildNode();
                    }),
            );
            if (nd.isRoot)
                menu.addItem((i) =>
                    i
                        .setTitle(t("ctx.leftChild"))
                        // .setIcon("arrow-left")
                        .onClick(() => {
                            this.sel1(nd.id);
                            this.addLeftChild();
                        }),
                );
            if (!nd.isRoot)
                menu.addItem((i) =>
                    i
                        .setTitle(t("ctx.sibling"))
                        // .setIcon("plus")
                        .onClick(() => {
                            this.sel1(nd.id);
                            this.addSibling();
                        }),
                );
            menu.addSeparator();
            menu.addItem((i) =>
                i
                    .setTitle(t("ctx.delete"))
                    // .setIcon("trash")
                    .onClick(() => {
                        this.sel1(nd.id);
                        this.delNode();
                    }),
            );
        }
        this.showMenu(menu, e);
    }
    private batchDel() {
        this.saveS();
        for (const id of this.allSel()) {
            if (this.roots.some((r) => r.id === id))
                this.roots = this.roots.filter((r) => r.id !== id);
            else this.remAll(id);
        }
        this.clrSel();
        this.render();
        this.doSave();
    }
    private startBox(lx: number, ly: number, shift: boolean) {
        this.boxSel = true;
        this.boxShift = shift;
        this.bsx = lx;
        this.bsy = ly;
        this.bcx = lx;
        this.bcy = ly;
        this.boxEl = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "rect",
        );
        this.boxEl.setAttribute("fill", "rgba(59,130,246,0.06)");
        this.boxEl.setAttribute("stroke", "rgba(59,130,246,0.4)");
        this.boxEl.setAttribute("stroke-width", "1");
        this.boxEl.setAttribute("stroke-dasharray", "6 3");
        this.boxEl.setAttribute("rx", "4");
        this.boxEl.style.pointerEvents = "none";
        this.overlayG.appendChild(this.boxEl);
    }
    private updBox(lx: number, ly: number) {
        this.bcx = lx;
        this.bcy = ly;
        if (!this.boxEl) return;
        this.boxEl.setAttribute("x", String(Math.min(this.bsx, lx)));
        this.boxEl.setAttribute("y", String(Math.min(this.bsy, ly)));
        this.boxEl.setAttribute("width", String(Math.abs(lx - this.bsx)));
        this.boxEl.setAttribute("height", String(Math.abs(ly - this.bsy)));
    }
    private endBox(_e: MouseEvent) {
        this.boxSel = false;
        this.boxEl?.remove();
        this.boxEl = null;
        const bx1 = Math.min(this.bsx, this.bcx),
            by1 = Math.min(this.bsy, this.bcy),
            bx2 = Math.max(this.bsx, this.bcx),
            by2 = Math.max(this.bsy, this.bcy);
        if (Math.abs(bx2 - bx1) < 5 && Math.abs(by2 - by1) < 5) {
            if (!this.boxShift) this.clrSel();
            this.render();
            return;
        }
        const ids = new Set<string>();
        const chk = (n: MindNodeData) => {
            const nl = n.x - n.width / 2,
                nr = n.x + n.width / 2,
                nt = n.y - n.height / 2,
                nb = n.y + n.height / 2;
            if (nr >= bx1 && nl <= bx2 && nb >= by1 && nt <= by2) ids.add(n.id);
            for (const c of n.children) chk(c);
        };
        for (const r of this.roots) chk(r);
        if (this.boxShift) {
            for (const id of ids) this.togSel(id);
        } else {
            this.multiSel.clear();
            for (const id of ids) this.multiSel.add(id);
            if (this.multiSel.size === 1) this.sel1([...this.multiSel][0]);
            else if (this.multiSel.size > 1) this.selId = [...this.multiSel][0];
            else this.clrSel();
        }
        this.render();
    }
    private isDesc(tgt: MindNodeData, pid: string): boolean {
        const d = this.fAll(pid);
        return d ? this.fN(tgt.id, d) !== null : false;
    }
    private detTgt(
        x: number,
        y: number,
        did: string,
    ): { id: string; zone: "child" | "before" | "after" } | null {
        for (const r of this.roots) {
            const h = this._dt(x, y, r, did);
            if (h) return h;
        }
        return null;
    }
    private _dt(
        x: number,
        y: number,
        n: MindNodeData,
        did: string,
    ): { id: string; zone: "child" | "before" | "after" } | null {
        if (n.id === did || this.isDesc(n, did)) return null;
        const pad = 25;
        const l = n.x - n.width / 2 - pad,
            r = n.x + n.width / 2 + pad,
            top = n.y - n.height / 2 - pad,
            b = n.y + n.height / 2 + pad;
        if (x >= l && x <= r && y >= top && y <= b) {
            let z: "child" | "before" | "after" = "child";
            if (!n.isRoot) {
                const h = n.height + pad * 2,
                    ry = y - top;
                if (ry < h * 0.4) z = "before";
                else if (ry > h * 0.6) z = "after";
            }
            return { id: n.id, zone: z };
        }
        for (const c of n.children) {
            const h = this._dt(x, y, c, did);
            if (h) return h;
        }
        return null;
    }
    private remTree(id: string, n: MindNodeData): MindNodeData | null {
        for (let i = 0; i < n.children.length; i++) {
            if (n.children[i].id === id) return n.children.splice(i, 1)[0];
            const f = this.remTree(id, n.children[i]);
            if (f) return f;
        }
        return null;
    }
    private remAll(id: string): MindNodeData | null {
        for (const r of this.roots) {
            const f = this.remTree(id, r);
            if (f) return f;
        }
        return null;
    }
    private insTree(
        ni: MindNodeData,
        tid: string,
        zone: "child" | "before" | "after",
    ) {
        const tn = this.fAll(tid);
        if (!tn) return;
        // Inherit side from target
        const setSide = (n: MindNodeData, s?: "left" | "right") => {
            n.side = s;
            for (const c of n.children) setSide(c, s);
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
    private fN(id: string, n: MindNodeData): MindNodeData | null {
        if (n.id === id) return n;
        for (const c of n.children) {
            const f = this.fN(id, c);
            if (f) return f;
        }
        return null;
    }
    private fP(cid: string, n: MindNodeData): MindNodeData | null {
        for (const c of n.children) {
            if (c.id === cid) return n;
            const f = this.fP(cid, c);
            if (f) return f;
        }
        return null;
    }
    private fPA(cid: string): MindNodeData | null {
        for (const r of this.roots) {
            const p = this.fP(cid, r);
            if (p) return p;
        }
        return null;
    }
    private bindEvts() {
        const cc = this.cc;
        cc.addEventListener("mousedown", (e) => {
            const tgt = e.target as Element;
            if (tgt.tagName.toLowerCase() === "textarea") return;
            cc.focus({ preventScroll: true });
            this.closeMenu();
            // FIX: if space held, ALWAYS start canvas drag regardless of click target
            if (this.spaceDown) {
                this.dragCv = true;
                this.smx = e.clientX;
                this.smy = e.clientY;
                cc.style.cursor = "grabbing";
                e.preventDefault();
                return;
            }
            if (
                tgt === this.svgEl ||
                tgt === cc ||
                tgt.tagName === "svg" ||
                tgt.tagName === "g"
            ) {
                if (this.commitEdit) this.commitEdit();
                this.startBox(
                    (e.clientX - cc.getBoundingClientRect().left - this.panX) /
                        this.zoom,
                    (e.clientY - cc.getBoundingClientRect().top - this.panY) /
                        this.zoom,
                    e.shiftKey,
                );
            }
        });
        cc.addEventListener("contextmenu", (e) => {
            const tgt = e.target as Element;
            if (
                tgt === this.svgEl ||
                tgt === cc ||
                ["svg", "g", "path"].includes(tgt.tagName)
            ) {
                e.preventDefault();
                this.showCanvasCtx(e);
            }
        });
        cc.addEventListener("mousemove", (e) => {
            const rc = cc.getBoundingClientRect();
            const lx = (e.clientX - rc.left - this.panX) / this.zoom,
                ly = (e.clientY - rc.top - this.panY) / this.zoom;
            if (this.boxSel) {
                this.updBox(lx, ly);
                return;
            }
            if (this.ds) {
                const dx = lx - this.ds.startX,
                    dy = ly - this.ds.startY;
                if (
                    !this.ds.isDragging &&
                    (Math.abs(dx) > 5 || Math.abs(dy) > 5)
                )
                    this.ds.isDragging = true;
                if (this.ds.isDragging) {
                    if (this.ds.isRootDrag) this.rootDF(dx, dy);
                    else this.childDF(lx, ly, dx, dy);
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
                    const r = cc.getBoundingClientRect(),
                        mx = e.clientX - r.left,
                        my = e.clientY - r.top;
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
            { passive: false },
        );
    }
    private rootDF(dx: number, dy: number) {
        if (!this.ds?.isRootDrag) return;
        const rn = this.fAll(this.ds.nodeId);
        if (!rn) return;
        rn.x = this.ds.nsx + dx;
        rn.y = this.ds.nsy + dy;
        this.doLayout(rn);
        if ((this.ds as RootDrag).peers)
            for (const p of (this.ds as RootDrag).peers!) {
                const pn = this.fAll(p.id);
                if (pn) {
                    pn.x = p.sx + dx;
                    pn.y = p.sy + dy;
                    this.doLayout(pn);
                }
            }
        this.edgesG.innerHTML = "";
        for (const r of this.roots) this.drawEdges(r);
        this.updateFO();
    }
    private childDF(lx: number, ly: number, dx: number, dy: number) {
        const d = this.ds as ChildDrag;
        if (!d.ghostEl) {
            const orig = document.getElementById("mn-" + d.nodeId);
            if (orig) orig.style.opacity = "0.15";
            const dn = this.fAll(d.nodeId);
            if (dn) {
                const ghost = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "foreignObject",
                );
                ghost.setAttribute("width", String(dn.width));
                ghost.setAttribute("height", String(dn.height));
                ghost.setAttribute("overflow", "visible");
                ghost.style.opacity = "0.65";
                ghost.style.pointerEvents = "none";
                const gd = document.createElement("div");
                gd.style.cssText =
                    "width:100%;height:100%;display:flex;align-items:center;justify-content:center;border-radius:" +
                    this.style.nodeBorderRadius +
                    "px;font-weight:bold;font-size:14px;background:var(--background-secondary);color:var(--text-normal);outline:2px dashed var(--interactive-accent);";
                gd.innerText = dn.text;
                ghost.appendChild(gd);
                this.overlayG.appendChild(ghost);
                d.ghostEl = ghost;
                const ind = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "rect",
                );
                ind.setAttribute("fill", "rgba(59,130,246,0.12)");
                ind.setAttribute("stroke", this.style.selectionColor);
                ind.setAttribute("stroke-width", "2");
                ind.setAttribute("rx", String(this.style.nodeBorderRadius));
                ind.style.pointerEvents = "none";
                ind.style.display = "none";
                this.overlayG.appendChild(ind);
                d.indicatorEl = ind;
            }
        }
        const dn = this.fAll(d.nodeId);
        if (dn && d.ghostEl) {
            const gx = dn.x + dx,
                gy = dn.y + dy;
            d.ghostEl.setAttribute("x", String(gx - dn.width / 2));
            d.ghostEl.setAttribute("y", String(gy - dn.height / 2));
            const tgt = this.detTgt(gx, gy, d.nodeId);
            if (tgt && d.indicatorEl) {
                d.indicatorEl.style.display = "block";
                const tn = this.fAll(tgt.id);
                if (tn) {
                    if (tgt.zone === "child") {
                        d.indicatorEl.setAttribute(
                            "x",
                            String(tn.x - tn.width / 2 - 4),
                        );
                        d.indicatorEl.setAttribute(
                            "y",
                            String(tn.y - tn.height / 2 - 4),
                        );
                        d.indicatorEl.setAttribute(
                            "width",
                            String(tn.width + 8),
                        );
                        d.indicatorEl.setAttribute(
                            "height",
                            String(tn.height + 8),
                        );
                    } else if (tgt.zone === "before") {
                        d.indicatorEl.setAttribute(
                            "x",
                            String(tn.x - tn.width / 2),
                        );
                        d.indicatorEl.setAttribute(
                            "y",
                            String(tn.y - tn.height / 2 - 6),
                        );
                        d.indicatorEl.setAttribute("width", String(tn.width));
                        d.indicatorEl.setAttribute("height", "3");
                    } else {
                        d.indicatorEl.setAttribute(
                            "x",
                            String(tn.x - tn.width / 2),
                        );
                        d.indicatorEl.setAttribute(
                            "y",
                            String(tn.y + tn.height / 2 + 3),
                        );
                        d.indicatorEl.setAttribute("width", String(tn.width));
                        d.indicatorEl.setAttribute("height", "3");
                    }
                }
            } else if (d.indicatorEl) d.indicatorEl.style.display = "none";
        }
    }
    private addChildNode(forceSide?: "left" | "right") {
        if (!this.selId) return;
        const p = this.fAll(this.selId);
        if (!p) return;
        this.saveS();
        const txt = this.plugin.getChildName();
        const n: MindNodeData = {
            id: crypto.randomUUID(),
            text: txt,
            x: 0,
            y: 0,
            width: this.calcW(txt, false),
            height: this.calcH(txt, false),
            children: [],
        };
        if (p.connectionColor) n.connectionColor = p.connectionColor;
        if (p.connectionWidth) n.connectionWidth = p.connectionWidth;
        // Determine side
        if (forceSide) n.side = forceSide;
        else if (p.isRoot) {
            const dir = this.style.nodeDirection;
            if (dir === "left") n.side = "left";
            else n.side = "right";
        } else {
            n.side = p.side || "right";
        }
        p.children.push(n);
        this.assignRainbowColor(p, n);
        this.sel1(n.id);
        if (this.plugin.settings.editOnCreate) this.editId = n.id;
        this.render();
        this.doSave();
    }
    private addLeftChild() {
        this.addChildNode("left");
    }
    // Enter on root = add child. Enter on child = insert sibling AFTER current
    private addSibling() {
        if (!this.selId) return;
        const sel = this.fAll(this.selId);
        if (!sel) return;
        if (sel.isRoot) {
            this.addChildNode();
            return;
        }
        const p = this.fPA(this.selId);
        if (!p) return;
        this.saveS();
        const txt = this.plugin.getChildName();
        const n: MindNodeData = {
            id: crypto.randomUUID(),
            text: txt,
            x: 0,
            y: 0,
            width: this.calcW(txt, false),
            height: this.calcH(txt, false),
            children: [],
            side: sel.side,
        };
        if (p.connectionColor) n.connectionColor = p.connectionColor;
        if (p.connectionWidth) n.connectionWidth = p.connectionWidth;
        const idx = p.children.findIndex((c) => c.id === this.selId);
        if (idx !== -1) p.children.splice(idx + 1, 0, n);
        else p.children.push(n);
        this.assignRainbowColor(p, n);
        this.sel1(n.id);
        if (this.plugin.settings.editOnCreate) this.editId = n.id;
        this.render();
        this.doSave();
    }
    // FIX #3: delete selects UPPER sibling (idx-1)
    private delNode() {
        if (!this.selId) return;
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
        if (!p) return;
        const idx = p.children.findIndex((c) => c.id === this.selId);
        this.saveS();
        p.children.splice(idx, 1);
        if (p.children.length) {
            const newIdx = idx > 0 ? idx - 1 : 0;
            this.sel1(p.children[newIdx].id);
        } else this.sel1(p.id);
        this.render();
        this.doSave();
    }
    private gD(nid: string): number {
        for (const r of this.roots) {
            const d = this._gd(nid, r, 0);
            if (d !== -1) return d;
        }
        return -1;
    }
    private _gd(nid: string, n: MindNodeData, d: number): number {
        if (n.id === nid) return d;
        for (const c of n.children) {
            const r = this._gd(nid, c, d + 1);
            if (r !== -1) return r;
        }
        return -1;
    }
    private cDep(td: number): MindNodeData[] {
        const o: MindNodeData[] = [];
        for (const r of this.roots) this._cd(r, 0, td, o);
        return o;
    }
    private _cd(n: MindNodeData, d: number, td: number, o: MindNodeData[]) {
        if (d === td) {
            o.push(n);
            return;
        }
        for (const c of n.children) this._cd(c, d + 1, td, o);
    }
    private arrow(dir: string) {
        if (!this.selId) return;
        const cur = this.fAll(this.selId);
        if (!cur) return;
        const isLeft = cur.side === "left";
        if (dir === "ArrowRight") {
            if (isLeft) {
                const par = this.fPA(this.selId);
                if (par) this.sel1(par.id);
            } else {
                const rc = cur.children?.filter((c) => c.side !== "left");
                if (rc?.length) this.sel1(rc[0].id);
            }
        } else if (dir === "ArrowLeft") {
            if (isLeft) {
                const lc = cur.children?.length ? cur.children : null;
                if (lc) this.sel1(lc[0].id);
            } else if (cur.isRoot) {
                const lc = cur.children?.filter((c) => c.side === "left");
                if (lc?.length) this.sel1(lc[0].id);
            } else {
                const par = this.fPA(this.selId);
                if (par) this.sel1(par.id);
            }
        } else {
            const d = this.gD(this.selId);
            if (d === -1) return;
            const peers = this.cDep(d);
            if (peers.length <= 1) return;
            const idx = peers.findIndex((n) => n.id === this.selId);
            if (idx === -1) return;
            if (dir === "ArrowUp")
                this.sel1(peers[idx > 0 ? idx - 1 : peers.length - 1].id);
            else this.sel1(peers[idx < peers.length - 1 ? idx + 1 : 0].id);
        }
        this.render();
    }
}
