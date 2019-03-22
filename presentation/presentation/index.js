// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

// Require CSS
require('normalize.css');
require('../assets/presentation.css');
// require('../assets/lighter.min.css');
require('../assets/darker.min.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#FFE600'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

import { Title } from './intro/title';
import { JavaVsJavaScript } from './intro/java-vs-javascript';
import { Functions } from './intro/functions';
import { RulesOfEngagement } from './intro/rules-of-engagement';
import { WhatWeWillCover } from './intro/what-we-will-cover';
import { WhyNotVar } from './variables/why-not-var';
import { Let } from './variables/let';
import { Const } from './variables/const';
import { NeverUseVar } from './variables/never-use-var';
import { DontBreakTheWeb } from './variables/dont-break-the-web';
import { Variables } from './variables/variables';
import { Arrays } from './arrays/arrays';
import { For } from './arrays/for';
import { ForIn } from './arrays/for-in';
import { WhySoMany } from './arrays/why-so-many';
import { ForOf } from './arrays/for-of';
import { Functional } from './arrays/functional';
import { OrderOfIteration } from './arrays/order-of-iteration';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide', 'slide']} transitionDuration={500} theme={theme}>
        {/* Intro */}
        <Title />
        <Slide bgColor="secondary">
          <Text textColor="primary">// todo: awkward, but funny introduction.. </Text>
          <Notes>Wat?</Notes>
        </Slide>
        <JavaVsJavaScript />
        <Functions />
        <RulesOfEngagement />
        <WhatWeWillCover />

        {/* Variables */}
        <Variables />
        <WhyNotVar />
        <Functions />
        <Let />
        <Const />
        <NeverUseVar />
        <DontBreakTheWeb />

        {/* Arrays */}
        <Arrays />
        <WhySoMany />
        <For />
        <ForIn />
        <ForOf />
        <Functions />
        <Functional />
        <OrderOfIteration />
        
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
