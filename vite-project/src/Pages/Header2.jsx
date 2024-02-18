import React, { Component } from 'react';
import "../Styles/Header2.css";
import Logo from "../assets/musing-high-resolution-logo-transparent.png";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

console.log("Headerrrr");
export default class Header2 extends Component {
  render() {
    return (
      <>
        <div className='bg'><div className="logo-and-text">
                <img src={Logo} alt="Logo" width="200" height="50" />
            </div> 
        </div>

        <div className='line'></div>
        <nav className="navbar">
        <div className="homelogo">
              <div className="ms-auto">
                <Link to="/">
                  <FaHome className="home-icon" />
                </Link>
              </div>
        </div>

        </nav>
        
        <div className='line'></div>

      </>
    );
  }
}
