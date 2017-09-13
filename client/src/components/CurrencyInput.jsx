import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CurrencyInput.css";

export default class CurrencyInput extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       hasFocus: false,
  //       value: props.defaultValue
  //     };
  //   }

  //   handleChange(e) {
  //     const value = e.target.value;
  //     this.setState({ value });
  //   }

  //   handleFocus(e) {
  //     this.setState({
  //       hasFocus: true
  //     });
  //   }

  render() {
    const { defaultValue, value, onChange } = this.props;
    // const { value } = this.state;

    return (
      <div
        className={`currency-input ${defaultValue !== undefined
          ? "default-value"
          : ""}`}
      >
        <span>£</span>
        <input type="number" min="0" value={value} onChange={onChange} />
      </div>
    );
  }
}

CurrencyInput.propTypes = {
  defaultValue: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func
};
