import React from 'react';
import './index.css';

const Tooltip = ({ message }) => {
  return (<div className="tooltip">
            <span className="tooltiptext">{message}</span>
          </div>);
}

export default Tooltip;
