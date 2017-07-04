import React from 'react';
import './SpecialNotification.css';
import HSBC_logo from './HSBC_logo.png';

const SpecialNotification = ({name}) => {

  const onClick = (event) => {
    alert(`Have a nice day ${name}`);
  }

  return (
    <div className="layout">
      <img src={HSBC_logo} className="hsbc-logo" alt="logo" />
      <i>I am big badass HSBC react component</i>
      <button onClick={onClick} className="button"> Click me now! </button>
    </div>
  );
};

SpecialNotification.propTypes = {
  name: React.PropTypes.string
}

export default SpecialNotification;
