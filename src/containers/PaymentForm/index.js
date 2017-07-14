import React, { Component } from 'react';
import './index.css';
// import InputField from '../../components/form/Input';
import InputContainer from '../../components/form/InputContainer';

class PaymentForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    
    return (
      <div className="formLayout" >
        <form onSubmit={handleSubmit}>
          <InputContainer label="Any custom label" isHelpRequired={true} />
          <InputContainer label="Mandatory field*" isHelpRequired={true} />
          <InputContainer label="Third label"/>
          <button type="submit">Send money</button>
        </form>
      </div>
    );
  }
}

export default PaymentForm;
