// src/MindMapOutlineView.ts
import { ItemView, WorkspaceLeaf, MarkdownView } from "obsidian";
import {
    VIEW_TYPE_MINDMAP_OUTLINE,
    VIEW_TYPE_MINDMAP,
    MindNodeData,
} from "./types";
import { t } from "./i18n";
import { MindMapView } from "./MindMapView";
import type MindNodePlugin from "./main";

/** Lightweight tree node built from .md HeadingCache entries. */
interface MdHeadingNode {
    heading: string;
    level: number;
    line: number;
    children: MdHeadingNode[];
}

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

    // ── public entry point ───────────────────────────────────────
    /** Rebuild the outline tree from the currently active leaf. */
    refresh() {
        if (!this.treeEl) return;
        this.treeEl.empty();

        const active = this.app.workspace.activeLeaf;
        if (!active) {
            this.showEmpty();
            return;
        }

        // ── .mindzj mind map ─────────────────────────────────────
        if (active.view instanceof MindMapView) {
            this.refreshMindMap(active.view);
            return;
        }

        // ── .md markdown ─────────────────────────────────────────
        if (active.view instanceof MarkdownView) {
            this.refreshMarkdown(active.view);
            return;
        }

        this.showEmpty();
    }

    // ── mind map outline ─────────────────────────────────────────
    private refreshMindMap(view: MindMapView) {
        const roots = view.getRoots();
        if (!roots.length) {
            this.showEmpty();
            return;
        }
        for (const root of roots) {
            this.buildMindMapNode(this.treeEl!, root, 0, view);
        }
    }

    private buildMindMapNode(
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

        // Click → select and focus node in the mind map
        row.addEventListener("click", (e) => {
            e.stopPropagation();
            view.selectAndFocusNode(nd.id);
        });

        // Children container
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
                toggle.innerText = collapsed ? "▶" : "▼";
                childCt.toggleClass("mz-outline-collapsed", collapsed);
            });
        }
    }

    // ── markdown outline ─────────────────────────────────────────
    private refreshMarkdown(mdView: MarkdownView) {
        const file = mdView.file;
        if (!file) {
            this.showEmpty();
            return;
        }
        const cache = this.app.metadataCache.getFileCache(file);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const rawHeadings: any[] | undefined = (cache as any)?.headings;
        if (!rawHeadings || !rawHeadings.length) {
            this.showEmpty();
            return;
        }
        const tree = this.buildMdTree(rawHeadings);
        for (const node of tree) {
            this.renderMdNode(this.treeEl!, node, 0, mdView);
        }
    }

    /** Convert a flat HeadingCache[] list into a nested tree. */
    private buildMdTree(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        headings: any[],
    ): MdHeadingNode[] {
        const roots: MdHeadingNode[] = [];
        const stack: MdHeadingNode[] = [];
        for (const h of headings) {
            const node: MdHeadingNode = {
                heading: h.heading,
                level: h.level,
                line: h.position?.start?.line ?? 0,
                children: [],
            };
            while (stack.length && stack[stack.length - 1].level >= h.level)
                stack.pop();
            if (stack.length) stack[stack.length - 1].children.push(node);
            else roots.push(node);
            stack.push(node);
        }
        return roots;
    }

    /** Recursively render a markdown heading node. */
    private renderMdNode(
        parent: HTMLElement,
        node: MdHeadingNode,
        depth: number,
        mdView: MarkdownView,
    ) {
        const item = parent.createEl("div");
        item.addClass("mz-outline-item");

        const row = item.createEl("div");
        row.addClass("mz-outline-row");
        row.style.paddingLeft = depth * 16 + 8 + "px";

        const hasChildren = node.children.length > 0;

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
        const badge = row.createEl("span", { text: "H" + node.level });
        badge.addClass("mz-outline-badge");
        badge.addClass("mz-outline-h" + node.level);

        // Text
        const text = row.createEl("span", { text: node.heading });
        text.addClass("mz-outline-text");
        if (node.level === 1) text.addClass("mz-outline-text-root");

        // Click → scroll to heading in the editor
        const targetLine = node.line;
        row.addEventListener("click", (e) => {
            e.stopPropagation();
            const editor = mdView.editor;
            if (editor) {
                editor.setCursor(targetLine, 0);
                editor.scrollIntoView(
                    {
                        from: { line: targetLine, ch: 0 },
                        to: { line: targetLine, ch: 0 },
                    },
                    true,
                );
            }
        });

        // Children
        if (hasChildren) {
            const childCt = item.createEl("div");
            childCt.addClass("mz-outline-children");

            for (const c of node.children)
                this.renderMdNode(childCt, c, depth + 1, mdView);

            let collapsed = false;
            toggle.addEventListener("click", (e) => {
                e.stopPropagation();
                collapsed = !collapsed;
                toggle.innerText = collapsed ? "▶" : "▼";
                childCt.toggleClass("mz-outline-collapsed", collapsed);
            });
        }
    }

    // ── helpers ───────────────────────────────────────────────────
    private showEmpty() {
        if (!this.treeEl) return;
        const el = this.treeEl.createEl("div", { text: t("outline.empty") });
        el.addClass("mz-outline-empty");
    }
}
