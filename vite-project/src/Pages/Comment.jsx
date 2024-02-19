import React, { Component } from 'react';
import Header2 from './Header2';
import Footer from './Footer';
import '../Styles/Comment.css';

export default class Comment extends Component {
  render() {
    return (
      <div>
        <Header2 />

        <h4>Comments</h4>

        <Footer />

      </div>
    );
  }
}
