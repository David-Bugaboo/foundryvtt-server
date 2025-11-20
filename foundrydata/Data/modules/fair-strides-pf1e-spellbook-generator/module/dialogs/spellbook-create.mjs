/* eslint-disable quotes */
import { template2 } from "../common.mjs";

const spellBookIdCompact = "Compendium.pf-content.pf-items.Item.g7Q6TmbUndATmjl8";
const spellBookIdNormal = "Compendium.pf1.items.Item.onurpjwtdogsedsg";
const spellBookIdTravel = "Compendium.pf-content.pf-items.Item.LsbmGQ3QMmdnErEK";
const formulaBookIdNormal = "Compendium.pf1.items.Item.3cF2AyPBjbB8ckon";
const formulaBookIdTravel = "Compendium.pf-content.pf-items.Item.LgZ1GA2oQ5coYtMU";

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

export class SpellBookGenCreateUI extends HandlebarsApplicationMixin(ApplicationV2) {
  static DEFAULT_OPTIONS = {
    tag: "form",
    id: "spellbook-gen-create-{id}",
    classes: ["fsworkshop", "fsworkshop-spellbook-gen-create"],
    window: {
      icon: "ra ra-scroll-unfurled",
      resizable: true,
    },
    // position: {
    //   width: 500,
    //   height: 315,
    // },
    form: {
      closeOnSubmit: true,
      submitOnChange: false,
      resizable: true,
    },
    actions: {
      createBook: this.onCreateBook,
      cancelBook: this.onCancelBook,
    },
  };

  get title() {
    return game.i18n.localize("SpellBookGenerator.TitleBarCreate");
  }

  static PARTS = {
    main: {
      template: template2,
    },
  };

  /** @override */
  _initializeApplicationOptions(options) {
    options = super._initializeApplicationOptions(options);

    options.uniqueId = options.document?.uuid.replaceAll(".", "-") ?? foundry.utils.randomID(16);

    return options;
  }

  spellBook = undefined;
  spellBookData = undefined;
  spellLists = undefined;
  spellBookType = 1;
  spellBookPages = 0;
  spellBookTotal = 1;
  spellBookWeight = 1;
  spellBookPrice = 0;
  spellBookId = undefined;
  spellBookName = undefined;

  constructor(objectBook, objectData, spellLists, options = {}) {
    super(options);

    this.spellBook = objectBook;
    this.spellBookData = objectData;
    this.spellLists = spellLists;
    this.spellBookTotal = 1;
    this.spellBookType = 1;
    this.spellBookPrice = 0;

    this.spellBookId = spellBookIdNormal;
    this.spellBookPages = 100;
    this.spellBookWeight = 3;
    this.spellBookName = " Spellbook";
    this.spellBookTotal = Math.ceil(this.spellBookData.pagesTotal / this.spellBookPages);

    const spellbookItem = fromUuidSync(this.spellBookId);
    this.spellBookPrice = spellbookItem.system.price;
    this.spellBookData.price += this.spellBookPrice;
    this.spellBookData.value += this.spellBookPrice / 2;
  }

  static open(spellGenUI, spells, spellLists) {
    new SpellBookGenCreateUI(spellGenUI, spells, spellLists).render(true);
  }

  /**
   * On close, remove the book price from the total in case the user re-opens the dialog.
   *
   * @param {object} options - Options passed to the close method
   * @override
   */
  close(options = {}) {
    this.spellBookData.price -= this.spellBookPrice;
    this.spellBookData.value -= this.spellBookPrice / 2;
    super.close(options);
  }

  /** @override */
  _preparePartContext(partId, context, options) {
    switch (partId) {
      case "main": {
        context.spellBook = this.spellBook;
        context.spellBookTotal = this.spellBookTotal;
        context.spellBookChoices = {
          0: "Compact Spellbook",
          1: "Normal Spellbook",
          2: "Travelling Spellbook",
          3: "Formula Book",
          4: "Travelling Formula Book",
        };
        context.spellBookType = this.spellBookType;
        context.spellBookData = this.spellBookData;
      }
    }

    return super._preparePartContext(partId, context, options);
  }

  async _onSubmit(event, _updateData, _preventClose, _preventRender) {
    event.preventDefault();
  }

