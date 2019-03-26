import React from 'react';

import { Heading, Slide, Text, Image, Notes } from 'spectacle';

let me = require('../../assets/me.png');
let beaker = require('../../assets/beaker.svg');
let retort_stand = require('../../assets/retort-stand.svg');
let test_tubes = require('../../assets/test-tubes.svg');
let robot = require('../../assets/robot.svg');
let gde = require('../../assets/gde.png');
let whisper = require('../../assets/whisper.svg');

export class Intro extends React.Component {
  state = { index: 1, steps: 10 };

  componentDidMount() {
    let base = 1000;

    // setTimeout(() => this.setState({ retort_stand: true }), base);
    // setTimeout(() => this.setState({ test_tubes: true }), base + 200);
    // setTimeout(() => this.setState({ beaker: true }), base + 300);
    // setTimeout(() => this.setState({ robot: true }), base + 350);
    // setTimeout(() => this.setState({ gde: true }), base + 1000);

    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (e) => {
    let index = this.state.index;

    if (e.key === 'ArrowDown') {
      if (index < this.state.steps - 1) {
        index = index + 1;
      }
    } else if (e.key === 'ArrowUp') {
      if (index > 0) {
        index = index - 1;
      }
    } else {
      return;
    }

    this.setState({
      index,
      retort_stand: index >= 2,
      test_tubes: index >= 2,
      beaker: index >= 2,
      robot: index >= 2,
      gde: index >= 3,
      sorry: index >= 4
    });
  };

  render() {
    return (
      <Slide bgColor="secondary">
        <div className="me">
          <Image className="photo" width={400} src={me} />

          {this.state.retort_stand && <Image className="retort-stand" src={retort_stand} />}
          {this.state.test_tubes && <Image className="test-tubes" src={test_tubes} />}
          {this.state.robot && <Image className="robot" src={robot} />}
          {this.state.beaker && <Image className="beaker" src={beaker} />}

          {this.state.gde && <Image className="gde" src={gde} />}

          {this.state.sorry && <div className="whisper">
            <Image src={whisper} />
            <i className="hand-written">SORRY!</i>
          </div>}
        </div>
      </Slide>
    );
  }
}
