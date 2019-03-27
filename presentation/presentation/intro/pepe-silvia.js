import React from 'react';

import { Slide } from 'spectacle';

import video1 from '../../assets/javascript-pepe-silvia.mp4';

export class PepeSilvia extends React.Component {
  render() {
    return (
      <Slide bgColor="#000000">
        <video loop autoPlay className="big">
          <source src={video1} type="video/mp4" />
        </video>
      </Slide>
    );
  }
}
