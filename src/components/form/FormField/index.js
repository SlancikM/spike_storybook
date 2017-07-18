import React, { Component } from 'react';
import './index.css';
import classNames from 'classnames';
import Input from '../Input';
import Tooltip from '../Tooltip';
import validationFactory from '../Validation';


class FormField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
    };
    this.trackOnChange = this.trackOnChange.bind(this); // we can do it in ES 6.0 way
    // this.onBlur = this.onBlur.bind(this);
    // onChange={this.trackOnChange}
  }

  trackOnChange(event) {
    console.log('Input chan .. ', event.target.value);
    this.isValid(event.target.value);
  }

  onFocusOut() {
    console.log('... onFocusOut ... ');
  }

  onFocus() {
    console.log('onFocus ... ');
  }

  isValid(value) {
    if (value.length > 2) {
      this.setState({
        isValid: false
      })
    } else {
      this.setState({
        isValid: true
      })
    }


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
            focusable
            onFocusOut={this.onFocusOut.bind(this)}
            error={error}
            warning={warning}
          />
            { this.state.isValid &&
              <div>
                <div className="icon"></div>
                <label>Warning message ..</label>
              </div>
            }

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
