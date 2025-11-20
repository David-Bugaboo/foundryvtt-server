import { LootSheetConstants } from "../constants.mjs";

/**
 * Check if the item is valid for the LootSheetNPC
 *
 * @param {object} item   The item to check
 * @returns {void|boolean}        Returns false if the item is not of type "Item"
 */
export async function checkValidLootItem(item) {
  const actor = item.actor;
  if (!actor) return true; // No actor, no validation needed

  // If the target actor is using the LootSheetPf1NPC then check in the item
  if (actor.sheet instanceof LootSheetConstants.LootSheetPf1NPC) {
    // validate the type of item to be "moved" or "added"
    if (!item.isPhysical) {
      ui.notifications.error(game.i18n.localize("ERROR.lsInvalidType"));
      return false;
    }
  }
}

/**
 * Check if the item is a spell scroll and change the icon
 *
 * @param {object} item  The item to check
 * @param {object} data  The data to check
 * @returns  {object|void}      Returns the item if it is a scroll
 */
export async function checkScrollIcon(item, data) {
  const actor = item.actor;
  if (!actor) return true; // No actor, no validation needed

  if (
    item.type === "consumable" &&
    item.system.subType === "scroll" &&
    game.settings.get(LootSheetConstants.MODULENAME, "changeScrollIcon")
  ) {
    const scrollIconId = (await new Roll("1d10 - 1").roll()).total;
    const scrollIcon = `modules/lootsheetnpcpf1/icons/Scroll${scrollIconId}.png`;

    data.img = scrollIcon;
    await item.updateSource({ img: scrollIcon });
    return item;
  }
}
