import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Timer from './components/timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Timer App</h2>
        </div>
        <Timer />
      </div>
    );
  }
}

export default App;
