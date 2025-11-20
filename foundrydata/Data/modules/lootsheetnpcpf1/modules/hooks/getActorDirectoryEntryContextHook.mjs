import { LootSheetConstants } from "../constants.mjs";

/**
 *
 * @param {object} options  The options to add the conversion options to
 */
export function addLootSheetConversionOptions(options) {
  options.push({
    name: "ls.convertToLoot",
    icon: '<i class="fas fa-skull-crossbones"></i>',
    callback: async function (li) {
      const actor = game.actors.get(li.data("entryId"));
      if (actor) {
        await actor.setFlag("core", "sheetClass", "PF1.LootSheetPf1NPC");
        const permissions = foundry.utils.duplicate(actor.ownership);
        game.users.forEach((u) => {
          if (!u.isGM) {
            permissions[u.id] = CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER;
          }
        });
        await actor.update({ ownership: permissions }, { diff: false });
      }
    },
    condition: (li) => {
      const actor = game.actors.get(li.data("entryId"));
      return (
        game.user.isGM &&
        actor &&
        actor.type === "npc" &&
        !(actor.sheet instanceof LootSheetConstants.LootSheetPf1NPC) &&
        actor.prototypeToken.actorLink
      );
    },
  });

  // Special case: actor is not linked => convert all defeated tokens!
  options.push({
    name: "ls.convertToLootUnlinked",
    icon: '<i class="fas fa-skull-crossbones"></i>',
    callback: async function (li) {
      const actor = game.actors.get(li.data("entryId"));
      if (actor) {
        const tokens = game.scenes.active.tokens.filter((o) => o.actorId == actor.id);
        tokens.forEach(async function (t) {
          const effects = foundry.utils.getProperty(t.actorData, "effects");
          // to be considered dead, a token must have the "dead" overlay effect (either from combat tracker or directly)
          if (
            effects &&
            effects.filter(
              (e) =>
                [CONFIG.Combat.defeatedStatusId, "combat-utility-belt.dead"].indexOf(
                  foundry.utils.getProperty(e, "flags.core.statusId")
                ) >= 0
            ).length > 0
          ) {
            const actor = canvas.tokens.get(t._id).actor;
            if (!(actor.sheet instanceof LootSheetConstants.LootSheetPf1NPC)) {
              await actor.setFlag("core", "sheetClass", "PF1.LootSheetPf1NPC");
              const permissions = foundry.utils.duplicate(actor.ownership);
              game.users.forEach((u) => {
                if (!u.isGM) {
                  permissions[u.id] = CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER;
                }
              });
              await actor.update({ ownership: permissions }, { diff: false });
            }
          }
        });
      }
    },
    condition: (li) => {
      const actor = game.actors.get(li.data("entryId"));
      return (
        game.user.isGM &&
        actor &&
        actor.type === "npc" &&
        !(actor.sheet instanceof LootSheetConstants.LootSheetPf1NPC) &&
        !actor.prototypeToken.actorLink
      );
    },
  });
}
