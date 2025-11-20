# Change Log

## 0.9.2

- Fix: Formula resolution misbehaving.

## 0.9.1

- Fix: NaN years active duration in active buffs.
- Style: Active buffs description text size increased slightly.
- Fix: Pressing display extra info button with active buffs UI hidden would cause an error.
- Fix: Compendium Migration context menu option was missing.
- Fix: Base DC Formula did not resolve ability modifier.
- Fix: Spell tooltips erroring.

## 0.9

- Fix: Item, Actor, and Macro directory enrichment.
- Style: Point buy enrichment style adjusted to be a bit more meaningful.
- Fix: Wealth by Level did not account for all wealth.
- Fix: Item config was not available for buffs.
- Change: Active buffs now use Foundry tooltips instead of custom ones.
- Change: Foundry v12 and older support removed.

## 0.8.1

- Change: Spell durations are now resolved in the tooltips.
- Fix: Opening scene config in Foundry v13 would cause a harmless error.
- Fix: Quick skills incorrectly could assume some skills exist.
- Fix: Erroring in class item sheets.
- Fix: Macro enrichment in Foundry v13
- Fix: Effects Menu Enhancements was nonfunctional.
- New: Open Action Sheet chat card context menu option.

## 0.8

- New: Basic control over warnings for unfinished actors (affects only sidebar tooltips for now).
- Change: Sidebar tooltips now use Foundry tooltips instead of custom ones.
- Fix: Damage Theory dialog was nonfunctional.
- Change: Damage Theory dialog has been redesigned as AppV2.
- Fix: Apply Damage Sanity Checks no longer worked with PF1 v11.
- Fix: Bio & Notes popups did not use system's unrolled text enricher.
- Fix: Bio & Notes popups did not handle actor roll data at all.
- Change: Auto Power Attack option now uses more modern system API and should work Better.

## 0.7.10

- Fix: Persistent quick skills problems, this time on v12.

## 0.7.9

- Change: Actor Overrides AppV2
- Fix: Quick skills were broken in some circumstances, especially on v13.

## 0.7.8

- Refactor: Quick Skills. Dialogs swapped to AppV2.
- Fix: Quick Input did not work with the new AppV2 roll dialog.

## 0.7.7

- Fix: Caster progression table dialog unintentionally modified the system caster progression tables.
- Fix: Change formula editor handling.

## 0.7.5

- Removed: obsolete features that were autodisabled on all supported versions.
- Removed: sender marker.
- i18n: Improvements to localizations and update to spanish translations.
- Fix: Variety of fixes from refactoring.
- Fix: Enhanced Language Selector was nonfunctional.

## 0.7.4

- New: WBL ratio config.
- Fix: Popped out combat tracker had its tooltips misplaced.
- Change: Quick action tooltip refactored to use Foundry tooltips.
- Fix: Roll resolution now tests for certain issues ahead of time, providing better feedback on certain bad formulas.
- Partial Foundry v13 support.

## 0.7.3

- New: Formula resolution now detects excess spacing that may break formulas.
- Change: Formula resolution tooltip now uses Foundry tooltip as base framework.
- Fix: Handle malformed inline rolls gracefully.
- New: Actor list tooltip now displays small warnings for expected but missing data.
- Fix: Quick action tooltip failed to retrieve number of charges.
- Removed: Arbitrary removal of Foundry's performance killing blur filter.
- Fix: Item summary enhancement was nonfunctional.

## 0.7.2.1

- Fix: CL displayed on most cards even when meaningless.

## 0.7.2

- Removed: Need Migration and Class Skill Compression features due to lack of maintenance.
- Fix: Take X was nonfunctional.
- Fix: Chat card CL display did not use the total known by the card.
- Removed: Remaining Ammo as it is part of the system now.
- New: Quick Roll now inherits DC from the card it's triggered from and sets card reference to the original roll.
- New: Added burrow, fly, hover and swim condition tooltip texts.
- Change: Caster progression dialog converted to AppV2.
- Fix: Caster progression dialog was inaccessible.
- Fix: Point Buy Enricher was nonfunctional.
- Fix: Create consumable dialog enrichment was nonfunctional.
- Fix: Spell tooltip broke if a spell had no actions.

## 0.7.1

- Fix: Combatant tooltips with unsupported actors.
- Fix: Roll resolution warnings and errors were generated wrong, leaving actual errors unmentioned and warnings displayed as errors.

## 0.7.0.1

- Fix: Action sheet keen display
- Removed: ID display on action sheets (redundant)
- Removed: Ammo display from item sheet (broken)

## 0.7.0

- PF1v11 compatibility.

## 0.6.7.3

- Fix: Quick action tooltips displayed attack bonus even for actions with no attack.

## 0.6.7

- Fix: Active Buffs did not update properly with world time changing.
- Fix: Defense DC no longer is transformed as if it was attack roll.
- Change: Sheet ID mimics core styling and position. Token config no longer receives the button.
- New: XP Chart for system's XP config dialog.

## 0.6.6

- Change: Actor, Item and Action sheet hook handlers now are registered later to allow other modules to benefit from enrichment features.
- Fix: Quick Skills default skills were not actually showing in actor default skills unless you edited the skills.
- Fix: Quick Skills auto-selection options were not working at all.
- Fix: Class skill list no longer gets hidden if error occurs while retrieving info about skills.
- Fix: Class skill list expansion for editing no longer persists past closing the item sheet.
- Fix: Slot Issues no longer worked since v10. This fix requires v10.8.

## 0.6.5.1

- Fix: Consumables no longer display bad fit tag in expanded summary.
- Fix: Mindless characters are no longer insisted on needing to know at least one language.

## 0.6.5

- i18n: Spanish translations (thanks to @lecuay)

## 0.6.4

- Removed: Compendium Resynchronization feature as it was too destructive.
- Fix: Details Tab did not display AEs within items.
- Fix: Damage Theory dialog now converts sizeRoll() to die roll for display as before.
- Fix: Natural Reach was not using system i18n key.
- Change: Formula resolution now compresses the formulas to avoid unsightly results.

## 0.6.3

- Fix: Item directory tooltip displayed item value as at normal sale rate instead of full value.
- New: Tooltip rules summaries for the new system conditions.

## 0.6.2.6

- Change: Language selector search has been removed as incompatible with v10 and obsolete with PF1 v10.5.

## 0.6.2.5

- Fix: Various features not working due to i18n refactor.

## 0.6.2.4

- Change: Unlinked NPCs no longer show link state in actor directory.
- Fix: Scribe cost was shown in consumable creation dialog even when the button was not.

## 0.6.2.3

- Fix: Roll Override input field failed to display current value.

## 0.6.2

- Change: Basic Roll Enrichment now enriches rolls more eagerly if they inlude standard roll.
- Change: Obfuscated attack rolls now render more truthfully.
- Fix: Combat tracker looked weird if tiebreaker was disabled.
- Fix: Unknown conditions no longer display i18n key if there is no description available.
- Fix: Death proximity caused sheet layout to get weird.

## 0.6.1.5

- Fix: Condition tooltips were nonfunctional.
- Change: Improve support for non-mouse pointer devices.

## 0.6.1.4

- Fix: Active Buffs behaved oddly under number of circumstances (most notably when combat was updated).
- Fix: Quick Input failed to provide options for power attack multiplier.
- Fix: Buff item sheet displayed duration incorrectly.
- Fix: Erroring when item summary was expanded on actor sheet of an item with no actions.

## 0.6.1.3

- **2024-06-26-16**: Fix: Buff duration tooltip was nonfunctional.
- **2024-06-25-17**: Fix: Buff actions were displaying apply button.
- **2024-06-24-14**: Fix: Keen toggle had no effect due to recent changes.

## 0.6.1.2

- **2024-06-24-14**: Fix: Apply Buff called Item.createDocuments() in not quite correct way, causing it to break with PF1v10.
- **2024-06-24-14**: Fix: Auto Power Attack was nonfunctional.
- **2024-06-23-21**: Fix: Condition Durations was nonfunctional.
- **2024-06-23-20**: Fix: Active Buffs display did not react correctly to Active Effect changes.

## 0.6.1.1

- **2024-06-23-02**: Fix: Apply damage sanity checking did not support v10's new targeting data.

## 0.6.1

- **2024-06-19-17**: Change: Stop using boolean and dictionary flags. Migration added to convert existing cases.
- **2024-06-16-14**: Fix: Formula resolution failed weirdly. The resolution now uses simplification provided by system instead.

