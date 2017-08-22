var basekick = function (options) {
  var fontSize = (options.typeSizeModifier * options.baseFontSize);

  var calculateTypeOffset = function (lineHeight) {
    var lineHeightScale = (lineHeight / fontSize);
    return ((lineHeightScale - 1) / 2) + options.descenderHeightScale;
  };

  var lineHeight = options.lineHeightOverride || (options.typeRowSpan * options.gridRowHeight);
  var typeOffset = calculateTypeOffset(lineHeight);

  return {
    fontSize: fontSize + 'px',
    lineHeight: lineHeight + 'px',
    transform: 'translateY(' + typeOffset + 'em)'
  };
};

module.exports = basekick;
