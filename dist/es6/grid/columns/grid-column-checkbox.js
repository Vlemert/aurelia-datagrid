const gridColumnCheckbox = {
  initialize: function() {
    this.alignment = this.alignment || 'center aligned';
    this.inputType = 'checkbox';
  },

  loadCssFrameworkSettings: function(configuration) {
    let config = configuration.checkboxClasses;

    this.checkedIconClass = config.checkedIcon;
    this.class = config.editInput;
    this.containerClass = config.container;
    this.uncheckedIconClass = config.uncheckedIcon;
  }
};

export default gridColumnCheckbox;
