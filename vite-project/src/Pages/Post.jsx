import React, { Component } from 'react'
import "../Styles/Post.css"
import Header2 from './Header2';
import "../Styles/Content.css";
import Footer from './Footer';

export default class Post extends Component {
  render() {
    console.log("Post!!")
    return (
      <div>
        <Header2 />
        <h4>Post</h4>
        <div className='post'>
            <p>This is some boring ass shit I am doing right now. Help!!!!!!!!!
            </p>
        </div>
        <Footer />
      </div>
    );
  }
}
