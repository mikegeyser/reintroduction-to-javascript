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
import { This } from './this/this';
import { TheScream } from './this/the-scream';
import { TheChallengeOfThis } from './this/the-challenge-of-this';
import { ArrowFunctions } from './this/arrow-functions';
import { Class } from './this/class';
import { LearnToLoveArrows } from './this/learn-to-love-arrows';
import { ThisIsAJoke } from './this/this-is-a-joke';
import { Modules } from './ modules/modules';
import { IIFE } from './ modules/iife';
import { Export } from './ modules/export';
import { Import } from './ modules/import';
import { Script } from './ modules/script';
import { DynamicImport } from './ modules/dynamic-import';
import { HaveToUseModules } from './ modules/have-to-use-modules';
import { DynamicImportsAreLit } from './ modules/dynamic-imports-are-lit';
import { Inheritence } from './inheritence/inheritence';
import { Strawman } from './inheritence/strawman';
import { VariablesBrowserSupport } from './variables/variables-browser-support';
import { ArraysBrowserSupport } from './arrays/arrays-browser-support';
import { ArrowFunctionsBrowserSupport } from './this/arrow-functions-browser-support';
import { ModulesBrowserSupport } from './ modules/modules-browser-support';
import { ModulesScriptTagBrowserSupport } from './ modules/modules-script-tag-browser-support';
import { DynamicImportBrowserSupport } from './ modules/dynamic-import-browser-support.1';
import { JavaVsJavaScriptTakeTwo } from './inheritence/java-vs-javascript-take-two';
import { ThisInClass } from './inheritence/this-in-class';
import { ClassBrowserSupport } from './inheritence/class-browser-support';
import { ObjectLiterals } from './inheritence/object-literals';
import { Intro } from './intro/intro';
import { JoziJs } from './intro/jozijs';
import { ItShows } from './intro/it-shows';
import { PepeSilvia } from './intro/pepe-silvia';
import { NetscapeAndSun } from './intro/netscape_sun';
import { WhyThisTalk } from './intro/why-this-talk';
import { Async } from './async/async';
import { Promises } from './async/promises';
import { AsyncAwait } from './async/async-await';
import { PromisesBrowserSupport } from './async/promises-browser-support';
import { AsyncAwaitBrowserSupport } from './async/async-await-browser-support';
import { IsItWorthIt } from './async/is-it-worth-it';
import { PromisesAreHard } from './async/promises-are-hard';
import { Transpilation } from './transpilation/transpilation';
import { Definition } from './transpilation/definition';
import { JavaScriptSolution } from './transpilation/javascript-solution';
import { TypeScriptBabel } from './transpilation/typescript-babel';
import { MultipleTargets } from './transpilation/multiple-targets';
import { CodeEverywhere } from './transpilation/code-everywhere';
import { Conclusion } from './conclusion/conclusion';
import { Questions } from './conclusion/questions';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide', 'slide']}
        transitionDuration={500}
        theme={theme}
        contentWidth="80vw"
        contentHeight="80vh"
        showFullscreenControl={false}
        controls={false}
      >
        {/* Intro */}
        <Title />
        <Intro />
        <JoziJs />
        <PepeSilvia />
        <ItShows />
        {/* <NetscapeAndSun /> */}
        <JavaVsJavaScript />
        <Functions />
        <WhyThisTalk />
        <WhatWeWillCover />
        <RulesOfEngagement />

        {/* Variables */}
        <Variables />
        <WhyNotVar />
        <Functions />
        <Let />
        <Const />
        <VariablesBrowserSupport />
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
        <ArraysBrowserSupport />
        <OrderOfIteration />

        {/* This */}
        <This />
        <TheScream />
        <TheChallengeOfThis />
        <ArrowFunctions />
        <ArrowFunctionsBrowserSupport />
        <LearnToLoveArrows />
        <ThisIsAJoke />

        {/* Modules */}
        <Modules />
        <IIFE />
        <Export />
        <Import />
        <Script />
        <DynamicImport />
        <ModulesBrowserSupport />
        <ModulesScriptTagBrowserSupport />
        <DynamicImportBrowserSupport />
        <HaveToUseModules />
        <DynamicImportsAreLit />

        {/* Inheritence */}
        <Inheritence />
        <Strawman />
        <JavaVsJavaScriptTakeTwo />
        <ThisInClass />
        <ObjectLiterals />
        <ClassBrowserSupport />
        <ThisIsAJoke />

        {/*  Async */}
        <Async />
        <Promises />
        <AsyncAwait />
        <PromisesBrowserSupport />
        <AsyncAwaitBrowserSupport />
        <IsItWorthIt />
        <PromisesAreHard />

        {/* Transpilation */}
        <Transpilation />
        <Definition />
        <JavaScriptSolution />
        <TypeScriptBabel />
        <MultipleTargets />
        <CodeEverywhere />

        <Conclusion />
        <Questions />
      </Deck>
    );
  }
}
