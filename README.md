## Basekick

An experimental micro style sheet for kicking your basic typographic elements (namely headings, lists and paragraphs) back into line with proper graphic design baseline. The intent is to make it much easier to compose pages while maintaining your vertical rhythm.

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

### Defaults

The initial variable values are the result of discussions with the designers on my team. This produces the following:
**Page headings** 40px font size over 45px line height, at normal font weight.
**Sub headings** 21px font size over 27px line height, at normal font weight.
**Smaller headings** 14px font size over 18px line height, in bold.
**Standard type** 14px font size over 18px line height, at normal font weight.
**Small type** 10px font size over 18px line height, at normal font weight.

To customise any of these values you can alter the following variables in the less file (you will need to rebuild if not using the less file in your project).

### Variables
**base-font-size** (default: 10)
Gets set against the html element for everything to scale from.

**grid-row-height** (default: 9)
Number of pixels for each grid row.

**large-type-rows** (default: 5)
Number of rows the large type (`h1`) should span.

**large-type-font-modifier** (default: 4)
Multiplier for large type (`h1`) font size.

**large-type-baseline-offset** (default: 0.225)
The height of the descender as a ratio of the base font size.

**medium-type-rows** (default: 3)
Number of rows the medium type (`h2`) should span.

**medium-type-font-modifier** (default: 2.1)
Multiplier for medium type (`h2`) font size.

**medium-type-baseline-offset** (default: 0.2857)
The height of the descender as a ratio of the base font size.

**standard-type-rows** (default: 2)
Number of rows the standard type (`h3`, `p`, `li`, `label`, `pre`) should span.

**standard-type-font-modifier** (default: 1.4)
Multiplier for standard type (`h3`, `p`, `li`, `label`, `pre`) font size.

**standard-type-baseline-offset** (default: 0.2857)
The height of the descender as a ratio of the base font size.

**small-type-rows** (default: 2)
Number of rows the small type (`small`) should span.

**small-type-font-modifier** (default: 1)
Multiplier for small type (`small`) font size.

**small-type-baseline-offset** (default: 0.3)
The height of the descender as a ratio of the base font size.

### Building

The preprocessed file is supplied so you can import it into your build and access the variables from your projects scope if need be. However if you are not using less in your build, or just want to import the css independently you can run the build from command line using `npm run build` (be sure to run `npm install` first if you havent already).

This produces an `output` folder containing both standard and minified versions of the style sheet. So to make any changes, change the variables re-run the build and your good to go.

## Credits

Typography images from [Wikipedia](http://en.wikipedia.org)

## License

[MIT](http://mjt01.mit-license.org)