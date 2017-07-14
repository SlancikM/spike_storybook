import React from 'react';
import './index.css';

function validationFactory(WrappedComponent) {

  return class validationFactory extends React.Component {
    render() {
      return (
        <div className="validationContainer" >
          <WrappedComponent {...this.props}/>
          { this.props.isError && <span>Error occured bla bla ..</span> } // ="helpIcon" />
        </div>
      )
    }
  }

}

export default validationFactory;
