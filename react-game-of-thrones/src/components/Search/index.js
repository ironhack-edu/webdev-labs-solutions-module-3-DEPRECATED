import React from 'react';

class Search extends React.Component {
  state = {
    searchText: ''
  };
  handleSearch = event => {
    const {
      target: { value }
    } = event;

    this.props.onHandleSearch(value);

    this.setState({ searchText: value });
  };
  render() {
    return (
      <>
        <div className='row mb-4'>
          <div className='col-12'>
            {/* <div className='input-group mb-3'> */}
            <input
              type='text'
              name='searchText'
              placeholder='Search ...'
              value={this.state.searchText}
              onChange={this.handleSearch}
            />
            {/* </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default Search;
