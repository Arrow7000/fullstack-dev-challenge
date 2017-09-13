import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CurrencyInput.css";

export default class CurrencyInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const { onChange } = this.props;
    onChange(+value);
  }

  render() {
    const { defaultValue, value } = this.props;

    return (
      <div
        className={`currency-input ${defaultValue !== undefined
          ? "default-value"
          : ""}`}
      >
        <span>£</span>
        <input
          type="number"
          min="0"
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

CurrencyInput.propTypes = {
  defaultValue: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func
};
