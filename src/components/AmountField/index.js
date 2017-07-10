import React from 'react';
import './index.css';
var NumberFormat = require('react-number-format');

const AccountNoField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => {
  return (
    <div className="item">
      <label>{label}</label>
      <div className="inputWithMessage">
        <NumberFormat {...input} placeholder={placeholder} type={type} thousandSeparator={true} decimalPrecision={2} prefix={'£'} />
        {touched && ((error && <span className="errorMessage">{error}</span>) || (warning && <span className="warningMessage">{warning}</span>))}
      </div>
    </div>);
}

export default AccountNoField;
