import React, { Component } from 'react';
import './index.css';
// import InputField from '../../components/form/Input';
import InputContainer from '../../components/form/InputContainer';

class PaymentForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    // <InputField error={false} warning={true} />
    return (
      <div className="formLayout" >
        <form onSubmit={handleSubmit}>

          <InputContainer label="My custom label" />
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
