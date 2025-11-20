/**
 * Adapted for PF1 system from original module: https://github.com/jopeek/fvtt-loot-sheet-npc-5e
 */

import { LootSheetConstants } from "./modules/constants.mjs";
import { runSocketListeners } from "./modules/socket.mjs";
import { registerSettings } from "./modules/hooks/initHook.mjs";
import { checkValidLootItem, checkScrollIcon } from "./modules/hooks/preCreateOwnedItemHook.mjs";
import { registerHandlebarsHelpers } from "./modules/handlebarHelpers.mjs";
import { addLootSheetConversionOptions } from "./modules/hooks/getActorDirectoryEntryContextHook.mjs";
import { giveItemTo } from "./modules/hooks/renderActorDirectoryHook.mjs";

// Module's entry point
Hooks.on("ready", async () => {
  LootSheetConstants.LootSheetPf1NPC = (await import("./modules/lootsheet-npc.mjs")).LootSheetPf1NPC;

  //Register the loot sheet
  Actors.registerSheet("PF1", LootSheetConstants.LootSheetPf1NPC, {
    label: "ACTORS.lootsheetNPC",
    types: ["npc"],
    makeDefault: false,
  });
});

/**
 * Check if the item is valid for the LootSheetNPC
 */
Hooks.on("preCreateItem", async (item, data) => {
  return checkValidLootItem(item, data);
});

/**
 * Check if we need to change the scroll icon
 */
Hooks.on("createItem", async (item, data) => {
  return await checkScrollIcon(item, data);
});

/**
 * Register drop action on actor
 */
Hooks.on("renderActorDirectory", (_app, html, _data) => {
  // Backwards compatiblity for Foundry v12 (jQuery still)
  if (html instanceof jQuery) {
    html = html[0];
  }

  html.querySelectorAll("li.actor").forEach((li) => {
    li.addEventListener("drop", giveItemTo.bind(this, li.getAttribute("data-entry-id")));
  });
});

Hooks.once("init", () => {
  loadTemplates([
    "modules/lootsheetnpcpf1/templates/npc-sheet-gmpart.hbs",
    "modules/lootsheetnpcpf1/templates/dialog-price-modifier.hbs",
  ]);

  registerHandlebarsHelpers();

  registerSettings();

  /*******************************************
   *          SOCKET HANDLING!
   *******************************************/
  game.socket.on(LootSheetConstants.SOCKET, (data) => {
    runSocketListeners(data);
  });
});

Hooks.on("getActorDirectoryEntryContext", (_html, options) => {
  addLootSheetConversionOptions(options);
});
