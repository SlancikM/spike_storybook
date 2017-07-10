import React, { Component } from 'react';
import './App.css';

import BadassComponent from './components/hsbc-ui/BadassComponent';
// import CustomInput from './components/hsbc-ui/CustomInput'; <CustomInput />
import PaymentForm from './components/PaymentForm';
import { Provider } from 'react-redux';
import { store } from './reducers';

class App extends Component {
  moveMoney = (values) => {
    console.log(values);
    alert(`Have a nice day: ${JSON.stringify(values)}`);
  }
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div>
            <div className="App-header">
            </div>
            <div className="App-container">
              <BadassComponent name="anybody" />
              <br />
              <PaymentForm onSubmit={this.moveMoney} />
            </div>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
