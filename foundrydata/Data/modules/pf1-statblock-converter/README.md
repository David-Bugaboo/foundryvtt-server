![Downloads](https://img.shields.io/github/downloads-pre/lavaeolous/PF1-StatBlock-Converter-Module/latest/total?style=flat-square)
![Downloads](https://img.shields.io/github/downloads/lavaeolous/PF1-StatBlock-Converter-Module/total?style=flat-square)

# SBC | StatBlock-Converter for Pathfinder 1E

FoundryVTT Module to create new PC and NPC Actors from a text-based Statblock (as found for example on [Archives of Nethys](https://www.aonprd.com/))

<a href="https://www.buymeacoffee.com/fairstrides" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" width="150" ></a><a href="https://www.patreon.com/pathfindersforge"><img src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/11274476/2fbcd44fcc8242fe8f736acd4a9df977/eyJ3IjoyMDB9/3.png?token-time=2145916800&token-hash=NsuiNW-9rbVv4n1sKKcOhFhYcwo80hitvtFAxm06UlA%3D" alt="Patreon" width="50"></a>

## Installation

Install the SBC Module via the Add-On Module Tab in FoundryVTT using the following link to the manifest
`https://gitlab.com/foundryvtt_pathfinder1e/pf1-statblock-converter/-/releases/permalink/latest/downloads/module.json`

# Compatibility - SBC v5.6.2

- System: [Pathfinder 1st Edition](https://gitlab.com/foundryvtt_pathfinder1e/foundryvtt-pathfinder1),
  - Minimum: 11.0
  - Verified: 11.6
- FoundryVTT:
  - Minimum: 12
  - Verified: 12
- Roll Bonuses PF1:
  - Minimum: 2.18.0
  - Verified: 2.20.0

## Legacy Versions

- v5.1.0 and upwards of SBC are not compatible with v11 of FoundryVTT. Use release [v5.0.1](!https://gitlab.com/foundryvtt_pathfinder1e/pf1-statblock-converter/-/releases/5.0.1) for this.
- v4.6.0 and upwards of SBC are not compatible with v10 of FoundryVTT. Use release [v4.5.3](!https://gitlab.com/foundryvtt_pathfinder1e/pf1-statblock-converter/-/releases/4.5.3) for this.
- v4.0.0 and upwards of SBC are not compatible to v9 of FoundryVTT. Use release [v3.4.0](!https://github.com/Lavaeolous/PF1-StatBlock-Converter-Module/releases/tag/v3.4.0) for this.

## How to Use

1 Copy &amp; Paste Statblocks into the input, you can edit the statblock after copying.
2 Errors, warnings and information will be shown below to help you identify potential errors in the statblock.
3 If you use multiple custom compendia, loading times may get very long.

## Roll Bonuses PF1 Integration

As of v5.4.0, SBC works with Roll Bonuses PF1 by david aka claudekennilol to set up various bonuses pre-configured:

- Weapon Focus (normal, greater, and mythic)
- Weapon Specialization (norml and greater)
- Armor Focus (normal and improved)
- Elemental Focus (normal, greater, and mythic)
- Spell Focus (normal, greater, and mythic)
- Spell Specialization
- Martial Focus
- Snake Sidewind
- Furious Focus
- Improved Critical
- Versatile Performance
- Weapon Training

In v5.5.0, SBC expanded this to include:

- Favored Enemy\*
- Vital Strike (normal, improved, greater, mythic)
- Devastating Strike (normal and improved)
- Ammo properties (enhancement, bane, flaming, corrosive, shocking, and cold, and their burst variants)\*

\*: The Favored Enemy and Bane require PF1E v11.4.0 and Roll Bonuses PF1 2.20.0!

# Disclaimer

SBC is never finished it seems :D. See change log for latest updates and issues for known bugs.
If you find any errors or have a statblock that can't be converted at all, feel free to open an issue here or let me know on the FoundryVTT Discord.

## Please note

- The conversion from statblock text to actor is not perfect.
- To reproduce the statblock as written, some adjustments (e.g. through buffs or changes to attacks) are added automatically (a setting can disable this).
- Statblocks often include typographical errors (e.g. extra linebreaks) or ligatures (e.g. ﬁ instead of fi). You may need to fix these manually.
- For important NPCs (e.g. named one's, bosses or the BBEG), check them manually after the conversion!
- Skills are almost never given in full in statblocks, SBC only fills in the ones given.

## Known Bugs

- Not all Statblocks are equally formatted. As long as its reasonably well-formed, it should work. If not, check the preview area or console.
- See Issues. If you find anythings thats not noted there, please let me know.

## To Do

- Fix bugs

# Contact

fairstrides | FoundryVTT Discord
