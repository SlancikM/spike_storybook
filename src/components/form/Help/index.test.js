import React from 'react';
import ReactDOM from 'react-dom';
import helpFactory from './';

// TODO: do more tests !!! 
it('<helpFactory /> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<helpFactory />, div);
});
