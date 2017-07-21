import React from 'react';
import ReactDOM from 'react-dom';
import PaymentForm from './';

describe('<PaymentForm /> ', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PaymentForm />, div);
  });

});
