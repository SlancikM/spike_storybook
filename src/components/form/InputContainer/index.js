import React, { Component } from 'react';
import './index.css';
import InputField from '../Input';

class InputContainer extends Component {

  constructor(props) {
    super(props);
    this.trackOnChange = this.trackOnChange.bind(this); // we can do it in ES 6.0 way
  }

  trackOnChange(event) {
    console.log('input changed .. ', event.target.value);
  }

  render() {
    const { label } = this.props;
    return (
      <div className="inputContainerLayout" >
        <label className> { label } </label>
        <InputField ref={(c) => this.input = c} name="input" error={false} warning={false} onChange={this.trackOnChange} />
        <span></span>
      </div>
    );
  }
}

export default InputContainer;
