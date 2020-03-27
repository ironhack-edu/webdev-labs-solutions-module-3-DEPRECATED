import React, { Component } from 'react';
import './ProductTable.css';
import data from '../../data.json';
import SearchBar from '../search-bar/SearchBar';

class ProductTable extends Component {
  state = {
    data: data.data
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar data={this.state.data} />
      </div>
    );
  }
}

export default ProductTable;
