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
        <div className='sidetag'>
            <h4>Post:</h4>

            <div>
                <textarea className="tag" type="input" placeholder="Enter Tag" />
            </div>

        </div>

        <textarea className="post" type="input" placeholder="Type here" />
        
        <input className="btn btn-primary pos" type="submit" defaultValue="Submit" />
        <Footer />
      </div>
    );
  }
}
