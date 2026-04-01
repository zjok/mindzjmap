// src/main.ts
import { Plugin, WorkspaceLeaf, TFolder, Menu } from "obsidian";
import { MindMapView } from "./MindMapView";
import { StylePanelView } from "./StylePanelView";
import { MindMapSettingTab } from "./SettingsTab";
import { setLang, t } from "./i18n";
import {
    VIEW_TYPE_MINDMAP,
    VIEW_TYPE_MINDMAP_STYLE,
    MINDMAP_FILE_EXTENSION,
    MindMapStyle,
    PluginSettings,
    DEFAULT_SETTINGS,
    DEFAULT_STYLE,
    DEFAULT_KEYBINDINGS,
    ToolbarThemeColors,
    DEFAULT_TOOLBAR_LIGHT,
    DEFAULT_TOOLBAR_DARK,
} from "./types";

interface MenuWithItems extends Menu {
    items: Array<{ section?: string; titleEl?: HTMLElement; title?: string }>;
}

export default class MindNodePlugin extends Plugin {
    settings: PluginSettings = {
        ...DEFAULT_SETTINGS,
        style: { ...DEFAULT_STYLE },
        keyBindings: { ...DEFAULT_KEYBINDINGS },
    };

    async onload() {
        await this.loadSettings();
        setLang(this.settings.language);
        this.registerExtensions([MINDMAP_FILE_EXTENSION], VIEW_TYPE_MINDMAP);
        this.registerView(
            VIEW_TYPE_MINDMAP,
            (leaf) => new MindMapView(leaf, this),
        );
        this.registerView(
            VIEW_TYPE_MINDMAP_STYLE,
            (leaf) => new StylePanelView(leaf, this),
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
            },
        });
        this.registerEvent(
            this.app.workspace.on("file-menu", (menu, file) => {
                if (!(file instanceof TFolder)) return;
                menu.addItem((i) =>
                    i
                        .setTitle("New MindZJ")
                        .setIcon("network")
                        .onClick(() => {
                            void this.createInFolder(file);
                        }),
                );
                const m = menu as unknown as MenuWithItems;
                if (m.items?.length > 1) {
                    const mzj = m.items.pop();
                    if (mzj) {
                        const idx = m.items.findIndex((it) => {
                            const txt = (
                                it.titleEl?.textContent ??
                                it.title ??
                                ""
                            )
                                .toLowerCase()
                                .trim();
                            return (
                                txt === "new folder" ||
                                txt === "新建文件夹" ||
                                txt.includes("new folder")
                            );
                        });
                        if (idx >= 0) {
                            mzj.section = m.items[idx].section;
                            m.items.splice(idx + 1, 0, mzj);
                        } else {
                            m.items.unshift(mzj);
                        }
                    }
                }
            }),
        );
    }

    onunload(): void {
        /* no cleanup needed */
    }

    async loadSettings() {
        const d = await this.loadData();
        if (d) {
            this.settings = {
                style: { ...DEFAULT_STYLE, ...(d.style ?? {}) },
                language: d.language ?? "en",
                theme: d.theme ?? "light",
                showToolbar: d.showToolbar ?? true,
                keyBindings: {
                    ...DEFAULT_KEYBINDINGS,
                    ...(d.keyBindings ?? {}),
                },
                developerMode: d.developerMode ?? false,
                editOnCreate: d.editOnCreate ?? true,
                typeToEdit: d.typeToEdit ?? true,
                customNodeNames: d.customNodeNames ?? {},
                toolbarStyleLight: d.toolbarStyleLight,
                toolbarStyleDark: d.toolbarStyleDark,
            };
            const valid = [
                "bezier",
                "straight",
                "curved",
                "step",
                "bracket",
                "loose",
            ];
            if (!valid.includes(this.settings.style.connectionStyle))
                this.settings.style.connectionStyle = "bezier";
            // Upgrade: apply theme-appropriate toolbar colors when
            // per-theme snapshots haven't been saved yet (e.g. user
            // upgraded from a version that didn't persist them).
            if (this.settings.theme === "dark" && !d.toolbarStyleDark) {
                this.applyToolbarColors(DEFAULT_TOOLBAR_DARK);
            }
        }
    }
    async saveSettings() {
        await this.saveData(this.settings);
    }
    async updateStyle(p: Partial<MindMapStyle>) {
        this.settings.style = { ...this.settings.style, ...p };
        await this.saveSettings();
    }
    getStyle(): MindMapStyle {
        return { ...this.settings.style };
    }

    private getToolbarColors(): ToolbarThemeColors {
        const s = this.settings.style;
        return {
            toolbarBgColor: s.toolbarBgColor,
            toolbarBtnBgColor: s.toolbarBtnBgColor,
            toolbarBtnBorderStyle: s.toolbarBtnBorderStyle,
            toolbarBtnBorderColor: s.toolbarBtnBorderColor,
            toolbarBtnTextColor: s.toolbarBtnTextColor,
            toolbarBorderColor: s.toolbarBorderColor,
            toolbarBorderWidth: s.toolbarBorderWidth,
        };
    }
    private applyToolbarColors(tc: ToolbarThemeColors) {
        Object.assign(this.settings.style, tc);
    }
    async switchTheme(newTheme: "light" | "dark") {
        if (this.settings.theme === "light")
            this.settings.toolbarStyleLight = this.getToolbarColors();
        else this.settings.toolbarStyleDark = this.getToolbarColors();
        this.settings.theme = newTheme;
        this.settings.style.canvasBg =
            newTheme === "dark" ? "#1e1e1e" : "#ffffff";
        this.applyToolbarColors(
            newTheme === "light"
                ? (this.settings.toolbarStyleLight ?? DEFAULT_TOOLBAR_LIGHT)
                : (this.settings.toolbarStyleDark ?? DEFAULT_TOOLBAR_DARK),
        );
        await this.saveSettings();
        this.applyStyleToAllViews(this.settings.style);
    }
    getRootName(): string {
        const n = this.settings.customNodeNames[this.settings.language];
        return n?.root || t("def.root");
    }
    getChildName(): string {
        const n = this.settings.customNodeNames[this.settings.language];
        return n?.child || t("def.child");
    }
    refreshAllViews() {
        for (const leaf of this.app.workspace.getLeavesOfType(
            VIEW_TYPE_MINDMAP,
        ))
            if (leaf.view instanceof MindMapView) leaf.view.refreshUI();
    }
    applyStyleToAllViews(s: MindMapStyle) {
        for (const leaf of this.app.workspace.getLeavesOfType(
            VIEW_TYPE_MINDMAP,
        ))
            if (leaf.view instanceof MindMapView)
                leaf.view.applyStyle({ ...s });
    }

    openPluginSettings() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const appRec = this.app as unknown as Record<
            string,
            { open(): void; openTabById(id: string): void }
        >;
        if (appRec.setting) {
            appRec.setting.open();
            appRec.setting.openTabById(this.manifest.id);
        }
    }
    private defaultData() {
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
                        isRoot: true,
                    },
                ],
            },
            null,
            2,
        );
    }
    private uniPath(folder: TFolder, base: string) {
        const ext = MINDMAP_FILE_EXTENSION,
            pre = folder.path === "/" ? "" : folder.path + "/";
        let p = `${pre}${base}.${ext}`,
            n = 1;
        while (this.app.vault.getAbstractFileByPath(p)) {
            p = `${pre}${base} ${n}.${ext}`;
            n++;
        }
        return p;
    }
    private async createNew() {
        await this.createInFolder(
            this.app.workspace.getActiveFile()?.parent ??
                this.app.vault.getRoot(),
        );
    }
    private async createInFolder(folder: TFolder) {
        try {
            const f = await this.app.vault.create(
                this.uniPath(folder, "Untitled MindZJ"),
                this.defaultData(),
            );
            const leaf = this.app.workspace.getLeaf("tab");
            await leaf.openFile(f);
            this.app.workspace.setActiveLeaf(leaf, { focus: true });
        } catch {
            /* file creation may fail */
        }
    }
    async openStylePanel() {
        const ls = this.app.workspace.getLeavesOfType(VIEW_TYPE_MINDMAP_STYLE);
        let l: WorkspaceLeaf;
        if (ls.length) l = ls[0];
        else {
            l =
                this.app.workspace.getRightLeaf(false) ??
                this.app.workspace.getLeaf(true);
            await l.setViewState({
                type: VIEW_TYPE_MINDMAP_STYLE,
                active: true,
            });
        }
        this.app.workspace.revealLeaf(l);
    }
}
