import React, { Component } from 'react';
import './App.css';

import BadassComponent from './components/hsbc-ui/BadassComponent';
// import PaymentForm from './containers/PaymentForm'; // <PaymentForm onSubmit={this.moveMoney} />
import ExpandRow from './components/table';
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
              <ExpandRow />
            </div>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
