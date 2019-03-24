import { withBrowserSupport } from '../shared/with-browser-support';

export class DynamicImportBrowserSupport extends withBrowserSupport('Dynamic import()', '78.8%', {
  firefox: true,
  edge: true
}, 'https://caniuse.com/#feat=es6-module-dynamic-import') {}
