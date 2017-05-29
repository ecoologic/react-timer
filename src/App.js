import 'reset-css/reset.css';
import React, { Component } from 'react';

import Timer from './components/timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
      </div>
    );
  }
}

export default App;
