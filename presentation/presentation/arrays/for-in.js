import React from 'react';

import { withOnePageOfCode } from '../shared/with-one-page-of-code';

let load = (i) => require(`raw-loader!./examples/for-in.${i}.example`);

export class ForIn extends withOnePageOfCode(load, 4) {}
