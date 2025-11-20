/*************************
 * Global static actions
 *************************
 */
export class LootSheetActions {
  /**
   * Displays a message into the chat log
   *
   * @param {object} speaker The speaker object
   * @param {object} owner The owner object
   * @param {string} message The message to display
   * @param {object} item The item object
   * @param {string} operation The chat message operation
   */
  static async chatMessage(speaker, owner, message, item, operation) {
    if (game.settings.get("lootsheetnpcpf1", operation)) {
      const data = {
        speaker,
        owner,
        message,
        item,
      };

      const messageContent = await renderTemplate("modules/lootsheetnpcpf1/templates/chat-message.hbs", data);

      ChatMessage.create({
        author: game.user.id,
        speaker: {
          actor: speaker.character,
          alias: speaker.name,
        },
        content: messageContent,
      });
    }
  }

  /**
   * Sends a error message to the target user
   *
   * @param {object} target The target user
   * @param {string} message The message to send
   */
  static errorMessageToActor(target, message) {
    game.socket.emit("module.lootsheetnpcpf1", {
      type: "error",
      targetId: target?.id,
      message: message,
    });
  }

  /**
   * Moves an item from a source actor to a destination actor
   *
   * @param {object} source The source actor
   * @param {object} destination The destination actor
   * @param {string} itemId The item id
   * @param {number} quantity The quantity to move
   * @returns {object} The item and quantity moved
   */
  static moveItem(source, destination, itemId, quantity, containerId = null) {
    let item = source.getEmbeddedDocument("Item", itemId);
    if (!item && containerId) {
      const container = source.getEmbeddedDocument("Item", containerId);

      if (container) {
        item = container.items.get(itemId);
      }
    }
    console.log("Loot Sheet | moveItem", item);
    if (!item) {
      ui.notifications.warn(game.i18n.format("ERROR.lsInvalidMove", { actor: source.name }));
      console.log(source, destination, itemId);
      return null;
    }
    //    item = item.data // migration to 0.8.x

    if (!quantity) {
      console.log("setting quantity variable to " + parseInt(item.system.quantity));
      quantity = item.system.quantity;
    }

    // Move all items if we select more than the quantity.
    if (item.system.quantity < quantity && (!item.flags.lootsheetnpcpf1?.infinite || false)) {
      console.log("setting quantity to move to " + parseInt(item.system.quantity));
      quantity = item.system.quantity;
    }

    const newItem = foundry.utils.duplicate(item);

    // remove unecessary flags
    if (newItem.flags.lootsheetnpcpf1) {
      delete newItem.flags.lootsheetnpcpf1;
    }

    // decrease the quantity (unless infinite)
    if (!item.flags.lootsheetnpcpf1 || !item.flags.lootsheetnpcpf1.infinite) {
      console.log("setting Item quantity to " + parseInt(item.system.quantity - quantity));
      const update = {
        _id: itemId,
        "system.quantity": item.system.quantity - quantity,
      };

      const removeEmptyStacks = game.settings.get("lootsheetnpcpf1", "removeEmptyStacks");
      if (update["system.quantity"] === 0 && removeEmptyStacks) {
        (source.documentName === "Token" ? source.actor : source).deleteEmbeddedDocuments("Item", [itemId]);
      } else {
        (source.documentName === "Token" ? source.actor : source).updateEmbeddedDocuments("Item", [update]);
      }
    }

    newItem.system.quantity = quantity;
    destination.createEmbeddedDocuments("Item", [newItem]);
    newItem.showName = LootSheetActions.getItemName(newItem);
    newItem.showCost = LootSheetActions.getItemCost(newItem);
    console.log("newItem!", newItem.system.quantity, newItem.showName, newItem.showCost);

    return {
      item: newItem,
      quantity: quantity,
    };
  }

  static spreadFunds(totalGP, funds) {
    const gpBare = Math.floor(totalGP),
      spLeftOver = (totalGP - gpBare) * 10,
      spBare = Math.floor(spLeftOver),
      cpLeftOver = (spLeftOver - spBare) * 10,
      cpBare = Math.floor(cpLeftOver);
    funds.gp += gpBare;
    funds.sp += spBare;
    funds.cp += cpBare;
    return funds;
  }

