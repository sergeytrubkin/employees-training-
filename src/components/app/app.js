import {Component} from 'react';

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
        {name: "John C.", salary: 800, rise: false, increase: true, id: "1"},
        {name: "Tom L.", salary: 1000, rise: true, increase: false, id: "2"},
        {name: "Carl W.", salary: 500, rise: false, increase: false, id: "3"},
        {name: "Born T.", salary: 1500, rise: false, increase: false, id: "4"},
      ],
      term: '',
      filter: 'All',
    };
    this.maxId = 4;
  }

  updateData = (term) => {
    if (term.length === 0 && this.state.filter === 'All') {
      return this.state.data;
    }
    const currentData = this.state.data.filter((item) => item.name.indexOf(term) > -1);
    return currentData;
  }

  onSearchInput = (term) => {
    this.setState({term})
  }

  filteredItems = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise);
      case 'more1000':
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
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

    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter((item) => item.id !== id),
      }
    })
  }

  onChangeFilter = (filter) => {
    this.setState({filter});
  }

  render() {
    const currentData = this.filteredItems(this.updateData(this.state.term), this.state.filter);

    return (
      <div className="app" >
        <AppInfo employeesCount={this.state.data.length} increaseCount={this.getIncreaseEmployees()} />

        <div className="search-panel">
          <SearchPanel onSearchInput={this.onSearchInput} />
          <AppFilter filter={this.state.filter} onChangeFilter={this.onChangeFilter} />
        </div>

        <EmployeesList onToggleProp={this.onToggleProp} onDelete={this.deleteItem} data={currentData} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
