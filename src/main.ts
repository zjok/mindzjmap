// src/main.ts
import { Plugin, WorkspaceLeaf, TFolder } from "obsidian";
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
        this.addRibbonIcon("network", "New MindZJ", () => this.createNew());
        this.addCommand({
            id: "create-new-mindzj",
            name: "New MindZJ",
            callback: () => this.createNew(),
        });
        this.registerEvent(
            this.app.workspace.on("file-menu", (menu, file) => {
                if (file instanceof TFolder)
                    menu.addItem((i) =>
                        i
                            .setTitle("New MindZJ")
                            .setIcon("network")
                            .onClick(() => this.createInFolder(file)),
                    );

                const items = (menu as any).items;
                if (items?.length > 1) {
                    const mzj = items.pop();
                    const idx = items.findIndex(
                        (it: any) =>
                            (it.titleEl?.textContent || it.title) ===
                            "New folder",
                    );
                    if (idx >= 0) {
                        mzj.section = items[idx].section; // 关键：复制同组的 section
                        items.splice(idx + 1, 0, mzj);
                    } else {
                        items.unshift(mzj);
                    }
                }
            }),
        );
    }
    onunload() {}
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
                toolbarStyleLight: d.toolbarStyleLight ?? undefined,
                toolbarStyleDark: d.toolbarStyleDark ?? undefined,
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
    /** Extract current toolbar colors from style */
    private getToolbarColors(): ToolbarThemeColors {
        const s = this.settings.style;
        return {
            toolbarBgColor: s.toolbarBgColor,
            toolbarBtnBgColor: s.toolbarBtnBgColor,
            toolbarBtnBorderStyle: s.toolbarBtnBorderStyle,
            toolbarBtnBorderColor: s.toolbarBtnBorderColor,
            toolbarBtnTextColor: s.toolbarBtnTextColor,
        };
    }
    /** Apply toolbar colors to current style */
    private applyToolbarColors(tc: ToolbarThemeColors) {
        this.settings.style.toolbarBgColor = tc.toolbarBgColor;
        this.settings.style.toolbarBtnBgColor = tc.toolbarBtnBgColor;
        this.settings.style.toolbarBtnBorderStyle = tc.toolbarBtnBorderStyle;
        this.settings.style.toolbarBtnBorderColor = tc.toolbarBtnBorderColor;
        this.settings.style.toolbarBtnTextColor = tc.toolbarBtnTextColor;
    }
    /** Switch theme with per-theme toolbar color persistence */
    async switchTheme(newTheme: "light" | "dark") {
        const oldTheme = this.settings.theme;
        // Save current toolbar colors to outgoing theme
        if (oldTheme === "light") {
            this.settings.toolbarStyleLight = this.getToolbarColors();
        } else {
            this.settings.toolbarStyleDark = this.getToolbarColors();
        }
        // Switch theme
        this.settings.theme = newTheme;
        this.settings.style.canvasBg =
            newTheme === "dark" ? "#1e1e1e" : "#ffffff";
        // Load toolbar colors for incoming theme
        if (newTheme === "light") {
            this.applyToolbarColors(
                this.settings.toolbarStyleLight ?? DEFAULT_TOOLBAR_LIGHT,
            );
        } else {
            this.applyToolbarColors(
                this.settings.toolbarStyleDark ?? DEFAULT_TOOLBAR_DARK,
            );
        }
        await this.saveSettings();
        this.applyStyleToAllViews(this.settings.style);
    }
    getRootName(): string {
        const cn = this.settings.customNodeNames[this.settings.language];
        return cn?.root || t("def.root");
    }
    getChildName(): string {
        const cn = this.settings.customNodeNames[this.settings.language];
        return cn?.child || t("def.child");
    }
    refreshAllViews() {
        for (const leaf of this.app.workspace.getLeavesOfType(
            VIEW_TYPE_MINDMAP,
        ))
            if (leaf.view instanceof MindMapView)
                (leaf.view as MindMapView).refreshUI();
    }
    applyStyleToAllViews(s: MindMapStyle) {
        for (const leaf of this.app.workspace.getLeavesOfType(
            VIEW_TYPE_MINDMAP,
        ))
            if (leaf.view instanceof MindMapView)
                (leaf.view as MindMapView).applyStyle({ ...s });
    }
    openPluginSettings() {
        const app = this.app as any;
        if (app.setting) {
            app.setting.open();
            app.setting.openTabById(this.manifest.id);
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
        } catch {}
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
