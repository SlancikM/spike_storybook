import React from 'react';
import ReactDOM from 'react-dom';
import FormField from './';
import { shallow, mount } from 'enzyme';

describe('<FormField /> ', () => {

  it(' should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormField label="some label" />, div);
  });

  it('should have 3 children - label, input & help', () => {
    const wrapper = shallow(<FormField label="some label" />);
    expect(wrapper.children()).toHaveLength(3);
  });

});
