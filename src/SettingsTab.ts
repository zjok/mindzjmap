// src/SettingsTab.ts
import { PluginSettingTab, App, Setting, ButtonComponent } from "obsidian";
import type MindNodePlugin from "./main";
import { LANGUAGES, Language, t, setLang } from "./i18n";
import { DEFAULT_KEYBINDINGS, KeyBindings } from "./types";

type StringKeyOf<T> = {
    [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];
type StringKeys = StringKeyOf<KeyBindings>;

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
        about.addClass("mz-about");
        const iconEl = about.createEl("div");
        iconEl.addClass("mz-about-icon");
        iconEl.innerText = "🗺️";
        const titleEl = about.createEl("h2", { text: "MindZJ" });
        titleEl.addClass("mz-about-title");
        const verEl = about.createEl("div", {
            text: `${t("set.version")}: ${this.plugin.manifest.version}`,
        });
        verEl.addClass("mz-about-meta");
        const authEl = about.createEl("div", {
            text: `${t("set.author")}: ${this.plugin.manifest.author}`,
        });
        authEl.addClass("mz-about-meta-last");
        const descEl = about.createEl("p", { text: t("set.desc") });
        descEl.addClass("mz-about-desc");
        const ghLink = about.createEl("div").createEl("a", {
            text: `📦 ${t("set.github")}`,
            href: "https://github.com/zjok/mindzj",
        });
        ghLink.addClass("mz-about-link");
        ghLink.setAttr("target", "_blank");

        // Donation
        const donSec = containerEl.createEl("div");
        donSec.addClass("mz-donate-sec");
        const donTitle = donSec.createEl("h3", {
            text: `☕ ${t("set.donate")}`,
        });
        donTitle.addClass("mz-donate-heading");
        const donBtns = donSec.createEl("div");
        donBtns.addClass("mz-donate-btns");
        const mkDon = (label: string, color: string, url: string) => {
            const a = donBtns.createEl("a", { href: url });
            a.setAttr("target", "_blank");
            a.addClass("mz-donate-btn");
            Object.entries({ "--mz-btn-color": color }).forEach(([k, v]) =>
                a.style.setProperty(k, v),
            );
            a.innerText = label;
        };
        mkDon(
            "☕ Buy Me a Coffee",
            "#FFDD00",
            "https://www.buymeacoffee.com/superjohn",
        );
        mkDon("❤️ Ko-fi", "#FF5E5B", "https://ko-fi.com/superjohn");
        mkDon("💰 PayPal", "#0070ba", "https://paypal.me/TanCat997");

        new Setting(containerEl).setName(t("set.title")).setHeading();

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

        // Custom node names
        const lang = this.plugin.settings.language;
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
            resetEl.addClass("mz-reset-btn");
            const curVal = (this.plugin.settings.customNodeNames[lang] || {})[
                field
            ];
            resetEl.toggleClass("mz-hidden", !(curVal && curVal !== defVal));
            resetEl.addEventListener("click", async () => {
                const c = { ...this.plugin.settings.customNodeNames };
                if (c[lang]) delete c[lang][field];
                this.plugin.settings.customNodeNames = c;
                await this.plugin.saveSettings();
                inp.value = defVal;
                resetEl.toggleClass("mz-hidden", true);
            });
            const inp = setting.controlEl.createEl("input") as HTMLInputElement;
            inp.type = "text";
            inp.value = curVal || defVal;
            inp.addClass("mz-name-input");
            inp.addEventListener("blur", async () => {
                const v = inp.value.trim();
                const c = { ...this.plugin.settings.customNodeNames };
                c[lang] = { ...(c[lang] || {}), [field]: v || undefined };
                this.plugin.settings.customNodeNames = c;
                await this.plugin.saveSettings();
                resetEl.toggleClass("mz-hidden", !(v && v !== defVal));
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

        // Keyboard shortcuts
        new Setting(containerEl).setName(t("set.keys")).setHeading();
        const kb = this.plugin.settings.keyBindings;
        const keyMap: { key: StringKeys; label: string }[] = [
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
            const curVal = kb[item.key];
            const defVal = DEFAULT_KEYBINDINGS[item.key] as string;
            const resetEl = setting.controlEl.createEl("button", { text: "↺" });
            resetEl.addClass("mz-reset-btn");
            resetEl.toggleClass("mz-hidden", curVal === defVal);
            resetEl.addEventListener("click", async () => {
                kb[item.key] = defVal;
                await this.plugin.saveSettings();
                this.plugin.refreshAllViews();
                btn.setButtonText(defVal);
                resetEl.toggleClass("mz-hidden", true);
            });
            let btn: ButtonComponent;
            setting.addButton((b) => {
                btn = b;
                b.setButtonText(String(curVal) || "...");
                b.onClick(() => {
                    b.setButtonText(t("set.key.press"));
                    let recording = true;
                    let currentCombo = "";
                    let hasMainKey = false;
                    let timeout: ReturnType<typeof setTimeout> | null = null;

                    const buildCombo = (e: KeyboardEvent): string => {
                        const parts: string[] = [];
                        if (e.ctrlKey || e.metaKey) parts.push("ctrl");
                        if (e.shiftKey) parts.push("shift");
                        if (e.altKey) parts.push("alt");
                        if (
                            !["Control", "Shift", "Alt", "Meta"].includes(e.key)
                        )
                            parts.push(e.key === " " ? "Space" : e.key);
                        return parts.join("+");
                    };

                    const finish = (combo: string) => {
                        if (!recording) return;
                        recording = false;
                        if (timeout) clearTimeout(timeout);
                        window.removeEventListener("keydown", onDown, true);
                        window.removeEventListener("keyup", onUp, true);
                        kb[item.key] = combo;
                        b.setButtonText(combo);
                        void this.plugin.saveSettings();
                        this.plugin.refreshAllViews();
                        resetEl.toggleClass("mz-hidden", combo === defVal);
                    };

                    const cancel = () => {
                        if (!recording) return;
                        recording = false;
                        if (timeout) clearTimeout(timeout);
                        window.removeEventListener("keydown", onDown, true);
                        window.removeEventListener("keyup", onUp, true);
                        b.setButtonText(String(kb[item.key]) || "...");
                    };

                    const onDown = (e: KeyboardEvent) => {
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
                            "Meta",
                        ].includes(e.key);
                        b.setButtonText(
                            currentCombo + (hasMainKey ? "" : "+…"),
                        );
                        // Reset timeout on each keydown
                        if (timeout) clearTimeout(timeout);
                        timeout = setTimeout(cancel, 5000);
                    };

                    const onUp = (e: KeyboardEvent) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Finalize when a non-modifier key is released
                        if (hasMainKey && currentCombo) {
                            finish(currentCombo);
                        }
                    };

                    window.addEventListener("keydown", onDown, true);
                    window.addEventListener("keyup", onUp, true);
                    timeout = setTimeout(cancel, 5000);
                });
            });
        }

        new Setting(containerEl).setName(t("set.scroll")).setHeading();
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

        setTimeout(() => {
            containerEl.scrollTop = scrollTop;
        }, 0);
    }
}
