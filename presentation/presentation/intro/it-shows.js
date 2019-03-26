import React from 'react';

import { Heading, Slide, Text, CodePane } from 'spectacle';

export class ItShows extends React.Component {
  state = {
    rule: []
  };

  componentDidMount() {
    let words = 'and it shows...'.split(' ');

    setTimeout(() => {
      let interval = setInterval(() => {
        this.setState({ rule: [...this.state.rule, words.splice(0, 1)] });

        if (words.length === 0) clearInterval(interval);
      }, 500);
    }, 3000);
  }

  render() {
    return (
      <Slide bgColor="tertiary">
        <Heading size={5} textColor="primary">
          In May 1995, Brendan Eich designed and
        </Heading>
        <Heading size={5} textColor="primary">
          wrote what would become JavaScript
        </Heading>
        <Heading size={5} textColor="primary">
          in 10 days...
        </Heading>
        <br />
        <Heading size={1} textColor="primary" caps className="hand-written">
          &nbsp; {this.state.rule.join(' ')}
        </Heading>
      </Slide>
    );
  }
}
