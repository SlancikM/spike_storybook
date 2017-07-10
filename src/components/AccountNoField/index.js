import React from 'react';
import './index.css';
var NumberFormat = require('react-number-format');

const AccountNoField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => {
  return (
    <div className="item">
      <label className="label">{label}</label>
      <div className="inputWithMessage">
        <NumberFormat format="########" mask="_" {...input} placeholder={placeholder} type={type}/>
        {touched && ((error && <span className="errorMessage">{error}</span>) || (warning && <span className="warningMessage">{warning}</span>))}
      </div>
    </div>);
}

export default AccountNoField;
