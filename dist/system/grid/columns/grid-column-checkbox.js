System.register([], function (_export) {
  'use strict';

  var gridColumnCheckbox;
  return {
    setters: [],
    execute: function () {
      gridColumnCheckbox = {
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

      _export('default', gridColumnCheckbox);
    }
  };
});