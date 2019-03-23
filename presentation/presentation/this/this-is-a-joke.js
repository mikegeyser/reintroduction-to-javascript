import React from 'react';

import { Slide, Text, Image } from 'spectacle';

const notsureif = require('../../assets/notsureif.jpg');

export class ThisIsAJoke extends React.Component {
  render() {
    return (
      <Slide bgColor="primary">
        <div className="meme">
          <Image className="aliens" src={notsureif}/>
          <Text className="meme-text" caps>
            this is a joke
          </Text>
        </div>
      </Slide>
    );
  }
}
