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
        <Heading size={4} textColor="primary">for</Heading>
        <Heading size={4} textColor="primary">for...in</Heading>
        <Heading size={4} textColor="primary">for...of</Heading>
        <Heading size={4} textColor="primary">forEach()</Heading>
        <Heading size={4} textColor="primary">map()</Heading>
        <br />
        <Heading size={3} textColor="primary" caps className="hand-written">
          {this.state.why}
        </Heading>
      </Slide>
    );
  }
}
