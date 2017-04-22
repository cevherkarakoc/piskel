(function () {
  var ns = $.namespace('pskl.rendering');

  ns.AbstractRenderer = function () {};

  ns.AbstractRenderer.prototype.clear = Constants.ABSTRACT_FUNCTION;
  ns.AbstractRenderer.prototype.render = Constants.ABSTRACT_FUNCTION;

  ns.AbstractRenderer.prototype.getCoordinates = Constants.ABSTRACT_FUNCTION;

  ns.AbstractRenderer.prototype.setGridWeight = Constants.ABSTRACT_FUNCTION;
  ns.AbstractRenderer.prototype.getGridWeight =  Constants.ABSTRACT_FUNCTION;

  ns.AbstractRenderer.prototype.setZoom = Constants.ABSTRACT_FUNCTION;
  ns.AbstractRenderer.prototype.getZoom = Constants.ABSTRACT_FUNCTION;

  ns.AbstractRenderer.prototype.setOffset = Constants.ABSTRACT_FUNCTION;
  ns.AbstractRenderer.prototype.getOffset = Constants.ABSTRACT_FUNCTION;

  ns.AbstractRenderer.prototype.setDisplaySize = Constants.ABSTRACT_FUNCTION;
  ns.AbstractRenderer.prototype.getDisplaySize = Constants.ABSTRACT_FUNCTION;
})();
