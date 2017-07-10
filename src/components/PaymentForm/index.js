import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './index.css';

const required = value => value ? undefined : 'Required';
const maxLengthValue = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength = maxLengthValue(15)

class PaymentForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    const renderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
      <div className="renderItem">
        <label>{label}</label>
        <div className="inputWithMessage">
          <input {...input} placeholder={placeholder} type={type}/>
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    )


    return (
      <div className="formLayout" >
        <form onSubmit={handleSubmit}>
          <Field name="sortCode" label="Sort Code:" placeholder="__-__-__" component={renderField} type="text" validate={[ required, maxLength ]}/>
          <Field name="accountNo" label="Account No.:" placeholder="________" component={renderField} type="text" validate={[ required, maxLength ]}/>
          <div>
            <label htmlFor="amount">Amount:</label>
            <Field name="amount" component="input" type="text"/>
          </div>
          <div>
            <label htmlFor="reference">Reference: </label>
            <Field name="reference" component="input" type="text"/>
          </div>
          <button type="submit">Send money</button>
        </form>
      </div>
    );
  }
}

// Decorate the form component
PaymentForm = reduxForm({
  form: 'payBill' // a unique name for this form
})(PaymentForm);

export default PaymentForm;
