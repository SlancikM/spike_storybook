import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './index.css';
import SortCodeField from '../SortCodeField';
import AccountNoField from '../AccountNoField';
import AmountField from '../AmountField';

const required = value => value ? undefined : 'Required';
const maxLengthValue = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength = maxLengthValue(15)

class PaymentForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    const renderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
      <div className="item">
        <label>{label}</label>
        <div className="inputWithMessage">
          <input {...input} placeholder={placeholder} type={type}/>
          {touched && ((error && <span className="errorMessage">{error}</span>) || (warning && <span className="warningMessage">{warning}</span>))}
        </div>
      </div>
    )

//

    return (
      <div className="formLayout" >
        <form onSubmit={handleSubmit}>
          <Field
            component={SortCodeField}
            name="sortCode"
            label="Sort Code:"
            placeholder="__-__-__"
            type="text"
            validate={[ required ]}
          />
          <Field
            component={AccountNoField}
            name="accountNo"
            label="Account No.:"
            placeholder="Type account number ... 8 numbers"
            type="text"
            validate={[ required, maxLength ]}
          />
          <Field
            component={AmountField}
            name="amount"
            label="Amount:"
            placeholder="Type amount"
            type="text"
            validate={[ required, maxLength ]}
          />
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