  /**
   * Moves coins from a source actor to a destination actor
   *
   * @param {object} source The source actor
   * @param {object} destination The destination actor
   * @param {string} itemId The item id
   * @param {number} quantity The quantity to move
   * @returns {object} The quantity moved
   */
  static moveCoins(source, destination, itemId, quantity) {
    //console.log("Loot Sheet | moveCoins")

    if (itemId.startsWith("wl_")) {
      itemId = itemId.substring(3);

      // Move all items if we select more than the quantity.
      const coins = source.system.altCurrency[itemId];
      if (coins < quantity) {
        quantity = coins;
      }

      if (quantity == 0) return null;

      const srcUpdate = { system: { altCurrency: {} } };
      srcUpdate.system.altCurrency[itemId] = source.system.altCurrency[itemId] - quantity;
      source.update(srcUpdate);

      const dstUpdate = { system: { altCurrency: {} } };
      dstUpdate.system.altCurrency[itemId] = destination.system.altCurrency[itemId] + quantity;
      destination.update(dstUpdate);
    } else {
      // Move all items if we select more than the quantity.
      const coins = source.system.currency[itemId];
      if (coins < quantity) {
        quantity = coins;
      }

      if (quantity == 0) return null;

      const srcUpdate = { system: { currency: {} } };
      srcUpdate.system.currency[itemId] = source.system.currency[itemId] - quantity;
      source.update(srcUpdate);

      const dstUpdate = { system: { currency: {} } };
      dstUpdate.system.currency[itemId] = destination.system.currency[itemId] + quantity;
      destination.update(dstUpdate);
    }

    return {
      quantity: quantity,
    };
  }

  /**
   * A looter (target actor) takes an item from a container (source actor)
   *
   * @param {object} speaker The speaker object
   * @param {object} container The container object
   * @param {object} looter The looter object
   * @param {string} itemId The item id
   * @param {number} quantity The quantity to loot
   */
  static lootItem(speaker, container, looter, itemId, quantity) {
    console.log("Loot Sheet | LootSheetActions.lootItem");

    if (itemId.length == 2 || itemId.startsWith("wl_")) {
      const moved = LootSheetActions.moveCoins(container, looter, itemId, quantity);

      if (moved) {
        LootSheetActions.chatMessage(
          speaker,
          looter,
          game.i18n.format("ls.chatLootCoins", {
            buyer: looter.name,
            quantity: moved.quantity,
            currency: game.i18n.localize("ls." + itemId),
          }),
          null,
          "lootChat"
        );

        Hooks.callAll("LootSheetNPC.LootCoins", {
          user: speaker,
          buyer: looter,
          type: itemId.substring(0, 3) === "wl_" ? itemId.substring(3) : itemId,
          weightless: itemId.substring(0, 3) === "wl_",
          amount: moved.quantity,
        });
      }
    } else {
      const moved = LootSheetActions.moveItem(container, looter, itemId, quantity);
      if (!moved) return;

      LootSheetActions.chatMessage(
        speaker,
        looter,
        game.i18n.format("ls.chatLoot", { buyer: looter.name, quantity: moved.quantity, name: moved.item.showName }),
        moved.item,
        "lootChat"
      );
    }
  }

  /**
   * A giver (source actor) drops or sells a item to a container (target actor)
   *
   * @param {object} speaker The speaker object
   * @param {object} container The container object
   * @param {object} giver The giver object
   * @param {string} itemId The item id
   */
  static async dropOrSellItem(speaker, container, giver, itemId, containerId = null) {
    //console.log("Loot Sheet | Drop or sell item")
    const moved = LootSheetActions.moveItem(giver, container, itemId, null, containerId);
    if (!moved) return;
    console.log("Moved item: ", moved);
    let messageKey = "";
    let settingKey = "";
    let cost = moved.item.showCost;

    if (container.getFlag("lootsheetnpcpf1", "lootsheettype") === "Merchant") {
      messageKey = "ls.chatSell";
      settingKey = "buyChat";
      let sellerFunds = foundry.utils.duplicate(giver.system.currency);
      if (sellerFunds && moved.item.showCost > 0) {
        if (moved.item.subType !== "tradeGoods") cost = cost / 2;

        const totalGP = cost * moved.quantity;
        sellerFunds = LootSheetActions.spreadFunds(totalGP, sellerFunds);
        await giver.update({ "system.currency": sellerFunds });
      }
    } else {
      messageKey = "ls.chatDrop";
      settingKey = "dropChat";
    }
    console.log("drop or sell", speaker, giver);
    LootSheetActions.chatMessage(
      speaker,
      giver,
      game.i18n.format(messageKey, {
        seller: giver.name,
        quantity: moved.quantity,
        price: cost * moved.quantity,
        item: moved.item.showName,
        container: container.name,
      }),
      moved.item,
      settingKey
    );
  }

