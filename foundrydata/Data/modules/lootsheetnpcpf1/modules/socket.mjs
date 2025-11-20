import { LootSheetActions } from "./actions.mjs";

/**
 *
 * @param {object} data   The data received from the socket
 * @returns {void}
 */
export function runSocketListeners(data) {
  console.log("Loot Sheet | Socket Message: ", data);
  if (game.user.isGM && data.processorId === game.user.id) {
    const user = game.users.get(data.userId);
    const sourceActor = fromUuidSync(data.sourceUUID);
    const targetActor = fromUuidSync(data.targetUUID);
    // const sourceActor = game.actors.get(data.actorId);
    // const targetActor = data.tokenId ? canvas.tokens.get(data.tokenId).actor : game.actors.get(data.targetActorId);

    if (data.type === "buy") {
      if (sourceActor && targetActor) {
        LootSheetActions.transaction(user, targetActor, sourceActor, data.itemId, data.quantity);
      } else if (!targetActor) {
        LootSheetActions.errorMessageToActor(sourceActor, game.i18n.localize("ERROR.lsNoActiveGM"));
        ui.notifications.error(game.i18n.localize("ERROR.lsPurchaseAttempt"));
      }
    } else if (data.type === "loot") {
      if (sourceActor && targetActor) {
        LootSheetActions.lootItem(user, targetActor, sourceActor, data.itemId, data.quantity);
      } else if (!targetActor) {
        LootSheetActions.errorMessageToActor(sourceActor, game.i18n.localize("ERROR.lsNoActiveGM"));
        ui.notifications.error(game.i18n.localize("ERROR.lsLootAttempt"));
      }
    } else if (data.type === "drop") {
      if (sourceActor && targetActor) {
        LootSheetActions.dropOrSellItem(user, targetActor, sourceActor, data.itemId);
      }
    } else if (data.type === "give") {
      LootSheetActions.giveItem(user, sourceActor, targetActor, data.itemId, data.quantity);
    }
  }
  if (data.type === "error" && data.targetId === game.user.actorId) {
    console.log("Loot Sheet | Transaction Error: ", data.message);
    return ui.notifications.error(data.message);
  }
}
