import React from 'react';
import ReactDOM from 'react-dom';
import BadassComponent from './BadassComponent';

it('BadassComponent renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BadassComponent />, div);
});
