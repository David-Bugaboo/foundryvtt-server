import { spellFlags, getLink, setLink, delLink, spellCosts, spellSells, spellPages, template } from "../common.mjs";
import { SpellBookGenCreateUI } from "./spellbook-create.mjs";

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

export class SpellBookGenUI extends HandlebarsApplicationMixin(ApplicationV2) {
  static DEFAULT_OPTIONS = {
    tag: "form",
    id: "spellbook-gen-{id}",
    classes: ["fsworkshop", "fsworkshop-spellbook-gen"],
    window: {
      icon: "ra ra-scroll-unfurled",
      resizable: true,
    },
    position: {
      width: 800,
    },
    form: {
      closeOnSubmit: false,
      submitOnChange: false,
      resizable: true,
    },
    actions: {
      unlinkOwner: this.onUnlink,
      openLinkedOwner: this.openLinked,
      createBook: this.onCreateBook,
      cancelBook: this.onCancelBook,
      statsBook: this.onStatsBook,
      browseSpells: this.browseSpells,
      toggleSpell: this.toggleSpell,
      checkSpells: this.checkSpells,
      uncheckSpells: this.uncheckSpells,
      addLevelSpells: this.addLevelSpells,
      subLevelSpells: this.subLevelSpells,
      removeSpells: this.removeSpells,
      saveBook: this.saveBook,
      restoreBook: this.restoreBook,
      openSpell: this.openSpell,
      populateSpellList: this.populateSpellList,
    },
  };

  static PARTS = {
    main: {
      template: template,
    },
  };

  /**
   * @override
   * @param {object} options - Application options
   */
  constructor(options = {}) {
    super(options);

    this.document = options.document ?? null;
    this.linkedId = undefined;
    this.linked = undefined;
    this.linkName = undefined;
    this.linkedClass = "";
    this.linkLevel = 0;
    this.spellBook = {
      spells: {},
      spellsTotal: 0,
      pagesTotal: 0,
      booksTotal: 0,
      price: 0,
      value: 0,
      spells0: 0,
      spells1: 0,
      spells2: 0,
      spells3: 0,
      spells4: 0,
      spells5: 0,
      spells6: 0,
      spells7: 0,
      spells8: 0,
      spells9: 0,
    };
    this.statsHidden = true;

    this.linkData = { id: undefined, name: spellFlags.defaultLink };
    if (this.document !== null) {
      this._linkActorDirect(this.document.id, false);
    }
  }

  /** @override */
  _initializeApplicationOptions(options) {
    options = super._initializeApplicationOptions(options);

    options.uniqueId = options.document?.uuid.replaceAll(".", "-") ?? foundry.utils.randomID(16);

    return options;
  }

  get title() {
    return this.document
      ? game.i18n.format("SpellBookGenerator.TitleBar", { actor: this.document.name })
      : game.i18n.localize("SpellBookGenerator.Title");
  }

  /** @type {pf1.documents.actor.ActorPF} */
  linked = undefined;
  /** @type {string} */
  linkedId = undefined;
  /** @type {string} */
  linkName = undefined;
  /** @type {object} */
  linkData = undefined;
  /** @type {pf1.documents.item.ItemClassPF} */
  linkedClass = null;
  /** @type {number} */
  linkLevel = 0;
  /** @type {object} */
  spellBook = undefined;
  /** @type {boolean} */
  statsHidden = true;
  /** @type {pf1.documents.actor.ActorPF} */
  document = null;

  static open(actor) {
    new SpellBookGenUI(actor).render(true);
  }

