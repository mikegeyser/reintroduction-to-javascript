import React from 'react';

import { Heading, Slide, Text, CodePane } from 'spectacle';

export class PromisesAreHard extends React.Component {
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
      setTimeout(() => this.setState({hard: true}), 0);
      setTimeout(() => this.setState({important: true}), 750);
    }
  };

  render() {
    return (
      <Slide bgColor="secondary">
      <Heading size={2} textColor="primary" caps className="hand-written">
          Face it.
        </Heading>
        <Heading size={2} textColor="primary" caps className="hand-written">
          Promises are both: 
        </Heading>
        <Heading size={1} textColor="primary">
          &nbsp; {this.state.hard && 'difficult'}
        </Heading>
        <Heading size={1} textColor="primary">
          &nbsp; {this.state.important && 'and important'}
        </Heading>
      </Slide>
    );
  }
}
