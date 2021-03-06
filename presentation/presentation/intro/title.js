import React from 'react';

import { Heading, Slide, Notes } from 'spectacle';

export class Title extends React.Component {
  render() {
    return (
      <Slide bgColor="primary">
        <Heading size={4} lineHeight={1} textColor="secondary">
          A
        </Heading>
        <Heading size={2} lineHeight={1} textColor="secondary">
          <span className="tertiary hand-written">(Re) </span>Introduction
        </Heading>
        <Heading size={4} lineHeight={1} textColor="secondary">
          to
        </Heading>
        <Heading size={1} lineHeight={1} textColor="secondary">
          JavaScript
        </Heading>
        <div className="subtitle">
          <div className="tertiary hand-written">@mikegeyser</div>
          <div className="tertiary hand-written">DevConf 2019</div>
        </div>

        <div className="directions hand-written">
          <div>⬅️ ➡️ to go forward / back</div>
          <div>⬆️ ⬇️ to transition in a slide</div>
        </div>
      </Slide>
    );
  }
}
