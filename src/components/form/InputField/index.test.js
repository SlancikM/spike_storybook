import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './';
import { shallow, mount } from 'enzyme';

describe('<InputField /> ', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputField />, div);
  });

  it('should have 2 children - input field & inline validation', () => {
    const wrapper = mount(<InputField />);
    wrapper.setState({ isError: true, });
    wrapper.update();
    expect(wrapper.children()).toHaveLength(2);
  });

});
