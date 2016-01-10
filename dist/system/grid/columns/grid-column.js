System.register(['aurelia-binding', 'aurelia-dependency-injection', 'aurelia-templating', '../grid', './grid-column-base', './grid-column-button', './grid-column-checkbox', './grid-column-edit', './grid-column-text'], function (_export) {
  'use strict';

  var ObserverLocator, inject, bindable, containerless, Grid, gridColumnBase, gridColumnButton, gridColumnCheckbox, gridColumnEdit, gridColumnText, GridColumn;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaBinding) {
      ObserverLocator = _aureliaBinding.ObserverLocator;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      containerless = _aureliaTemplating.containerless;
    }, function (_grid) {
      Grid = _grid.Grid;
    }, function (_gridColumnBase) {
      gridColumnBase = _gridColumnBase['default'];
    }, function (_gridColumnButton) {
      gridColumnButton = _gridColumnButton['default'];
    }, function (_gridColumnCheckbox) {
      gridColumnCheckbox = _gridColumnCheckbox['default'];
    }, function (_gridColumnEdit) {
      gridColumnEdit = _gridColumnEdit['default'];
    }, function (_gridColumnText) {
      gridColumnText = _gridColumnText['default'];
    }],
    execute: function () {
      GridColumn = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(GridColumn, [{
          key: 'buttonClick',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'caption',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'checkedIconClass',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'class',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'containerClass',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'editInputClass',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'editFieldClass',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'editFormClass',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'filterable',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'heading',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'property',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'sortable',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'type',
          decorators: [bindable],
          initializer: function initializer() {
            return 'text';
          },
          enumerable: true
        }, {
          key: 'uncheckedIconClass',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'value',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'butttonGroupClass',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'cancelButtonClass',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'cancelClick',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'editButtonClass',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'editClick',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'orDivClass',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'saveButtonClass',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'saveCancelButtonGroupClass',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'saveClick',
          decorators: [bindable],
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
          Object.assign(this, gridColumnBase);
        }

        _createDecoratedClass(GridColumn, [{
          key: 'initialize',
          value: function initialize() {}
        }, {
          key: 'bind',
          value: function bind(bindingContext) {
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
        }, {
          key: 'additionalBinding',
          value: function additionalBinding(bindingContext) {}
        }], null, _instanceInitializers);

        var _GridColumn = GridColumn;
        GridColumn = inject(Grid, ObserverLocator)(GridColumn) || GridColumn;
        GridColumn = containerless(GridColumn) || GridColumn;
        return GridColumn;
      })();

      _export('GridColumn', GridColumn);
    }
  };
});