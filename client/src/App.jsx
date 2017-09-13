import React, { Component } from "react";
import CurrencyInput from "./components/CurrencyInput";
import SliderInput from "./components/SliderInput";
import DisplayGraph from "./components/DisplayGraph";
import PropTypes from "prop-types";
import "./App.css";

class App extends Component {
  render() {
    const {
      principal,
      monthlyDeposit,
      interestRatePct,
      data,
      onChange
    } = this.props;

    return (
      <div className="App">
        <div className="header-banner">
          <h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
        </div>
        <div className="financial-inputs">
          <p className="input-label">How much have you saved?</p>
          <CurrencyInput
            defaultValue={0}
            value={principal}
            onChange={onChange}
          />

          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput
            defaultValue={0}
            value={monthlyDeposit}
            onChange={onChange}
          />

          <p className="input-label">
            How much interest will you earn per year?
          </p>
          <SliderInput
            defaultValue={4}
            value={interestRatePct}
            onChange={onChange}
          />
        </div>
        <div className="financial-display">
          {/*We have included some sample data here, you will need to replace this
					with your own. Feel free to change the data structure if you wish.*/}
          {/* <DisplayGraph
            data={[
              {
                month: 1,
                amount: 500
              },
              {
                month: 2,
                amount: 700
              },
              {
                month: 3,
                amount: 1000
              },
              {
                month: 4,
                amount: 1500
              }
            ]}
          /> */}
          <DisplayGraph data={data} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  principal: PropTypes.number,
  monthlyDeposit: PropTypes.number,
  interestRatePct: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func
};

export default App;
