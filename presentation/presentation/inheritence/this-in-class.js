import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/this.${i}.example`);

export class ThisInClass extends withOnePageOfCode(load, 5) {}
