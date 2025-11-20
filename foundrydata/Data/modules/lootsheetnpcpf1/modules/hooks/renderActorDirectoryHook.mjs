import { LootSheetConstants } from "../constants.mjs";
import { LootSheetActions } from "../actions.mjs";
import { QuantityDialog } from "../quantity-dialog.mjs";

/**
 * Hook to add the dragstart event to the actor directory
 *
 * @param {string} actorDestId  The actor id of the actor to give the item to
 * @param {Event} event      The event
 * @returns {void|boolean}        Returns false if the item is not of type "Item"
 */
export function giveItemTo(actorDestId, event) {
  event.preventDefault();

  // try to extract the data
  let data;
  try {
    data = JSON.parse(event.dataTransfer.getData("text/plain"));
    if (data.type !== "Item") return;
    // eslint-disable-next-line no-unused-vars
  } catch (_err) {
    return false;
  }

  const uuidParts = data.uuid.split(".");
  const [giver, itemId] = LootSheetActions.getSourceActorAndItem(uuidParts);
  const receiver = game.actors.get(actorDestId);
  const item = giver.getEmbeddedDocument("Item", itemId);
  if (!item) return;

  // validate the type of item to be "moved" or "added"
  if (!["weapon", "equipment", "consumable", "loot"].includes(item.type)) {
    ui.notifications.error(game.i18n.localize("ERROR.lsGiveInvalidType"));
    return false;
  }

  let targetGm = null;
  game.users.forEach((u) => {
    if (u.isGM && u.active && u.viewedScene === game.user.viewedScene) {
      targetGm = u;
    }
  });
  if (!targetGm) return;

  const options = {};
  if (giver.id === actorDestId) {
    if (item.system.quantity == 1) {
      ui.notifications.error(game.i18n.localize("ERROR.lsWhyGivingToYourself"));
      console.log("Loot Sheet | Ignoring giving something to same person");
      return false;
    }
    options["title"] = game.i18n.localize("ls.giveTitleSplit");
    options["acceptLabel"] = game.i18n.localize("ls.split");
  } else if (item.system.quantity == 1) {
    options["title"] = game.i18n.localize("ls.give");
    options["label"] = game.i18n.format("ls.giveContentSingle", { item: item.name, actor: receiver.name });
    options["quantity"] = 1;
    options["acceptLabel"] = game.i18n.localize("ls.give");
  } else {
    options["title"] = game.i18n.format("ls.giveTitle", { item: item.name, actor: receiver.name });
    options["label"] = game.i18n.localize("ls.giveContent");
    options["acceptLabel"] = game.i18n.localize("ls.give");
  }

  const d = new QuantityDialog((quantity) => {
    if (game.user.isGM) {
      LootSheetActions.giveItem(game.user, giver, receiver, itemId, quantity);
    } else {
      const packet = {
        type: "give",
        userId: game.user.id,
        itemId,
        sourceUUID: giver.uuid,
        targetUUID: receiver.uuid,
        processorId: targetGm._id,
        quantity: quantity,
      };
      console.log(`Loot Sheet | Sending packet to ${actorDestId}`);
      game.socket.emit(LootSheetConstants.SOCKET, packet);
    }
  }, options);
  d.render(true);
}
