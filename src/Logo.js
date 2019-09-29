import React, { Component } from 'react';
import './index.css';
// eslint-disable-next-line react/prefer-stateless-function
class Logo extends Component {
  render() {
    return (
      <div clasName="Container">
        <img src="https://duckduckgo.com/assets/logo_homepage.normal.v108.svg" href={window.scrollTo(0, 250)} className="mainLogo" alt="duck" />


      </div>
    );
  }
}

export default Logo;
 