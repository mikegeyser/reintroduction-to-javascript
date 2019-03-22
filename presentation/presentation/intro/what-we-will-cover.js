import React from 'react';

import { Heading, Slide, Text, Image, Notes } from 'spectacle';

export class WhatWeWillCover extends React.Component {
  render() {
    return (
      <Slide bgColor="tertiary">
        <Text textColor="primary">Variables + scoping </Text>
        <Text textColor="primary">Arrays + looping</Text>
        <Text textColor="primary">Context (this)</Text>
        <Text textColor="primary">Modules!!</Text>
        <Text textColor="primary">
          <s>Inheritence</s> Nah.
        </Text>
        <Text textColor="primary">Promises</Text>
        <Text textColor="primary">Notable APIs</Text>
        <Text textColor="primary">Transpilation</Text>
      </Slide>
    );
  }
}
