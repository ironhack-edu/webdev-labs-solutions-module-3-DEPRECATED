import React, { Component } from 'react';

import './App.css';

import productsList from './data.json';
import Table from './components/Table';
import SearchBar from './components/Search'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state={
      items : productsList.data,
      visibleItems: productsList.data,
    }
  }

  refineItemList = (query, showUnStocked) => {

    let clone = [...this.state.items];

    let newList = clone.filter(eachThing => {
      if(showUnStocked) return eachThing.name.toUpperCase().includes(query.toUpperCase());
    else return eachThing.stocked && eachThing.name.toUpperCase().includes(query.toUpperCase()); 
    })
    // console.log(newList);
    this.setState({
      visibleItems: newList
    })
  }


  render() {
    // console.log(this.state);
    return (
      <div >
        <h1>Welcome to IronStore</h1>
        <SearchBar 
          doTheSearch = {this.refineItemList} 
        />
        <Table allItems = {this.state.visibleItems} />
      </div>
    );
  }
}
