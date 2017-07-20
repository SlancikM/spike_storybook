import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './';
import { shallow } from 'enzyme';

describe('<InputField /> ', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputField />, div);
  });

  it('should render input with the correct class applied', () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper.find('input').hasClass('input')).toEqual(true);
  });

  it('should render input with the correct error state class applied', () => {
    const wrapper = shallow(<InputField error={true} />);
    expect(wrapper.find('input').hasClass('input__error')).toEqual(true);
  });

  it('should render input with the correct warning state class applied', () => {
    const wrapper = shallow(<InputField warning={true} />);
    expect(wrapper.find('input').hasClass('input__warning')).toEqual(true);
  });
});
