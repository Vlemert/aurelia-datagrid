"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var gridColumnButton = {
  click: function click() {
    if (this.buttonClick) {
      this.buttonClick();
    }
  },

  loadCssFrameworkSettings: function loadCssFrameworkSettings(configuration) {
    var config = configuration.buttonClass;
    this["class"] = config;
  }
};

exports["default"] = gridColumnButton;
module.exports = exports["default"];