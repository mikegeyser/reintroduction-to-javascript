import React from 'react';

import { Heading, Slide, Text, Image, Notes } from 'spectacle';

let chrome = require('../../assets/chrome.svg');
let firefox = require('../../assets/firefox.svg');
let edge = require('../../assets/edge.svg');
let safari = require('../../assets/safari.png');
let global = require('../../assets/global.svg');

export class RulesOfEngagement extends React.Component {
  render() {
    return (
      <Slide bgColor="primary">
        <div className="browsers">
          <Image src={chrome} />
          <Image src={firefox} />
          <Image src={edge} />
          <Image src={safari} />
          <Image src={global} />
        </div>
      </Slide>
    );
  }
}
