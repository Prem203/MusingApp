import React, { Component } from 'react';
import Header2 from './Header2';
import Footer from './Footer';
import '../Styles/Comment.css';

export default class Comment extends Component {

  
  render() {
    return (
      <div>
        <Header2 />

        <h4>Comments:</h4>
        <div className='comm'>

        </div>

        <div>
        <textarea
          className="commen"
          value={comment}
          onChange={this.handlePostChange}
          placeholder="Type here"
        />
        </div>

        <input
          className="btn btn-primary sub"
          type="button"
          value="Submit"
          // onClick={this.handleSubmit}
        />

        <Footer />

      </div>
    );
  }
}
