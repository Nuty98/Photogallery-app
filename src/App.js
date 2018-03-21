import React, { Component } from 'react';
import Routes from './components/Routes';
import './App.css'

import GalleryIndex from './components/GalleryIndex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
