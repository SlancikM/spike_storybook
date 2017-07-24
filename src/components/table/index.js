import React, { Component } from 'react';
import './index.css';
import classNames from 'classnames';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import FormField from '../form/FormField';

class TableWidget extends Component {

  constructor(props) {
    super(props);
  }

  onColumnClick(event) {
    console.log(event);
  }

  render() {
    const data = [{
                    entry: 1,
                    beneName:'Tanner Linsley',
                    beneRef: 'FLDANFOMFHAOA',
                    purpose: 'Some purpose',
                    amount: '123',
                  },
                  {
                    entry: 2,
                    beneName:'Jason Maurer',
                    beneRef: 'FDNALFALNLNLLN',
                    purpose: 'Some purpose',
                    amount: '10'
                  },
                  {
                    entry: 3,
                    beneName:'Milan Slancik',
                    beneRef: 'NVCVONOWNGNVSOI',
                    purpose: 'Some purpose',
                    amount: '1000'
                  },
                  {
                    entry: 4,
                    beneName:'Adriana Helikova',
                    beneRef: 'VMOHOENVONHSLF',
                    purpose: 'Some purpose',
                    amount: '99'
                  }

                 ];

    const columns = [
            {
              Header: () => (<div><input type="checkbox" onClick={this.onColumnClick.bind(this)} /></div>),
              accessor: 'checked', // String-based value accessors!
              Cell: () => (<div><input type="checkbox" /></div>),
              sortable: false,
              resizable: false,
              width: 50,
            },
            {
              Header: 'Entry',
              accessor: 'entry', // String-based value accessors!
              Cell: row => (<span>
                              {row.value}
                            </span>),
              width: 100,
              sortable: true,
              resizable: false,
            },
            {
              Header: 'Beneficiary name',
              accessor: 'beneName',
              Cell: props => <span className='number'>{props.value}</span>, // Custom cell components!
              width: 250,
            },
            {
              Header: 'Purpose',
              accessor: 'purpose',
              Cell: props => <span className='number'>{props.value}</span>, // Custom cell components!
              width: 350,
            },
            {
              Header: 'Beneficiary reference',
              accessor: 'beneRef',
              Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            },

            {
              Header: 'Amount',
              accessor: 'amount',
              Cell: props => <span className='number'>{props.value}</span>,
              width: 100,
            }];

    return (<ReactTable
              data={data}
              className="-striped -highlight"
              columns={columns}
              defaultPageSize={10}
              minRows={3}
              SubComponent={(row) => {
                              return (
                                <div className="subComponent">
                                  <FormField mandatory={true} label="Custom label" min={10} max={100} error={true} warning={false} format="--"
                                      tooltipMessage="Amount to be sent to beneficiary (excluding any charges)"
                                  />
                                  <FormField mandatory={true} label="Mandatory field" min={0} max={1000}  error={false} warning={true}
                                      tooltipMessage="Amount to be sent to Milan S."
                                  />
                                  <FormField mandatory={false} label="Third label"
                                  />
                                </div>
                              )
                            }}
              getTrProps={(state, rowInfo, column, instance) => {
                  return {
                    onClick: e => {
                      console.log('A TR Element was clicked!')
                      console.log('it produced this event:', e)
                      console.log('It was in this column:', column)
                      console.log('It was in this row:', rowInfo)
                      console.log('It was in this table instance:', instance)
                    }
                  }
                }}
            >

            </ReactTable>);
  }

}



export default TableWidget;
