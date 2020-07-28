import React, { Component } from "react";
import "./FilterableProductTable.css";
import SearchBar from "../search-bar/SearchBar";
import ProductList from "../product-list/ProductList";

class ProductTable extends Component {
  state = {
    searchValue: "",
    stocked: false,
  };

  handleStocked = (event) => {
    this.setState({
      stocked: !this.state.stocked,
    });
  };

  handleSearch = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    const { stocked, searchValue } = this.state;

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          handleSearch={this.handleSearch}
          handleChangeCheckbox={this.handleStocked}
        />
        <div className="table-container">
          <ProductList
            data={this.props.products}
            searchValue={searchValue}
            stocked={stocked}
          />
        </div>
      </div>
    );
  }
}

export default ProductTable;
