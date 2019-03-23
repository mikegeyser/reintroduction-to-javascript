import { withOnePageOfCode } from '../shared/with-one-page-of-code';
import { withSideBySideCode } from '../shared/with-side-by-side-code';

let loadA = (i) => require(`raw-loader!./examples/class.a.${i}.example`);
let loadB = (i) => require(`raw-loader!./examples/class.b.${i}.example`);

export class Class extends withSideBySideCode(loadA, loadB, 1) {}
