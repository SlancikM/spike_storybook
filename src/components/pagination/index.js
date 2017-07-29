import React, { Component } from 'react';
import './index.css';

class Pagination extends Component {

  componentWillMount() {
      console.log("component should render:");
      const { numPages } = this.props;
      console.log(this.selection);
  }

  componentDidMount() {
      console.log("component did mount:");
      const { numPages } = this.props;
      console.log(numPages);
      console.log(this.selection.value);
  }

  renderOptions() {
      const { numPages } = this.props;
      let res = [];
      for (var i = 1; i <= numPages; i++) {
          res.push(<option key={i} value={i}>{i}</option>);
      }
      return res;
  }

  onSelectChange(event) {
      const { paginateFunc } = this.props;
      paginateFunc(this.selection.value);
  }

  prevClick(event) {
      const { paginateFunc } = this.props;
      if(this.selection.value > 1) {
          this.selection.value--;
          paginateFunc(this.selection.value);
      }
  }

  nextClick(event) {
      const { numPages, paginateFunc } = this.props;
      if(this.selection.value < numPages) {
          this.selection.value++;
          paginateFunc(this.selection.value);
      }
  }

  render() {
      const { numPages, paginateFunc } = this.props;

      return (
            <div className="paginationLayout" >
              <span>Page</span>
              <select ref={(sel) => { this.selection = sel; }} onChange={this.onSelectChange.bind(this)}>
                {this.renderOptions()}
              </select>
              <span>of</span>
              <span>{numPages}</span>
              <button onClick={this.prevClick.bind(this)} ><i className="prev"></i></button>
              <button onClick={this.nextClick.bind(this)} ><i className="next"></i></button>
            </div>
      );
  }
}

export default Pagination;
