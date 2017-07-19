import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './';
import { shallow, mount } from 'enzyme';

describe('<InputField /> ', () => {

  it(' should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputField />, div);
  });

  it('should have 2 children - icon & label', () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper.children()).toHaveLength(2);
  });

});
