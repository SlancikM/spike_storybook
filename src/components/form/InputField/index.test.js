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

  it('should have inline error notification', () => {
    const wrapper = mount(<InputField />);
    wrapper.setState({ isError: true, });
    wrapper.update();
    expect(wrapper.find(".typeIcon__error")).toHaveLength(1);
  });

  it('should have inline info notification', () => {
    const wrapper = mount(<InputField />);
    wrapper.setState({ isInfo: true, });
    wrapper.update();
    expect(wrapper.find(".typeIcon__info")).toHaveLength(1);
  });

  it('should NOT have inline warning notification', () => {
    const wrapper = mount(<InputField />);
    wrapper.setState({ isWarning: true, });
    wrapper.update();
    expect(wrapper.find(".typeIcon__warning")).toHaveLength(0);
  });



});
