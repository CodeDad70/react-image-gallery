import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {CloudinaryContext, Transformation, Image} from 'cloudinary-react';
import {render} from 'react-dom';

class Home extends Component {
  render() {
    return (
      <div className="main">
        <h1 className = "headline">Gallery</h1>
      </div>
    )
  }
}

render (<Home/>, document.getElementById('container'));
