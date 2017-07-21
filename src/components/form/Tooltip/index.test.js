import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './';
import { shallow, mount } from 'enzyme';

describe('<Tooltip /> ', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tooltip />, div);
  });

  it('should render tooltip with a correct class applied', () => {
    const wrapper = shallow(<Tooltip />);
    expect(wrapper.find('div').hasClass('tooltip')).toEqual(true);
  });

  it('should render tooltip test with a correct class applied', () => {
    const wrapper = shallow(<Tooltip />);
    expect(wrapper.find('span').hasClass('tooltiptext')).toEqual(true);
  });

  it('should render tooltip message correctly', () => {
    const wrapper = mount(<Tooltip message="hello there" />);
    expect(wrapper.find('span').text()).toEqual("hello there");
  });

});
