import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Home extends componenet {
  render() {
    return (
      <div className="main">
        <h1>Gallery</h1>
      </div>
    )
  }
}

render(<Home/>, document.getElementById('container'));
