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
          { mandatory && <span>*</span> }
          <label className="label" >{label}</label>
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

// //Messages should be an object with a title and text property of type string
//  message: React.PropTypes.shape({
//    title: React.PropTypes.string,
//    text: React.PropTypes.string
//  }).isRequired,
//  //The comments property needs to be an array of objects.
//  comments: React.PropTypes.arrayOf(React.PropTypes.object),
//  //The date needs to be an instance of type Date.
//  date: React.PropTypes.instanceOf(Date)

export default FormField; // validationFactory(FormField);
