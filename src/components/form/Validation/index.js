import React from 'react';
import './index.css';

function validationFactory(WrappedComponent) {

  return class validationFactory extends React.Component {

    isValid() {
      const { min, max, message } = this.props;

      // TODO:
      // https://www.youtube.com/watch?v=jeXPk18n2cI

      // this will be custom function
      if ( min < 0) {
        return false;
      }
      if ( max > 100 ) {
        return false;
      }

      return true;
    }

    // TODO: Validation occured - extract to new component InlineValidation
    render() {
      return (
        <div className="validationContainer" >
          <WrappedComponent {...this.props}/>
          { this.isValid() && <div><div className="warning"></div> <span>Validation occured </span></div> }
        </div>
      )
    }
  }

}

export default validationFactory;
