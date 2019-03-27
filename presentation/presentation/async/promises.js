import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/promises.${i}.example`);

export class Promises extends withOnePageOfCode(load, 10) {}
