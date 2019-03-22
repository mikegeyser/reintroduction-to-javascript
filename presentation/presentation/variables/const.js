import { withOnePageOfCode } from '../shared/with-one-page-of-code';
let load = (i) => require(`raw-loader!./examples/const.${i}.example`);

export class Const extends withOnePageOfCode(load, 1) {}
