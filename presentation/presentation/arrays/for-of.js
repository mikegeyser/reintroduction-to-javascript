import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/for-of.${i}.example`);

export class ForOf extends withOnePageOfCode(load, 4) {}
