import React from 'react';

import { Heading, Slide, Text, Image } from 'spectacle';

const the_scream = require('../../assets/the-scream.jpg');

export class TheScream extends React.Component {
  render() {
    return (
      <Slide bgColor="#000000">
        <div className="meme">
          <Image className="aliens" src={the_scream} />
        </div>
      </Slide>
    );
  }
}
