import React from 'react';
import './CustomInput.css';

class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // return (
  //   <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
  // );
  render() {
    return (
      <div className="layout">
        <input />
      </div>
    );
  }
}


CustomInput.propTypes = {
}

export default CustomInput;
