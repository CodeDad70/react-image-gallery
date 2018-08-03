import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {CloudinaryContext, Transformation, Image} from 'cloudinary-react';
import {render} from 'react-dom';

class Home extends Component {
  render() {
    return (
      <div className="main">
        <h1>Gallery</h1>
          <div className="gallery">
            <CloudinaryContext cloudName="codedad">
              <div className="responsive">
                <div className="img">
                  <a target="_blank" href={`https://res.cloudinary.com/codedad/image/upload/v1533259831/test-gallery/kitten-playing.gif`}>
                    <Image publicId={'kitten-playing.gif'}> </Image>
                  </a>
                </div>
              </div>
            </CloudinaryContext>
          <div className="clearfix"></div></div>
      </div>
    );
  }
}

render (<Home/>, document.getElementById('container'));
