import React from 'react';

import { Heading, Slide, Text, CodePane } from 'spectacle';

export class LearnToLoveArrows extends React.Component {
  state = {
    rule: []
  };

  componentDidMount() {
    let words = ['You', 'will', 'learn', 'to', 'love'];

    let interval = setInterval(() => {
      this.setState({ rule: [...this.state.rule, words.splice(0, 1)] });

      if (words.length === 0) clearInterval(interval);
    }, 400);

    setTimeout(() => this.setState({ heart: true }), 3000);
  }

  render() {
    return (
      <Slide bgColor="tertiary">
        <Heading size={3} textColor="primary" caps className="hand-written">
          &nbsp; {this.state.rule.join(' ')}
        </Heading>
        <Heading size={1} textColor="primary">
          Arrow Functions
        </Heading>
        <Heading size={1} textColor="primary" caps className="hand-written">
          {this.state.heart && '<3'} &nbsp;
        </Heading>
      </Slide>
    );
  }
}
