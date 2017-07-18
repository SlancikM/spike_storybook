import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './';

it('<Tooltip /> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tooltip />, div);
});
