import React, { Component } from 'react';
import './App.css';

import BadassComponent from './components/hsbc-ui/BadassComponent';
import CustomInput from './components/hsbc-ui/CustomInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div className="App-container">
          <BadassComponent name="anybody" />

          <CustomInput />
        </div>
      </div>
    );
  }
}

export default App;
