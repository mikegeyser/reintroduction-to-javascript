import React from 'react';

import { Heading, Slide, Image } from 'spectacle';

import video1 from '../../assets/growing_tree.mp4';

export class WhyThisTalk extends React.Component {
  render() {
    return (
      <Slide bgColor="primary">
         <video autoPlay className="mid">
          <source src={video1} type="video/mp4" />
        </video>
      </Slide>
    );
  }
}
