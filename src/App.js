import React, { Component } from 'react';
import './App.css';

import SpecialNotification from './components/hsbc-ui/SpecialNotification';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div className="App-container">
          <SpecialNotification name="Lilly" />
        </div>
      </div>
    );
  }
}

export default App;
