import React from 'react';

import { Image, Heading, Slide } from 'spectacle';

let ts = require('../../assets/typescript.svg');
let babel = require('../../assets/babel.svg');
export class TypeScriptBabel extends React.Component {
  render() {
    return (
      <Slide bgColor="primary">
        <Image height={150} src={ts} />
        <br />
        <Image height={300} src={babel} />
      </Slide>
    );
  }
}
