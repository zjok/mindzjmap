// src/MindMapOutlineView.ts
import { ItemView, WorkspaceLeaf } from "obsidian";
import {
    VIEW_TYPE_MINDMAP_OUTLINE,
    VIEW_TYPE_MINDMAP,
    MindNodeData,
} from "./types";
import { t } from "./i18n";
import { MindMapView } from "./MindMapView";
import type MindNodePlugin from "./main";

export class MindMapOutlineView extends ItemView {
    private plugin: MindNodePlugin;
    private treeEl: HTMLElement | null = null;

    constructor(leaf: WorkspaceLeaf, plugin: MindNodePlugin) {
        super(leaf);
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
        const ct = this.containerEl.children[1] as HTMLElement;
        ct.empty();
        ct.addClass("mz-outline-ct");
        this.treeEl = ct.createEl("div");
        this.treeEl.addClass("mz-outline-tree");
        this.refresh();
    }

    // eslint-disable-next-line @typescript-eslint/require-await
    async onClose(): Promise<void> {
        this.treeEl = null;
    }

    /** Get the currently active MindMapView (if any). */
    private getActiveMapView(): MindMapView | null {
        const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE_MINDMAP);
        const active = this.app.workspace.activeLeaf;
        if (active && active.view instanceof MindMapView) return active.view;
        // Fallback: return the first open mind map view
        for (const l of leaves) {
            if (l.view instanceof MindMapView) return l.view;
        }
        return null;
    }

    /** Rebuild the outline tree from the active mind map. */
    refresh() {
        if (!this.treeEl) return;
        this.treeEl.empty();

        const view = this.getActiveMapView();
        if (!view) {
            const empty = this.treeEl.createEl("div", {
                text: t("outline.empty"),
            });
            empty.addClass("mz-outline-empty");
            return;
        }

        const roots = view.getRoots();
        if (!roots.length) {
            const empty = this.treeEl.createEl("div", {
                text: t("outline.empty"),
            });
            empty.addClass("mz-outline-empty");
            return;
        }

        for (const root of roots) {
            this.buildNode(this.treeEl, root, 0, view);
        }
    }

    /** Recursively build a tree node element. */
    private buildNode(
        parent: HTMLElement,
        nd: MindNodeData,
        depth: number,
        view: MindMapView,
    ) {
        const item = parent.createEl("div");
        item.addClass("mz-outline-item");

        const row = item.createEl("div");
        row.addClass("mz-outline-row");
        row.style.paddingLeft = depth * 16 + 8 + "px";

        const hasChildren = nd.children && nd.children.length > 0;

        // Collapse toggle
        const toggle = row.createEl("span");
        toggle.addClass("mz-outline-toggle");
        if (hasChildren) {
            toggle.innerText = "▼";
            toggle.addClass("mz-outline-toggle-active");
        } else {
            toggle.innerText = " ";
        }

        // Level badge
        const level = depth === 0 ? 1 : Math.min(depth + 1, 6);
        const badge = row.createEl("span", { text: "H" + level });
        badge.addClass("mz-outline-badge");
        badge.addClass("mz-outline-h" + level);

        // Text
        const text = row.createEl("span", {
            text: nd.text.replace(/\n/g, " "),
        });
        text.addClass("mz-outline-text");
        if (depth === 0) text.addClass("mz-outline-text-root");

        // Side indicator for left-side nodes
        if (nd.side === "left") {
            const side = row.createEl("span", { text: "L" });
            side.addClass("mz-outline-side");
        }

        // Click to select and focus node in the mind map
        row.addEventListener("click", (e) => {
            e.stopPropagation();
            view.selectAndFocusNode(nd.id);
        });

        // Children container
        if (hasChildren) {
            const childCt = item.createEl("div");
            childCt.addClass("mz-outline-children");

            // Right children first, then left children
            const rightCh = nd.children.filter((c) => c.side !== "left");
            const leftCh = nd.children.filter((c) => c.side === "left");
            for (const c of rightCh)
                this.buildNode(childCt, c, depth + 1, view);
            for (const c of leftCh) this.buildNode(childCt, c, depth + 1, view);

            // Toggle collapse
            let collapsed = false;
            toggle.addEventListener("click", (e) => {
                e.stopPropagation();
                collapsed = !collapsed;
                toggle.innerText = collapsed ? "▶" : "▼";
                childCt.toggleClass("mz-outline-collapsed", collapsed);
            });
        }
    }
}
