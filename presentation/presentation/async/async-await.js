import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/async-await.${i}.example`);

export class AsyncAwait extends withOnePageOfCode(load, 7) {}
