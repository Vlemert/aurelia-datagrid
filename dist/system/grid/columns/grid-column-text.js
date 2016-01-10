System.register([], function (_export) {
  'use strict';

  var gridColumnText;
  return {
    setters: [],
    execute: function () {
      gridColumnText = {
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

      _export('default', gridColumnText);
    }
  };
});