  static async onCreateBook(_event) {
    this.spellBookId = undefined;

    await this.setSpellBookDetails();

    const index = await fromUuid(this.spellBookId);
    const spellBookItem = await Item.create(index, { temporary: true });

    await spellBookItem.updateSource({
      "system.description.value":
        spellBookItem.system.description.value +
        "<hr><p><b><u>Pages used:</u></b> " +
        parseInt(this.spellBookData.pagesTotal) +
        "</p><p><b><u>Books carried:</u></b> " +
        parseInt(this.spellBookTotal) +
        "<hr>",
      "system.price": parseInt(this.spellBookData.price),
      "system.weight.value": this.spellBookWeight * this.spellBookTotal,
    });

    if (!this.spellBook.linked) {
      await spellBookItem.updateSource({
        "system.unidentified.name": this.spellBookName,
        name: this.spellBookName,
      });
    } else {
      await spellBookItem.updateSource({
        "system.unidentified.name": this.spellBook.linked.name + "'s" + this.spellBookName,
        name: this.spellBook.linked.name + "'s" + this.spellBookName,
      });
    }

    for (let i = 0; i < 10; i++) {
      if (this.spellLists[i] !== "") {
        let header = "";
        switch (i) {
          case 0:
            header = "PF1.SpellLevels.0";
            break;
          case 1:
            header = "PF1.SpellLevels.1";
            break;
          case 2:
            header = "PF1.SpellLevels.2";
            break;
          case 3:
            header = "PF1.SpellLevels.3";
            break;
          case 4:
            header = "PF1.SpellLevels.4";
            break;
          case 5:
            header = "PF1.SpellLevels.5";
            break;
          case 6:
            header = "PF1.SpellLevels.6";
            break;
          case 7:
            header = "PF1.SpellLevels.7";
            break;
          case 8:
            header = "PF1.SpellLevels.8";
            break;
          case 9:
            header = "PF1.SpellLevels.9";
            break;
        }

        header = `<h2>${game.i18n.localize(header)}</h2>`;

        await spellBookItem.updateSource({
          "system.description.value":
            spellBookItem.system.description.value +
            header +
            (game.release.generation === 12
              ? await TextEditor.enrichHTML(this.spellLists[i])
              : await foundry.applications.ux.TextEditor.implementation.enrichHTML(this.spellLists[i])) +
            "<br /><br />",
        });
      }
    }

    if (!this.spellBook.linked) {
      Item.create(spellBookItem);
    } else {
      this.spellBook.linked.createEmbeddedDocuments("Item", [spellBookItem]);
    }
    this.spellBook.close();
    this.close();
  }

  static onCancelBook(_event) {
    this.close();
  }

  async onSelectBook(event) {
    this.spellBookType = parseInt(event.target.value);
    this.spellBookData.price -= this.spellBookPrice;
    this.spellBookData.value -= this.spellBookPrice / 2;

    await this.setSpellBookDetails();

    const spellBookItem = await fromUuid(this.spellBookId);

    if (this.spellBookTotal > 1) {
      this.spellBookName += "s";
      spellBookItem.system.price *= this.spellBookTotal;
    }

    this.spellBookPrice = spellBookItem.system.price;

    this.spellBookTotal = Math.ceil(this.spellBookData.pagesTotal / this.spellBookPages);
    this.spellBookData.price += this.spellBookPrice;
    this.spellBookData.value += this.spellBookPrice / 2;

    this.render(true);
  }

  async setSpellBookDetails() {
    switch (this.spellBookType) {
      case 0:
        this.spellBookId = spellBookIdCompact;
        this.spellBookPages = 70;
        this.spellBookWeight = 1;
        this.spellBookTotal = Math.ceil(this.spellBookData.pagesTotal / this.spellBookPages);
        break;
      case 1:
        this.spellBookId = spellBookIdNormal;
        this.spellBookPages = 100;
        this.spellBookWeight = 3;
        this.spellBookTotal = Math.ceil(this.spellBookData.pagesTotal / this.spellBookPages);
        break;
      case 2:
        this.spellBookId = spellBookIdTravel;
        this.spellBookPages = 50;
        this.spellBookWeight = 1;
        this.spellBookTotal = Math.ceil(this.spellBookData.pagesTotal / this.spellBookPages);
        break;
      case 3:
        this.spellBookId = formulaBookIdNormal;
        this.spellBookPages = 100;
        this.spellBookWeight = 3;
        this.spellBookTotal = Math.ceil(this.spellBookData.pagesTotal / this.spellBookPages);
        break;
      case 4:
        this.spellBookId = formulaBookIdTravel;
        this.spellBookPages = 50;
        this.spellBookWeight = 1;
        this.spellBookTotal = Math.ceil(this.spellBookData.pagesTotal / this.spellBookPages);
        break;
      default:
        this.spellBookId = spellBookIdNormal;
        this.spellBookPages = 100;
        this.spellBookWeight = 3;
        this.spellBookTotal = Math.ceil(this.spellBookData.pagesTotal / this.spellBookPages);
    }

    const spellBookItem = await fromUuid(this.spellBookId);
    this.spellBookName = ` ${spellBookItem.name}`;
  }

  /**
   * @override
   * @param {object} formConfig   - The form configuration
   * @param {PointerEvent} event  - The triggering event
   */
  _onChangeForm(formConfig, event) {
    super._onChangeForm(formConfig, event);

    const target = event.target;

    if (target.name === "spellBookSelect") {
      this.onSelectBook(event);
    }
  }
}
