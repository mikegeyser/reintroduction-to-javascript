import React from 'react';
import { Slide, CodePane } from 'spectacle';
import { withCodeNavigation } from './with-code-navigation';

export function withOnePageOfCode(load, numberOfSteps) {
  return class extends withCodeNavigation(React.Component) {
    constructor() {
      super();

      this.state = {
        index: 0,
        steps: Array.from(Array(numberOfSteps), (x, i) => i + 1).map((i) => load(i))
      };
    }

    render() {
      let source = this.state.steps[this.state.index];

      return (
        <Slide bgColor="primary" tabIndex="0" onKeyDown={(e) => alert('wat')}>
          <CodePane lang="javascript" theme="external" source={source} />
        </Slide>
      );
    }
  };
}
