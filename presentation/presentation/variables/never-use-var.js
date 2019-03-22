import React from 'react';

import { Heading, Slide, Text, CodePane } from 'spectacle';

export class NeverUseVar extends React.Component {
  state = {
    ever: []
  };

  componentDidMount() {
    let interval = setInterval(() => {
      this.setState({ ever: [...this.state.ever, 'ever'] });

      if (this.state.ever.length > 5) clearInterval(interval);
    }, 400);
  }

  render() {
    return (
      <Slide bgColor="tertiary">
        <Heading size={3} textColor="primary" caps>
          You almost never
        </Heading>
        <Heading size={6} textColor="primary" caps className="hand-written">
          ({this.state.ever.join(', ')})
        </Heading>
        <Heading size={3} textColor="primary" caps>
          want to use var
        </Heading>

      </Slide>
    );
  }
}