  /**
   * Quick function to do a trasaction between a seller (source) and a buyer (target)
   *
   * @param {object} speaker The speaker object
   * @param {object} seller The seller object
   * @param {object} buyer The buyer object
   * @param {string} itemId The item id
   * @param {number} quantity The quantity to buy
   */
  static async transaction(speaker, seller, buyer, itemId, quantity) {
    console.log("Loot Sheet | Transaction");

    const sellItem = seller.getEmbeddedDocument("Item", itemId);

    // If the buyer attempts to buy more then what's in stock, buy all the stock.
    if (sellItem.quantity < quantity) {
      quantity = sellItem.quantity;
    }

    let sellerModifier = seller.getFlag("lootsheetnpcpf1", "priceModifier");
    if (!sellerModifier) sellerModifier = 1.0;

    let itemCost = LootSheetActions.getItemCost(sellItem);
    itemCost = itemCost * sellerModifier;
    itemCost *= quantity;
    let buyerFunds = foundry.utils.duplicate(buyer.system.currency);
    let buyerFundsAlt = foundry.utils.duplicate(buyer.system.altCurrency);
    const conversionRate = {
      pp: 10,
      gp: 1,
      sp: 0.1,
      cp: 0.01,
    };
    let buyerFundsAsGold = 0;
    let buyerFundsAsGoldAlt = 0;

    for (const currency in buyerFunds) {
      buyerFundsAsGold += Math.floor(buyerFunds[currency] * conversionRate[currency]);
    }
    for (const currency in buyerFundsAlt) {
      buyerFundsAsGoldAlt += Math.floor(buyerFundsAlt[currency] * conversionRate[currency]);
    }

    if (itemCost > buyerFundsAsGold + buyerFundsAsGoldAlt) {
      LootSheetActions.errorMessageToActor(buyer, game.i18n.localize("ERROR.lsNotEnougFunds"));
      return;
    }
    const originalCost = itemCost;

    // Update buyer's gold

    // make sure that coins is a number (not a float)
    while (!Number.isInteger(itemCost)) {
      itemCost *= 10;
      for (const key in conversionRate) {
        conversionRate[key] *= 10;
      }
    }

    // cost can be paid with funds
    if (itemCost <= buyerFundsAsGold) {
      buyerFunds = LootSheetActions.removeCostFromFunds(buyer, itemCost, buyerFunds, conversionRate);
      await buyer.update({ "system.currency": buyerFunds });
    }
    // cost must also be paid with weightless funds
    else {
      buyerFunds = LootSheetActions.removeCostFromFunds(buyer, buyerFundsAsGold, buyerFunds, conversionRate);
      buyerFundsAlt = LootSheetActions.removeCostFromFunds(
        buyer,
        itemCost - buyerFundsAsGold,
        buyerFundsAlt,
        conversionRate
      );
      await buyer.update({ "system.currency": buyerFunds, "system.altCurrency": buyerFundsAlt });
    }

    const moved = LootSheetActions.moveItem(seller, buyer, itemId, quantity);

    if (moved) {
      LootSheetActions.chatMessage(
        speaker,
        buyer,
        game.i18n.format("ls.chatPurchase", {
          buyer: buyer.name,
          quantity: quantity,
          name: moved.item.showName,
          cost: originalCost,
        }),
        moved.item,
        "buyChat"
      );
    }

    Hooks.callAll("LootSheetNPC.Transaction", {
      user: speaker,
      seller,
      buyer,
      createdItem: moved.item,
      quantity,
      cost: itemCost <= buyerFundsAsGold ? itemCost : buyerFundsAsGold,
      wlCost: itemCost > buyerFundsAsGold ? itemCost - buyerFundsAsGold : 0,
    });
  }

