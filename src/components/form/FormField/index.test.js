import React from 'react';
import ReactDOM from 'react-dom';
import FormField from './';
import { shallow, mount } from 'enzyme';

describe('<FormField /> ', () => {

  it(' should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormField label="some label" mandatory={false} />, div);
  });

  it('should have 3 children - label, input & help', () => {
    const wrapper = shallow(<FormField label="some label" mandatory={false} />);
    expect(wrapper.children()).toHaveLength(3);
  });

  it('should render 3 containers with basic style class applied', () => {
    const wrapper = shallow(<FormField label="some label" mandatory={false} />);
    expect(wrapper.find('.layoutBox')).toHaveLength(3);
  });

  it('should render label container with a correct class applied', () => {
    const wrapper = shallow(<FormField label="some label" mandatory={false} />);
    expect(wrapper.find('.labelContainer')).toHaveLength(1);
  });

  it('should render input container with a correct class applied', () => {
    const wrapper = shallow(<FormField label="some label" mandatory={false} />);
    expect(wrapper.find('.inputContainer')).toHaveLength(1);
  });

  it('should render tooltip container with a correct class applied', () => {
    const wrapper = shallow(<FormField label="some label" mandatory={false} />);
    expect(wrapper.find('.tooltipContainer')).toHaveLength(1);
  });

  it('should render label with a correct class applied', () => {
    const wrapper = shallow(<FormField label="some label" mandatory={false} />);
    expect(wrapper.find('label').text()).toEqual("some label");
  });

  it('should render mandatory star if the field is mandatory', () => {
    const wrapper = shallow(<FormField label="some label" mandatory={true} />);
    expect(wrapper.find('span').text()).toEqual("*");
  });

  it('should render mandatory star if the field is mandatory', () => {
    const wrapper = shallow(<FormField label="some label" mandatory={false} />);
    expect(wrapper.find('span').children()).toHaveLength(0);
  });

});
