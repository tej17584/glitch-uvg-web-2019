import React, { Component } from 'react';
import './App.css';
// eslint-disable-next-line react/prefer-stateless-function
class Background extends Component {
  render() {
    return (
      <div className="background">{this.props.children}</div>
    );
  }
}

export default Background;
