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

    render() {
      return (
        <div className="validationContainer" >
          <WrappedComponent {...this.props}/>
          { this.isValid() && <span>Validation occured </span> }
        </div>
      )
    }
  }

}

export default validationFactory;
