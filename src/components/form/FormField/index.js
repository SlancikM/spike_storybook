import React, { Component } from 'react';
import './index.css';
import classNames from 'classnames';
import Input from '../Input';
import validationFactory from '../Validation';
import Tooltip from '../Tooltip';


class FormField extends Component {

  constructor(props) {
    super(props);
    this.trackOnChange = this.trackOnChange.bind(this); // we can do it in ES 6.0 way
  }

  trackOnChange(event) {
    console.log('Input changed .. ', event.target.value);
  }

  //               <Tooltip message="Lorem ipsum bla" />
// { this.props.isHelpRequired &&
  render() {
    const { label, mandatory, error, warning, isHelpRequired } = this.props;
    return (
      <div className="inputContainerLayout" >
        <div className={classNames("layoutBox", "labelContainer")}>
          <label className="label" >{label}</label>
          { mandatory && <span>*</span> }
        </div>
        <div className={classNames("layoutBox", "inputContainer")}>
          <Input
            ref={(c) => this.input = c}
            name="input"
            error={error}
            warning={warning}
            onChange={this.trackOnChange} />
        </div>
        <div className={classNames("layoutBox", "tooltipContainer")}>
          <div className="tooltip"></div>
        </div>
      </div>
    );
  }
}

export default FormField; // validationFactory(FormField);
