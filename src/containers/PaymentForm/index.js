import React, { Component } from 'react';
import './index.css';
import FormField from '../../components/form/FormField';

class PaymentForm extends Component {

  onBlur() {
    console.log('hello !!');
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="formLayout" >
        <form onSubmit={handleSubmit}>
          <FormField mandatory={true} label="Custom label" min={10} max={100} error={true} warning={false} format="--"
              tooltipMessage="Amount to be sent to beneficiary (excluding any charges)"
          />
          <FormField mandatory={true} label="Mandatory field" min={0} max={1000}  error={false} warning={true}
              tooltipMessage="Amount to be sent to Milan S."
          />
          <FormField mandatory={false} label="Third label"
          />
          <div className="submitLayout" >
            <button type="submit">Send money</button>
          </div>

        </form>
      </div>
    );
  }
}

export default PaymentForm;
