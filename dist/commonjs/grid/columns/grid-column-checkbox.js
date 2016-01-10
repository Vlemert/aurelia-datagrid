'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var gridColumnCheckbox = {
  initialize: function initialize() {
    this.alignment = this.alignment || 'center aligned';
    this.inputType = 'checkbox';
  },

  loadCssFrameworkSettings: function loadCssFrameworkSettings(configuration) {
    var config = configuration.checkboxClasses;

    this.checkedIconClass = config.checkedIcon;
    this['class'] = config.editInput;
    this.containerClass = config.container;
    this.uncheckedIconClass = config.uncheckedIcon;
  }
};

exports['default'] = gridColumnCheckbox;
module.exports = exports['default'];