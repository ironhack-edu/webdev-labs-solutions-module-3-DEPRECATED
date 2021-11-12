import React, { Component } from 'react';

import './SingleColorPicker.css';

class SingleColorPicker extends Component {
  fillColor = (color) => {
    switch (color) {
      case 'r':
        return `rgb(${this.props.value}, 0, 0)`;
      case 'g':
        return `rgb(0, ${this.props.value}, 0)`;
      case 'b':
        return `rgb(0, 0, ${this.props.value})`;
      default:
        throw new Error('A prop `color` é obrigatória.');
    }
  };

  render() {
    return (
      <div className="d-flex m-3 align-items-center">
        <div
          className="color-block"
          style={{ backgroundColor: this.fillColor(this.props.color) }}
        ></div>
        <div>
          <label>{this.props.color.toUpperCase()}: </label>
          <input
            type="number"
            min={0}
            max={255}
            onChange={this.props.handleChange}
            name={this.props.color}
            value={this.props.value}
          />
        </div>
      </div>
    );
  }
}

export default SingleColorPicker;
