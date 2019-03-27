import React from 'react';

import { Heading, Slide, Text, CodePane } from 'spectacle';

export class IsItWorthIt extends React.Component {
  state = {
    ever: []
  };

  componentDidMount() {
    setTimeout(() => this.setState({ meh: true }), 750);
  }

  render() {
    return (
      <Slide bgColor="tertiary">
        <Heading size={1} textColor="primary">
          async / await
        </Heading>
        <br />
        {this.state.meh && (
          <Heading size={1} textColor="primary" caps className="hand-written">
            Meh..
          </Heading>
        )}
        <br />        
      </Slide>
    );
  }
}
