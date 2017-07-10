import React, { Component } from 'react';
import './App.css';

import BadassComponent from './components/hsbc-ui/BadassComponent';
import CustomInput from './components/hsbc-ui/CustomInput';
import { Provider } from 'react-redux';
import { store } from './reducers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div>
            <div className="App-header">
            </div>
            <div className="App-container">
              <BadassComponent name="anybody" />
              <CustomInput />
            </div>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
