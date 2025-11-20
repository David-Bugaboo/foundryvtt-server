# Change Log

## 2.13.1

- Fix: Some icons were not colorized.

## 2.13

- New: Magic Glow setting.
- Style: Yet another adjustment to icon alignments.
- ⚠️ Change: Many CSS selectors were changed or removed to avoid conflicts with Foundry or system styles.
  - `hint` -> `item-hint`, `icon` -> `iconized`
  - `tag` is now only used with special hints (which none exist in the main module itself)

## 2.12.3

- Fix: Custom API consumer handlers are now more reliably given actor reference.

## 2.12.2

- Fix: Hint editor would error on items with enhancement bonus.
- Fix: Hint icon alignment is now even better.

## 2.12

- Change: Improved change & context note handling.
- Fix: Hint icon alignment.
- Change: Forced proficiency is now distinguished from nonproficiency.

## 2.11

- New: Item sheet custom hint editor now displays all hints relevant to the item and not just the custom one.

## 2.10.2

- Fix: Bad infinite cast icon styling.

## 2.10

- New: Combo hints, displaying both icon and text if available. By default enabled only for hints that request this.
- Change: Console warnings no longer use actual warnings and instead use an icon, removing useless stacktrace noise while remaining visible.
- Change: Decent number of hints were minified.
- Fix: Non-deterministic formulas could cause an item change note to not show.
- Refactor: Preparations for future compatibility.

## 2.9.1

- Fix: Item size detection with PFv11 data change.
- Fix: Spell point cost hint.

## 2.9.0

- Foundry v12 compatibility. v11 and older support dropped.

## 2.8.2.2

- Change: Improve logging of errors originating from external handlers.

## 2.8.2.1

- Style: Size is now displayed after several other details instead of before.

## 2.8.2

- New: Aura toggle setting
- Fix: Value icon details.

## 2.8.1

- i18n: Minor improvements.
- Fix: CL, Spell DC, and Concentration change and context note targets were reported as bad targets.

## 2.8.0.3

- Fix: Non-weapon attacks could claim non-proficiency.

## 2.8.0.2

- Change: Changes are parsed from prepared changes rather than raw data, fixing odd issues.

## 2.8.0.1

- Fix: Shield & Armor proficiency was displayed incorrectly.

## 2.8.0

- Change: Spell material icon altered. This is partial solution to material display being suboptimal.
- Change: Proficiency detection now uses functionality provided by the system and should thus match system perfectly.
- Fix: Container currency label.
- New: Full Speed in Medium/Heavy armor now combine into single label if both are enabled.
- Fix: Value tooltip had outdated translation string use.

## 2.7.0

- Change: PF1v10 compatibility. v9 and older compatibility removed due to large system changes.
- Fix: Spell DC hint restored.

## 2.6.1.1

- Fix: Custom proficiency handling was broken.

## 2.6.1

- Fix: Errors with bad containers lacking currecy info.
- Fix: Made proficiency handling more uniform.
- Fix: Item name scrunching.
- Fix: Tag overflow. This now allows wrapping which can make item listing a bit ugly.

## 2.6

- Fix: NPCs ignored the NPC proficiency setting for displaying proficiencies.
- Improved: Spell slot cost hints.

## 2.5.0

- Change: Hints are now stored in Foundry's flags instead of system dictionary flags.
  - Warning: Migration may be slow if you used a lot of flags, as they're migrated only on demand.
- Fix: Editor layout was weird.

## 2.4.1

- Fix: Proficiency testing failed for basic proficiencies (simple, martial, medium armor, etc.)
- New: Use equipment base types for proficiency testing.

## 2.4.0.1

- Fix: Item subtype handling was broken, causing various issues, including nonproficient warnings on everything.

## 2.4.0

- ⚠️ Change: Minimum compatible PF1 version increased to v9.
- Fix: Broken handling for attacks.

## 2.3.0

- Change: Change and context notes are not combined anymore.
- Change: Change and context notes are grouped instead of line-by-line when there's multiple.
- New: Max hint length option for change/note hints.
- Fix: Formula parsing would fail if flairs were present.
- Fix: Spell cost display could display confusing information.

## 2.2.1

- Remove String.format() usage.
- Spellpoint costs are shown nicer.

## 2.2.0

- Minimum system version upgraded to 0.82.4
- Fix: Secondary natural attack tag was misapplied.
- Removed: Weapon properties in item summary (feature to be inherited by Little Helper).

## 2.1.1

- New: Damaged hint for items that are damaged but not broken.
- Change: Broken condition now displays item HP
- Fix: Custom images were not included in releases.

## 2.1.0.1

- Fix: Erroring in items outside of actors from attempting to access nonexistent parent actor.

