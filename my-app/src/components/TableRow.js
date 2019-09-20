import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class TableRow extends Component {
  delete() {
    axios.get('https://jsonplaceholder.typicode.com/users/'+this.props.obj.id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
    }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.username}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
             <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;