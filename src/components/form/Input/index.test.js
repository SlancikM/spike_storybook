import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './';
import { shallow } from 'enzyme';

it('<InputField /> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputField />, div);
});

it('should render one input with the correct class applied', () => {
  const wrapper = shallow(<InputField />);
  expect(wrapper.find('input').hasClass('input')).toEqual(true);
});
