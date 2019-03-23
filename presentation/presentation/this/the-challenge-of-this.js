import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/this.${i}.example`);

export class TheChallengeOfThis extends withOnePageOfCode(load, 6) {}
