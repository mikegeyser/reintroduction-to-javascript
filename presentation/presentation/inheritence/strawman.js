import React from 'react';

import { Heading, Slide, Text, Image } from 'spectacle';

const strawman = require('../../assets/strawman.jpg');

export class Strawman extends React.Component {
  render() {
    return (
      <Slide bgColor="#000000">
        <div className="meme">
          <Image className="aliens" src={strawman} />
          <Text className="meme-text" caps>
            orly
          </Text>
        </div>
      </Slide>
    );
  }
}
