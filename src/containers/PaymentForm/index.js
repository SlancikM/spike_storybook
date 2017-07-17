import React, { Component } from 'react';
import './index.css';
import FormField from '../../components/form/FormField';

class PaymentForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="formLayout" >
        <form onSubmit={handleSubmit}>
          <FormField mandatory={true} label="Custom label" isHelpRequired={true} max={50} error={true} warning={false} format="--" />
          <FormField mandatory={true} label="Mandatory field" isHelpRequired={true} min={5} error={false} warning={true} />
          <FormField mandatory={false} label="Third label" />
          <button type="submit">Send money</button>
        </form>
      </div>
    );
  }
}

export default PaymentForm;
