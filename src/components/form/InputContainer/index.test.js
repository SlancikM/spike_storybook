import React from 'react';
import ReactDOM from 'react-dom';
import InputContainer from './';

it('<InputContainer /> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputContainer />, div);
});
