import React, { Component } from 'react';
import './index.css';
import InputField from '../../components/form/input';

class PaymentForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="formLayout" >
        <form onSubmit={handleSubmit}>
          <InputField error={true} />
          <button type="submit">Send money</button>
        </form>
      </div>
    );
  }
}

// Decorate the form component
// PaymentForm = reduxForm({
//   form: 'payBill' // a unique name for this form
// })(PaymentForm);

export default PaymentForm;
