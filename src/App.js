import React, { Component } from 'react';
import './App.css';

import BadassComponent from './components/hsbc-ui/BadassComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div className="App-container">
          <BadassComponent name="anybody" />
        </div>
      </div>
    );
  }
}

export default App;
