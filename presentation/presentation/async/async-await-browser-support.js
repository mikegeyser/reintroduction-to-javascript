import { withBrowserSupport } from '../shared/with-browser-support';

export class AsyncAwaitBrowserSupport extends withBrowserSupport(
  'async / await',
  '90.6%',
  {},
  'https://caniuse.com/#feat=async-functions'
) {}
