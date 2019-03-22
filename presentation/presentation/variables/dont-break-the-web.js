import React from 'react';

import { Heading, Slide, Text, CodePane } from 'spectacle';

export class DontBreakTheWeb extends React.Component {
  state = {
    rule: []
  };

  componentDidMount() {
    let words = ["Don't", 'break', 'the', 'web!'];

    let interval = setInterval(() => {
      this.setState({ rule: [...this.state.rule, words.splice(0, 1)] });

      if (words.length === 0) clearInterval(interval);
    }, 400);
  }

  render() {
    return (
      <Slide bgColor="secondary">
        <Heading size={4} textColor="primary" caps className="hand-written">
          Rule # 1:
        </Heading>
        <Heading size={3} textColor="primary" caps>
          {this.state.rule.join(' ')}
        </Heading>
      </Slide>
    );
  }
}
