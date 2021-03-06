System.register([], function (_export) {
  'use strict';

  var equalsFilterStrategy;
  return {
    setters: [],
    execute: function () {
      equalsFilterStrategy = {
        apply: function apply(items, filter) {
          var filteredItems = items.slice(0);
          for (var i = filteredItems.length - 1; i > -1; i--) {
            if (!equalsFilterStrategy.matchesFilter(filteredItems[i], filter)) {
              filteredItems.splice(i, 1);
            }
          }
          return filteredItems;
        },

        matchesFilter: function matchesFilter(item, filter) {
          var property = (item[filter.property] + '').toString().toLowerCase();
          return property === filter.value.toString().toLowerCase();
        }
      };

      _export('default', equalsFilterStrategy);
    }
  };
});