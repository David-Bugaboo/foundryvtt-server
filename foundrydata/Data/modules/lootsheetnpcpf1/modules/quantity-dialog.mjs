export class QuantityDialog extends foundry.applications.api.DialogV2 {
  constructor(callback, options) {
    if (typeof options !== "object") {
      options = {};
    }

    options = foundry.utils.mergeObject(
      {
        title: game.i18n.localize("ls.quantity"),
        label: game.i18n.localize("ls.quantity"),
        quantity: 1,
        acceptLabel: "ls.accept",
      },
      options
    );

    super({
      window: { title: options["title"] },
      content: `
            <form>
                <div class="form-group flexcol" style="justify-content: center;">
                    <label>${options["label"]}</label>
                    <input type=number min="1" id="quantity" name="quantity" value='${options["quantity"]}' style="text-align: center; width: 25%;">
                </div>
            </form>`,
      buttons: [
        {
          action: "yes",
          icon: "fa-solid fa-check",
          label: options.acceptLabel,
          default: true,
          callback: () => {
            const quantity = Number(document.getElementById("quantity").value);

            if (isNaN(quantity)) {
              console.log("Loot Sheet | Item quantity invalid");
              return ui.notifications.error(game.i18n.localize("ERROR.lsItemInvalidQuantity"));
            }

            callback(quantity);
          },
        },
        {
          action: "no",
          icon: "fa-solid fa-times",
          label: game.i18n.localize("ls.cancel"),
        },
      ],
      default: "yes",
    });
  }
}
