import React from 'react';

import { Heading, Slide, Text, Image } from 'spectacle';

const aliens = require('../../assets/aliens.jpg');

export class Functions extends React.Component {
  render() {
    return (
      <Slide bgColor="#000000">
        <div className="meme">
          <Image className="aliens" src={aliens} width={500} />
          <Text className="meme-text" caps>
            functions
          </Text>
        </div>
      </Slide>
    );
  }
}
