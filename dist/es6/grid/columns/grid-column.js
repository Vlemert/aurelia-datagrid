import { ObserverLocator } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { bindable, containerless } from 'aurelia-templating';
import { Grid } from '../grid';
import gridColumnBase from './grid-column-base';
import gridColumnButton from './grid-column-button';
import gridColumnCheckbox from './grid-column-checkbox';
import gridColumnEdit from './grid-column-edit';
import gridColumnText from './grid-column-text';

@containerless
@inject(Grid, ObserverLocator)
export class GridColumn {
  alignment = 'left aligned';
  @bindable buttonClick;
  @bindable caption;
  @bindable checkedIconClass;
  @bindable class;
  @bindable containerClass;
  @bindable editInputClass;
  @bindable editFieldClass;
  @bindable editFormClass;
  @bindable filterable;
  @bindable heading;
  @bindable property;
  @bindable sortable;
  @bindable type = 'text';
  @bindable uncheckedIconClass;
  @bindable value;

  // edit attributes
  @bindable butttonGroupClass;
  @bindable cancelButtonClass;
  @bindable cancelClick;
  @bindable editButtonClass;
  @bindable editClick;
  @bindable orDivClass;
  @bindable saveButtonClass;
  @bindable saveCancelButtonGroupClass;
  @bindable saveClick;

  get isEditing() {
    if (this.bindingContext) {
      return this.grid.isEditingItem(this.bindingContext.row);
    }
    return false;
  }

  constructor(grid, observerLocator) {
    this.grid = grid;
    this.observerLocator = observerLocator;
    this.row = {};
    Object.assign(this, gridColumnBase);
  }

  initialize() {
  }

  bind(bindingContext) {
    switch (this.type.toLowerCase()) {
    case 'button':
      Object.assign(this, gridColumnButton);
      break;
    case 'checkbox':
      Object.assign(this, gridColumnCheckbox);
      break;
    case 'edit-buttons':
      Object.assign(this, gridColumnEdit);
      break;
    default:
      Object.assign(this, gridColumnText);
      break;
    }

    this.initialize();
    this.bindToContext(bindingContext);
    this.additionalBinding(bindingContext);
  }

  additionalBinding(bindingContext) {
  }
}
