import React from 'react';
import './index.css';
import classNames from 'classnames';

const Input = ({ error, warning, onChange, onBlur }) => {
  var inputFieldClass = classNames({
    'input': true,
    'input__error': error,
    'input__warning': warning,
  });

  return (<input className={inputFieldClass} type="text" onChange={onChange} onBlur={onBlur} />);
}



export default Input;
