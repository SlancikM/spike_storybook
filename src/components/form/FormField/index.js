import React, { Component } from 'react';
import './index.css';
import InputField from '../InputField';
import validationFactory from '../Validation';

import Tooltip from '../Tooltip';
import classNames from 'classnames';

// var inputFieldClass = classNames({
//   'inputField': true,
//   'inputField__error': error,
//   'inputField__warning': warning,
// });

class InputContainer extends Component {

  constructor(props) {
    super(props);
    this.trackOnChange = this.trackOnChange.bind(this); // we can do it in ES 6.0 way
  }

  trackOnChange(event) {
    console.log('input changed .. ', event.target.value);
  }

  render() {
    const { label, mandatory, error, warning, isHelpRequired } = this.props;

    return (
      <div className="inputContainerLayout" >
        <div className={classNames("layoutBox", "inputLabelContainer")}>
          <label className="inputLabel" >{label}</label>
          { mandatory && <span>*</span> }
        </div>
        <div className="layoutBox">
          <InputField
            ref={(c) => this.input = c}
            name="input"
            error={error}
            warning={warning}
            isHelpRequired={isHelpRequired}
            onChange={this.trackOnChange} />
        </div>
        <div className="layoutBox">
          <Tooltip message="Lorem ipsum bla" />
        </div>
      </div>
    );
  }
}

export default validationFactory(InputContainer);
