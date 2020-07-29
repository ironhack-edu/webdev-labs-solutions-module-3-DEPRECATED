import React, { Component } from 'react';
import './SearchBar.css';
import ProductList from '../product-list/ProductList';

class SearchBar extends Component {
  state = {
    name: '',
    stocked: false
  };

  handleChange = e => {
    const { name, value } = e.target; // Destructuring.
    // The following below results in the same as the above.
    // const name = event.target.name;
    // const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleChangeCheckbox = () => {
    // Change the state of the stocked value to it's opposite.
    // If it was false its now true and vice versa
    this.setState({
      stocked: !this.state.stocked
    });
  };

  render() {
    const { name, stocked } = this.state; // Destructure the state
    // Below results in the same as the above.
    // const name = this.state.name;
    // const stocked = this.state.stocked
    // This allows us to avoid having to type this.state.XXX every time.
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
