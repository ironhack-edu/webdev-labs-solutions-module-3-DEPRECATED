import React, { Component } from 'react';
import './SearchBar.css';
import ProductList from '../product-list/ProductList';

class SearchBar extends Component {
  state = {
    name: '',
    stocked: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleChangeCheckbox = () => {
    this.setState({
      stocked: !this.state.stocked
    });
  };

  render() {
    const { name, stocked } = this.state;
    const { data } = this.props;
    return (
      <div>
        <p>Search</p>
        <input className='input-text' type='text' name='name' value={name} onChange={this.handleChange} />
        <div>
          <input type='checkbox' name='stocked' id='stocked' checked={stocked} onChange={this.handleChangeCheckbox} />
          <label htmlFor='stocked'>Only Show Products on Stock</label>
        </div>
        <div className='table-container'>
          <ProductList data={data} name={name} stocked={stocked} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
