import React from 'react';
import ReactDOM from 'react-dom';
import FormField from './';
import { shallow, mount } from 'enzyme';

// console.log(mount(<FormField />).debug());
describe('<FormField /> ', () => {

  it(' should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormField />, div);
  });

  it('should have 3 children - label, input & help', () => {
    const wrapper = shallow(<FormField />);
    expect(wrapper.children()).toHaveLength(3);
  });

});
