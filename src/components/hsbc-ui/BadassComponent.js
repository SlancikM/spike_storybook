import React from 'react';
import './BadassComponent.css';
import HSBC_logo from './HSBC_logo.png';

const BadassComponent = (props) => {

  const { name, actionClick } = props;

  const onClick = (event) => {
    alert(`Have a nice day ${name}`);
  }
  return (
    <div className="layout">
      <img src={HSBC_logo} className="hsbc-logo" alt="logo" />
      <i>I am a badass HSBC component!</i>
      <button onClick={typeof(actionClick) !== 'undefined' ? actionClick : onClick} className="button"> Click me now! </button>
    </div>
  );
};

BadassComponent.propTypes = {
  name: React.PropTypes.string
}

export default BadassComponent;
