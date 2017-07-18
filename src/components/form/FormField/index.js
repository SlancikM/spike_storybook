import React, { Component } from 'react';
import './index.css';
import classNames from 'classnames';
import Input from '../Input';
import Tooltip from '../Tooltip';
import validationFactory from '../Validation';


class FormField extends Component {

  constructor(props) {
    super(props);
    this.trackOnChange = this.trackOnChange.bind(this); // we can do it in ES 6.0 way
  }

  trackOnChange(event) {
    console.log('Input changed .. ', event.target.value);
  }

  render() {
    const { label, mandatory, tooltipMessage, error, warning, isHelpRequired } = this.props;
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
        { this.props.tooltipMessage &&
            <Tooltip message={tooltipMessage} />
        }
        </div>
      </div>
    );
  }
}

export default FormField; // validationFactory(FormField);
