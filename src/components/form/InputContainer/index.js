import React, { Component } from 'react';
import './index.css';
import InputField from '../Input';

class InputContainer extends Component {

  constructor(props) {
    super(props);
    this.trackOnChange = this.trackOnChange.bind(this);
  }

  trackOnChange() {
    console.log('input changed .. ');
  }

  render() {

    return (
      <div className="inputContainerLayout" >
        <label> {"New label:"} </label>
        <InputField error={false} warning={false} onChange={this.trackOnChange} />
        <span></span>
      </div>
    );
  }
}

export default InputContainer;
