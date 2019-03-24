import React from 'react';

import { Heading, Slide, Text, Image, Notes, Link } from 'spectacle';

let chrome = require('../../assets/chrome.svg');
let firefox = require('../../assets/firefox.svg');
let edge = require('../../assets/edge.svg');
let safari = require('../../assets/safari.png');
let global = require('../../assets/global.svg');

let images = {
  chrome,
  firefox,
  edge,
  safari,
  global
};

// let check = require('../../assets/check.svg');

let check = (show) => {
  let className = show ? 'check animate' : 'check';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="70"
      height="70"
      viewBox="0 0 166 150.9"
    >
      <path d="M0.3 96l62.4 54.1L165.6 0.3" />
    </svg>
  );
};

let cross = (show) => {
  let className = show ? 'cross animate' : 'cross';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="80"
      height="80"
      viewBox="25 25 80 80"
    >
      <line
        class="path line"
        fill="none"
        stroke="#D06079"
        stroke-linecap="round"
        stroke-miterlimit="10"
        x1="34.4"
        y1="37.9"
        x2="95.8"
        y2="92.3"
      />
      <line
        class="path line"
        fill="none"
        stroke="#D06079"
        stroke-linecap="round"
        stroke-miterlimit="10"
        x1="95.8"
        y1="38"
        x2="34.4"
        y2="92.2"
      />
    </svg>
  );
};

let browsers = ['chrome', 'firefox', 'edge', 'safari'];

export function withBrowserSupport(title, percentage, browser_exclude = {}, reference) {
  return class extends React.Component {
    state = {};

    componentDidMount() {
      let browsersToAnimate = [...browsers];

      setTimeout(() => {
        let interval = setInterval(() => {
          if (!browsers.length) clearInterval(interval);

          let browser = browsersToAnimate.splice(0, 1);

          this.setState({ [browser]: browser });
        }, 200);
      }, 100);

      setTimeout(() => this.setState({ percentage }), 1500);
    }

    render() {
      return (
        <Slide bgColor="primary">
          <Heading size={3}>{title}</Heading>
          <br />

          <div className="browsers">
            {browsers.map((browser) => (
              <div className={browser}>
                <Image src={images[browser]} />
                {browser_exclude[browser] ? cross(this.state[browser]) : check(this.state[browser])}
              </div>
            ))}

            <div className="global">
              <Image src={global} />
              <Heading size={4}>{this.state.percentage}</Heading>
            </div>
          </div>

          <Link className="reference" href={reference}>Reference</Link>
        </Slide>
      );
    }
  };
}
