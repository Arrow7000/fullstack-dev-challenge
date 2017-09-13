import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CurrencyInput.css";

export default class CurrencyInput extends Component {
  constructor(props) {
    super(props);

    //   this.state = {
    //     hasFocus: false,
    //     value: props.defaultValue
    //   };

    this.handleChange = this.handleChange.bind(this);
  }

  //   throw new Error('use handleChange and have it update the value for whatever part of the state object it represents. Only then call the onChange function, which will then use the new value.');

  handleChange(e) {
    const value = e.target.value;
    //   this.setState({ value });
    const { onChange } = this.props;
    onChange(value);
  }

  //   handleFocus(e) {
  //     this.setState({
  //       hasFocus: true
  //     });
  //   }

  render() {
    const { defaultValue, value } = this.props;
    // const { value } = this.state;

    return (
      <div
        className={`currency-input ${defaultValue !== undefined
          ? "default-value"
          : ""}`}
      >
        <span>£</span>
        {/* <input type="number" min="0" value={value} onChange={onChange} /> */}
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
