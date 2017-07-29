import React, { Component } from 'react';
import './index.css';

class Pagination extends Component {


  componentWillMount() {
    console.log("component should render");
    const { numPages } = this.props;

    console.log(numPages);
    console.log(this.selection);
  }

  componentDidMount() {
    console.log("component did mount");
    const { numPages } = this.props;

    console.log(numPages);
    console.log(this.selection.value);
  }

  renderOptions() {
      const { numPages } = this.props;
      let res = [];
      for (var k = 1; k <= numPages; k++) {
          res.push(<option key={k} value={k}> {k} </option>);
      }
      return res;
  }

  onSelectChange(event) {
    console.log('this.selection.value: ', this.selection.value);
    this.selection.value
  }

  prevClick(event) {
    console.log('PrevClick');
    // this.selection.value--;
  }

  nextClick(event) {
    console.log('NextClick');
    // this.selection.value++;
  }

  render() {
    const { numPages, paginateFunc } = this.props;

    return (
          <div className="paginationLayout" >
            <span>Page</span>
            <select ref={(select) => { this.selection = select; }} onChange={this.onSelectChange.bind(this)}>
              {this.renderOptions()}
            </select>
            <span>of</span>
            <span>{numPages}</span>
            <button type="prevButton" onClick={this.prevClick} >&laquo;</button>
            <button type="nextButton" onClick={this.nextClick} >&raquo;</button>
          </div>
    );
  }
}

export default Pagination;
