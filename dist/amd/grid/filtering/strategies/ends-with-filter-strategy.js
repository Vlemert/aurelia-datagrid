define(['exports', 'module'], function (exports, module) {
  'use strict';

  var endsWithFilterStrategy = {
    apply: function apply(items, filter) {
      var filteredItems = items.slice(0);
      for (var i = filteredItems.length - 1; i > -1; i--) {
        if (!endsWithFilterStrategy.matchesFilter(filteredItems[i], filter)) {
          filteredItems.splice(i, 1);
        }
      }
      return filteredItems;
    },

    matchesFilter: function matchesFilter(item, filter) {
      var property = (item[filter.property] + '').toString().toLowerCase();
      return property.endsWith(filter.value.toString().toLowerCase());
    }
  };

  module.exports = endsWithFilterStrategy;
});