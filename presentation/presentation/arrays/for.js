import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/for.${i}.example`);

export class For extends withOnePageOfCode(load, 9) {}