  /** @override */
  _preparePartContext(partId, context, options) {
    switch (partId) {
      case "main": {
        context.isGM = game.user.isGM;

        if (this.document !== null && this.linkData?.spellsTotal !== 0) {
          this.linkData = getLink(this.document);
        }

        context.actor = this.actor;
        context.linkedId = this.linkedId = this.linkData?.id;
        context.linked = this.linked = game.actors.get(this.linkedId);
        context.linkName = this.linkName = this.linkData?.name;
        context.linkedImg = this.linkedImg = this.linked?.img ?? this.linked?.token?.img ?? CONST.DEFAULT_TOKEN;
        context.linkedClass = this.linkedClass?.id;
        context.linkLevel = this.linkLevel;
        context.linkSpellLevel = "level" + this.linkLevel;
        context.linkData = this.linkData;

        const actorChoices = { "": "" };
        if (!context.isGM) {
          game.actors.filter((o) => o.isOwner).forEach((o) => (actorChoices[o.id] = `${o.name} [${o.id}]`));
        }
        context.validActorChoices = actorChoices;

        const classChoices = { "": "" };
        const classChoices2 = Object.values(this.linked?.classes ?? {});
        for (const cls of classChoices2) {
          classChoices[cls._id] = cls.name;
        }
        context.validClassChoices = classChoices;

        const spellLevelChoices = {
          level0: game.i18n.localize("PF1.SpellLevels.0"),
          level1: game.i18n.localize("PF1.SpellLevels.1"),
          level2: game.i18n.localize("PF1.SpellLevels.2"),
          level3: game.i18n.localize("PF1.SpellLevels.3"),
          level4: game.i18n.localize("PF1.SpellLevels.4"),
          level5: game.i18n.localize("PF1.SpellLevels.5"),
          level6: game.i18n.localize("PF1.SpellLevels.6"),
          level7: game.i18n.localize("PF1.SpellLevels.7"),
          level8: game.i18n.localize("PF1.SpellLevels.8"),
          level9: game.i18n.localize("PF1.SpellLevels.9"),
        };
        context.spellLevelChoices = spellLevelChoices;

        // context.spells = this.spellBook.spells;
        context.listLevel = [[], [], [], [], [], [], [], [], [], []];
        for (const spell of Object.values(this.spellBook.spells)) {
          const spellLevel = spell.level ?? 0;
          if (!context.listLevel[spellLevel]) context.listLevel[spellLevel] = [];
          context.listLevel[spellLevel].push(spell);
        }

        context.spellBook = this.spellBook;

        context.statsHidden = this.statsHidden;
        break;
      }
    }

    return super._preparePartContext(partId, context, options);
  }

  /** @override */
  _onRender(context, options) {
    super._onRender(context, options);
    const html = this.element.querySelector(".window-content");

    this.element.querySelector(".window-title").innerText = this.title;
    html.addEventListener("drop", this._onDrop.bind(this));
  }

  /**
   * @override
   * @param {object} formConfig   - The form configuration
   * @param {PointerEvent} event  - The triggering event
   */
  _onChangeForm(formConfig, event) {
    super._onChangeForm(formConfig, event);

    const target = event.target;

    switch (target.name) {
      case "bookOwner": {
        this.onSelectChange(event);
        break;
      }
      case "ownerClass": {
        this.onClassChange(event);
        break;
      }
      case "spellLevelSelect": {
        this.onSpellLevelChange(event);
        break;
      }
    }

    this.render({ parts: ["main"] });
  }

