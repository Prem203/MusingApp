import React, { Component } from 'react';
import "../Styles/Content.css";

export default class Content extends Component {
  render() {
    return (
    
      <div className='main-div' >
        <div>
        <div className='heading'>
            <h4>Trending Posts:</h4>
        </div>

        <div className='content'>
            <p>This is some boring ass shit I am doing right now. Help!!!!!!!!!
            </p>
        </div>

        <div className='like'>
        <p>Likes</p>
        </div>
        

        <div className='comment'>
            <p>Comments</p>
        </div>

        </div>
        
        <div className='divide'>
        </div>

        <div>
        <div className='todaysbook'>
            <p>Today's Book Recommendations:</p>
        </div>

        <div className='recommendation'>
            <ul>
                <li>"<a href="https://www.nytimes.com/2023/08/12/books/review/the-bee-sting-paul-murray.html" target="_blank">The Bee Sting</a>" by Paul Murray</li>
                <li>"<a href="https://www.nytimes.com/2023/03/20/books/catherine-lacey-biography-of-x.html" target="_blank">Biography of X</a>" by Catherine Lacey</li>
                <li>"<a href="https://www.nytimes.com/2023/03/13/books/eleanor-catton-birnam-wood.html" target="_blank">Birnam Wood</a>" by Eleanor Catton</li>
                <li>"<a href="https://www.nytimes.com/2023/07/23/books/review/the-country-of-the-blind-andrew-leland.html" target="_blank">The Country of the Blind</a>" by Andrew Leland</li>
            </ul>
            
        </div>
        </div>
      </div>
    )
  }
}
