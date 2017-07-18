import React, { Component } from 'react';
import './index.css';
import FormField from '../../components/form/FormField';

class PaymentForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="formLayout" >
        <form onSubmit={handleSubmit}>
          <FormField mandatory={true} label="Custom label" max={50} error={true} warning={false} format="--"
              tooltipMessage="Amount to be sent to beneficiary (excluding any charges)"
          />
          <FormField mandatory={true} label="Mandatory field" min={5} error={false} warning={true}
              tooltipMessage="Amount to be sent to Milan S."
          />
          <FormField mandatory={false} label="Third label"
          />
          <button type="submit">Send money</button>
        </form>
      </div>
    );
  }
}

export default PaymentForm;
