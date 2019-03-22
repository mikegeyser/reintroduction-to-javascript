import React from 'react';

import { Slide, Text } from 'spectacle';

export class OrderOfIteration extends React.Component {
  state = {};

  componentDidMount() {
    setTimeout(() => {
      this.setState({ why: 'But... Why so many?' });
    }, 4000);
  }

  render() {
    return (
      <Slide bgColor="tertiary">
        <Text textSize={80} textColor="primary">
          🥇 map()
        </Text>
        <Text textSize={60} textColor="primary">
          🥈 for...of
        </Text>
        <Text textSize={40} textColor="primary">
          🥉 for...in
        </Text>
      </Slide>
    );
  }
}
