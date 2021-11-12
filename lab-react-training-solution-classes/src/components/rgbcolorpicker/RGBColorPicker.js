import React, { Component } from 'react';

import SingleColorPicker from './SingleColorPicker';

import './SingleColorPicker.css';

class RGBColorPicker extends Component {
  state = {
    r: 0,
    g: 0,
    b: 0,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <SingleColorPicker
          color="r"
          value={this.state.r}
          handleChange={this.handleChange}
        />
        <SingleColorPicker
          color="g"
          value={this.state.g}
          handleChange={this.handleChange}
        />
        <SingleColorPicker
          color="b"
          value={this.state.b}
          handleChange={this.handleChange}
        />

        {/* Aqui vem a combinação das 3 cores */}
        <div
          className="color-block m-3"
          style={{
            backgroundColor: `rgb(${this.state.r}, ${this.state.g}, ${this.state.b})`,
          }}
        ></div>
      </div>
    );
  }
}

export default RGBColorPicker;
