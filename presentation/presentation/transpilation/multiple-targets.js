import React from 'react';

import { Heading, Slide, Text, CodePane } from 'spectacle';

export class MultipleTargets extends React.Component {
  state = {
    targets: []
  };

  componentDidMount() {
    let words = ["ES5", 'ES2015', 'ESM', 'Next'];

    let interval = setInterval(() => {
      this.setState({ targets: [...this.state.targets, words.splice(0, 1)] });

      if (words.length === 0) clearInterval(interval);
    }, 400);
  }

  render() {
    return (
      <Slide bgColor="tertiary">
      <Heading size={3} textColor="primary">
          Build and serve
        </Heading>
        <Heading size={1} textColor="primary">
          multiple targets
        </Heading>
        <br/>
        <Heading size={4} textColor="primary" caps className="hand-written">
          ({this.state.targets.join(', ')})
        </Heading>
      </Slide>
    );
  }
}
