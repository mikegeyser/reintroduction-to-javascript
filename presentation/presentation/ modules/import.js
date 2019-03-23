import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/import.${i}.example`);

export class Import extends withOnePageOfCode(load, 6) {}