  /** @override */
  async _onDrop(event) {
    event.preventDefault();
    event.stopPropagation();

    let dragData;
    try {
      dragData = JSON.parse(event.dataTransfer.getData("text/plain"));
    } catch (err) {
      console.error(err);
      return false;
    }
    const uuid = dragData.uuid;
    const dataItem = await fromUuid(uuid);
    if (!dataItem) {
      ui.notifications.error(game.i18n.localize("SpellBookGenerator.InvalidDrop"));
      return false;
    }

    if (dataItem.documentName === "Actor") {
      this._linkActorDirect(dataItem.id);
    } else if (dataItem.documentName === "Item" && dataItem.type === "spell") {
      const spellName = dataItem.name.replace(/\s/g, "");

      if ("spell" + spellName in this.spellBook.spells) {
        return;
      } // Spell has already been added!

      let spellText = `@UUID[${uuid}]`;
      let spellLevel = -1;

      if (uuid.match(/^(Compendium|Item)/i)) {
        if (this.linkedClass) {
          const spellClass = Object.entries(dataItem.system.learnedAt.class).find(
            ([key, _value]) => key === this.linkedClass.system.tag
          );
          if (spellClass && spellClass[1] !== null) {
            spellLevel = spellClass[1];
          }
        }

        if (spellLevel === -1) {
          spellLevel = Object.values(dataItem.system.learnedAt.class).reduce((acc, val) => acc + val, 0);
          const classNumber = Object.values(dataItem.system.learnedAt.class).length;

          spellLevel = Math.max(0, Math.floor(spellLevel / classNumber));
        }
      } else {
        // The spell is on an actor, so use its assigned level
        // Try to grab the compendium UUID as well.
        spellLevel = dataItem.system.level;
        if (dataItem.flags.core?.sourceId) spellText = `@UUID[${dataItem.flags.core.sourceId}]`;
      }

      if (spellLevel < 0 || spellLevel > 9) {
        ui.notifications.error(
          game.i18n.format("SpellBookGenerator.InvalidSpellLevel", {
            spell: dataItem.name,
            level: spellLevel,
          })
        );
        return;
      }

      this.spellBook.pagesTotal += spellPages[spellLevel];

      this.spellBook.spellsTotal += 1;
      this.spellBook.booksTotal = Math.ceil(this.spellBook.pagesTotal / 100);
      this.spellBook.price += spellCosts[spellLevel];
      this.spellBook.value += spellSells[spellLevel];

      this.spellBook[`spells${spellLevel}`] += 1;

      this.spellBook.spells["spell" + spellName] = {
        img: dataItem.img,
        name: dataItem.name,
        text: spellText,
        level: Number(spellLevel),
        checked: false,
        uuid: uuid,
      };
      console.debug(`Spell Text: ${spellText}.`);

      if (this.linkLevel !== spellLevel) {
        this.linkLevel = spellLevel;
      }

      this.render(true);
    }
  }

  /** @override */
  async _onSubmit(event, _updateData, _preventClose, _preventRender) {
    event.preventDefault();
  }

  /**
   * Links the spellbook to the selected actor.
   *
   * @param {string} actorId	- The ID of the actor to link to
   * @returns {Promise<SpellBookGenUI>} The rendered SpellBookGenUI instance
   */
  static async _linkActor(actorId) {
    const linkedActor = game.actors.get(actorId);
    if (!linkedActor) ui.notifications.error("SpellBookGenerator.LinkedActorNotFound", { actorId });

    if (!this.linkData) this.linkData = { id: undefined, name: spellFlags.defaultLink }; //, spellsTotal: 0, pagesTotal: 0, booksTotal: 0, price: 0, value: 0, spells0: 0, spells1: 0, spells2: 0, spells3: 0, spells4: 0, spells5: 0, spells6: 0, spells7: 0, spells8: 0, spells9: 0 };

    this.linkData.id = actorId;
    this.document = linkedActor;

    await setLink(this.document, this.linkData);
    this.linked = linkedActor;
    this.linkedId = actorId;
    this.linkedClass = null;

    return this.render(false);
  }

  /**
   * Links the spellbook to the selected actor.
   *
   * @param {string} actorId	The ID of the actor to link to
   * @param {boolean} render	Whether to re-render the UI after linking
   * @returns {Promise<SpellBookGenUI>} The rendered SpellBookGenUI instance
   */
  async _linkActorDirect(actorId, render = true) {
    const linkedActor = game.actors.get(actorId);
    if (!linkedActor) ui.notifications.error("SpellBookGenerator.LinkedActorNotFound", { actorId });

    if (!this.linkData) this.linkData = { id: undefined, name: spellFlags.defaultLink }; //, spellsTotal: 0, pagesTotal: 0, booksTotal: 0, price: 0, value: 0, spells0: 0, spells1: 0, spells2: 0, spells3: 0, spells4: 0, spells5: 0, spells6: 0, spells7: 0, spells8: 0, spells9: 0 };

    this.linkData.id = actorId;
    this.document = linkedActor;

    await setLink(this.document, this.linkData);
    this.linked = linkedActor;
    this.linkedId = actorId;
    this.linkedClass = null;

    if (render) return this.render(false);
  }

  /**
   * Sets a custom name for the link between the spellbook and the actor.
   *
   * @param {string} linkName - The custom name for the link
   * @returns {Promise<void>}
   */
  static async _linkName(linkName) {
    const rollData = this.document.getRollData();
    if (linkName in rollData) return; // disallow conflcits

    this.linkData.name = linkName;
    this.linkName = linkName;

    await setLink(this.document, this.linkData);
  }

