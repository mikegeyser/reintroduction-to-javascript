import React from 'react';

import { Heading, Slide, Text, Image, Notes } from 'spectacle';

export class WhatWeWillCover extends React.Component {
  render() {
    return (
      <Slide bgColor="tertiary">
        <Heading size={4} textColor="primary">Variables + scoping </Heading>
        <Heading size={4} textColor="primary">Arrays + looping</Heading>
        <Heading size={4} textColor="primary">Context (this)</Heading>
        <Heading size={4} textColor="primary">Modules!!</Heading>
        <Heading size={4} textColor="primary">
          <s>Inheritence</s> Nah.
        </Heading>
        <Heading size={4} textColor="primary">Promises</Heading>
        <Heading size={4} textColor="primary">Notable APIs</Heading>
        <Heading size={4} textColor="primary">Transpilation</Heading>
      </Slide>
    );
  }
}
