import configuration from './grid/configuration';

export function configure(aurelia, config) {
  aurelia.globalResources(
    './grid/grid',
    './grid/columns/grid-column',
    './grid/columns/grid-column-template');

  if (typeof(config) === 'function') {
    config(configuration);
  }
}
