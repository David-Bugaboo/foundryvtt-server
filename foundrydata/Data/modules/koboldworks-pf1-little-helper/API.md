# Little Helper API

## General

API is generally accessible via the following:

```js
const api = game.modules.get("koboldworks-pf1-little-helper").api;
```

## Hooks

### i18n

Hook: `little-helper.i18n`

|Parameter|Type|Description|
|:---|:---|:---|
|`t`|`Object`|Object for i18n data|

#### Example

```js
Hooks.on('little-helper.i18n', (t) => {
	t.conditions.yourImaginaryCondition = 'YourModule.TranslationKey';
	// This key will soon after be passed through game.i18n.localize and have its newline characters transformed into <br>
});
```

### Tooltips

#### Chat card metadata

Hook: `little-helper.chat.tooltip.meta`

|Parameter|Type|Description|
|:---|:---|:---|
|`cm`|`ChatMessage`|ChatMessage the tooltip is for.|
|`html`|`HTMLElement`|HTML Element for the tooltip content.|

#### Active Buffs

Hooks `little-helper.hud.tooltip.active`

|Parameter|Type|Description|
|:---|:---|:---|
|`tooltip`|`Element`|Tooltip element.|
|`context`|`object`|Context|
|`context.actor`|`Actor`|Actor this tooltip is for.|
|`context.item`|`Item` or `null`|Item, such as buff, this tooltip is for.|
|`context.condition`|`string` or `null`|Condition this tooltip is for.|
|`context.event`|`Event`|Event that triggered the tooltip.|

### Check Tags

Hook: `little-helper.checks.hints`

|Parameter|Type|Description|
|:---|:---|:---|
|`tags`|`Tag[]`|Insert your new tags here. Or alter it.|
|`subject`|`Object`|Chat message subject.|
|`cm`|`ChatMessage`|Chat message reference.|
|`roll`|`Roll`|Roll instance attached to the chat message.|
|`result`|`Number`|Roll result.|
|`element`|`Element`|HTML Element associated with the chat message.|
|`cls`|`Tag`|Class reference for tags, so you can make your own without awkward imports.|

#### Example

```js
Hooks.on('little-helper.checks.hints', (tags, { subject, cm, roll, result, element, cls }) => {
	// your code here
});
```

### Details Tab

Hook: `little-helper.details-tab.content`

|Parameter|Type|Description|
|:---|:---|:---|
|`content`|`Element`|HTML Element for details tab content.|
|`shared`|`SharedData`|Shared data object.|

#### Example

```js
Hooks.on('little-helper.details-tab.content', (content, actor) => {
	// your code here
});
```

## Configuration

### Slots

|Path|Description|
|:---|:---|
|`api.slots`|Contains slot ID to slot configuration mapping.|
|`api.classes.slot`|Slot configuration class.|

Slot configuration class has following info:

|Property|Type|Description|
|:---|:---|:---|
|`limit`|number|Max number of items in this slot.|
|`soft`|boolean|Is limit soft? Lesser warning when exceeded.|

#### Example

```js
// Introduce new `tail` slot
api.slots.tail = new api.classes.slot();
// Introduce new `wing` slot with each wing individually
api.slots.wing = new api.classes.slot(2);
// Introduce new `tattoo` slot with soft limit of 5
api.slots.tattoo = new api.classes.slot(5, {soft:true});

// Increase ring limit
api.slots.ring.limit = 4;
```
