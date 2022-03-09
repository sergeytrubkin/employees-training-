import { Component } from 'react';

import './employers-list-item.css';

class EmployersListItem extends Component {
  render() {
    const { onDelete, name, salary, onToggleProp, increase, rise } = this.props

    let className = "list-group-item d-flex justify-content-between";
    if (increase) {
      className += " increase";
    }
    if (rise) {
      className += ' like';
    }

    return (
      <li className={className}>
        <span className="list-group-item-label" onClick={onToggleProp}
          data-toggle="rise">{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
        <div className='d-flex justify-content-center align-items-center'>
          <button type="button"
            onClick={onToggleProp}
            data-toggle="increase"
            className="btn-cookie btn-sm ">
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button"
            onClick={onDelete}
            className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    )
  }
}

export default EmployersListItem;
