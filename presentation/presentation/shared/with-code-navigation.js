import React from 'react';

export function withCodeNavigation(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {
    componentDidMount() {
      this.onKeyDown = this.onKeyDown.bind(this);
      document.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
    }

    onKeyDown(e) {
      let index = this.state.index;

      if (e.key === 'ArrowDown') {
        if (index < this.state.steps.length - 1) {
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
        index
      });
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
