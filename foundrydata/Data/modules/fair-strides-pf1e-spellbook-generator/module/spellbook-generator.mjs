import { spellFlags, template, template2 } from "./common.mjs";
import { SpellBookGenUI } from "./dialogs/spellbook-gen.mjs";

/**
 * Logic to show the Spellbook Generator UI
 *
 * @param {Event} _event	The initial button click event
 * @param {Actor} actor  	The actor to open the spellbook for
 */
export async function showSpellBookGenUI(_event, actor) {
  const activeWindow = Object.values(ui.windows).find(
    (k) => k.constructor.name === "SpellBookGenUI" && k.object === actor
  );
  activeWindow?.bringToTop() ?? SpellBookGenUI.open({ document: actor, classes: [`spellbook-gen-id-${actor?.id}`] });
}

/**
 * Injects the spellbook button into the actor sheet.
 *
 * @param {ActorSheet} sheet	The actor sheet to modify
 * @param {Array} buttons	 	The array of buttons to modify
 * @returns {void}
 */
function injectSpellBookButton(sheet, buttons) {
  if (!sheet.isEditable) return;

  buttons.unshift({
    class: "spell-gen-button",
    icon: "fab fa-leanpub",
    label: game.i18n.localize("SpellBookGenerator.Title"),
    onclick: async (ev) => showSpellBookGenUI(ev, sheet.actor),
  });
}

// Do anything after initialization but before ready
Hooks.once("setup", function () {
  game.settings.register(spellFlags.module, "spellbook", {
    name: "Spellbook Data",
    hint: "The world's saved spellbook progress that is not tied to an Actor.",
    default: null,
    scope: "world",
    type: Object,
    config: false,
  });

  game.settings.register(spellFlags.module, "flushBook", {
    name: "Clear Spellbook Data",
    hint: "Deletes the world's saved spellbook progress",
    default: false,
    scope: "world",
    type: Boolean,
    config: true,
    onChange: (_event) =>
      function () {
        game.settings.set(spellFlags.module, "spellbook", null);
      },
  });
});

Hooks.once("ready", () => {
  game.modules.get(spellFlags.module).api = { showSpellBookGenUI };

  Hooks.on("getActorSheetPFHeaderButtons", injectSpellBookButton);
});

Hooks.once("init", () => loadTemplates([template, template2]));
