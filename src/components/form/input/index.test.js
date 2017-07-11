import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './';

it('<InputField /> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputField />, div);
});
