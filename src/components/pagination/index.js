import React, { Component } from 'react';
import './index.css';

class Pagination extends Component {

  render() {
    const { numPages, prevClick, nextClick } = this.props;

    return (
          <div className="paginationLayout" >
            <span>Page</span>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span>of</span>
            <span>{numPages}</span>
            <button type="prevButton">&laquo;</button>
            <button type="nextButton">&raquo;</button>
          </div>
    );
  }
}

export default Pagination;
