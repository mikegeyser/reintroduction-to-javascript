import React from 'react';

import { Heading, Slide } from 'spectacle';

export class Questions extends React.Component {
  render() {
    return (
      <Slide bgColor="primary">
        <Heading textColor="tertiary" caps className="hand-written">
          Thanks!
        </Heading>
        <div className="subtitle">
          <div className="tertiary hand-written">@mikegeyser</div>
          <br />
          <div className="tertiary hand-written">mike@bbd.co.za</div>
        </div>
      </Slide>
    );
  }
}
