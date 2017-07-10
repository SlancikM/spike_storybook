import React from 'react';
import './BadassComponent.css';
import HSBC_logo from './HSBC_logo.png';

const BadassComponent = (props) => {
  return (
    <div className="layout">
      <img src={HSBC_logo} className="hsbc-logo" alt="logo" />
      <i>I am a badass HSBC component!</i>
    </div>
  );
};

BadassComponent.propTypes = {
  name: React.PropTypes.string
}

export default BadassComponent;
