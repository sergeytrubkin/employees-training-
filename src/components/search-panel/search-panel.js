import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onSearchInput = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchInput(term);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        value={this.state.term}
        onInput={this.onSearchInput}
        placeholder="Найти сотрудника" />
    )
  }
}

export default SearchPanel;
