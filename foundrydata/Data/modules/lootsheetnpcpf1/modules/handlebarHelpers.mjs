/**
 * Helper functions for the PF1 NPC Loot Sheet
 */
export function registerHandlebarsHelpers() {
  // Handlebars.registerHelper("ifeq", function (a, b, options) {
  //   if (a == b) {
  //     return options.fn(this);
  //   }
  //   return options.inverse(this);
  // });

  // adding the #equals and #unequals handlebars helper
  // Handlebars.registerHelper("equals", function (arg1, arg2, options) {
  //   return arg1 == arg2 ? options.fn(this) : options.inverse(this);
  // });

  // Handlebars.registerHelper("unequals", function (arg1, arg2, options) {
  //   return arg1 != arg2 ? options.fn(this) : options.inverse(this);
  // });

  Handlebars.registerHelper("lootsheetprice", function (basePrice, modifier) {
    // return Math.round(basePrice * modifier * 100) / 100;
    return pf1.utils.limitPrecision(Math.round(basePrice * modifier * 100) / 100, 3);
  });

  Handlebars.registerHelper("lootsheetweight", function (baseWeight, count) {
    // return baseWeight * count;
    return pf1.utils.limitPrecision(baseWeight * count, 3);
  });

  Handlebars.registerHelper("lootsheetname", function (name, quantity, infinite) {
    if (infinite) return `(∞) ${name}`;
    return quantity > 1 ? `(${quantity}) ${name}` : name;
  });
}
