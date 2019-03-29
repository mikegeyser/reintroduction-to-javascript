import { withSideBySideCode } from '../shared/with-side-by-side-code';

let loadA = (i) => require(`raw-loader!./examples/Java.${i}.example`);
let loadB = (i) => require(`raw-loader!./examples/JavaScript.${i}.example`);

export class JavaVsJavaScriptTakeTwo extends withSideBySideCode(
  loadA,
  loadB,
  4,
  'javascript',
  'javascript'
) {}
