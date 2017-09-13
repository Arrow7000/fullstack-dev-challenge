import React, { Component } from "react";
import PropTypes from "prop-types";

class Selector extends Component {
  handleChange(e) {
    const value = e.target.value;
    const { onChange } = this.props;
    onChange(value);
  }

  render() {
    const { options, selected } = this.props;
    return (
      <div>
        <select
          name=""
          id=""
          value={selected}
          onChange={this.handleChange.bind(this)}
        >
          {options.map(opt => {
            return (
              <option key={opt.value} name="" value={opt.value}>
                {opt.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

Selector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func
};

export default Selector;
