import React, { Component } from 'react';
import "../Styles/Header.css";
import Logo from "../assets/musing-high-resolution-logo-transparent.png";

console.log("Headerrrr");
export default class Header extends Component {
  render() {
    return (
      <>
        <div className='bg'><div className="logo-and-text">
                <img src={Logo} alt="Logo" width="200" height="50" />
              <h1 className="app-name">Home</h1>
            </div> 
        </div>
        
        <div className='line'></div>

      </>
    );
  }
}