## 0.6.0

- **2024-06-15-18**: Change: PF1 v10 compatibility, v9 and older support removed due to large system changes.
- **2024-05-03-13**: Fix: Attempt to fix bad scrollbar display on some browsers.

## 0.5.1

- **2024-04-27-04**: Fix: Scene token vision warning was warning even when there were no issues.
- **2024-03-19-01**: New: Active Buffs displays buff level if set.
- **2024-03-14-04**: Fix: Enrich Attack Rolls did not work correctly for CMB rolls (or attacks without damage).
- **2024-03-14-04**: Fix: Initiative dialog layout breaking.

## 0.5.0

- **2024-03-08-02**: Fix: Display Remaining Ammo was force enabled.
- **2024-02-07-10**: Fix: Items Directory Enrichment failed to display item types for non-GMs.
- **2024-02-04-12**: Fix: Formula resolution improvements in corner cases.
- **2024-01-25-05**: Fix: Damage Theory dialog now accounts for enhancement override and some other details.
- **2024-01-24-05**: Fix: Enrich Create Consumable had scroll and scribing cost tooltips flipped.
- **2024-01-24-05**: Fix: Enrich Create Consumable displayed wrong preview for wand cost.
- **2024-01-07-15**: Fix: Combat Tracker tooltip had Touch AC mislabeled as plain AC.
- **2024-01-07-15**: Fix: Missing Settings caused layout to break on actor settings tab.

## 0.4

