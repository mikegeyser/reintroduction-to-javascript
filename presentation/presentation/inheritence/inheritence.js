import React from 'react';

import { Heading, Slide } from 'spectacle';

export class Inheritence extends React.Component {
  render() {
    return (
      <Slide bgColor="primary">
        <Heading textColor="tertiary" caps className="hand-written">
          <s>Inheritence</s> (Nah)
        </Heading>
      </Slide>
    );
  }
}
