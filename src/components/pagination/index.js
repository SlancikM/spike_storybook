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
        console.log('onChange... ', this.selection.value);
        const { paginate } = this.props;
        this.setState({selectedValue: event.target.value});
        this.forceUpdate();
        //paginate(this.selection.value);

        // this.dispach()
    }

    prevClick(event) {
        const { paginate } = this.props;
        if(this.state.selectedValue > 1) {
            console.log('prevClick: ', this.state.selectedValue);
            this.setState({ selectedValue: this.state.selectedValue - 1 });
            //paginate(this.selection.value);
        }
    }

    nextClick(event) {
        const { numPages, paginate } = this.props;
        if(this.state.selectedValue < numPages) {
          console.log('nextClick: ', this.state.selectedValue);
          this.setState({ selectedValue: this.state.selectedValue + 1 });
          // paginate(this.selection.value);
        }
    }

    render() {
        const { numPages } = this.props;

        return (
              <div className="paginationLayout" >
                  <span className="labelPage" >Page</span>
                  <select className="select" ref={(sel) => { this.selection = sel; }} value={this.state.selectedValue}  onChange={this.onChange.bind(this)}>
                      {this.renderOptions()}
                  </select>
                  <span className="labelOf" >of</span>
                  <span className="labelNumPages">{numPages}</span>
                  <button className="prevButton" disabled={(this.state.selectedValue === 1)}  onClick={this.prevClick.bind(this)} ><i className="prev"></i></button>
                  <button className="nextButton" disabled={(this.state.selectedValue === this.props.numPages)} onClick={this.nextClick.bind(this)} ><i className="next"></i></button>
              </div>
        );
    }
}

Pagination.propTypes = {

    numPages: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired
};

export default Pagination;
