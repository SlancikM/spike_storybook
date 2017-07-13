import React from 'react';
import './index.less';

function helpFactory(WrappedComponent) {

  return class helpFactory extends React.Component {
    render() {
      return (
        <div className="helpContainer" >
          <WrappedComponent {...this.props}/>
          { this.props.isHelpRequired && <div className="helpIcon" />}
        </div>
      )
    }
  }

}

export default helpFactory;
