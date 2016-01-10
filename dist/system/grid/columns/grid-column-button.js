System.register([], function (_export) {
  "use strict";

  var gridColumnButton;
  return {
    setters: [],
    execute: function () {
      gridColumnButton = {
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

      _export("default", gridColumnButton);
    }
  };
});