# Basekick

An experimental mixin for realigning your typographic elements with proper graphic design baseline. The intent is to make it much easier to compose pages while maintaining your vertical rhythm.

## Background

In CSS, the text in a given element will sit centred within its own line-height. In the design world the line height is measured from the [baseline](http://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Typography_Line_Terms.svg/2000px-Typography_Line_Terms.svg.png) of the text. As a result our UIs often deviate from the designers intentions, requiring a heap of pixel-nudging to get things to line up again.

If you want to know more about the how or why, here is a link to a presentation a gave at MelbCSS about the problem this has solved for our teams — [Teaching CSS to talk like a designer](https://www.youtube.com/watch?v=TGHbkTGVqoU)

## Current Solution

Using CSS transforms we can translate the text back onto the baseline where it should be.

The goal is for everything to be scalable. If the `font-size` is changed or a new level in your typographic hierarchy introduced, it would be great not to have to recalculate the descender height every time.

## Usage

Install the mixin into your project, and pass it the following parameters:

### LESS

eg.
```CSS
@import (reference) "basekick/mixin";

.MyHeading {
  .basekick(<options>);
}
```

**bk-type-size-modifier** (required)

The multiplier for type font size, relative to the base font size of your typographic hierarchy.

**bk-descender-height-scale** (required)

The height of the descender expressed as a ratio of the font.

**bk-type-row-span** (required)

The number of rows the type should span.

**bk-grid-row-height** (required)

The number of pixels for each grid row.

**bk-base-font-size** (required)

The base font size on which your type size modifiers are based.

**bk-line-height-override** (optional)

Explicit line height override to set an exact value in exceptional cases.

### JS

eg.
```JS
var basekick = require("basekick");

var myHeadingStyles = basekick(options);
```

**options** (required)

| Options | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| typeSizeModifier | `int` | Y | The multiplier for type font size, relative to the base font size of your typographic hierarchy. |
| typeRowSpan | `int` | Y | The multiplier for type font size, relative to the base font size of your document. |
| descenderHeightScale | `int` | Y | The multiplier for type font size, relative to the base font size of your document. |
| baseFontSize | `int` | Y | The base font size on which your type size modifiers are based. |
| gridRowHeight | `int` | Y | The number of pixels for each grid row. |
| lineHeightOverride | `int` | N | Explicit line height override to set an exact value in exceptional cases. |


### Example

The following example has the following design requirements:
 - Base font size is `10px`.
 - Grid rows are `9px` high.
 - Standard type is `14px` over an 2 grid rows.
 - Headings are `21px` over a 3 grid rows.

**Variables**
```Less
@base-font-size: 10;                    // Base font size
@grid-row-height: 9px;                  // Height of grid rows
@font-descender-height-scale: 0.14;     // The descender height for the specified font expressed as a scale

@standard-type-scale: 1.4;
@standard-row-span: 2;

@heading-type-scale: 2.1;
@heading-row-span: 3;
```
**Card component styles**
```Less
.card {
  font-family: Helvetica Neue;
}

.card__content {
  .basekick(@standard-type-scale,
            @standard-type-descender-height,
            @standard-row-span,
            @grid-row-height,
            @base-font-size);
}

.card__title {
  .basekick(@heading-type-scale,
            @heading-type-descender-height,
            @heading-row-span,
            @grid-row-height,
            @base-font-size);
}
```

## WIP

- Sass version
- Stylus version

## License

[MIT](https://michaeltaranto.mit-license.org)
