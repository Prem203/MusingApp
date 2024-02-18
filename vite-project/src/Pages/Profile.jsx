import React, { Component } from 'react';
import "../Styles/Profile.css";
import Header2 from './Header2';
import "../Styles/Content.css";
import Footer from './Footer';
import Prof from "../assets/IMG_0557.jpeg";

export default class Profile extends Component {
  render() {
    console.log("Landing page render!!")
    return (
      <div>
        <Header2 />
        <h4>Profile</h4>
        <div className='profile'>
            <div className='prof'>
                <p>This is some boring ass shit I am doing right now. Help!!!!!!!!!
                </p>
            </div>
            <div >
                <img className='profimg' src={Prof} alt="Logo" width="250" height="250" />
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}
