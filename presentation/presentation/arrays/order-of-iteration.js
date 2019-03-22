import React from 'react';

import { Slide, Text } from 'spectacle';

export class OrderOfIteration extends React.Component {
  state = { gold: true };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ silver: true });
    }, 2000);

    setTimeout(() => {
      this.setState({ bronze: true });
    }, 3500);
  }

  render() {
    return (
      <Slide bgColor="tertiary">
        <Text textSize={80} textColor="primary">
          🥇 map()
        </Text>
        {this.state.silver && (
          <Text textSize={60} textColor="primary">
            🥈 for...of
          </Text>
        )}
        {this.state.bronze && (
          <Text textSize={40} textColor="primary">
            🥉 for...in
          </Text>
        )}
      </Slide>
    );
  }
}
