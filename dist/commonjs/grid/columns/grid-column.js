'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _grid = require('../grid');

var _gridColumnBase = require('./grid-column-base');

var _gridColumnBase2 = _interopRequireDefault(_gridColumnBase);

var _gridColumnButton = require('./grid-column-button');

var _gridColumnButton2 = _interopRequireDefault(_gridColumnButton);

var _gridColumnCheckbox = require('./grid-column-checkbox');

var _gridColumnCheckbox2 = _interopRequireDefault(_gridColumnCheckbox);

var _gridColumnEdit = require('./grid-column-edit');

var _gridColumnEdit2 = _interopRequireDefault(_gridColumnEdit);

var _gridColumnText = require('./grid-column-text');

var _gridColumnText2 = _interopRequireDefault(_gridColumnText);

var GridColumn = (function () {
  var _instanceInitializers = {};
  var _instanceInitializers = {};

  _createDecoratedClass(GridColumn, [{
    key: 'buttonClick',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'caption',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'checkedIconClass',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'class',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'containerClass',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'editInputClass',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'editFieldClass',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'editFormClass',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'filterable',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'heading',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'property',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'sortable',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'type',
    decorators: [_aureliaTemplating.bindable],
    initializer: function initializer() {
      return 'text';
    },
    enumerable: true
  }, {
    key: 'uncheckedIconClass',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'value',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'butttonGroupClass',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'cancelButtonClass',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'cancelClick',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'editButtonClass',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'editClick',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'orDivClass',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'saveButtonClass',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'saveCancelButtonGroupClass',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'saveClick',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'isEditing',
    get: function get() {
      if (this.bindingContext) {
        return this.grid.isEditingItem(this.bindingContext.row);
      }
      return false;
    }
  }], null, _instanceInitializers);

  function GridColumn(grid, observerLocator) {
    _classCallCheck(this, _GridColumn);

    this.alignment = 'left aligned';

    _defineDecoratedPropertyDescriptor(this, 'buttonClick', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'caption', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'checkedIconClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'class', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'containerClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'editInputClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'editFieldClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'editFormClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'filterable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'heading', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'property', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'uncheckedIconClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'butttonGroupClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'cancelButtonClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'cancelClick', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'editButtonClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'editClick', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'orDivClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'saveButtonClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'saveCancelButtonGroupClass', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'saveClick', _instanceInitializers);

    this.grid = grid;
    this.observerLocator = observerLocator;
    this.row = {};
    Object.assign(this, _gridColumnBase2['default']);
  }

  _createDecoratedClass(GridColumn, [{
    key: 'initialize',
    value: function initialize() {}
  }, {
    key: 'bind',
    value: function bind(bindingContext) {
      switch (this.type.toLowerCase()) {
        case 'button':
          Object.assign(this, _gridColumnButton2['default']);
          break;
        case 'checkbox':
          Object.assign(this, _gridColumnCheckbox2['default']);
          break;
        case 'edit-buttons':
          Object.assign(this, _gridColumnEdit2['default']);
          break;
        default:
          Object.assign(this, _gridColumnText2['default']);
          break;
      }

      this.initialize();
      this.bindToContext(bindingContext);
      this.additionalBinding(bindingContext);
    }
  }, {
    key: 'additionalBinding',
    value: function additionalBinding(bindingContext) {}
  }], null, _instanceInitializers);

  var _GridColumn = GridColumn;
  GridColumn = (0, _aureliaDependencyInjection.inject)(_grid.Grid, _aureliaBinding.ObserverLocator)(GridColumn) || GridColumn;
  GridColumn = (0, _aureliaTemplating.containerless)(GridColumn) || GridColumn;
  return GridColumn;
})();

exports.GridColumn = GridColumn;