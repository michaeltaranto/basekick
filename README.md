# Basekick

### Typographical baselines for CSS

An experimental mixin for kicking your basic typographic elements back into line with proper graphic design baseline. The intent is to make it much easier to compose pages while maintaining your vertical rhythm.

## The background

In CSS the text in a given element will sit centered within its own line-height, whereas in the design world the line height is measured from the baseline of the text. So when we layout pages they often deviate from the designers plan resulting in a heap of 'pixel nudging' to try and get things to line up again.

## The plan

By taking the rules out of the visual designers head and translating them into CSS we should be able to get away without all the 'ad-hock' nudging of content and elements. If the rules that govern their designs are implemented as CSS rules, there should be no exceptions right? (wishful thinking maybe).

## The problem

The key offender when it comes to deviating from vertical rhythm is the difference in what 'baseline' means in different disciplines. We only have what CSS gives us, which does not align with what is in the designers rule book.

In the design world the baseline runs along the [bottom of the lower case letters](http://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Typography_Line_Terms.svg/2000px-Typography_Line_Terms.svg.png), not the bottom of the descender. There is no way to compute the [height of a descender](http://upload.wikimedia.org/wikipedia/commons/f/f6/Typographic_descenders.png) from CSS, let alone across different fonts.

## The current solution

There are some magic numbers in here, but they fortunately are 'em' values so they scale pretty well. It means we are expressing the descender height as a scale of the font size which does make some sense.

However this value has to change from font to font so if sans-serif isnt your thing, you need to calculate this offset (typically line height divided by font size, but trial and error work well too) and update the offset variable values.

## Usage

Basically pull the mixin into your solution and pass it the following parameters:

### Parameters

**bk-type-size-modifier** (required)

The multiplier for type font size, relative to the base font size of your document.

**bk-type-descender-height** (required)

The height of the descender as a ratio of the base font size.

**bk-type-row-span** (required)

The number of rows the type should span.

**bk-grid-row-height** (required)

The number of pixels for each grid row.

**bk-line-height-override** (optional)

Explicit line height override to set an exact value in exceptional cases.

### Example

Your document's base font size is 10px and your grid rows are 9px high. Your design has standard type being 14px over an 18px line height, and your headings are 21px over a 27px line height.

```Less
@grid-row-height: 9px;                  // Grid has rows that are 9px in height

@heading-type-scale: 2.1;               // Document base font is 10px, the heading should be 21px, so scale is 2.1
@heading-type-descender-height: 0.2857; // At 21px the height of the descender expressed as a scale of the type is 0.2857
@heading-row-span: 3;                   // Grid rows are 9px, the heading should span a line height of 27px, 27 divided by 9, row span should be 3

.card__title {
  .basekick(@heading-type-scale, @heading-type-descender-height, @heading-row-span, @grid-row-height);
}

@standard-type-scale: 1.4;
@standard-type-descender-height: 0.2857;
@standard-row-span: 2;

.card__content {
  .basekick(@standard-type-scale, @standard-type-descender-height, @standard-row-span, @grid-row-height);
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