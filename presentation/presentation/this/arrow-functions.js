import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/arrow.${i}.example`);

export class ArrowFunctions extends withOnePageOfCode(load, 9) {}