  /**
   * Remove cost from actor's funds using provided conversionRate
   *
   * @param {object} buyer  The buyer object
   * @param {number} cost  The cost to remove
   * @param {object} funds  The funds object
   * @param {object} conversionRate  The conversion rate object
   * @param {boolean} DEBUG  Debug flag
   * @returns {object} The funds object
   */
  static removeCostFromFunds(buyer, cost, funds, conversionRate, DEBUG = false) {
    if (DEBUG) console.log("Loot Sheet | Conversion rates: ");
    if (DEBUG) console.log(conversionRate);

    // remove funds from lowest currency to highest
    let remainingFond = 0;
    for (const currency of Object.keys(conversionRate).reverse()) {
      //console.log("Rate: " + conversionRate[currency])
      if (conversionRate[currency] < 1) {
        const ratio = 1 / conversionRate[currency];
        const value = Math.min(cost, Math.floor(funds[currency] / ratio));
        if (DEBUG) console.log("Loot Sheet | BuyerFunds " + currency + ": " + funds[currency]);
        if (DEBUG) console.log("Loot Sheet | Ratio: " + ratio);
        if (DEBUG) console.log("Loot Sheet | Value: " + value);
        cost -= value;
        funds[currency] -= value * ratio;
      } else {
        const value = Math.min(cost, Math.floor(funds[currency] * conversionRate[currency]));
        cost -= value;
        const lost = Math.ceil(value / conversionRate[currency]);
        funds[currency] -= lost;
        remainingFond += lost * conversionRate[currency] - value;
        if (DEBUG) console.log("Loot Sheet | Value+: " + value);
        if (DEBUG) console.log("Loot Sheet | Lost+: " + lost);
        if (DEBUG) console.log("Loot Sheet | RemainingFond+: " + remainingFond);
      }
    }

    if (cost > 0) {
      LootSheetActions.errorMessageToActor(buyer, game.i18n.localize("ERROR.lsCurrencyConversionFailed"));
      ui.notifications.error(game.i18n.localize("ERROR.lsCurrencyConversionFailed"));
      throw "Couldn't remove from funds";
    }

    //console.log("RemainingFond: " + remainingFond)

    if (remainingFond > 0) {
      for (const currency of Object.keys(conversionRate)) {
        if (conversionRate[currency] <= remainingFond) {
          funds[currency] += Math.floor(remainingFond / conversionRate[currency]);
          remainingFond = remainingFond % conversionRate[currency];
          if (DEBUG) console.log("Loot Sheet | funds " + currency + ": " + funds[currency]);
          if (DEBUG) console.log("Loot Sheet | remainingFond: " + remainingFond);
        }
      }
    }

    if (remainingFond > 0) {
      LootSheetActions.errorMessageToActor(buyer, game.i18n.localize("ERROR.lsCurrencyConversionFailed"));
      return ui.notifications.error(game.i18n.localize("ERROR.lsCurrencyConversionFailed"));
    }

    if (DEBUG) console.log(funds);
    return funds;
  }

  /**
   * Actor gives something to another actor
   *
   * @param {object} speaker  The speaker object
   * @param {object} giver  The giver actor UUID
   * @param {object} receiver The receiver actor UUID
   * @param {string} itemId The item id
   * @param {number} quantity The quantity to give
   */
  static giveItem(speaker, giver, receiver, itemId, quantity) {
    quantity = Number(quantity); // convert to number (just in case)

    // let giverUser = null;
    // game.users.forEach((u) => {
    //   if (u.character && u.character._id === giverId) {
    //     giverUser = u;
    //   }
    // });

    if (quantity <= 0) {
      return;
    }

    if (giver && receiver) {
      const moved = LootSheetActions.moveItem(giver, receiver, itemId, quantity);
      if (moved) {
        LootSheetActions.chatMessage(
          speaker,
          receiver,
          game.i18n.format("ls.chatGive", {
            giver: giver.name,
            receiver: receiver.name,
            quantity: quantity,
            item: moved.item.showName,
          }),
          moved.item,
          "givenChat"
        );
      }
    } else {
      console.log("Loot Sheet | Give operation failed because actors (giver or receiver) couldn't be found!");
    }
  }

