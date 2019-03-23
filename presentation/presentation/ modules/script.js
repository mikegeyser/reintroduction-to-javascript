import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/script.${i}.example`);

export class Script extends withOnePageOfCode(load, 4, 'html') {}
