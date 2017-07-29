import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Pagination extends Component {

  renderOptions() {
      const { numPages } = this.props;
      let res = [];
      for (var i = 1; i <= numPages; i++) {
          res.push(<option key={i} value={i}>{i}</option>);
      }
      return res;
  }

  onChange(event) {
      const { paginate } = this.props;
      paginate(this.selection.value);
  }

  prevClick(event) {
      const { paginate } = this.props;
      if(this.selection.value > 1) {
          this.selection.value--;
          paginate(this.selection.value);
      }
  }

  nextClick(event) {
      const { numPages, paginate } = this.props;
      if(this.selection.value < numPages) {
          this.selection.value++;
          paginate(this.selection.value);
      }
  }

    render() {
        const { numPages } = this.props;

        return (
              <div className="paginationLayout" >
                  <span className="labelPage" >Page</span>
                  <select className="select" ref={(sel) => { this.selection = sel; }} onChange={this.onChange.bind(this)}>
                      {this.renderOptions()}
                  </select>
                  <span className="labelOf" >of</span>
                  <span className="labelNumPages">{numPages}</span>
                  <button className="prevButton" onClick={this.prevClick.bind(this)} ><i className="prev"></i></button>
                  <button className="nextButton" onClick={this.nextClick.bind(this)} ><i className="next"></i></button>
              </div>
        );
    }
}

Pagination.propTypes = {
    numPages: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired
};

export default Pagination;
