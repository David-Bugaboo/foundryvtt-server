# Changelog

## 10-14-25 - v11.4.0

- Dropping items from containers didn't work
- Dropping items would sometimes fail to add the item and fail silently
- Did not support the system's ability to drag-n-drop currency
- Modified UI layout to support longer translation texts
- Added hooks for distributing coins, buying item, and looting coins
- Looting coins didn't work

## 08-20-25 - v11.3.3

- Looting and buying items didn't work for players (failed silently for player and errored for GM)
- Toggling visibility of items would not remove them from players' view
- Removal of items at 0 quantity was likely non-functional
- Display of trade good value would always fail with "NaN gp"
- Some inventory ops would fail with token loot sheets

## 08-09-25 - v11.3.2

- Drag-and-Drop failed to support items without actors, such as the Items directory

## 08-06-25 - v11.3.1

- Creating scrolls would cause errors (but still go through)

## 08-06-25 - v11.3.0

- Compatibility with Foundry v13 (and still v12 support)
- Creating items that didn't interact with loot sheets would sometimes cause errors (but still go through)

## 07-07-25 - v11.2.1

- Fixed cases where drag-and-drop of items would fail (namely all unlinked tokens)
- Refactored drag-and-drop and other item operations to work better with unlinked and linked actors
- Increased the inventory width for non-GMs, since they won't see the GM Controls section

## 03-30-25 - v11.2.0

- Refined looting process to intuitively stack duplicate items

## 03-21-25 - v11.1.2

- Fixed token looting process to recognize the selected tokens' actors

## 03-21-25 - v11.1.1

- Missed code that streamlined looting selected tokens

## 03-21-25 - v11.1.0

- Converted more sheet dialogs to DialogV2
- Added the ability to loot currently-selected tokens to a loot sheet

## 03-12-25 - v11.0.1

- Unified display of assistive information in GM settings on the loot sheet
- Fixed invalid items in rolltables stopping merchant inventory from populating
- Fixed the loot sheet buttons catching inputs in other fields

## 03-11-25 - v11.0.0

- Initial release since Foundry v9 and PF1E v0.80.2
- Fixed price calculations for items with per-charge prices
- Fixed scroll icon randomization
- Added more settings to control chat messages
- Converted dialogs to DialogV2

## Historical

3.2.2: Fixed an issue where containers were not having their values added to the sale value.
Fixed an issue where containers were not sending the correct data for their contents, which caused loot sheets using containers to not open correctly.
3.2.1: Added the ability for the GM to display the sale value of loot, as this can help avoid confusion for players who see the total value as what they will get at sale.
3.2.0: Added ability for GM's to set the sale value of non trade goods. Ownership of module transferred.
3.0.0: support for 9.x versions
2.2.0: italian translations (thx Luisphigor!)
2.0.0: support for 0.8.x
2.0.0: refactoring based on new pf1 importing strategy
1.9.0: limited support for containers. Buy with weighless currency.
1.8.0: configuration for keeping empty stacks
1.7.2: fix for "convert to gold" and "convert to loot"
1.7.0: look-and-feel changes based on latest PF1 system. Columns weight and identified added.
1.6.0: update permissions for all players, toggle visibility of items
1.5.0: convert to loot (sidebar | actors | context menu)
1.4.0: support for loot sheet when opened from sidebar
1.3.0: GM options to enable dragging, max load and max capacity
1.2.7: support for both token linked to actor
