import React from 'react';

import { Heading, Slide } from 'spectacle';

export class This extends React.Component {
  render() {
    return (
      <Slide bgColor="primary">
        <Heading textColor="tertiary" caps className="hand-written">
          Context (this)
        </Heading>
      </Slide>
    );
  }
}
