import { withBrowserSupport } from '../shared/with-browser-support';

export class ModulesScriptTagBrowserSupport extends withBrowserSupport(
  'module / nomodule',
  '85.5%',
  {},
  'https://caniuse.com/#feat=es6-module'
) {}
