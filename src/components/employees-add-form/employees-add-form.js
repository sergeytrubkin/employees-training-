import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: '',
    })
  }

  render() {
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          onSubmit={this.onSubmit}
          className="add-form d-flex">
          <input type="text"
            name="name"
            onChange={this.onValueChange}
            value={this.state.name}
            className="form-control new-post-label"
            placeholder="Как его зовут?" />
          <input type="number"
            name="salary"
            onChange={this.onValueChange}
            value={this.state.salary}
            className="form-control new-post-label"
            placeholder="З/П в $?" />
          <button type="submit"
            className="btn btn-outline-light">Добавить</button>
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm;
