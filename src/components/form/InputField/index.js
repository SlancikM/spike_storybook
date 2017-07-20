import React, { Component } from 'react';
import './index.css';
import Input from '../Input';
import classNames from 'classnames';


class InputField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      isWarning: false,
      isInfo: false,
      message: "No message",
    };
    // we can do it in ES 6.0 way
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(event) {
    console.log('onChange: ', event.target.value);
    this.validate(event.target.value);
  }

  onBlur(event) {
    console.log('onBlur: ', event.target.value);
  }

  validate(value) {
    if (value.length > 10) {
      this.setState({
        isError: true,
        isWarning: false,
        isInfo: false,
        message: "Too long world"
      })
    } else {
      this.setState({
        isError: false,
        isWarning: false,
        isInfo: false,
        message: "It is OK"
      })
    }
  }

  render() {

    var errorTypeIconClass = classNames({
      'typeIcon__error': this.state.isError,
      'typeIcon__warning': this.state.isWarning,
      'typeIcon__info': this.state.isInfo,
    });

    return ( <div>
      <Input
        ref={(c) => this.input = c}
        name="input"
        onChange={this.onChange}
        onBlur={this.onBlur}
        error={this.state.isError}
        warning={this.state.isWarning}
      />
      { this.state.isError &&
        <div>
          <div className={errorTypeIconClass}></div>
          <label>{this.state.message}</label>
        </div>
      }
    </div>);
  }

}



export default InputField;