  /**
   * Unlinks the spellbook from the currently linked actor.
   *
   * @param {Event} _event - The triggering event
   * @returns {Promise<void>}
   */
  static async onUnlink(_event) {
    if (this.linkedId !== null) {
      await delLink(this.document);
      this.document = null;
      this.linked = undefined;
      this.linkedId = null;
      this.linkName = undefined;
      this.linkedClass = null;
      this.linkLevel = 0;
      //this.linkData.id = null;
      this.linkData = { id: undefined, name: spellFlags.defaultLink };

      return this.render();
    }
  }

  /**
   * Unlinks the spellbook from the currently linked actor.
   *
   * @param {Event} _event - The triggering event
   * @returns {Promise<void>}
   */
  async onUnlinkDirect(_event) {
    if (this.linkedId !== null) {
      await delLink(this.document);
      this.document = null;
      this.linked = undefined;
      this.linkedId = null;
      this.linkName = undefined;
      this.linkedClass = null;
      this.linkLevel = 0;
      this.linkData.id = null;

      return this.render(true);
    }
  }

  /**
   * Opens the linked actor's sheet.
   *
   * @param {Event} _event  - The triggering event
   */
  static openLinked(_event) {
    const sheet = this.linked?.sheet;
    if (sheet) {
      if (sheet.rendered) {
        sheet.maximize();
        sheet.bringToTop();
      } else sheet.render(true);
    }
  }

  /**
   * Handles changes to the spell selection.
   *
   * @param {Event} event - The triggering event
   */
  onSelectChange(event) {
    const newId = event.target.value;
    if (newId?.length > 0) this._linkActorDirect(newId);
    else this.onUnlinkDirect(event);
  }

  /**
   * Handles changes to the spell level selection.
   *
   * @param {Event} event - The triggering event
   */
  onSpellLevelChange(event) {
    let newLevel = event.target.value;
    newLevel = parseInt(newLevel.slice(-1));
    this.linkLevel = newLevel;
    for (let i = 0; i < 10; i++) {
      if (i === newLevel) {
        document.getElementById("level" + parseInt(newLevel) + "-list").classList.replace("fs-hidden", "fs-block");
      } else {
        document.getElementById("level" + parseInt(i) + "-list").classList.replace("fs-block", "fs-hidden");
      }
    }
  }

  /**
   * Handles changes to the spell class selection.
   *
   * @param {Event} event - The triggering event
   */
  onClassChange(event) {
    this.linkedClass = this.linked.itemTypes.class.find((c) => c._id === event.target.value);
  }

  /**
   * Toggles the visibility of the spell statistics section.
   *
   * @param {Event} _event - The triggering event
   */
  static onStatsBook(_event) {
    const result = document.getElementById("spellStats").classList.toggle("fs-hidden");
    this.statsHidden = result;

    this.render(true);
  }

  /**
   * Create a new spellbook for the selected target (actor or world).
   *
   * @param {Event} _event - The triggering event
   */
  static onCreateBook(_event) {
    const spellLists = [];

    let spellTextString = "";
    for (let i = 0; i < 10; i++) {
      for (const spell in this.spellBook.spells) {
        if (this.spellBook.spells[spell].level === i) {
          spellTextString += this.spellBook.spells[spell].text;
        }
      }

      spellLists.push(spellTextString);
      spellTextString = "";
    }

    SpellBookGenCreateUI.open(this, this.spellBook, spellLists);
  }

  /**
   * Close the spellbook generator dialog without saving changes
   *
   * @param {Event} _event  - The triggering event
   */
  static onCancelBook(_event) {
    this.close();
  }

  /**
   * Open the spell compendium browser
   *
   * @returns {Promise<void>}
   */
  static async browseSpells() {
    pf1.applications.compendiums["spells"].render(true, { focus: true });
  }

