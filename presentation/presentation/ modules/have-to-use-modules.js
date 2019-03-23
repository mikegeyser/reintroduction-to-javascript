import React from 'react';

import { Heading, Slide, Text, CodePane } from 'spectacle';

export class HaveToUseModules extends React.Component {
  state = {
    rule: []
  };

  componentDidMount() {
    let words = ['You', 'have', 'to', 'use', 'modules'];

    let interval = setInterval(() => {
      this.setState({ rule: [...this.state.rule, words.splice(0, 1)] });

      if (words.length === 0) clearInterval(interval);
    }, 400);

    setTimeout(() => this.setState({ basically: true }), 3000);
  }

  render() {
    return (
      <Slide bgColor="secondary">
        <Heading size={2} textColor="primary" caps className="hand-written">
          Bold statement:
        </Heading>
        <Heading size={1} textColor="primary">
          {this.state.rule.join(' ')}
        </Heading>
        <br />
        <Heading size={2} textColor="primary" caps className="hand-written">
          {this.state.basically && '(almost)'}&nbsp;
        </Heading>
        }
      </Slide>
    );
  }
}
