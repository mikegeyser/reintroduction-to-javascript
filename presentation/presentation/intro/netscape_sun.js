import React from 'react';

import { Heading, Slide, Image } from 'spectacle';

let netscape = require('../../assets/netscape.svg');
let sun_microsystems = require('../../assets/sun_microsystems.svg');

export class NetscapeAndSun extends React.Component {
  render() {
    return (
      <Slide bgColor="primary">
        <div className="netscape-sun">
          <Image height={350}  width={350} src={netscape} className="netscape" />
          <div className="heart">
          💖
          </div>
          <Image height={400} src={sun_microsystems} className="sun" />
        </div>
      </Slide>
    );
  }
}
