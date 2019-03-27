import React from 'react';

import { Text, Heading, Slide } from 'spectacle';

export class Definition extends React.Component {
  state = {};

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      this.setState({ javascript: true });
    }
  };

  render() {
    let oneLanguage = (
      <Text size={5} textColor="primary">
        one language
      </Text>
    );
    let another = (
      <Text size={5} textColor="primary">
        another.
      </Text>
    );

    return (
      <Slide bgColor="secondary">
        <Text size={5} textColor="primary">
          transpilation (noun):
        </Text>
        <Text size={5} textColor="primary">
          The translation of
        </Text>
        <Text size={5} textColor="primary">
          source code from
        </Text>
        {this.state.javascript ? (
          <>
            <s style={{ color: '#ffffff' }}>{oneLanguage} </s>{' '}
            <Heading textColor="primary" className="hand-written">
              Javascript
            </Heading>
          </>
        ) : (
          oneLanguage
        )}
        <Text size={5} textColor="primary">
          into source code from
        </Text>
        {this.state.javascript ? (
          <>
            <s style={{ color: '#ffffff' }}>{another} </s>{' '}
            <Heading textColor="primary" className="hand-written">
              Javascript
            </Heading>
          </>
        ) : (
          another
        )}
      </Slide>
    );
  }
}
