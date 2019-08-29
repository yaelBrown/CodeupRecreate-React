import React, { Component } from 'react'
import rebootPic1 from './img/rebootPic1.png';

export default class Reboot extends Component {
  render() {
    return (
      <section className="reboot">
        {/* Left section */}
        <div className="rebootLeftSide">
          {/* chevron */}
          <h1>Reboot Your Career<span className="underscore">_</span></h1>
          <p>Codeup offers 20-week accelerator programs to launch your career as a computer programmer or a data scientist.</p>
          {/* Learn more button */}
        </div>

        {/* Right side */}
        <div className="rebootRightSide">
          <img src={rebootPic1} alt="Right Side image in Reboot Section" />
        </div>
      </section>
    )
  }
}
