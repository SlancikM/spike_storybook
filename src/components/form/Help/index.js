import React from 'react';
import './index.css';
import Tooltip from '../Tooltip';

function helpFactory(WrappedComponent) {

  return class helpFactory extends React.Component {
    render() {
      return (
        <div className="helpContainer" >
          <WrappedComponent {...this.props}/>
          { this.props.isHelpRequired && <Tooltip message="Lorem ipsum bla" /> }
        </div>
      )
    }
  }

}

export default helpFactory;
