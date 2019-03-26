import React from 'react';

import { Heading, Slide, Image } from 'spectacle';

let jozijs = require('../../assets/jozijs.png');

export class JoziJs extends React.Component {
  render() {
    return (
      <Slide bgColor="primary">
        <Image width={800} src={jozijs}></Image>
      </Slide>
    );
  }
}
