var basekick = function (options) {
  var calculateLineHeightAsScale = function (lineHeight) {
    return (lineHeight / (options.typeSizeModifier * options.baseFontSize));
  };

  var calculateTypeOffset = function (lineHeightScale) {
    return ((lineHeightScale - 1) / 2) + options.descenderHeightScale;
  };

  var lineHeightScale = calculateLineHeightAsScale(options.lineHeightOverride || (options.typeRowSpan * options.gridRowHeight));
  var typeOffset = calculateTypeOffset(lineHeightScale);

  return {
    fontSize: options.typeSizeModifier + 'rem',
    lineHeight: lineHeightScale + 'em',
    transform: 'translateY(' + typeOffset + 'em)'
  };
};

module.exports = basekick;