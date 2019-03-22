import React from 'react';

import { Heading, Slide, Text, CodePane } from 'spectacle';

let steps = [1, 2, 3, 4];
let load = (type) =>
  Array.from(steps).map((i) => require(`raw-loader!./examples/${type}.${i}.example`));
let code = {
  java: load('Java'),
  javascript: load('JavaScript')
};

export class JavaVsJavaScript extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      java: code.java[0],
      javascript: code.javascript[0]
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (e) => {
    let index = this.state.index;

    if (e.key === 'ArrowDown') {
      if (index < steps.length - 1) {
        index = index + 1;
      }
    } else if (e.key === 'ArrowUp') {
      if (index > 0) {
        index = index - 1;
      }
    } else {
      return;
    }

    this.setState({
      index,
      java: code.java[index],
      javascript: code.javascript[index]
    });
  };

  render() {
    return (
      <Slide bgColor="primary" tabIndex="0" onKeyDown={(e) => alert('wat')}>
        <div className="side-by-side-code">
          <CodePane lang="java" theme="external" source={this.state.java} />
          <CodePane lang="javascript" theme="external" source={this.state.javascript} />
        </div>
      </Slide>
    );
  }
}