  /**
   * Returns the unidentified name (if unidentified and specified) or the name
   *
   * @param {object} item The item to get the name of
   * @returns {string} The name of the item
   */
  static getItemName(item) {
    if (!item) return "";
    else if (item.system)
      return item.system.identified ||
        !item.system.unidentified ||
        !item.system.unidentified.name ||
        item.system.unidentified.name.length == 0
        ? item.name
        : item.system.unidentified.name;
    else
      return item.identified || !item.unidentified || !item.unidentified.name || item.unidentified.name.length == 0
        ? item.name
        : item.unidentified.name;
  }

  /**
   * Returns the unidentified cost (if unidentified and specified) or the cost
   *
   * @param {object} item The item to get the cost of
   * @returns {number} The cost of the item
   */
  static getItemCost(item) {
    if (!item) {
      return 0;
    } else {
      if (item.system)
        return item.system.quantity === 0
          ? 0
          : Number(
              item.system.identified || item.system.unidentified == null
                ? (item.system.price.value ?? item.system.price)
                : item.system.unidentified.price
            );
      else
        return item.quantity === 0
          ? 0
          : Number(
              item.identified || item.unidentified == null ? (item.price.value ?? item.price) : item.unidentified.price
            );
    }
  }

  /**
   * Returns the sale value of an item
   *
   * @param {object} item The item to get the sale value of
   * @param {number} saleValue The sale value multiplier
   * @returns {number} The sale value of the item
   */
  static getItemSaleValue(item, saleValue) {
    if (!item) {
      return 0;
    }
    if (item.type == "container") {
      let total = LootSheetActions.getItemCost(item) * saleValue;
      if ((item.system?.quantity || item.quantity) && item.items) {
        Object.values(item.items).forEach((i) => (total += LootSheetActions.getItemSaleValue(i, saleValue)));
      }
      return total;
    } else if (["weapon", "equipment", "consumable", "tool", "loot"].indexOf(item.type) >= 0) {
      if (item.subType !== "tradeGoods") {
        return LootSheetActions.getItemCost(item) * saleValue;
      }
      return LootSheetActions.getItemCost(item);
    }
    return 0;
  }

  /**
   *
   * @param {Array<string>} data The parts of the UUID signature
   * @returns {[object, string]} The source actor and item ID
   * @private
   */
  static getSourceActorAndItem(data) {
    const startingPoint = data[0];
    const itemIndex = data.findIndex((e) => e === "Item");
    const containerIndex = data.findIndex((e) => e === "Container");
    let sourceIndex = 0;
    const containerId = containerIndex ? data.slice(containerIndex + 1, containerIndex + 2)[0] : null;
    const itemId = data.slice(itemIndex + 1, itemIndex + 2)[0];

    switch (startingPoint) {
      case "Actor": {
        // UUID Data in pairs: [Actor, ActorID, Item, itemID]
        sourceIndex = 2;
        break;
      }
      case "Scene": {
        // UUID Data in pairs: [Scene, SceneID, Token, tokenID, Actor, actorID, Item, itemID]
        sourceIndex = 6;
        break;
      }
      case "Compendium": {
        // UUID Data in pairs: [Compendium, packageID, CompendiumID, Actor, actorID, Item, itemID]
        sourceIndex = data[3] === "Actor" ? 4 : -1;
        break;
      }
      case "Item": {
        // UUID Data in pairs: [Item, itemID]
        sourceIndex = -1;
        break;
      }
    }

    const sourceUUID = data.slice(0, sourceIndex).join(".");
    const sourceActor = fromUuidSync(sourceUUID);
    if (!sourceActor && sourceIndex > -1) {
      console.error(`No token actor found from ${data.join(".")}.`);
    }

    return [sourceActor, itemId, containerId];
  }
}
