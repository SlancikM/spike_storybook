import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import classNames from 'classnames';

class Pagination extends Component {

    constructor() {
        super();
        this.state = {
            selectedValue: 1
        }
    }
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
        this.state.selectedValue = this.selection.value;
        paginate(this.state.selectedValue);
    }

    prevClick(event) {
        const { paginate } = this.props;
        if(this.state.selectedValue > 1) {
            this.state.selectedValue--;
            this.selection.value = this.state.selectedValue;
            paginate(this.state.selectedValue);
        }
    }

    nextClick(event) {
        const { numPages, paginate } = this.props;
        if(this.state.selectedValue < numPages) {
          this.state.selectedValue++;
          this.selection.value = this.state.selectedValue;
          paginate(this.state.selectedValue);
        }
    }

    // var errorTypeIconClass = classNames({
    //   'typeIcon__error': this.state.isError,
    //   'typeIcon__info': this.state.isInfo,
    // });

    // (this.state.selectedValue === 1)

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
                  <button className={`prevButton`} disabled={false}  onClick={this.prevClick.bind(this)} ><i className="prev"></i></button>
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
