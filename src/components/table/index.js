import React, { Component } from 'react';
import './index.css';
import classNames from 'classnames';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

class TableWidget extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = [{
                  name: 'Tanner Linsley',
                  age: 26,
                  friend: {
                    name: 'Jason Maurer',
                    age: 23,
                  }
                },
                {
                  name: 'Jason Maurer',
                  age: 32,
                  friend: {
                    name: 'Milan Slancik',
                    age: 23,
                  }
                },
                {
                  name: 'Milan Slancik',
                  age: 33,
                  money: 130 + 130 - 70 + 56 - 27 + 360 - 245 - 50 - 10 - 10 - 10 + 340 - 280 + 5,
                  friend: {
                    name: 'Tanner Linsley',
                    age: 26,
                  }
                },
              ];

    const columns = [
            {
              Header: 'Whole name',
              accessor: 'name' // String-based value accessors!
            },
            {
              Header: 'Age',
              accessor: 'age',
              Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            },
            {
              Header: 'Income',
              accessor: 'money',
              Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            },
            {
              id: 'friendName', // Required because our accessor is not a string
              Header: 'Friend Name',
              accessor: d => d.friend.name // Custom value accessors!
            }, {
              Header: props => <span>Friend Age</span>, // Custom header components!
              accessor: 'friend.age'
            }]

    return (<ReactTable
              data={data}
              columns={columns}
              defaultPageSize={10}
              minRows={3}
            />);
  }

}



export default TableWidget;
