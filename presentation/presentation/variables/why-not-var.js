import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/var.${i}.example`);

export class WhyNotVar extends withOnePageOfCode(load, 5) {}
