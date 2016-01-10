define(["exports", "module"], function (exports, module) {
  "use strict";

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

  module.exports = gridColumnButton;
});