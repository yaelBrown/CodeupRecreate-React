import React, { Component } from 'react';
import rebootPic1 from './img/rebootPic1.png';

export default class Programs extends Component {
  render() {
    return (
      <section className="reboot">
        {/* Left section */}
        <div className="rebootLeftSide">
          <h1>Reboot Your Career<span>_</span></h1>
        </div>

        {/* Right side */}
        <div className="rebootRightSide">
          <img src={rebootPic1} alt="Right Side image in Reboot Section" />
        </div>
      </section>
    )
  }
}