- **2023-12-28-19**: New: Quick Skills now recognize subskills.
- **2023-12-22-10**: New: Actor Directory Tooltip now supports Wounds & Vigor variant rule [#96]
- **2023-12-14-16**: Fix: Quick skills tooltip would break with negative levels in effect.
- **2023-12-14-13**: New: Quick action tooltips now show attacks, damage, and better range info. [#87]
- **2023-12-14-12**: Fix: Directory tooltips broken with popouts. [#80]
- **2023-12-14-11**: Fix: Item sheet header details enrichment styling.
- **2023-12-14-11**: Feat: Per character overrides. [#89]
- **2023-12-05-18**: Change: Removed action and at-will display from item header enrichment.

## 0.3

- **2023-12-02-06**: Fix: Multi-roll messages were enriched poorly [#92]
- **2023-12-02-05**: Fix: Type labels in items and actors directories.
- **2023-12-02-05**: Fix: Combat tracker tooltip tolerates abnormal actors better.
- **2023-12-02-05**: Change: To Hit AC uses CR for NPCs to attempt to determine appropriate values.

## 0.2.2023112814.0

- **2023-11-28-14**: Fix: Various functionality targeting action sheet was nonfunctional.

## 0.2.2023112100.0

- **2023-11-17-05**: Change: Linking Status now adds small less descriptive icon in the app title instead of cluttering sheet.
- **2023-11-17-04**: Change: Scroll Control re-enabled for Foundry v11. It now also blocks scrolling to bottom on tab switch.
- **2023-11-17-03**: Fix: To Hit AC calculated the chance weirdly.

## 0.2.2023111403.0

- **2023-11-14-03**: Fix: Removed undocumented feature.

## 0.2.2023111318.0

- **2023-11-13-18**: Change: Minimum required PF1 version incremented to 9.5
- **2023-11-01-23**: Fix: Prepared spells filter tooltip was not reactive nor did it display which toggle was to be done.
- **2023-11-01-13**: Fix: Animal Companion HD auto-fill was incorrect. Split into AC and Eidolon/Phantom.
- **2023-10-29-01**: New: Slot configuration is exposed in the API.
- **2023-10-25-01**: Fix: Obscure inline rolls combined with melded damage rolls would hide damage type.
- **2023-10-23-14**: New: To Hit AC feature that estimates how likely you're to be hit.
- **2023-10-22-01**: Fix: Quick Roll errored on ability checks.
- **2023-10-06-22**: Fix: Fields that use special roll data no longer incorrectly resolve values from normal roll data.
- **2023-10-03-14**: New: Stream view now only enables small subset of features.
- **2023-09-23-16**: New: Consumable creation dialog enrichment displays material cost now.
- **2023-09-23-14**: Fix: Consumable creation dialog enrichment did not include material cost.
- **2023-09-16-20**: Fix: Keen toggle was nonfunctional due to PF1 bug. [#84]
- **2023-08-31-16**: Fix: News dialog handled subsettings incorrectly.
- **2023-08-31-08**: Change: Compendium search disabled in Foundry v11 due to incompatibility.
- **2023-08-30-20**: Fix: UI jitter with active buffs feature when swapping sidebar tabs. [#85]
- **2023-08-22-10**: Fix: Ammo remaining display in item sheets.
- **2023-08-22-10**: Change: Handle invalid conditions better and allow disabling them.
- **2023-08-21-05**: Change: Active Buffs now moves with sidebar expand/collapse.
- **2023-08-17-14**: Fix: Spell progression table incorrectly calculated relevant class level.
- **2023-08-14-09**: New: Added `little-helper.hud.tooltip.active` hook.
- **2023-08-14-04**: New: Roll Dialog Take X feature to quickly clarify what you're doing with the dice override in some circumstances.
- **2023-08-14-03**: New: Auto-crit option added to roll dialog roll presets.

## 0.2.2023080115.0

- **2023-08-01-15**: Fix: Enrich Basic Rolls incorrectly detected permissions for authors. [#82]
- **2023-08-01-03**: New: Support special roll data used by class custom formulas.

## 0.2.2023073122.0

- **2023-07-31-22**: New: Enhanced race tooltip for items directory.
- **2023-07-31-22**: Fix: Various item subtype related issues across the module.
- **2023-07-31-20**: Fix: Enrich Items Directory did not correctly update items directory items info when the item was updated.

## 0.2.2023073019.0

- **2023-07-30-18**: Fix: Auto-Expand Folders was just broken after last fix.

## 0.2.2023072921.0

- **2023-07-29-20**: Fix: Shift clicking active buffs would cause an error instead of printing the info card in chat.
- **2023-07-29-08**: Fix: Auto-Expand Folders did not work on Foundry v11.

## 0.2.2023072709.0

- **2023-07-27-09**: Fix: Damage Theory now works again.
- **2023-07-27-09**: Fix: Formula resolution failed with some formulas, e.g. 2 + (floor(2/3))d6

## 0.2.2023072621.0

- **2023-07-26-21**: Remove: Charge Source since it's built-in to PF1v9.
- **2023-07-21-19**: Disabled: Hide Private Compendiums is disabled in Foundry v11 due to incompatibility.

## 0.2.2023071816.0

- **2023-07-18-16**: Fix: Compress Class Skills would not render unhidden skills correctly.

## 0.2.2023071811.0

- **2023-07-18-11**: Fix: Errors on characters with spellbooks but with no spells.

## 0.2.2023071720.1

- **2023-07-17-20**: Fix: Errors in shared data affecting spells.

## 0.2.2023071720.0

- **2023-07-17-20**: Fix: Errors in shared data.

## 0.2.2023071718.0

- **2023-07-17-18**: Fix: Compendium Compressor feature is now disabled in v11 as it is not compatible with it.

## 0.2.2023071717.0

- **2023-07-17-17**: ⚠️ Change: Minimum PF1 version increased to v9.
- **2023-07-17-17**: Fix: Self rolls were not properly respected by enrichers when viewed by other users.
- **2023-07-05-20**: New: Added 3/4 custom HD quick fill option.
- **2023-06-28-20**: New: Formula resolution adds warnings about disabled items in regards to dictionary flags.
- **2023-06-03-12**: ⚠️ Refactor: `little-helper.details-tab.content` hook's second parameter is now more useful shared data object instead of the actor alone.
- **2023-06-03-09**: Change: Hide unused levels toggle is no longer shown for books with auto levels enabled.
- **2023-05-29-18**: Change: Pack migration dialog behaves nicer.

## 0.2.2023051801.0

- **2023-05-18-01**: Fix: Quick Input feature was broken for attack dialogs.

## 0.2.2023050917.0

- **2023-05-09-17**: Fix: Workaround for PF1 currently missing certain crucial dialog data necessary for Quick Input feature.

## 0.2.2023050717.0

- **2023-05-07-17**: Fix: Skills list had lingering indentation eliminating styling.

## 0.2.2023050510.0

- **2023-05-04-16**: Change: Effects Menu Enhancements now makes status effect menu glow up active conditions and buffs [#65]
- **2023-05-04-16**: Change: Effects Menu Enhancements feature now controls restyling of the status effect menu.
- **2023-05-04-16**: Change: Status labels feature renamed to Effects Menu Enhancements, internal ID changed also so old settings are lost.
- **2023-05-04-12**: Change: Active Buffs is now more responsive via power of laziness.
- **2023-04-29-09**: Fix: New actor guide was uselessly displayed for lite sheets.

## 0.2.2023041614.0

- **2023-04-02-18**: Fix: Disable unused elements didn't disable `.system.uses.value`.
- **2023-03-27-14**: Fix: API was partially inaccessible.
- **2023-03-27-14**: Change: Formula API has new function (`validate`)
- **2023-03-27-14**: Change: API `formula` contents were revised. Old functions are deprecated.

## 0.2.2023032610.0

- **2023-03-26-10**: Fix: pf1.utils.getWeightSystem is not a function

## 0.2.2023032609.0

- **2023-03-26-09**: Fix: Hide Unused Spell Levels would initialize incorrectly on empty spellbooks [#76]
- **2023-03-26-08**: Change: Compendium Resync now has confirmation prompt due to its destructive nature.
- **2023-03-26-08**: Change: Compendium Resync is now GM-only feature.
- **2023-03-26-08**: Backdate: Compendium Resync feature (was unintentionally included early).
- **2023-03-03-26**: New: Actor Stats in the details tab that show how much data the actor uses for transmission and storage.
- **2023-03-03-18**: Fix: Details Tab token info did not determine sighted state correctly.
- **2023-03-02-17**: New: Macro Directory Enrichment now displays general permissions for GM, and current user permission for everyone else.
- **2023-03-02-16**: Fix: Caster Progression Table did not work when class was set to HD.
- **2023-03-01-09**: Fix: Coin Weight display always said lbs no matter what the weight actually was.
- **2023-02-27-18**: Fix: Better handling of inactive dice (e.g. rerolled) in Basic Roll Enrichment.
- **2023-02-26-09**: Change: Tooltip filling is done asynchronously, making mousing over various bits of information more responsive.
- **2023-02-26-09**: Change: Quick Skills ACP presentation improved. Color changed to blue-gray when unaffected, total penalty shown in tooltip.
- **2023-02-15-22**: Fix: Item summary enhancer had broken Max Dex display.
- **2023-02-15-22**: Fix: Item summary enhancer had broken item comparison.

## 0.2.2023021302.0

- **2023-02-13-02**: New: Chat card metadata tooltip now calls a hook so modules can alter it.
- **2023-02-05-00**: Change: Token Image Mismatch dialog appears closer to the click location.

## 0.2.2023012702.0

- **2023-01-27-02**: Fix: Item Config broke on certain item types (e.g. buffs)

## 0.2.2023012700.0

- **2023-01-27-00**: Fix: Item Config roll override formula clearing caused errors.
- **2023-01-27-00**: Fix: Item Config being nonfunctional [#73]

## 0.2.2023012222.0

- **2023-01-22-22**: New: Compendium Resync feature.
- **2023-01-18-12**: Change: Remove String.format() usage.
- **2023-01-04-16**: New: Weapon Qualities in Item Summary Enricher.
- **2023-01-02-22**: Fix: Attack roll tooltips did not color discarded rolls differently.
- **2023-01-02-14**: Fix: Roll enrichment had unnecessary complexity limiter, causing rolls to not be enriched under certain circumstances.
- **2022-12-29-02**: Change: Formula Resolution remade from scratch.
- **2022-12-16-00**: Fix: Identified sidepanel tag on attacks.
- **2022-12-16-00**: Fix: Secondary/Primary sidepanel tag that doesn't match reality.

## 0.2.2022120715.0

- **2022-12-07-15**: Fix: Shot Through Creature incorrectly used -2 instead of -4 penalty.
- **2022-12-02-20**: New: Display result count and formula in rolltable tooltip.
- **2022-11-22-05**: Fix: Chat message basic roll detection fixed for v10 multiroll support.
- **2022-11-20-20**: Fix: Chat card tooltip did not display for certain cards.
- **2022-11-20-20**: Fix: Chat card tooltip falsely identified message mode.

## 0.2.2022111320.0

- **2022-11-13-20**: Fix: Apply Damage Sanity Checks would fail with `/heal` and `/damage` cards.
- **2022-11-12-14**: Fix: Compendium migration did not actually migrate Actor, Item, or Scene compendiums anymore.
- **2022-11-01-04**: Fix: ChatMessage permission test did not detect message author correctly.

## 0.2.2022103115.0

- **2022-10-31-15**: Change: Formula resolution in spellbooks improved.
- **2022-10-31-13**: New: Token Image Mismatch now has image sync option. Click the little marker to open select dialog.
- **2022-10-23-03**: Fix: Feature initialization did not catch errors.
- **2022-10-22-05**: Change: Actor List Enrichment shows ownership level instead of owners for players.
- **2022-10-21-22**: Fix: Compendium item counts were not updated.
- **2022-10-21-22**: Fix: ID tag button did not work correctly with compendiums.
- **2022-10-21-21**: Fix: Compendium Compressor incorrectly displayed world compendiums as if they were modules.
- **2022-10-21-04**: New: Apply Damage Sanity Checks.
- **2022-10-20-15**: New: Journal Directory tooltips.
- **2022-10-20-15**: New: RollTable Context Roll.
- **2022-10-20-15**: New: RollTable Directory tooltips.
- **2022-10-20-14**: New: Scene Directory tooltips.
- **2022-10-18-00**: Change: Even more title attribute usage has been replaced with Foundry tooltips (none should remain anymore).
- **2022-10-16-13**: Fix: Use dialog enrichment errored on refresh.
- **2022-10-16-06**: Fix: Bio & Notes Popout now correctly uses v10 editor.
- **2022-10-16-06**: Change: Bio & Notes Popout now has tooltip with instructions.

## 0.2.2022101508.0

- **2022-10-15-08**: Fix: Chat popout had scroll to end / end of messages use excessive space.
- **2022-10-15-08**: Fix: Actors and Items directory popouts broken layout.
- **2022-10-12-22**: Fix: Quick action tooltips always labeled distances as feet, regardless if metric was enabled.

## 0.2.2022101220.1

- **2022-10-12-19**: Fix: Token Image Mismatch did not correctly match against changed v10 token image path.
- **2022-10-08-02**: New: Action use dialog now displays item name in header. (Not optional for now)
- **2022-10-05-22**: New: Compendium migrator calls Foundry's migration on compendium types not supported by PF1.
- **2022-10-05-21**: Fix: Package name in compendium migration dialog no longer displayed anything.
- **2022-10-05-09**: Fix: Default Skills configuraton could not be opened.
- **2022-10-05-06**: Fix: Remove Unidentified View option for items that can't be unidentified.
- **2022-10-05-05**: Change: Link Status no longer shows itself for actors in compendiums.
- **2022-10-05-05**: Change: Need Migration now complements PF1's migration by updating boolean & dictionary flags that migration omits (not in all circumstances).
- **2022-10-04-12**: Fix: Additional Properties once again shows secondary attack tag.
- **2022-10-04-01**: Fix: Compendium search would forget last value on directory refresh.

## 0.2.2022100106.0

- **2022-10-01-06**: New: Enrich Basic Rolls now affects roll table cards, too.
- **2022-09-30-20**: New: Item Summary Enricher enriches already open summaries (summaries that stay open between sheet refreshes).
- **2022-09-30-05**: New: Steal Property Tags subfeature to Metadata Tooltips. Default disabled.
- **2022-09-30-04**: Fix: Item Summary Enricher was nonfunctional (and unreliable when it did function).
- **2022-09-30-02**: Fix: Subsetting values were not loaded correctly.
- **2022-09-29-21**: Fix: Melded damge type caused weird layouting with multiple damage types.
- **2022-09-29-02**: New: Item Directory Tooltips feature.
- **2022-09-28-15**: Change: Actor directory tooltips are (re-)filled on demand rather than ahead of time on directory render.
- **2022-09-28-08**: New: Actor directory tooltips now display ownership information.
- **2022-09-23-23**: New: Squeezing condition description.

## 0.2.2022092219.0

- **2022-09-22-18**: Fix: Various roll override features could error out.
- **2022-09-22-17**: Fix: Fix buff duration display erroring in items outside of actors.
- **2022-09-22-16**: New: Scene Scale Mismatch warning (e.g. scene is configured to miles scale with metric).
- **2022-09-21-08**: Change: More colorful logs.

## 0.2.2022092107.0

- **2022-09-21-06**: Fix: Chat card tooltip failed to handle author info correctly.
- **2022-09-20-23**: Fix: Quick action tooltip range handling.
- **2022-09-20-21**: Fix: Spell tooltip range handling.

## 0.2.2022091702.0

- **2022-09-16-18**: Fix: Various fixes to item theory dialog.
- **2022-09-16-17**: Fix: Item Theory failed to retrieve action ID correctly.
- **2022-09-16-17**: New: Simulated Unidentified View feature for items.

## 0.2.2022091602.0

- **2022-09-15-23**: Change: Use Foundry v10 tooltip manager instead of title property.
- **2022-09-15-20**: Change: Prepared Spells Filter uses now CSS to hide spells instead of element embedded styling.
- **2022-09-15-19**: Change: Spellbook filter icon appearances altered slightly.
- **2022-09-14-13**: Change: Troubleshooter checks for ongoing migration before attempting to run migration
- **2022-09-09-22**: Chore: PF1 0.82.2 compatibility.

## 0.2.2022090922.0

- **2022-09-09-22**: Fix: Actor List Enrichment displayed link status incorrectly.

## 0.2.2022090921.0

- **2022-09-09-21**: Fix: Item Theory dialog failed to display action choices.
- **2022-09-09-20**: Fix: Item Theory dialog layout was broken on v10.
- **2022-09-09-20**: Fix: Hide Private Compendiums toggle button was invisible in one of its states.

## 0.2.2022090915.0

- **2022-09-08-13**: Fix: Active Buffs no longer displays excessive duration info when max duration is infinite.
- **2022-09-08-13**: Change: Combat tracker tooltip recognizes dead and dying like death proximity feature.
- **2022-09-08-12**: Change: Death Proximity now recognizes lacking Con score and sets death point to 0 for such characters.
- **2022-09-08-12**: Fix: Popped out combat tracker tooltip in v10 would render badly.

## 0.2.2022090623.0

- **2022-09-06-23**: Change: Display Linking Status should be more reliable and now displays difference with prototype linking status if present.
- **2022-09-06-19**: Fix: Compendium Compressor did not transfer source label correctly.

## 0.2.2022090516.0

- **2022-09-05-16**: Fix: Auto Power Attack used outdated API syntax for alterRollData causing attacks to become impossible. [#59]

## 0.2.2022090419.0

- **2022-09-04-14**: Change: Basic actors in actor directory enrichment are now identified as "Basic" instead of "Unknown"
- **2022-09-01-18**: Foundry v9 and older support dropped.

## 0.1.2022090118.0

- **2022-08-31-18**: Fix: Laggy actor directory and combat tracker tooltips.
- **2022-08-31-18**: New: Compendium compressor adds little tag displaying number of items in each compendium.
- **2022-09-01-18**: Final Foundry v9 and older supporting version.

## 0.1.2022083017.0

- **2022-08-30-17**: New: Context Menu Actor Sheet feature for opening relevant actor from chat card ontext menu (e.g. skill roll).
- **2022-08-30-17**: Fix: Chat card tag for Acrobatics did not include speed modifier to height.
- **2022-08-30-17**: Fix: Chat card tags fetched source actor instead of the speaker, causing potential incorrect info for unlinked tokens.

## 0.1.2022082915.0

- **2022-08-29-15**: Fix: Token vision was detected wrongly.

## 0.1.2022082708.0

- **2022-08-27-08**: Fix: Formula resolution attempts to keep more up-to-date roll data instance.
- **2022-08-27-07**: Fix: Roll data fetching clones roll data to avoid system altering it during processing.
- **2022-08-24-20**: New: Need Migration feature detects old enhancement overrides now.

## 0.1.2022082307.0

- **2022-08-23-07**: Change: Need Migration feature is now disabled by default due to rampant misunderstanding about the messaging.
- **2022-08-22-23**: Change: Formula resolution for DC formula now includes base DC formula for spells.
- **2022-08-22-23**: Fix: Spell Tooltips for alt sheet.
- **2022-08-22-22**: New: Need Migration now detects pre-multiaction data cruft (no migration UI message as PF1 doesn't actually migrate these properly currently).
- **2022-08-19-00**: Fix: Resolve Formulas now handles negative number in combination of other operators better.
- **2022-08-19-00**: Fix: Resolve Formulas has better order-of-operations handling. [#58]
- **2022-08-18-22**: New: Item sheet Buff Duration Display now displays max duration, too, in addition to remaining duration.
- **2022-08-17-22**: Fix: Tooltip default z-index reduced to 100 from 100000 to allow other UI elements to be over them where necessary.
  - Notably easier compatibility with other modules that produce hover elements.
- **2022-08-17-22**: New: Formula sources includes Charge+Flanking combo.
- **2022-08-17-04**: New: Spell tooltips display area and targets.

## 0.1.2022081620.0

- **2022-08-16-20**: New: Spell Tooltips
- **2022-08-16-20**: Fix: Variety of v10 compatibility issues.
- **2022-08-16-19**: Fix: Easy Export caused export to occur if enter was pressed anywhere on a sheet.
- **2022-08-16-03**: New: Extra Properties now enriches classes and races.
- **2022-08-16-01**: New: Hide Unused Spell Levels also hides filter categories for such spell levels.
- **2022-08-16-00**: Change: Hide Unused Spell Levels now adds a toggle to the spellbooks instead of simply hiding them.
- **2022-08-15-19**: Change: Re-enable some features on Zenvy's alt sheet and apply minor patch to sheet layouting.
- **2022-08-15-18**: New: Token Name display near actor name in the sheet.
- **2022-08-13-17**: New: Need Migration now detects old format weight (obsoleted by PF1 0.81.1)
- **2022-08-13-16**: Change: RPG Awesome fonts culled to just WOFF2 format.

## 0.1.2022081220.7

- **2022-08-12-20**: New release mechanism for smaller downloads. Everything may be broken.
- **2022-08-12-19**: Fix: Prepared spells filter should not reset as randomly.
- **2022-08-11-15**: Fix: Missing Settings did not correctly add warnings.
- **2022-08-10-10**: Fix: v10 compatibility fixes.
- **2022-08-10-10**: Fix: Better compatibility with differing Foundry versions.
- **2022-08-10-09**: Fix: Resolve values would error on actors with no spellbooks.
- **2022-08-10-09**: Fix: Formula resolution incorrectly detect run-in characters.

## 0.1.2022080914.0

- **2022-08-09-14**: Fix: Item Summary Enhancer did not respect identified status.
- **2022-08-09-14**: Fix: Item sheet header displayed ammo for items with no actions.
- **2022-08-09-14**: Fix: Item Config errored on unidentified items with no advanced tab.
- **2022-08-09-13**: Fix: Sidepanel properties did not respect identified status.

## 0.1.2022080822.0

- **2022-08-08-22**: Fix: Keen option was breaking attacks on pre-subaction versions.

## 0.1.2022080820.0

- **2022-08-08-20**: New: Keen option in item advanced tab.
- **2022-08-08-19**: Fix: Sidepanel crit display did not respect broken conditon.
- **2022-08-08-17**: New: New properties to sidepanel: max dex, script calls, duration (for buffs)
- **2022-08-08-17**: Fix: Sidepanel range display was really bad.
- **2022-08-08-17**: Fix: Extra sidepanel properties was broken.
- **2022-08-08-17**: Fix: Item config had options for item types that could not use them. The options will no longer be shown for such items.
- **2022-08-07-20**: Fix: Item sheet header ammo display was missing.
- **2022-08-07-14**: Change: Identified Status merged into Missing Item Bits feature.
- **2022-08-07-14**: Item Header Enrichment is now toggleable.
- **2022-08-06-17**: Internal: Restructuring.
- **2022-08-06-00**: Change: Resolve Values moved to _common_ category as it now handles actor sheets also.
- **2022-08-06-00**: Change: Base DC formula for spellbooks added to ignore list for formula resolution.

## 0.1.2022080510.0

- **2022-08-05-10**: Compatibility: Stairways module. Token vision warnigs would trigger when making stairways.
- **2022-08-05-09**: Fix: Layout fix for melded damage display.
- **2022-08-05-09**: Change: Token vision warnings improved and made more descriptive.
- **2022-08-05-09**: Change: Token vision warnings ignore NPC actor types to not complain about summons.
- **2022-08-05-09**: New: Newly placed tokens with player owner are immediately checked if they can see in a scene.

## 0.1.2022080308.0

- **2022-08-03-07**: New: Auto power attack option. Enabled in item advanced tab.
- **2022-08-03-06**: Fix: Extra Properties broke with 0.81.0 and newer.

## 0.1.2022080305.0

- **2022-08-03-04**: Fix: Extra Properties broke with 0.80.24 and older.
- **2022-08-01-16**: New: Combat tracker tooltip displays names of visible active effects.
- **2022-07-31-18**: Change: Hide Unused Spell Levels no longer hides levels for books with no spells at all.
- **2022-07-31-09**: Fix: Side bar properties were missing some items.
- **2022-07-30-12**: Item comparison displays more detailed information about max dex differences.
- **2022-07-30-12**: Extra Properties now displays armor enhancement bonus and ACP.
- **2022-07-30-12**: Reduced debug output.

## 0.1.2022072916.0

- **2022-07-29-13**: Fix: Natural attack cards incorrectly displayed secondary attack tag for primary attacks instead of secondary.
- **2022-07-29-09**: Fix: Active Buffs time display did not update correctly for currently selected token when time passes.
- **2022-07-29-09**: Fix: Active Buffs display had time related info as NaN.
- **2022-07-29-05**: Change: Migration option in troubleshooting dialog now attempts to reduce impact of other processing to speed up the migration process.

## 0.1.2022072809.0

- **2022-07-28-09**: Improved FoundryVTT v10 compatiblity (not complete)
- **2022-07-25-14**: Removed: Carry weight highlight.
- **2022-07-25-13**: New: Remaining Ammo display, since [the MR](https://gitlab.com/foundryvtt_pathfinder1e/foundryvtt-pathfinder1/-/merge_requests/531) was effectively rejected with limbo.
- **2022-07-25-12**: Change: Humanoid status is shown even if no race is present, the checkbox will be in indeterminate state however.
- **2022-07-25-12**: Fix: Client settings couldn't be opened in latest dev version of PF1.

## 0.1.2022072510.0

- **2022-07-25-10**: Fix: Active Buffs display resolved durations weird.
- **2022-07-23-12**: Fix: Resolve Values erroring.
- **2022-07-22-11**: New: Actor List Tooltips feature.
- **2022-07-21-21**: New: Race name display above race sub-types.
- **2022-07-20-20**: Chore: Preliminary Foundry v10 support.

## 0.1.2022071921.0

- **2022-07-19-21**: Fix: Formula resolution fixed for all known failures.
- **2022-07-19-19**: Fix: New actor guide respects editable state of a sheet.
- **2022-07-17-20**: New: No Actions warning on item sheets.
- **2022-07-17-20**: New: Spells known shows page count in tooltip.
- **2022-07-17-16**: Fix: Missing Bits in items errors with some items.
- **2022-07-16-05**: Fix: Tooltip width.
- **2022-07-16-05**: Fix: Quick action tooltip warnings were malformatted.
- **2022-07-15-22**: Change: Migration Need uses ugly & less alarming coloration.
- **2022-07-15-20**: Change: Migration Need has been made optional.
- **2022-07-15-06**: Fix: Some chat message handlers were made more resistant to errors.
- **2022-07-15-00**: Fix: Charge Source, Resolved Formula, and Resolved Value layouts.
- **2022-07-11-22**: Fix: Quick Skills editor displays Negative Infinity for max modifier always.
- **2022-07-11-22**: New: Quick Skills adds little notification when no skills are matched instead of displaying empty list.
- **2022-07-11-19**: New: Missing Item Bits displays warning if save DC formula exists but no save type is chosen.
- **2022-07-11-19**: New: Resolved Values for item and action sheets.

## 0.1.2022071023.0

- **2022-07-10-23**: Fix: Many functions are now disabled if you have less than observer permissions on documents.

## 0.1.2022071018.0

- **2022-07-10-18**: Internal: Obsoletion renamed to Conflict.
- **2022-07-10-18**: Change: Scroll Control is disabled if either DF Chat Enhancements or Tabbed Chatlog modules are active.
- **2022-07-10-14**: New: Active Buffs print buff chat card if shift clicked. [#54]
- **2022-07-10-14**: New: Active Buffs display has option to disable buffs & conditions with right click instead. [#53]
- **2022-07-08-19**: Fix: Quick Skills default config was visible to regular users.
- **2022-07-08-19**: New: Compendium Migration feature. Available in compendiumc context menu.

## 0.1.2022070817.0

- **2022-07-08-17**: Fix: Caster Progression re-open was nonfunctional.
- **2022-07-07-21**: Fix: Post PF1 0.81.0 feat count display.
- **2022-07-07-20**: Fix: Post PF1 0.81.0 spells known display.
- **2022-07-07-20**: Fix: Need Migration's document migration did not work on PF1 0.80.24 and older.
- **2022-07-07-20**: Fix: Need Migration displayed spinners even when not working.
- **2022-07-07-20**: Fix: Need Migration handled actors poorly for data reading.
- **2022-07-07-20**: Change: Need Migration detects old weapon data now.
- **2022-07-07-20**: Fix: Need Migration detected poorly the need for old senses data.
- **2022-07-06-08**: Fix: Item slot issues for post PF1 0.81.0.
- **2022-07-06-08**: Fix: Hide Unused Spell Levels for post PF1 0.81.0.
- **2022-07-05-16**: New: New Actor Guide feature (to be deprecated with Foundry v10).

## 0.1.2022070321.1

- **2022-07-03-21**: Fix: Chat log and combat tracker tooltip no longer render under active buffs interface.

## 0.1.2022070321.0

- **2022-07-03-21**: Fix: Quick Input had Critical Focus incorrectly labeled as Improved Critical.
- **2022-07-03-21**: Internal: More of release process is automated, hopefully making bad releases less likely.

## 0.1.2022070320.0

- **2022-07-03-20**: New: Migration Need feature offers document specific migration, for your GM-less migration needs.
- **2022-07-03-18**: New: Item Theory allows action swapping instead of being locked to the first action.
- **2022-06-30-14**: Fix: Item missing bits erroring sometimes.
- **2022-06-28-17**: New: Point Buy Enricher to provide display of current bonuses and final ability score and its modifier as you work.
- **2022-06-28-16**: New: Default Script Type feature that forces macros to be script type by default.
- **2022-06-28-16**: Backend: Less swapped for SCSS.
- **2022-06-28-12**: Backend: Rollup swapped for esbuild.
- **2022-06-27-17**: New: Migration Need feature, displays warning on items and actors if they have recognized old format data. This is always on for now.
- **2022-06-27-14**: Change: Vision Hints no longer fades the bright vision input if custom rules are enabled. It also updates this live.
- **2022-06-26-18**: Change: Compress Class Skills now supports non-class items.

## 0.1.2022062511.0

- **2022-06-25-01**: New: Feature listings now have collapsible categories.
- **2022-06-24-18**: New: `little-helper.i18n` hook for better i18n support, allowing custom conditions support also.
- **2022-06-24-08**: New: Missing bits feature for item sheets.
- **2022-06-23-18**: Change: Formula resolution and formula checks features have been merged.
- **2022-06-23-16**: Change: Formula resolution forces formula legibility. Warning: This is not thoroughly tested and may mangle formulas.
- **2022-06-23-16**: Change: Inline roll formula display attempts to add line-break hints, making long run-in formulas render better.
- **2022-06-23-01**: Change: Formula resolution tooltip is provided even in case of an error in system roll parsing.
- **2022-06-22-16**: Change: Formula resolution tooltip is provided even if it fails (internal error to this module).
- **2022-06-22-16**: New: Formula validator now functions on action sheets.
- **2022-06-21-04**: Testing: Basic Quench unit tests. Covers formula resolution for now.
- **2022-06-21-04**: Troubleshooting dialog has direct link to open help browser for step 1.

## 0.1.2022062018.0

- **2022-06-20-11**: Fix: Details tab did not respect normal tab behaviour, causing incompatibilities with other modules (such as Spheres).
- **2022-06-20-11**: Fix: Subsettings were not initialized correctly when they had not previously been seen.
- **2022-06-20-11**: New: Active Buffs now has option to display secret blocks. Default enabled.

## 0.1.2022061923.0

- **2022-06-19-23**: Fix: Quick Skills minimum rank setting was never actually saved.
- **2022-06-19-23**: Fix: Quick Skills broke if all default skills were removed in module config.
- **2022-06-19-21**: New: Sheet ID now supports action sheets.
- **2022-06-19-19**: New: Duplicate Slots feature clarified. Unused slots summary is now optional.
- **2022-06-19-07**: New: Inline Roll Grading now colors non-nat20 critical threats yellow instead of same as nat 20s.
- **2022-06-19-07**: New: Details tab now displays active effects found on the actor and allows opening their sheet with right-click.
- **2022-06-19-02**: Fix: Details tab required double click to open.
- **2022-06-19-00**: Removed: Actor sheet restyle feature. Pushed into more opinionated separate project: <https://gitlab.com/mkahvi/fvtt-pf1-restyle>
- **2022-06-18-14**: Fix: Sub-settings were not displayed in new features dialog.
- **2022-06-18-13**: New: Chat card metadata tooltips.
- **2022-06-17-06**: Change: Static tooltips use `mouseenter` event instead of `mousemove` for lighter resource use.
- **2022-06-16-06**: New: Apply buff button to buff description cards.
- **2022-06-13-03**: Fix: Buff duration tooltip did not display immediately on activation.
- **2022-06-13-03**: Fix: Buff duration tooltip errors on unsupported sheets.

## 0.1.2022061022.0

- **2022-06-10-22**: New: Quick Action tooltips.
- **2022-06-10-22**: Fix: Condition tooltips align correctly regardless of sheet position.
- **2022-06-10-19**: Fix: Basic check enrichment was ignoring skill rolls and similar.
- **2022-06-10-16**: Fix: Active Buffs errored with unusual actor types.
- **2022-06-10-15**: New: Active Buffs displays names for all with Alt held down (configurable).
- **2022-06-09-18**: Fix: Item sidepanel properties for sub-actions.
- **2022-06-09-17**: Fix: Item summary enhancer for sub-actions.
- **2022-06-09-16**: Fix: Theory dialog for sub-actions.
- **2022-06-09-16**: Fix: Theory dialog was nonfunctional (undefined enhFormula).
- **2022-06-09-15**: Fix: Extra Icons could not be disabled without refresh.
- **2022-06-09-15**: Fix: Handle Extra Icons with sub-action sheets.
- **2022-06-09-15**: Fix: Don't interfere with damage type selection.
- **2022-06-09-15**: Fix: Handle input quick acccess for sub-action sheets.

## 0.1.2022060817.0

- **2022-06-08-02**: Fix: Basic check enrichment erroring on odd chat cards (presumably with rolls but non-standard layout).
- **2022-06-06-22**: Fix: Melded Damage supports new damage type display.
- **2022-06-06-22**: Obsoletion: Damage Types is marked as being obsoleted by PF1 0.80.25
- **2022-06-06-16**: Change: Item comparison shows the item name it is comparing against.
- **2022-06-06-16**: New: Actor Sheet restyle feature. This adds minor adjustments to the styling. Disabled by default.
- **2022-06-06-14**: Change: Respect custom vision rules setting.

## 0.1.2022060505.0

- **2022-06-05-05**: Change: Formula resolution tooltip layout improvements.
- **2022-06-05-05**: Fix: Ensure formula resolution produces sane results in more cases. This is not complete fix (conditionals and ternaries can still cause bad results).
- **2022-06-02-21**: Fix: Per level DC display on spellbooks.
- **2022-06-02-00**: Fix: Buffs displayed remaining duration even if it was infinite.

## 0.1.2022060113.0

- **2022-06-01-13**: Fix: Toggling features, especially disabling them, did not work correctly without refresh.
- **2022-05-31-14**: Changed: Resolve Formulas supports post-0.80.24 action sheets.
- **2022-05-31-14**: Fix: Items Directory Enrichment item update handling caused errors in some cases.
- **2022-05-29-14**: Changed: Resolved Formulas now display on character sheet as well where appropriate (previously only on item sheets).
- **2022-05-29-12**: Changed: Resolve Formulas gives now more detailed errors in console log for bad formulas.
- **2022-05-27-23**: New: Buff Tooltips
- **2022-05-27-22**: Changed: Vision Hints feature now disables bright vision editing in token settings and directs to actor sheet senses config.
- **2022-05-27-22**: New: Buff Duration Display in buff item sheet.
- **2022-05-27-18**: Nicer durations for buffs tab conditions.
- **2022-05-27-14**: New: Long itme format option for Active Buffs. Default enabled.
- **2022-05-27-14**: New: Broader range of time periods supported, up to years.
- **2022-05-27-13**: Am I humanoid? feature.
- **2022-05-27-09**: Fixes to compendium enrichment type fetching.
- **2022-05-26-19**: Sender Marker is now optional.
- **2022-05-26-19**: World Identity is now optional.
- **2022-05-23-15**: Compendium enrichment now has sub option to fetch more data which should provide item subtype display.

## 2022052212.0

- **2022-05-22-11**: Fix: Items directory enrichment reacts to item changes.
- **2022-05-20-13**: New: Quick Skill defaults are now configurable in module configuration by the GM.
- **2022-05-20-10**: New: Bug Reporter module opt-in enabled.
- **2022-05-20-10**: Fix: Macro permission display was odd.
- **2022-05-17-11**: New: Scroll Control feature.
- **2022-05-16-13**: Fix: Uneditable sheets had editable configuration.

## 2022051319.0

- **2022-05-13-19**: Fix: Quick Skills was not respecting min rank and was behaving weird.

## 2022051316.0

- **2022-05-13-16**: New: Caster Progresson Table feature. Accessible from spellbook config from table icon near where progression is configured.
- **2022-05-13-10**: Quick skills has tooltip with simiarllike skills tab.
- **2022-05-13-08**: New: Active buffs sub-option to show buffs with Hide from Token enabled. Defaults to enabled (shown).
- **2022-05-13-08**: New: Basic feature suboption support.
- **2022-05-12-20**: New: `little-helper.checks.hints` and `little-helper.details-tab.content` hook. See [API documentation](./API.md) details.
- **2022-05-12-18**: Improved quick skills configuration.

## 2022051019.0

- **2022-05-10-19**: Fix: Actor list owner was displayed all wonkydonk.

## 2022050915.0

- **2022-05-09-15**: New: Quick Skills feature.

## 2022050902.0

- **2022-05-09-02**: Fix: Prepared spells filter was no longer functioning due to PF1's roll data sandboxing.
- **2022-05-08-14**: New: Context Menu Item Sheet feature, to open item sheet directly from chat log context menu.

## 2022050814.1

- **2022-05-08-08**: Resolve Formulas now has a tooltip giving greater details on the formula.
- **2022-05-05-18**: New: Token Image Mismatch feature.

## 2022050417

- **2022-05-04-17**: New: Condition Tooltips feature.
- **2022-05-04-03**: Fix: Language selector did not work with selectors in item sheets.
- **2022-05-04-03**: Class skill list editing mode will be enabled by default if no class skills exist.

## 2022050403

- **2022-05-03-00**: Fix: Basic check styling.
- **2022-04-30-20**: Fix: Death proximity does not highlight nonlethal damage when staggered if it's not involved.
- **2022-04-30-20**: Fix: CL display for post PF1 0.80.15
- **2022-04-27-19**: Fix: Take 10/20 rendering with basic checks.
- **2022-04-26-20**: Fix: Discourage Sourceless would cause skill lock button to cycle tabs if background tab was selected.
- **2022-04-26-02**: Fix: Inline roll restyling was applied with no features enabled. (This will be more explicit choice later)

## 2022042300

- **2022-04-21-12**: Fix: Combat pop-out was not working as intended.
- **2022-04-20-15**: Styling refactoring.
- **2022-04-18-23**: New: Enrich create consumable.

## 2022041706

- **2022-04-16-21**: Background skill rank mismatch warning now displays difference like adventure skills.
- **2022-04-16-21**: Fix: Background skill rank mismatch was not displayed anymore.
- **2022-04-16-10**: New: Notes & Bio popout.
- **2022-04-16-00**: New: Enrich /damage & /heal rolls.
- **2022-04-15-13**: New: Combat auto-popout.

## 2022041417

- **2022-04-14-17**: Fix: Language selector formatting was bleeding to other trait selector dialogs.
- **2022-04-14-16**: Fix: Some data was fetched from incorrect location.

## 2022041409

- **2022-04-14-09**: Enhanced language selector with extra icons and categorization (which can be searched).
- **2022-04-12-15**: Warn about skills missing name.
- **2022-04-09-05**: New: Easy export feature. Disabled by default.
- **2022-04-09-00**: Fix class skill list compression toggling on and off on almost any click around it. Expansion is now much more persistent to allow extensive editing.
- **2022-04-08-23**: Fix actor list info not updating on actor update [#40; 40260ad]
- **2022-04-07-17**: Improve chat card modifying features when source item is missing.

## 2022040716

- **2022-04-07-15**: New: New Feature dialog.

## 2022040713

- **2022-04-07-13**: New: Explicitly versioned releases.
- **2022-04-07-12**: New: Sheet refresh header button.
- **2022-04-07-09**: New: Hit point retrain potential in class sheets.
- **2022-04-07-09**: New: Class skill list compression in class sheets.
- **2022-04-04-11**: Fix: Item price display in item summary.
- **2022-04-04-11**: Fix: Not all basics checks displayed the source formula when expanded.
- **2022-04-04-11**: Unified formula compression.

## 2022040115

- **2022-04-01-15**: Fix: Range display failed to respect metric/imperial config in item sidebars.
- **2022-04-01-14**: Fix: Odd labeling of items in items directory.
- **2022-04-01-14**: Fix: Item sheet header identified display.
- **2022-03-31-18**: New: Auto-expand sidebar directories.

## 2022033116

- **2022-03-31-16**: New: Actors directory enrichment.
- **2022-03-31-15**: New: Items directory enrichment.
- **2022-03-31-15**: New: Scene directory compression. Disabled by default.

## 2022033108 and older

- **2022-03-31-08**: Removed in-built data inspector. Was causing interference with the standalone module.
- **2022-03-29-05**: Fix: Discourage sourceless disrupted combat tab layout.
- **2022-03-29-03**: Fix: Changing feature selection caused features to be enabled multiple times, causing features to misbehave (multiplied execution).
- **2022-03-28-15**: New: Condition duration display on actor sheet.
- **2022-03-28-14**: Fix feature default state was not respected, causing them to be enabled regardless (e.g. widen sidebar).
- **2022-03-28-12**: Quality of life improvements to active buffs (conditions state clicking ends them).
- **2022-03-28-12**: Active buffs displays active time for conditions and buffs if available. Layout changes to time display.
- **2022-03-28-05**: Fix attack dialog re-render breaking data list injector. [#38; 3368b59c]
- **2022-03-28-04**: Hide unused spell levels in non-autoslots spellbooks.
- **2022-03-28-02**: New: Widen sidebar feature. Disabled by default.
- **2022-03-27-23**: Inline roll grading is made optional.
- **2022-03-27-23**: Fix chat card damage icons and melding not limited to damage info, sometimes messing with attack description contents. [#32; 6a66611d]
- **2022-03-27-09**: Feat and skill count warnings now state which way the counts are wrong. [#36; 5cecfbb8]
- **2022-03-27-09**: Prepared spells filter now remembers its state on sheet refresh (e.g. spellcast). [#34; be4d5dc6]
- **2022-03-21-16**: Fix basic checks rendering wrong with large number of dice. [#31; a5d756e8]
- **2022-03-21-16**: Make basic check and attack rolls optional. [#31; d0db3893]
- **2022-03-19-18**: Card damage type melding adds "unknown" text to damage instances with no type of any kind.
- **2022-03-19-17**: Fix version-based obsoletion not accounting for current version correctly.
- **2022-03-19-17**: Obsolete button redesign feature.
- **2022-03-18-17**: Resolved formula is displayed only if it differs from the source formula.
- **2022-03-16-12**: Button to clear all settings in client settings.
- **2022-03-16-12**: Reset actually resets instead of enables all.
- **2022-03-14-21**: Old formula warnigs altered for compatibility with the new formula resolution. Potentially broken layouts.
- **2022-03-14-20**: Item sheet formula resolution now includes all formulas instead of just spell DC.
- **2022-03-14-15**: Fix death proximity did not respect chosen HP ability score.
- **2022-03-14-14**: Fix attack card damage & type melding and damage type icons working inconsistently.
- **2022-03-13-17**: New attack card damage & type melding.
- **2022-03-13-17**: Make the generic chat card restyling optional.
- **2022-03-13-16**: Fix damage type icon being attempted to be added to critical confirmation rolls. [#28; f47fb662]
- **2022-03-13-16**: Fix active buffs erroring when conditions (non-buffs) were displayed. [#30; ae8fd37e]
- **2022-03-11-20**: Fix alt sheet errors.
- **2022-03-11-19**: New: Hide speeds character is incapable of.
- **2022-03-11-17**: New: Ability scores on summary tab.
- **2022-03-08-18**: Several features were given new toggles.
- **2022-03-08-17**: Fix missing prepared spells filter.
- **2022-03-07-01**: Fix additional chat card properties showing `[object HTMLSpanElement]` with secondary natural attacks.
- **2022-03-05-19**: Item summary enhancer adds some basic item comparison with currently equipped gear. Armor and shields only for now.
- **2022-03-05-16**: Quick roller is now separate of other functionality and can be toggled on its own.
- **2022-03-05-06**: Fix missing check hints and various other issues with the related code.
- **2022-03-04-18**: Fix compendium popout breaking compendium search.
- **2022-03-04-17**: Hide Private Compendiums feature added.
- **2022-03-03-20**: Fix compendium search being nonfunctional.
- **2022-03-03-11**: Increased level of detail for wealth by level in details tab.
- **2022-03-03-11**: Added basic search in client settings dialog, matching group titles, labels and even the descriptions.
- **2022-03-03-10**: Fix spell description being uneditable with extra item properties.
- **2022-03-02-19**: Fix erroring in lite sheet and potentially other alternate sheets.
- **2022-03-02-10**: GM-only settings are distinguished better.
- **2022-03-02-10**: Fixed actor link status detecting link state incorrectly in some instances.
- **2022-03-02-09**: Actor link status is now toggleable.
- **2022-02-27-02**: Active Buffs display buff duration when present and update it as necessary.
- **2022-02-27-01**: Active Buffs display buff description.
- **2022-02-27-00**: Active Buffs display basic summary of condition effects.
- **2022-02-26-21**: Active Buffs displays permanent buffs differently and no longer allows disabling them.
- **2022-02-26-13**: Fix damage type display in chat cards. [#25; 1647931b]
- **2022-02-26-13**: Fix occasional error in active buffs with missing token. [#27; a680cd78]
- **2022-02-26-13**: Fix errors in alternate sheets. [#26; 76223a45]
- **2022-02-26-02**: Active Buffs feature to display active buffs and conditions next to the chat log.
- **2022-02-26-01**: Fix feature toggling being flipped.
- **2022-02-25-19**: Cache roll data and fill it only on demand.
- **2022-02-25-19**: Jquery usage reduced significantly.
- **2022-02-25-18**: Fuzzysort external library removed since it was only used for compendium search. Replaced with simplistic matching.
- **2022-02-23-05**: Alt sheet compatibility fix.
- **2022-02-22-16**: Fix feature toggling not working correctly.
- **2022-02-22-16**: Item summary enhancer to add more info to item summaries.
- **2022-02-22-14**: New discourage sourceless feature to remove inputs for sourceless notes and bonuses that are available otherwise.
- **2022-02-22-14**: Total carry weight highlight.
- **2022-02-22-13**: Tabless summary feature is correctly obsoleted with 0.80.3 and later.
- **2022-02-22-11**: Fix for bad setting category usage.
- **2022-02-22-10**: Changing client settings applies new settings immediately if possible and no longer refreshes page automatically even if needed for some new settings.
- **2022-02-22-09**: New macro sheet and directory enhancements.
- **2022-02-22-08**: Fixed datalist usage everywhere. Broken due to incorrect use of iterators.
- **2022-02-21-01**: Improved enhanced item properties display (item sheet left panel).
- **2022-02-20-02.1**: Removed libwrapper shim and made it explicit dependency.
- **2022-02-20-02**: Display hidden self-rolls better. [#22; 520f95cc]
- **2022-02-20-02**: Fix erroring in disabled feature clarification.
- **2022-02-19-01**: Increase visibility of an item being disabled in the sheet itself.
- **2022-02-18-18**: Improved blind roll and whisper message permission checking. [#21; daf453c3]
- **2022-02-18-18**: Fix roll grading with disabled dice (e.g. with kh/kl)
- **2022-02-17-23**: Fixed display of inactive rolls (e.g. with kh/kl) [#20; 14cf0fdd]
- **2022-02-17-23**: Fix datalist usage, restoring damage type selection and similar.
- **2022-02-16-13**: Support the new attack dialog with data lists (introduced with 0.80.5).
- **2022-02-15-06**: Force roll option for items to override or provide default roll for items.
- **2022-02-12-00**: Fix feature obsoletion failing to disable some features once obsolete (e.g. move skill roll button). [#17]
- **2022-02-10-11**: Search box for language selector. [#16]
- **2022-02-06-18**: Fix GM transparency special case working incorrectly since last update.
- **2022-02-06-06**: Improvements to chat message handler loading behaviour.
- **2022-02-06-04**: Details tab bench-pressing was updated to take 4.
- **2022-02-06-03**: Extra icons to item sheets. [#13]
- **2022-02-06-03**: Fix details tab benchpressing referencing one level off.
- **2022-02-05-21**: Fix sender marker being invisible. [#14]
- **2022-02-05-21**: Fix chat dice roll rendering. [#15]
- **2022-02-01-23**: Fix compendium enhancer not keeping up with compendium updates. Custom index reliance removed. [#11]
- **2022-02-01-23**: Fix compendium enhancer breaking empty compendiums. [#10]
- **2022-02-01-23**: Troubleshooting dialog is available to non-GMs, too.
- **2022-02-01-19**: ID button now works with a lot more things, walls, lights, tokens, etc. This likely breaks Foundry 0.8 compatibility some. [#12]

Potential Foundry VTT 0.8 breaking point.

- **2022-01-31-19.2**: Another fix for the header buttons.
- **2022-01-31-19.1**: Fix feature disabling not functioning correctly when feature was disabled by obsoletion or not meeting requirements.
- **2022-01-31-19**: Fix malformed header button classes.
- **2022-01-29-23**: [Data Inspector](https://gitlab.com/koboldworks/agnostic/data-inspector) is now available as standalone module. It will be removed from this sometime later. [#9]
- **2022-01-29-23**: Allow feature obsoletion by presence of a module.
- **2022-01-23-17**: Data inspector: Improved path selection handling. Imroved display of objects and arrays. Removed copied to clipboard notification.
- **2022-01-21-16**: Log reasons for features being disabled automatically in console log.
- **2022-01-21-13**: Removed "Add custom skill" text from skills tab since it's now added by PF1 (since 0.80.3).
- **2022-01-21-13**: Fixed no override being displayed as bad value.
- **2022-01-21-13**: Force roll mode now handles bad values better.
- **2022-01-21-13**: Fixed force roll mode in default setting causing everything to be public.
- **2022-01-20-17**: Details tab wealth by level now takes coins into account for total wealth.
- **2022-01-20-16**: Fix roll mode enforcing option breaking things with Foundry 0.8.
- **2022-01-20-15**: Item theory now includes enhancement bonus and handles typing better.
- **2022-01-19-07**: Compendium compressor works correctly for popout also.
- **2022-01-17-16**: Allow features to be disabled by default.
- **2022-01-17-15**: Data inspector dialog for actors and items for exploring roll data (for formulas), full document data (for macros&modules), or raw document data (for macros, modules or system development).
- **2022-01-16-12**: Per item option to force roll mode instead of respecting currently selected mode (requires PF1 0.80.5 or later).
- **2022-01-15-14**: Improvements to feature requirement and obsoletion handling. Minor related settings dialog improvements.
- **2022-01-14-20**: Settings dialog is more descriptive on why options are disabled.
- **2022-01-14-20**: Feature obsoletion.
- **2022-01-11-16**: Per item option to force use dialog to show or skip instead of respecting normal config.
- **2022-01-11-15**: Various bug fixes.
- **2022-01-08-12**: Spell sheet DC display near DC offset formula.
- **2022-01-08-12**: Display DC in item properties.
- **2022-01-08-12**: Attack item properties.
- **2022-01-07-02**: Compendium pack search.
- **2022-01-07-00**: Fixed missing prepared spell filter that was lost sometime on or after 2021-12-18.
- **2022-01-04-12**: Coin weight display.
- **2022-01-04-12**: Better decimal limiting.
- **2022-01-04-06**: Improved sharing of data handling.
- **2022-01-01-16**: Fixed formatting for popped out chat messages.
- **2021-12-31-14**: Add basic troubleshooter dialog.
- **2021-12-31-11**: Increase error tolerance and better handling, mostly with item counts and spell DC features.
- **2021-12-30-13**: Item theory dialog now reacts to item changes.
- **2021-12-30-13**: Item theory dialog shows resolved variable values in tooltips.
- **2021-12-29-14**: Item theory ability score and power attack info.
- **2021-12-29-13**: Fixed problems with feat and spell related features (item counts, DCs, etc.).
- **2021-12-29-13**: Item theory size adjustment, estimate slider, and original/adjusted formula display.
- **2021-12-29-10**: Item theory supports compendium and items directory items.
- **2021-12-29-10**: Item theory supports size changes within the dialog.
- **2021-12-29-09**: Item theory dialog.
- **2021-12-28-02**: Skill roll move made to not produce garbage if the roller is not where expected.
- **2021-12-26-15**: Minor styling fix for 0.8
- **2021-12-25-11**: Large number of feature toggles added.
- **2021-12-25-11**: More shared functionality usage, possibly leading to reduced resource usage.
- **2021-12-25-11**: Fixed card redesign feature was not behaving correctly on load.
- **2021-12-25-09**: Death proximity takes nonlethal damage into account.
- **2021-12-25-06**: Preliminary extensible feature toggling.
- **2021-12-25-03**: Compendium module source is stated under the name.
- **2021-12-25-02**: Compendum source icons are now colored based on if they're from system, world, or module.
- **2021-12-25-02**: Compendiums are compressed a little bit more.
- **2021-12-22-06**: Various small fixes.
- **2021-12-18-02**: Restructuring of the codebase to allow ordering modifications and sharing functionality between them.
- **2021-12-11-19**: Feature Sources module support for conflicting levels.
- **2021-12-10-14**: Foundry v9 compatibility confirmation.
- **2021-12-08-21**: Total coinage listed in the info tab in wealth by level section.
- **2021-12-08-21**: Clarified wealth by level difference in info tab.
- **2021-11-29-11**: Warning for excess skill ranks per skill.
- **2021-11-24-01**: Token vision now has help text & icon for light radius, too.
- **2021-11-21-00**: Weapon focus & greater weapon focus added to the new attack roll bonus datalist.
- **2021-11-21-00**: Improved critical added to the new critical confirmation bonus datalist.
- **2021-11-18-22**: Concentration check defensive and entangled DCs now show max SL with DC in tooltip.
- **2021-11-18-20**: Concentration checks now include grappled and entangled DCs.
- **2021-11-18-20**: Chat log roll tags were coloring by worst match rather than best.
- **2021-11-18-00**: Second and third iterative to attack modifier datalist.
- **2021-11-18-00**: Hide attacks now has easy to use toggle checkbox in item advanced tab.
- **2021-11-04-05**: Chained & Unchained Flurry options to FXA
- **2021-11-04-05**: Disable ID button if not in secure context (which is required for it to function)
- **2021-10-27-23**: TokenHUD status effect label.
- **2021-10-27-23**: Foundry 0.7 compatibility removed.
- **2021-10-22-14**: Add warnings about missing ability score links in settings.
- **2021-10-21-05**: Fix death proximity markers breaking layout.
- **2021-10-21-04**: Easy formula templates to variety of fields.
- **2021-10-20-03**: Fix tooltip inline roll styling corruption.
- **2021-10-20-03**: Debounce reload.
- **2021-10-13-06**: Compendium compression now no longer hides status icons (locked, visible, ...).
- **2021-10-13-06**: Bundled .mjs no longer is minified for easier hacking and bug investigation.

- **2021-09-05-01**: GM transparency sham for compatibility with some obfuscation modules.

... older changes not recorded.
