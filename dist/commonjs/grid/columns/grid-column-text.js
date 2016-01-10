'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var gridColumnText = {
  initialize: function initialize() {},

  additionalBinding: function additionalBinding(bindingContext) {
    var _this = this;

    if (bindingContext !== this.grid) {
      this.observerLocator.getObserver(bindingContext.row, 'validation').subscribe(function (newValue) {
        _this.validation = Object.assign({}, newValue, { property: _this.property });
      });
    }
  },

  loadCssFrameworkSettings: function loadCssFrameworkSettings(configuration) {
    var settings = configuration.textClasses;

    this.editInputClass = settings.editInput;
    this.editFieldClass = settings.editField;
    this.editFormClass = settings.editForm;
  }
};

exports['default'] = gridColumnText;
module.exports = exports['default'];