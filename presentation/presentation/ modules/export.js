import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/export.${i}.example`);

export class Export extends withOnePageOfCode(load, 7) {}
