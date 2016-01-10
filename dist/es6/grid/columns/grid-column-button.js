const gridColumnButton = {
  click: function() {
    if (this.buttonClick) {
      this.buttonClick();
    }
  },

  loadCssFrameworkSettings: function(configuration) {
    let config = configuration.buttonClass;
    this.class = config;
  }
};

export default gridColumnButton;
