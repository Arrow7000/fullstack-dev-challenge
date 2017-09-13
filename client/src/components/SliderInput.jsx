import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SliderInput.css";

export default class SliderInput extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    // 	value: props.defaultValue
    // }
  }

  // handleChange(e) {
  // 	const value = e.target.value
  // 	this.setState({ value })
  // }

  handleChange(e) {
    const value = e.target.value;
    //   this.setState({ value });
    const { onChange } = this.props;
    onChange(value);
  }

  render() {
    const { value } = this.props;

    return (
      <div className="fmz-slider">
        <p>{value}%</p>
        <input
          type="range"
          value={value}
          min={0}
          max={10}
          step={0.25}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

SliderInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
};
