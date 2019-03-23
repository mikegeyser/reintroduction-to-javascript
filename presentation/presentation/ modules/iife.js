import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/iife.${i}.example`);

export class IIFE extends withOnePageOfCode(load, 4) {}
