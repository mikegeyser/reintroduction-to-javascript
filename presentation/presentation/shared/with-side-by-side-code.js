import React from 'react';
import { Slide, CodePane } from 'spectacle';
import { withCodeNavigation } from './with-code-navigation';

export function withSideBySideCode(loadA, loadB, numberOfSteps, languageA = "javascript", languageB = "javascript") {
  return class extends withCodeNavigation(React.Component) {
    constructor() {
      super();

      this.state = {
        index: 0,
        steps: Array.from(Array(numberOfSteps)), // Hack
        stepsA: Array.from(Array(numberOfSteps), (x, i) => i + 1).map((i) => loadA(i)),
        stepsB: Array.from(Array(numberOfSteps), (x, i) => i + 1).map((i) => loadB(i))
      };
    }

    render() {
      let sourceA = this.state.stepsA[this.state.index];
      let sourceB = this.state.stepsB[this.state.index];

      return (
        <Slide bgColor="primary">
          <div className="side-by-side-code">
            <CodePane lang={languageA} theme="external" source={sourceA} />
            <CodePane lang={languageB} theme="external" source={sourceB} />
          </div>
        </Slide>
      );
    }
  };
}
