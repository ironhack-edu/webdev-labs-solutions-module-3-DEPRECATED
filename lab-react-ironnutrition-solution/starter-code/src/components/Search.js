import React from "react";

class Search extends React.Component {
  state = {
    input: ""
  };
  handleSearch = event => {
    const { value } = event.target;
    this.props.filterFood(value);
    this.setState({
      input: value
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          onChange={this.handleSearch}
          placeholder="search..."
          value={this.state.input}
        />
      </div>
    );
  }
}

export default Search;
