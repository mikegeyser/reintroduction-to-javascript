import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/array.${i}.example`);

export class Functional extends withOnePageOfCode(load, 6) {}
