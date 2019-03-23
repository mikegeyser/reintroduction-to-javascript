import React from 'react';

import { Heading, Slide } from 'spectacle';

export class DynamicImportsAreLit extends React.Component {
  render() {
    return (
      <Slide bgColor="tertiary">
        <Heading size={3} textColor="primary" caps className="hand-written">
        🔥 Dynamic imports 🔥
        </Heading>
      </Slide>
    );
  }
}
