import React, { Component } from 'react'
import "../Styles/Saved.css"
import Header2 from './Header2';
import Footer from './Footer';
import "../Styles/Content.css"

export default class Saved extends Component {
  render() {
    console.log("Saved!!")
    return (
      <div>
        <Header2 />
        <h4>Saved</h4>
      

      <Footer />
      </div>
    );
  }
}