  /**
   * Toggle the checked state of a spell
   *
   * @param {MouseEvent} event - The click event
   */
  static async toggleSpell(event) {
    /** @type {HTMLElement} */
    const spellTarget = event.target.closest("li[data-name]");
    if (!spellTarget) return;
    const spellName = spellTarget.dataset.name.replace(/\s/g, "");

    this.spellBook.spells["spell" + spellName].checked = !this.spellBook.spells["spell" + spellName].checked;
    spellTarget.classList.toggle("active");
  }

  /**
   * Check all spells of the current selected level
   */
  static async checkSpells() {
    Object.values(this.spellBook.spells)
      //  .filter((item) => item["level" + this.linkLevel])
      .filter((item) => item.level === this.linkLevel)
      .forEach((spell) => {
        spell.checked = true;
      });

    this.render();
  }

  /**
   * Uncheck all spells of the current selected level
   */
  static async uncheckSpells() {
    Object.values(this.spellBook.spells)
      //  .filter((item) => item["level" + this.linkLevel])
      .filter((item) => item.level === this.linkLevel)
      .forEach((spell) => {
        spell.checked = false;
      });

    this.render();
  }

  /**
   * Increase the level of all checked spells by 1, up to a maximum of 9.
   * Adjusts the spellbook's total pages, price, and value accordingly.
   * Re-renders the UI to reflect changes.
   */
  static async addLevelSpells() {
    Object.values(this.spellBook.spells)
      .filter((item) => item.checked)
      .forEach((spell) => {
        const spellLevel = spell.level || this.linkLevel;

        const newSpellLevel = Math.clamp(spellLevel + 1, 0, 9);
        spell.level = newSpellLevel;

        if (newSpellLevel !== spellLevel) {
          this.spellBook.pagesTotal += spellPages[newSpellLevel] - spellPages[spellLevel];
          this.spellBook.price += spellCosts[newSpellLevel] - spellCosts[spellLevel];
          this.spellBook.value += spellSells[newSpellLevel] - spellSells[spellLevel];
          this.spellBook["spells" + spellLevel] -= 1;
          this.spellBook["spells" + newSpellLevel] += 1;

          this.linkLevel = newSpellLevel;
        }
      });

    this.render();
  }

  /**
   * Decrease the level of all checked spells by 1, down to a minimum of 0.
   * Adjusts the spellbook's total pages, price, and value accordingly.
   * Re-renders the UI to reflect changes.
   */
  static async subLevelSpells() {
    Object.values(this.spellBook.spells)
      .filter((item) => item.checked)
      .forEach((spell) => {
        const spellLevel = spell.level || this.linkLevel;

        const newSpellLevel = Math.clamp(spellLevel - 1, 0, 9);
        spell.level = newSpellLevel;

        if (newSpellLevel !== spellLevel) {
          this.spellBook.pagesTotal += spellPages[newSpellLevel] - spellPages[spellLevel];
          this.spellBook.price += spellCosts[newSpellLevel] - spellCosts[spellLevel];
          this.spellBook.value += spellSells[newSpellLevel] - spellSells[spellLevel];
          this.spellBook["spells" + spellLevel] -= 1;
          this.spellBook["spells" + newSpellLevel] += 1;

          this.linkLevel = newSpellLevel;
        }
      });

    this.render();
  }

  /**
   * Remove all checked spells from the spellbook.
   * Adjusts the spellbook's total pages, price, and value accordingly.
   * Re-renders the UI to reflect changes.
   */
  static async removeSpells() {
    Object.entries(this.spellBook.spells)
      .filter(([_key, spell]) => spell.checked)
      .forEach(([spellKey, spell]) => {
        const spellLevel = spell.level;

        this.spellBook.pagesTotal -= spellPages[spellLevel];
        this.spellBook.spellsTotal -= 1;
        this.spellBook.price -= spellCosts[spellLevel];
        this.spellBook.value -= spellSells[spellLevel];
        this.spellBook["spells" + spellLevel] -= 1;
        this.spellBook.booksTotal = Math.ceil(this.spellBook.pagesTotal / 100);

        delete this.spellBook.spells[spellKey];
      });

    this.render();
  }

