import React from 'react';
import ReactDOM from 'react-dom';
import SpecialNotification from './SpecialNotification';

it('SpecialNotification renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SpecialNotification />, div);
});
