import React from 'react';

import { Heading, Slide, Text, Image } from 'spectacle';

const facepalm = require('../../assets/facepalm.jpg');

export class JavaScriptSolution extends React.Component {
  render() {
    return (
      <Slide bgColor="#000000">
        <div className="meme">
          <Image className="aliens" src={facepalm} width={500} />
          <Text className="meme-text" caps>
            javascript
          </Text>
        </div>
      </Slide>
    );
  }
}
