import React, { Component } from 'react';
import "../Styles/Footer.css"

console.log("Footerrrr");
export default class Footer extends Component {
  render() {
    return (
      <>
        <div className='line1'></div>
            <div className="text">
                <div className="name">
                <p>&copy; 2024 MusingApp. All rights reserved.</p>
            </div> 
        </div>

      </>
    );
  }
}
