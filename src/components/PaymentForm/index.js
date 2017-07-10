import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './index.css';
import SortCodeField from '../SortCodeField';
import AccountNoField from '../AccountNoField';
import AmountField from '../AmountField';
import CustomField from '../CustomField';

const required = value => value ? undefined : 'Required';
const maxLengthValue = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength = maxLengthValue(15)

class PaymentForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="formLayout" >
        <form onSubmit={handleSubmit}>
          <Field
            component={SortCodeField}
            name="sortCode"
            label="Sort Code:"
            placeholder="Type Sort Code"
            type="text"
            validate={[ required ]}
          />
          <Field
            component={AccountNoField}
            name="accountNo"
            label="Account No:"
            placeholder="Type Account Number"
            type="text"
            validate={[ required, maxLength ]}
          />
          <Field
            component={AmountField}
            name="amount"
            label="Amount:"
            placeholder="Type Amount"
            type="text"
            validate={[ required, maxLength ]}
          />
          <Field
            component={CustomField}
            name="reference"
            label="Reference:"
            placeholder="Type Payment Reference"
            type="text"
          />
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
