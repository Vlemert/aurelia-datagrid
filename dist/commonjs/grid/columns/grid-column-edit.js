"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var gridColumnEdit = {
  initialize: function initialize() {
    this.showCancel = true;
  },

  cancelButtonClick: function cancelButtonClick() {
    if (this.cancelClick) {
      this.cancelClick(this.bindingContext.row);
    }

    Object.assign(this.bindingContext.row, this.originalValue);
    this.grid.finishEditingItem(this.bindingContext.row);
  },

  editButtonClick: function editButtonClick() {
    this.originalValue = Object.assign({}, this.bindingContext.row);

    if (this.editClick) {
      this.editClick(this.bindingContext);
    }

    this.grid.beginEditingItem(this.bindingContext.row);
  },

  loadCssFrameworkSettings: function loadCssFrameworkSettings(configuration) {
    var config = configuration.editClasses;

    this.butttonGroupClass = config.buttonGroup;
    this.cancelButtonClass = config.cancelButton;
    this.editButtonClass = config.editButton;
    this.orDivClass = config.orDiv;
    this.saveButtonClass = config.saveButton;
    this.saveCancelButtonGroupClass = config.saveCancelButtonGroup;
  },

  saveButtonClick: function saveButtonClick() {
    if (this.saveClick) {
      this.saveClick(this.bindingContext.row);
    }

    this.grid.finishEditingItem(this.bindingContext.row);
  }
};

exports["default"] = gridColumnEdit;
module.exports = exports["default"];