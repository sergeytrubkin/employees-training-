import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "John C.", salary: 800, rise: false, increase: true, id: "1" },
        { name: "Tom L.", salary: 1000, rise: true, increase: false, id: "2" },
        { name: "Carl W.", salary: 500, rise: false, increase: false, id: "3" },
      ],
    };
    this.maxId = 4;
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item;
      })
    }))
  }

  getIncreaseEmployees = () => {
    return this.state.data.filter(item => item.increase === true).length;
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      }
    })
  }

  render() {
    return (
      <div className="app" >
        <AppInfo employeesCount={this.state.data.length} increaseCount={this.getIncreaseEmployees()} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList onToggleProp={this.onToggleProp} onDelete={this.deleteItem} data={this.state.data} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
