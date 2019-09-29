import React, { Component } from 'react';
import './Slide.css';
// eslint-disable-next-line react/prefer-stateless-function
class Slide extends Component {
  // Hola soy Rodrigo Zea, discipulo de MS
  // Jose Cifuentes :) discipulo de MS
  // holis xd
  render() {
    const image = {
      backgroundImage: `url(${this.props.imgPath})`,
      width: '1000px',
      height: '385px',
      zoom: '0.8',
      margin: 'auto auto auto auto',
    };

    const bgColor = {
      background: `#${this.props.bgColor}`,
    };

    const textColor = {
      color: `#${this.props.txtColor}`,
    };

    const textShadow = {
      color: `#${this.props.txtColor}`,
      textShadow: '0 1px 4px rgba(0,0,0,0.25)',
    };

    return (
      <div className="slideContainer" style={bgColor}>
        <h1 style={this.props.shadow ? textShadow : textColor}>{this.props.title}</h1>
        <h2 style={textColor}>{this.props.description}</h2>
        <button type="button">Add DuckDuckGo to Chrome</button>
        <div className="slideImage" style={image} />
      </div>
    );
  }
}

export default Slide;
