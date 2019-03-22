import React from 'react';

import { Heading, Slide, Text, Image, Notes } from 'spectacle';

export class WhySoMany extends React.Component {
  state = {};

  componentDidMount() {
    setTimeout(() => {
      this.setState({ why: 'But... Why so many?' });
    }, 4000);
  }

  render() {
    return (
      <Slide bgColor="tertiary">
        <Text textColor="primary">for</Text>
        <Text textColor="primary">for...in</Text>
        <Text textColor="primary">for...of</Text>
        <Text textColor="primary">forEach()</Text>
        <Text textColor="primary">map()</Text>
        <br />
        <Heading size={4} textColor="primary" caps className="hand-written">
          {this.state.why}
        </Heading>
      </Slide>
    );
  }
}
