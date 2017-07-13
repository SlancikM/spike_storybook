import React, { Component } from 'react';
import './index.css';
import InputField from '../InputField';


class InputContainer extends Component {

  constructor(props) {
    super(props);
    this.trackOnChange = this.trackOnChange.bind(this); // we can do it in ES 6.0 way
  }

  trackOnChange(event) {
    console.log('input changed .. ', event.target.value);
  }

  render() {
    const { label, isHelpRequired } = this.props;
    // console.log('isHelpRequired: ', this.props.isHelpRequired);
    
    return (
      <div className="inputContainerLayout" >
        <label className="inputLabel" > { label } </label>
        <InputField
          ref={(c) => this.input = c}
          name="input"
          error={false}
          warning={false}
          isHelpRequired={isHelpRequired}
          onChange={this.trackOnChange} />
      </div>
    );
  }
}

export default (InputContainer);
