import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PaymentForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="accountNo">Account No.:</label>
          <Field name="accountNo" component="input" type="text"/>
        </div>
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
    );
  }
}

// Decorate the form component
PaymentForm = reduxForm({
  form: 'payBill' // a unique name for this form
})(PaymentForm);

export default PaymentForm;
