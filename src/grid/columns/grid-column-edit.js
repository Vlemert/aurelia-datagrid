const gridColumnEdit = {
  initialize: function() {
    this.showCancel = true;
  },

  cancelButtonClick: function() {
    if (this.cancelClick) {
      this.cancelClick(this.bindingContext.row);
    }

    Object.assign(this.bindingContext.row, this.originalValue);
    this.grid.finishEditingItem(this.bindingContext.row);
  },

  editButtonClick: function() {
    this.originalValue = Object.assign({}, this.bindingContext.row);

    if (this.editClick) {
      this.editClick(this.bindingContext);
    }

    this.grid.beginEditingItem(this.bindingContext.row);
  },

  loadCssFrameworkSettings: function(configuration) {
    let config = configuration.editClasses;

    this.butttonGroupClass = config.buttonGroup;
    this.cancelButtonClass = config.cancelButton;
    this.editButtonClass = config.editButton;
    this.orDivClass =  config.orDiv;
    this.saveButtonClass = config.saveButton;
    this.saveCancelButtonGroupClass = config.saveCancelButtonGroup;
  },

  saveButtonClick: function() {
    if (this.saveClick) {
      this.saveClick(this.bindingContext.row);
    }

    this.grid.finishEditingItem(this.bindingContext.row);
  }
};

export default gridColumnEdit;
