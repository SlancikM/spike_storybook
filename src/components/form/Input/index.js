import React from 'react';
import './index.css';
import classNames from 'classnames';
// import helpFactory from '../Help';

const Input = ({ error, warning, onChange }) => {
  var inputFieldClass = classNames({
    'input': true,
    'input__error': error,
    'input__warning': warning,
  });

  return (<input className={inputFieldClass} type="text" onChange={onChange} />);
}



export default Input;
