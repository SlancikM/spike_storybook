import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import classNames from 'classnames';
import InputField from '../InputField';
import Tooltip from '../Tooltip';

class FormField extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { label, mandatory, tooltipMessage, error, warning, min, max } = this.props;
    return (
      <div className="inputContainerLayout" >
        <div className={classNames("layoutBox", "labelContainer")}>
          <label className="label" >{label}</label>
          { mandatory && <span>*</span> }
        </div>
        <div className={classNames("layoutBox", "inputContainer")}>
          <InputField min={min} max={max} />
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

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  mandatory: PropTypes.bool.isRequired,
  tooltipMessage: PropTypes.string,
  error: PropTypes.bool,
  warning: PropTypes.bool,
};

export default FormField;