## 2.1.0

- Fix: Some evaluated numbers were wrong due to missing roll data.
- Change: Use Foundry tooltips instead of title attribute.
- Fix: Bad aura school handling leading into partial translation string usage.

## 2.0.0

- Fix: Foundry v10 and PF1 0.82.0 compatibility.

## 1.6.0

- Bring over updated formula simplification function from Little Helper.
- Fix custom hint inline formula display.
- Foundry v10 compatibility

## 1.5.6.1

- Formula resolution function updated, code from Little Helper project.

## 1.5.6

- Actions with uses ammo enabled but no ammo type selected display a warning.
- New: Script Call tag.
- Internal: Less replaced with SCSS.
- Internal: Rollup replaced with esbuild.

## 1.5.5

- PF1 sub-action support.
  - Display warning if attacks, weapons or spells lack actions.

## 1.5.4

- Fix: Better handling of uneditable sheets.
- Fix: Unusual spell slot cost was shown for at-will spells.
- Changed: Better display of unusual spell slot costs.

## 1.5.3

- New: Shorter tags where possible.
- New: Slot cost hint for spells when it is higher than 1.
- Fix: PF1 0.80.16 compatibility

## 1.5.2

- Fix: Handling of custom/sub-skills that don't exist.
- Changed: Error hints are displayed in front of the hints instead of the end, giving them better visibility.
- Changed: Saving throw effect is passed through HTML enriching (inline roll parsing and such).

## 1.5.1.2

- Fix: Inline rolls broke with other things.

## 1.5.1.1

- Fix: Inline rolls broke with ternaries.

## 1.5.1

- Fix: Inline formula parsing for display was producing unhelpful output.

## 1.5.0.1

- Fix: Treat bad external handlers better.

## 1.5.0

- Fix: Item properties were not displayed.
- New: Inline rolls are no longer rolled, allowing `[[3d6]]` to display as `[3d6]` instead of some random evaluated number.
- Internal: Jquery usage reduced drastically.

## 1.4.0.5

- Fix: Proficiency errors in containers and other sources where actor is not in normal manner or at all.

## 1.4.0.4

- Fixed: Custom hints were not saved or read correctly.
- Fixed: Hints potentially wrapping for no good reason.
- Changed: Hint styling has been adjusted.

## 1.4.0.3

- Fixed: Tower shields and heavy shields were tested for proficiency incorrectly (heavy shields were tower shields, tower shields were nothing at all).

## 1.4.0.1

- Changed: Slightly better handling of unrecognized changes.

## 1.4.0

- New: Keys with CL option for iconized auras.
- New: Nonlethal hint.
- i18n: Iconized aura combobox is translatable.
- Styling: Hint spacing is handled with flex gap instead of complicated margin rules.

## 1.3.0.1

- Fix: Disable noisy formula warnings that were introduced in 1.3.

## 1.3.0

- Compatibility: PF1 0.79.5 weapon data change. Older PF1 versions not supported.
- Changed: Proficiency warning moved to the front.
- New: Basic homebrew support (to be improved in the future).
- New: Custom hints can now include custom CSS selectors.  
  `Label|Tooltip hint.|css=custom selectors`

## 1.2.0

- Internal: Some large redesigns to make the code less error-prone.

## 1.1.0.2

- Fix: Custom hints editor was not rendering.

## 1.1.0.1

- Fix: Refactoring error caused by 1.1.0 – common is not defined, at disable Unlang

## 1.1.0

- Fix: Some PF1 translation strings were not passed through localization.
- New: DC hint has the formula in tooltip.
- Internal: Refactoring for better code management.

## 1.0.1.3

- Fix: Buckler special case.

## 1.0.1.2

- Fix: Weapon proficiency.

## 1.0.1.1

- Fix: Custom proficiencies.

## 1.0.1

