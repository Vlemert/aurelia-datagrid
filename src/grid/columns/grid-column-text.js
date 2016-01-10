const gridColumnText = {
  initialize: function() {
  },

  additionalBinding: function(bindingContext) {
    if (bindingContext !== this.grid) {
      this.observerLocator
        .getObserver(bindingContext.row, 'validation')
        .subscribe(newValue => {
          this.validation = Object.assign({}, newValue, { property: this.property });
        });
    }
  },

  loadCssFrameworkSettings: function(configuration) {
    let settings = configuration.textClasses;

    this.editInputClass = settings.editInput;
    this.editFieldClass = settings.editField;
    this.editFormClass = settings.editForm;
  }
};

export default gridColumnText;
