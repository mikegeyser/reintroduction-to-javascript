import React from 'react';

import { Heading, Slide, Text, CodePane } from 'spectacle';

import { withCodeNavigation } from '../shared/with-code-navigation';

export class Let extends withCodeNavigation(React.Component) {
  constructor() {
    super();

    this.state = {
      index: 0,
      steps: Array.from([1, 2, 3]).map((i) =>
        require(`raw-loader!./examples/let.${i}.example`)
      )
    };
  }

  onKeyDown(e) {
    super.onKeyDown(e);
  }

  render() {
    let source = this.state.steps[this.state.index];

    return (
      <Slide bgColor="primary" tabIndex="0" onKeyDown={(e) => alert('wat')}>
        <CodePane lang="javascript" theme="external" source={source} />
      </Slide>
    );
  }
}
