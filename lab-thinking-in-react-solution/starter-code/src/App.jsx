import React from 'react';
import './App.css';
import FilterableProductTable from './components/product-table/FilterableProductTable';
import data from './data.json';

const App = () => {
  return (
    <div className='app'>
      {/* Products are located in the data object in the json file. */}
      {/* To access the array of products we need to do importName.data */}
      {/* In this case the importName is "data"  */}
      <FilterableProductTable products={data.data} />
    </div>
  );
};

export default App;
