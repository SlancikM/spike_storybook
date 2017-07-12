import React from 'react';
import './index.css';
import classNames from 'classnames';

const InputField = ({ error, warning, onChange }) => {
  var inputFieldClass = classNames({
    'inputField': true,
    'inputField__error': error,
    'inputField__warning': warning,
  });
  console.log('onChange fnc: ', onChange);

  return (<input className={inputFieldClass} type="text" onChange={onChange} />);
}

export default InputField;
