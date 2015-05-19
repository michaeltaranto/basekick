# Basekick

An experimental mixin for realigning your typographic elements with proper graphic design baseline. The intent is to make it much easier to compose pages while maintaining your vertical rhythm.

## Background

In CSS, the text in a given element will sit centered within its own line-height. In the design world the line height is measured from the [baseline](http://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Typography_Line_Terms.svg/2000px-Typography_Line_Terms.svg.png) of the text. As a result our UIs often deviate from the designers intentions, requiring a heap of pixel-nudging to get things to line up again.

I explore this problem in more depth in this post: [Teaching CSS to Talk Like a Designer](https://medium.com/seek-ui-engineering/teaching-css-to-talk-like-a-designer-1f3c2b2e28c4).

## Current Solution

Using CSS transforms we can translate the text back onto the baseline where it should be.

The goal is for everything to be scalable. If the `font-size` is changed or a new level in your typographic hierarchy introduced, it would be great not to have to recalculate the descender height every time.

## Usage

Import the mixin into your project and pass it the following parameters:

### Parameters

**bk-type-size-modifier** (required)

The multiplier for type font size, relative to the base font size of your document.

**bk-descender-height-scale** (required)

The height of the descender expressed as a ratio of the font.

**bk-type-row-span** (required)

The number of rows the type should span.

**bk-grid-row-height** (required)

The number of pixels for each grid row.

**bk-base-font-size** (required)

The font size applied to the `html` element. Used for scaling both font size and line heights.

**bk-line-height-override** (optional)

Explicit line height override to set an exact value in exceptional cases.

### Example

The following example has the following design requirements:
 - Document's base font size is 10px.
 - Grid rows are 9px high.
 - Standard type is 14px over an 2 grid rows.
 - Headings are 21px over a 3 grid rows.

**Variables**
```Less
@base-font-size: 10;                    // Base font size for the document
@grid-row-height: 9px;                  // Grid rows that are 9px in height
@font-descender-height-scale: 0.14;     // The descender height for the specified font expressed as a scale

@standard-type-scale: 1.4;
@standard-row-span: 2;

@heading-type-scale: 2.1;
@heading-row-span: 3;
```
**Reset/base styles**
```Less
html {
  font-size: @base-font-size;
  font-family: Helvetica Neue;
}
```
**Card component styles**
```Less
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
- JS version

## Credits

Typography images from [Wikipedia](http://en.wikipedia.org)

## License

[MIT](http://mjt01.mit-license.org)