  /**
   * Save the spellbook to the selected target (actor or world).
   *
   * @param {PointerEvent} event - The triggering event containing the target type in its dataset
   */
  static saveBook(event) {
    const type = event.target.dataset.type;
    if (type === "actor" && this.linked) {
      this.linked.setFlag(spellFlags.module, spellFlags.bookKey, this.spellBook);
    } else if (type === "world") {
      game.settings.set(spellFlags.module, "spellbook", this.spellBook);
    }
  }

  /**
   * Restore the spellbook from the selected target (actor or world).
   *
   * @param {PointerEvent} event - The triggering event containing the target type in its dataset
   */
  static restoreBook(event) {
    const type = event.target.dataset.type;
    if (type === "actor" && this.linked) {
      const data = this.linked.getFlag(spellFlags.module, spellFlags.bookKey, this.spellBook);
      if (data) {
        this.spellBook = data;
      } else ui.notifications.warn(game.i18n.localize("SpellBookGenerator.NoRestorableData"));
    } else if (type === "actor") {
      ui.notifications.warn(game.i18n.localize("SpellBookGenerator.ActorNotLinked1"));
    } else if (type === "world") {
      const data = game.settings.get(spellFlags.module, "spellbook");

      if (!data) ui.notifications.warn(game.i18n.localize("SpellBookGenerator.NoRestorableData"));
      else this.spellBook = data;
    }

    this.render(true);
  }

  /**
   * Open a spell sheet.
   *
   * @param {Event} event   - The triggering event containing the spell UUID in its dataset
   */
  static openSpell(event) {
    const uuid = event.target.dataset.uuid;
    const spell = fromUuidSync(uuid);
    if (spell?.sheet) {
      spell.sheet.render(true);
    } else {
      ui.notifications.error(game.i18n.localize("SpellBookGenerator.InvalidSpellItem"));
    }
  }

  static async populateSpellList() {
    if (!this.linked) {
      ui.notifications.warn(game.i18n.localize("SpellBookGenerator.ActorNotLinked2"));
      return;
    }

    const content = game.i18n.localize("SpellBookGenerator.SpellListSelection");
    const buttons = [];
    for (const [bookId, book] of Object.entries(this.linked.system.attributes.spells.spellbooks)) {
      if (!book.inUse) continue;

      buttons.push({
        label: book.label,
        action: bookId,
        callback: () => {
          return bookId;
        },
      });
    }

    const choice = await foundry.applications.api.DialogV2.wait({
      window: {
        title: game.i18n.localize("SpellBookGenerator.SpellListSelection"),
        icon: "ra ra-scroll-unfurled",
        resizable: false,
      },
      content: `<p>${content}</p>`,
      buttons: buttons,
      default: buttons[0]?.action,
      modal: true,
    });

    if (!choice) return;

    this.spellBook = {
      spells: {},
      spellsTotal: 0,
      pagesTotal: 0,
      booksTotal: 0,
      price: 0,
      value: 0,
      spells0: 0,
      spells1: 0,
      spells2: 0,
      spells3: 0,
      spells4: 0,
      spells5: 0,
      spells6: 0,
      spells7: 0,
      spells8: 0,
      spells9: 0,
    };

    const spellList = this.linked.itemTypes.spell.filter((s) => s.system.spellbook === choice);
    for (const spell of spellList) {
      const spellName = spell.name.replace(/\s/g, "");

      // Skip duplicates
      if ("spell" + spellName in this.spellBook.spells) {
        continue;
      }

      const spellLevel = spell.system.level;
      const spellText = spell.flags.core?.sourceId
        ? `@UUID[${spell.flags.core.sourceId}]`
        : spell._stats.compendiumSource
          ? `@UUID[${spell._stats.compendiumSource}]`
          : spell.name;

      this.spellBook.pagesTotal += spellPages[spellLevel];

      this.spellBook.spellsTotal += 1;
      this.spellBook.booksTotal = Math.ceil(this.spellBook.pagesTotal / 100);
      this.spellBook.price += spellCosts[spellLevel];
      this.spellBook.value += spellSells[spellLevel];

      this.spellBook[`spells${spellLevel}`] += 1;

      this.spellBook.spells["spell" + spellName] = {
        img: spell.img,
        name: spell.name,
        text: spellText,
        level: spellLevel,
        checked: false,
        uuid: spell.uuid,
      };
    }

    this.render(true);
  }
}
