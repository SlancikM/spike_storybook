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
    if (this.props.min > value) {
      this.setState({
        isError: true,
        isWarning: false,
        isInfo: false,
        message: `Value is smaller than minimal value of ${this.props.min}`
      })
    } else if (this.props.max < value) {
      this.setState({
        isError: true,
        isWarning: false,
        isInfo: false,
        message: `Value is smaller than maximal value of ${this.props.max}`
      })
    } else {
      this.setState({
        isError: false,
        isWarning: false,
        isInfo: true,
        message: "Value is correct"
      })
    }
  }

  render() {

    var errorTypeIconClass = classNames({
      'typeIcon__error': this.state.isError,
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
      { (this.state.isError || this.state.isInfo) &&
        <div>
          <div className={errorTypeIconClass}></div>
          <label className="inlineInfo">{this.state.message}</label>
        </div>
      }
    </div>);
  }

}



export default InputField;
