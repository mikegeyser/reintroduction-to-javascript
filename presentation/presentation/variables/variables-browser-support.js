import { withBrowserSupport } from '../shared/with-browser-support';

export class VariablesBrowserSupport extends withBrowserSupport('let + const', '95%', {}, 'https://caniuse.com/#feat=let') {}