- Removed: Spell school tooltip (deprecated by [!277](https://gitlab.com/Furyspark/foundryvtt-pathfinder1/-/merge_requests/277)).
- New: Nonproficient hint.
- Changed: Translation keys start with Koboldworks instead of MKAh.

## 1.0.0

- Fix: Size labels present for items that did not allow configuration for it (loot, consumable, attack)
- New: Ignore differing size for items with resizing flag set.
- New: DC display for non-spells, and spells show DC if different from base for the spell level.
- Changed: Branding, starting slow move to Koboldworks
  - CSS classes have been altered from .m-k- prefix to instead have .koboldworks in addition.
- Removed: Foundry 0.7.x support.
- Fix: Custom hint error handler was broken.

## 0.7.7

- New: Some strings have been changed to support translations.
- Styling: Spell component icon adjusted.
- Fixed: Compatibility with some other modules.

## 0.7.6

- New: Custom hints can now have custom hover tooltip via vertical bar character (!1; _thanks to @smarekp_)  
  Example: `Orcslayer|+50 damage against orcs`
- Fixed: Tooltip sometimes displayed "null" as text.

## 0.7.5.6 Fix handling of broken aura type

## 0.7.5.5 Fix for everything being broken

## 0.7.5.4 Fix for broken subTarget

## 0.7.5.3 Fix for log noise and weirdness

## 0.7.5.2 Fix for everything is a skill

## 0.7.5.1 Fix for log noise

## 0.7.5

- Fix: Subtargets were not displayed with proper label.
- New: API to register external item handlers.
  - game.modules.get('mkah-pf1-item-hints').api.addHandler(callback) – parameters: actor, item, options – return: array of Hint objects to display
  - game.modules.get('mkah-pf1-item-hints').api.Hint – class that handlers need to return

## 0.7.4

- New: GM Notes hint when they're present in an item
- New: Bad target hint for present but unidentifiable change/note targets.
- New: CMB and secondary natural attack identifiers added to combat tab.

## 0.7.3.1

- Fixed: Foundry 0.7.9 compatibility

## 0.7.3

- Fix: Container item count was not shown.
- New: Item value option now is more detailed with following options.
  - Trade goods only
  - Trade goods and containers
  - Trade goods, containers, and container contents
  - All
  - None
- Note: This is no longer compatible with FVTT 0.7.x due to changes needed.

## 0.7.2

- Fix: Plain number custom hints.
- Other: Compatibility verification with FVTT 0.8.x

## 0.7.1.3

- Fix: Attacks context notes being unidentified.
- Change: Different method of falling back with unknown keys which hopefully supports custom categories to a degree.

## 0.7.1.2

- Fix: Skill changes and context notes were messed up with custom skills, subskills, and specific skills.
- Fix: No Target warning tag would incorrectly always blame Changes. Now it is ambiguous about it.

## 0.7.1.1

- Fix: Context Notes were warned about lacking formula.
- Fix: Context Note categories were being ignored.
- New: Context Notes warn about lacking text.

## 0.7.1

- Fix: Missing change target categories (`health`, `defense`, `abilityChecks`, ...).
- Fix: Better (but not great) handling of custom change targets.
- New: More nontandard change label shortenings. Also client-side option to disable them.
- Changed: Incomplete warning tag is now 'No Target'
- New: Changes with no formula are warned about with 'No Formula' tag.
- Fix: Tags could sometimes fail if bad Changes were mixed in before good ones.

## 0.7.0.1

- Fix: Errors inside containers within containers.
  Cause is due to actor information not being available. This also means some item hints can not be displayed.
- Fix: Better alt sheet support with item properties.

## 0.7 Spell school icons

- New: Added iconsf or spell schools with options to select three letter key, game-icons icons, or Thassilonian runes.
- Fixed: Sometimes custom hints were not removed when cleared. Added explicit item hint deletion to ensure it happens.
- Compatibility with PF1 0.77.22 buff changes.

## 0.6.4.1

- Iconize, Changes, and Sanity check options default to enabled for now to raise awareness of their existence.
- Repository moved

## 0.6.4 Fix for @item references

## 0.6.3

- Changed: More aggressively cache or use cached rollData to reduce impact.
- Changed: Deprecated DOMSubtreeModified swapped for the more complicated MutationObserver.
- Fixed: Custom hint retrieval could cause rest of the code to fail on malformed actor.

## 0.6.2 Custom input field in advanced tab

## 0.6.1

- Fixed: Observer could not see the hints(?)
- Fixed: Excessive decimals in item values in some cases
- Fixed: Breaking on change targets missing (e.g. removed custom changes)

## 0.6 Custom hints & container hints

- New: Items can now have custom hints by including "itemHints" dictionary flag in advanced tab.
  - Multiple hints supported via semicolon (;).
- New: Containers show item count.
- New: Containers show value of their contents.

## 0.5.0.2 Hotfix for Changes being revealed without identification

## 0.5.0.1 Hotfix for error on missing context notes

- Fixed (speculatively): Error on missing changes.

## 0.5 Newness

- New: Change targets for items. (disabled by default)
- New: Favored Class Bonus selection for classes.
- New: Item value display, default only for tradegoods.
- New: Costly spell material component hint.
- Fixed: Setting text was not displayed correctly.

## 0.4.0.2 Hotfix for enhanced armor

## 0.4.0.1 Hotfix to disable debug logging

## 0.4 Icon display & Attack hints

## 0.3 PF1 Alt Sheet compatibility

## 0.2 Masterwork & Translations

## 0.1.1 Magic Item Glow

## 0.1 Initial
