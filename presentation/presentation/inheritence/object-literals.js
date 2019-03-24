import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/literals.${i}.example`);

export class ObjectLiterals extends withOnePageOfCode(load, 4) {}
