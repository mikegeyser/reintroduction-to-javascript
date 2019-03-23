import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/dynamic-import.${i}.example`);

export class DynamicImport extends withOnePageOfCode(load, 3) {}
