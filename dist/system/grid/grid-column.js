System.register(["./grid", "./grid-column-utils", "aurelia-framework"], function (_export) {
    "use strict";

    var Grid, RegisterColumn, bindable, containerless, inject, GridColumn;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_grid) {
            Grid = _grid.Grid;
        }, function (_gridColumnUtils) {
            RegisterColumn = _gridColumnUtils.RegisterColumn;
        }, function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            containerless = _aureliaFramework.containerless;
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            GridColumn = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(GridColumn, [{
                    key: "heading",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "editInputClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "editFieldClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "editFormClass",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "filterable",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "property",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "sortable",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: "value",
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function GridColumn(grid) {
                    _classCallCheck(this, _GridColumn);

                    _defineDecoratedPropertyDescriptor(this, "heading", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "editInputClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "editFieldClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "editFormClass", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "filterable", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "property", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "sortable", _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, "value", _instanceInitializers);

                    this.grid = grid;
                    this.row = {};
                }

                _createDecoratedClass(GridColumn, [{
                    key: "bind",
                    value: function bind(bindingContext) {
                        RegisterColumn(bindingContext, this);
                        this.loadConfigurationSettings();
                    }
                }, {
                    key: "loadConfigurationSettings",
                    value: function loadConfigurationSettings() {
                        if (this.grid.configuration) {
                            var config = this.grid.configuration.textClasses;

                            this.editInputClass = config.editInput;
                            this.editFieldClass = config.editField;
                            this.editFormClass = config.editForm;
                        }
                    }
                }], null, _instanceInitializers);

                var _GridColumn = GridColumn;
                GridColumn = inject(Grid)(GridColumn) || GridColumn;
                GridColumn = containerless(GridColumn) || GridColumn;
                return GridColumn;
            })();

            _export("GridColumn", GridColumn);
        }
    };
});