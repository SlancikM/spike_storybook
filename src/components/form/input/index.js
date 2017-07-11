import React from 'react';
import './index.css';
import classNames from 'classnames';

const InputField = ({ warning, error }) => {
  // const { warning } = props;
  var inputFieldClass = classNames({
    'inputField': true,
    'inputField__error': error,
    'inputField__warning': warning,
  });

  return (<input className={inputFieldClass} type="text" />);
}

export default InputField;
