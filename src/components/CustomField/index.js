import React from 'react';
import './index.css';

const CustomField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => {
  return (
      <div className="item">
        <label>{label}</label>
        <div className="inputWithMessage">
          <input {...input} placeholder={placeholder} type={type}/>
          {touched && ((error && <span className="errorMessage">{error}</span>) || (warning && <span className="warningMessage">{warning}</span>))}
        </div>
      </div>
    )
}

export default CustomField;
