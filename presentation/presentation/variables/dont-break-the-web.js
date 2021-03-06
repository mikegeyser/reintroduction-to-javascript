import React from 'react';

import { Heading, Slide, Text, CodePane } from 'spectacle';

export class DontBreakTheWeb extends React.Component {
  state = {
    rule: []
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      let words = ["Don't", 'break', 'the', 'web!'];

      let interval = setInterval(() => {
        this.setState({ rule: [...this.state.rule, words.splice(0, 1)] });

        if (words.length === 0) clearInterval(interval);
      }, 400);
    }
  };

  render() {
    return (
      <Slide bgColor="secondary">
        <Heading size={2} textColor="primary" caps className="hand-written">
          Rule # 1:
        </Heading>
        <Heading size={1} textColor="primary">
          {this.state.rule.join(' ')}
        </Heading>
      </Slide>
    );
  }
}
