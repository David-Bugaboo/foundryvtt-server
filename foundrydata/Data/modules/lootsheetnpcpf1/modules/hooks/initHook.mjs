import { LootSheetConstants } from "../constants.mjs";

/**
 *  Hook to add the dragstart event to the actor directory
 */
export function registerSettings() {
  game.settings.register(LootSheetConstants.MODULENAME, "changeScrollIcon", {
    name: game.i18n.localize("SETTINGS.lsChangeIconForSpellScrollsTitle"),
    hint: game.i18n.localize("SETTINGS.lsChangeIconForSpellScrollsHint"),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });

  game.settings.register(LootSheetConstants.MODULENAME, "buyChat", {
    name: game.i18n.localize("SETTINGS.lsPurchaseChatMessageTitle"),
    hint: game.i18n.localize("SETTINGS.lsPurchaseChatMessageHint"),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });

  game.settings.register(LootSheetConstants.MODULENAME, "lootChat", {
    name: game.i18n.localize("SETTINGS.lsLootChatMessageTitle"),
    hint: game.i18n.localize("SETTINGS.lsLootChatMessageHint"),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });

  game.settings.register(LootSheetConstants.MODULENAME, "dropChat", {
    name: game.i18n.localize("SETTINGS.lsDropChatMessageTitle"),
    hint: game.i18n.localize("SETTINGS.lsDropChatMessageHint"),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });

  game.settings.register(LootSheetConstants.MODULENAME, "givenChat", {
    name: game.i18n.localize("SETTINGS.lsGivenChatMessageTitle"),
    hint: game.i18n.localize("SETTINGS.lsGivenChatMessageHint"),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });

  game.settings.register(LootSheetConstants.MODULENAME, "clearInventory", {
    name: game.i18n.localize("SETTINGS.lsClearInventoryTitle"),
    hint: game.i18n.localize("SETTINGS.lsClearInventoryHint"),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register(LootSheetConstants.MODULENAME, "removeEmptyStacks", {
    name: game.i18n.localize("SETTINGS.lsRemoveEmptyStackTitle"),
    hint: game.i18n.localize("SETTINGS.lsRemoveEmptyStackHint"),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });
}
