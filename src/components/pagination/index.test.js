import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

describe('<Pagination /> ', () => {

  it('should render without crashing', () => {
    const wrapper = shallow(<Pagination numPages={20} paginateFunc={() => {}} />);
    expect(wrapper).toBeNotNull;
  });

  it('should have registered an onChange call of a select component', () => {
    const onChange = sinon.spy();
    const wrapper = mount(<Pagination numPages={20} paginateFunc={() => {}} />);
    const selectWrapper = wrapper.find('select');
    selectWrapper.simulate('change');
    expect(onChange.called).toBeTrue;
  });

  it('should have registered an onClick call for a Prev button component', () => {
    const onClick = sinon.spy();
    const wrapper = mount(<Pagination numPages={20} paginateFunc={() => {}} />);
    const selectWrapper = wrapper.find('.prevButton');
    selectWrapper.simulate('click');
    expect(onClick.called).toBeTrue;
  });

  it('should have registered an onClick call for a Next button component', () => {
    const onClick = sinon.spy();
    const wrapper = mount(<Pagination numPages={20} paginateFunc={() => {}} />);
    const selectWrapper = wrapper.find('.nextButton');
    selectWrapper.simulate('click');
    expect(onClick.called).toBeTrue;
  });

  it(' should generate exacly as many options items as number of pages', () => {
    const onClick = sinon.spy();
    const wrapper = mount(<Pagination numPages={9} paginateFunc={() => {}} />);
    const selectWrapper = wrapper.find('option');
    expect(selectWrapper.length).toEqual(9);
  });

  it('should render label "Page" with a correct class applied', () => {
    const wrapper = shallow(<Pagination numPages={9} paginateFunc={() => {}} />);
    expect(wrapper.find('.labelPage').text()).toEqual("Page");
  });

  it('should render label "of" with a correct class applied', () => {
    const wrapper = shallow(<Pagination numPages={9} paginateFunc={() => {}} />);
    expect(wrapper.find('.labelOf').text()).toEqual("of");
  });

  it('should render label "Number of pages" with a correct value displayed', () => {
    const wrapper = shallow(<Pagination numPages={9} paginateFunc={() => {}} />);
    expect(wrapper.find('.labelNumPages').text()).toEqual("9");
  });

  it('should render Select input with a correct class displayed', () => {
    const wrapper = shallow(<Pagination numPages={9} paginateFunc={() => {}} />);
    expect(wrapper.find('select').length).toEqual(1);
  });

  it('should render 2 buttons for navigation', () => {
    const wrapper = shallow(<Pagination numPages={9} paginateFunc={() => {}} />);
    expect(wrapper.find('button').length).toEqual(2);
  });

});
