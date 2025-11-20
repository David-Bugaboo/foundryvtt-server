export const spellFlags = {
  module: "fair-strides-pf1e-spellbook-generator",
  actorKey: "spellBookGen",
  bookKey: "spellBookData",
  keymaster: "fsworkshop",
  defaultLink: "_linkedCaster",
};

export const template = "modules/fair-strides-pf1e-spellbook-generator/template/dialog.hbs"; // Main Interface
export const template2 = "modules/fair-strides-pf1e-spellbook-generator/template/dialogCreate.hbs"; // Book Creation Checklist

/**
 * @param {pf1.documents.actor.ActorPF} a - Actor
 * @returns {string}                      - Name (and ID if GM) of Actor
 */
export const actorName = (a) => (game.user.isGM ? `${a.name} [${a.id}]` : `${a.id}`);

/**
 * @param {pf1.documents.actor.ActorPF} actor - Actor
 * @returns {undefined | string}              - Link data or undefined
 */
export function getLink(actor) {
  const flag = actor.getFlag(spellFlags.module, spellFlags.actorKey);
  if (flag) return foundry.utils.duplicate(flag);
}

export const setLink = async (actor, linkData) => actor?.setFlag(spellFlags.module, spellFlags.actorKey, linkData);
export const delLink = async (actor) => actor?.unsetFlag(spellFlags.module, spellFlags.actorKey);

export const spellCosts = { 0: 5, 1: 10, 2: 40, 3: 90, 4: 160, 5: 250, 6: 360, 7: 490, 8: 640, 9: 810 };
export const spellSells = { 0: 2.5, 1: 5, 2: 20, 3: 45, 4: 80, 5: 125, 6: 180, 7: 245, 8: 320, 9: 405 };
export const spellPages = { 0: 1, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
