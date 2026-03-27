// src/SettingsTab.ts
import { PluginSettingTab, App, Setting } from "obsidian";
import type MindNodePlugin from "./main";
import { LANGUAGES, Language, t, setLang } from "./i18n";
import { DEFAULT_STYLE, DEFAULT_KEYBINDINGS, KeyBindings } from "./types";

export class MindMapSettingTab extends PluginSettingTab {
    plugin: MindNodePlugin;
    constructor(app: App, plugin: MindNodePlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display(): void {
        const { containerEl } = this;
        const scrollTop = containerEl.scrollTop;
        containerEl.empty();
        // About
        const about = containerEl.createEl("div");
        about.style.cssText =
            "text-align:center;padding:24px 16px;margin-bottom:20px;background:var(--background-secondary);border-radius:12px;border:1px solid var(--background-modifier-border);";
        about.createEl("div").innerText = "🗺️";
        about.lastElementChild!.setAttribute(
            "style",
            "font-size:48px;margin-bottom:8px;",
        );
        about.createEl("h2", { text: "MindZJ" }).style.cssText =
            "margin:0 0 4px;font-size:22px;";
        about.createEl("div", {
            text: `${t("set.version")}: ${this.plugin.manifest.version}`,
        }).style.cssText =
            "font-size:12px;color:var(--text-muted);margin-bottom:4px;";
        about.createEl("div", {
            text: `${t("set.author")}: ${this.plugin.manifest.author}`,
        }).style.cssText =
            "font-size:12px;color:var(--text-muted);margin-bottom:8px;";
        about.createEl("p", { text: t("set.desc") }).style.cssText =
            "font-size:13px;margin:0 0 8px;line-height:1.5;max-width:400px;margin-left:auto;margin-right:auto;";
        const ghLink = about.createEl("div").createEl("a", {
            text: `📦 ${t("set.github")}`,
            href: "https://github.com/zjok/mindzj",
        });
        ghLink.style.cssText =
            "color:var(--text-accent);text-decoration:none;font-size:13px;";
        ghLink.setAttr("target", "_blank");
        // Donation
        const donSec = containerEl.createEl("div");
        donSec.style.cssText =
            "padding:16px;margin-bottom:20px;background:var(--background-secondary);border-radius:12px;border:1px solid var(--background-modifier-border);";
        donSec.createEl("h3", { text: `☕ ${t("set.donate")}` }).style.cssText =
            "margin:0 0 12px;font-size:15px;text-align:center;";
        const donBtns = donSec.createEl("div");
        donBtns.style.cssText =
            "display:flex;gap:10px;justify-content:center;flex-wrap:wrap;";
        const mkDon = (label: string, color: string, url: string) => {
            const a = donBtns.createEl("a", { href: url });
            a.setAttr("target", "_blank");
            a.style.cssText = `display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:${color};color:#fff;border-radius:8px;text-decoration:none;font-size:13px;font-weight:600;cursor:pointer;`;
            a.innerText = label;
        };
        mkDon(
            "☕ Buy Me a Coffee",
            "#FFDD00",
            "https://www.buymeacoffee.com/superjohn",
        );
        mkDon("❤️ Ko-fi", "#FF5E5B", "https://ko-fi.com/superjohn");
        mkDon("💰 PayPal", "#0070ba", "https://paypal.me/TanCat997");
        containerEl.createEl("h2", { text: t("set.title") });
        // Basic settings
        new Setting(containerEl)
            .setName(t("set.lang"))
            .setDesc(t("set.langDesc"))
            .addDropdown((dd) => {
                for (const l of LANGUAGES) dd.addOption(l.value, l.label);
                dd.setValue(this.plugin.settings.language);
                dd.onChange(async (v) => {
                    this.plugin.settings.language = v as Language;
                    setLang(v as Language);
                    await this.plugin.saveSettings();
                    this.plugin.refreshAllViews();
                    this.display();
                });
            });
        new Setting(containerEl)
            .setName(t("set.theme"))
            .setDesc(t("set.themeDesc"))
            .addDropdown((dd) => {
                dd.addOption("light", t("set.light"));
                dd.addOption("dark", t("set.dark"));
                dd.setValue(this.plugin.settings.theme);
                dd.onChange(async (v) => {
                    await this.plugin.switchTheme(v as "light" | "dark");
                    this.display();
                });
            });
        new Setting(containerEl)
            .setName(t("set.canvasBg"))
            .setDesc(t("set.canvasBgDesc"))
            .addColorPicker((cp) => {
                const cur = this.plugin.settings.style.canvasBg;
                cp.setValue(cur.startsWith("#") ? cur : "#ffffff");
                cp.onChange(async (v) => {
                    this.plugin.settings.style.canvasBg = v;
                    await this.plugin.saveSettings();
                    this.plugin.applyStyleToAllViews(
                        this.plugin.settings.style,
                    );
                });
            });
        new Setting(containerEl)
            .setName(t("set.toolbar"))
            .setDesc(t("set.toolbarDesc"))
            .addToggle((tg) => {
                tg.setValue(this.plugin.settings.showToolbar);
                tg.onChange(async (v) => {
                    this.plugin.settings.showToolbar = v;
                    await this.plugin.saveSettings();
                    this.plugin.refreshAllViews();
                });
            });
        new Setting(containerEl)
            .setName(t("set.editOnCreate"))
            .setDesc(t("set.editOnCreateDesc"))
            .addToggle((tg) => {
                tg.setValue(this.plugin.settings.editOnCreate);
                tg.onChange(async (v) => {
                    this.plugin.settings.editOnCreate = v;
                    await this.plugin.saveSettings();
                });
            });

        // Custom node names with inline reset button (no page refresh)
        const lang = this.plugin.settings.language;
        const cn = this.plugin.settings.customNodeNames[lang] || {};
        const defRoot = t("def.root");
        const defChild = t("def.child");

        const mkNameSetting = (
            name: string,
            desc: string,
            field: "root" | "child",
            defVal: string,
        ) => {
            const setting = new Setting(containerEl)
                .setName(name)
                .setDesc(desc);
            const resetEl = setting.controlEl.createEl("button", { text: "↺" });
            resetEl.style.cssText =
                "border:none;background:none;cursor:pointer;font-size:16px;color:var(--text-muted);padding:2px 6px;display:none;";
            const curVal = (this.plugin.settings.customNodeNames[lang] || {})[
                field
            ];
            if (curVal && curVal !== defVal) resetEl.style.display = "inline";
            resetEl.addEventListener("click", async () => {
                const c = { ...this.plugin.settings.customNodeNames };
                if (c[lang]) delete c[lang][field];
                this.plugin.settings.customNodeNames = c;
                await this.plugin.saveSettings();
                inp.value = defVal;
                resetEl.style.display = "none";
            });
            const inp = setting.controlEl.createEl("input") as HTMLInputElement;
            inp.type = "text";
            inp.value = curVal || defVal;
            inp.style.cssText =
                "width:140px;padding:4px 8px;border:1px solid var(--background-modifier-border);border-radius:6px;font-size:13px;";
            inp.addEventListener("blur", async () => {
                const v = inp.value.trim();
                const c = { ...this.plugin.settings.customNodeNames };
                c[lang] = { ...(c[lang] || {}), [field]: v || undefined };
                this.plugin.settings.customNodeNames = c;
                await this.plugin.saveSettings();
                resetEl.style.display = v && v !== defVal ? "inline" : "none";
            });
        };
        mkNameSetting(
            t("set.rootName"),
            t("set.rootNameDesc"),
            "root",
            defRoot,
        );
        mkNameSetting(
            t("set.childName"),
            t("set.childNameDesc"),
            "child",
            defChild,
        );

        new Setting(containerEl)
            .setName(t("set.typeToEdit"))
            .setDesc(t("set.typeToEditDesc"))
            .addToggle((tg) => {
                tg.setValue(this.plugin.settings.typeToEdit);
                tg.onChange(async (v) => {
                    this.plugin.settings.typeToEdit = v;
                    await this.plugin.saveSettings();
                });
            });

        // Keyboard Shortcuts with inline reset button (no page refresh)
        containerEl.createEl("h2", { text: t("set.keys") });
        const kb = this.plugin.settings.keyBindings;
        const keyMap: { key: keyof KeyBindings; label: string }[] = [
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
            { key: "navRight", label: t("set.key.right") },
        ];
        for (const item of keyMap) {
            const setting = new Setting(containerEl).setName(item.label);
            const curVal = String(kb[item.key]);
            const defVal = String(DEFAULT_KEYBINDINGS[item.key]);

            // Reset button - inline, no page refresh
            const resetEl = setting.controlEl.createEl("button", { text: "↺" });
            resetEl.style.cssText =
                "border:none;background:none;cursor:pointer;font-size:16px;color:var(--text-muted);padding:2px 6px;display:" +
                (curVal === defVal ? "none" : "inline") +
                ";";
            resetEl.addEventListener("click", async () => {
                (kb as any)[item.key] = defVal;
                await this.plugin.saveSettings();
                this.plugin.refreshAllViews();
                btn.setButtonText(defVal);
                resetEl.style.display = "none";
            });

            // Record button
            let btn: any;
            setting.addButton((b) => {
                btn = b;
                b.setButtonText(curVal || "...");
                b.onClick(() => {
                    b.setButtonText(t("set.key.press"));
                    const handler = (e: KeyboardEvent) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const parts: string[] = [];
                        if (e.ctrlKey || e.metaKey) parts.push("ctrl");
                        if (e.shiftKey) parts.push("shift");
                        if (e.altKey) parts.push("alt");
                        if (
                            !["Control", "Shift", "Alt", "Meta"].includes(e.key)
                        )
                            parts.push(e.key === " " ? "Space" : e.key);
                        if (!parts.length) return;
                        const combo = parts.join("+");
                        (kb as any)[item.key] = combo;
                        b.setButtonText(combo);
                        this.plugin.saveSettings();
                        this.plugin.refreshAllViews();
                        window.removeEventListener("keydown", handler, true);
                        // Show/hide reset button inline
                        resetEl.style.display =
                            combo === defVal ? "none" : "inline";
                    };
                    window.addEventListener("keydown", handler, true);
                });
            });
        }

        containerEl.createEl("h3", { text: t("set.scroll") });
        new Setting(containerEl).setName(t("set.invertY")).addToggle((tg) => {
            tg.setValue(kb.invertScrollY);
            tg.onChange(async (v) => {
                kb.invertScrollY = v;
                await this.plugin.saveSettings();
            });
        });
        new Setting(containerEl).setName(t("set.invertX")).addToggle((tg) => {
            tg.setValue(kb.invertScrollX);
            tg.onChange(async (v) => {
                kb.invertScrollX = v;
                await this.plugin.saveSettings();
            });
        });
        new Setting(containerEl)
            .setName(t("set.invertZoom"))
            .addToggle((tg) => {
                tg.setValue(kb.invertZoom);
                tg.onChange(async (v) => {
                    kb.invertZoom = v;
                    await this.plugin.saveSettings();
                });
            });
        // Restore scroll position
        setTimeout(() => {
            containerEl.scrollTop = scrollTop;
        }, 0);
    }
}
