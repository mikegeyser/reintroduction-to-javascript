import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/let.${i}.example`);

export class Let extends withOnePageOfCode(load, 3) {}
