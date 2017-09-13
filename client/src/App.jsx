import React, { Component } from "react";
import CurrencyInput from "./components/CurrencyInput";
import SliderInput from "./components/SliderInput";
import Selector from "./components/Selector";
import DisplayGraph from "./components/DisplayGraph";
import { currencies, frequencies } from "./config.js";
import PropTypes from "prop-types";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.changePrincipal = this.changePrincipal.bind(this);
    this.changeDeposit = this.changeDeposit.bind(this);
    this.changeInterestRate = this.changeInterestRate.bind(this);
    this.changeInterestFreq = this.changeInterestFreq.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
  }

  changePrincipal(principal) {
    const { changePrincipal, onChange } = this.props;
    changePrincipal(principal);
    setTimeout(onChange(), 0);
  }

  changeDeposit(deposit) {
    const { changeDeposit, onChange } = this.props;
    changeDeposit(deposit);
    setTimeout(onChange(), 0);
  }

  changeInterestRate(interestRatePct) {
    const { changeInterestRate, onChange } = this.props;
    changeInterestRate(interestRatePct);
    setTimeout(onChange(), 0);
  }

  changeInterestFreq(interestAnnFreq) {
    const { changeInterestFreq, onChange } = this.props;
    changeInterestFreq(interestAnnFreq);
    setTimeout(onChange(), 0);
  }

  changeCurrency(currency) {
    const { changeCurrency, onChange } = this.props;
    changeCurrency(currency);
    setTimeout(onChange(), 0);
  }

  render() {
    const {
      // Values
      principal,
      monthlyDeposit,
      interestRatePct,
      currency,
      interestAnnFreq,
      data
    } = this.props;

    const currs = currencies.map(curr => ({ name: curr, value: curr }));

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
            onChange={this.changePrincipal}
          />

          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput
            defaultValue={0}
            value={monthlyDeposit}
            onChange={this.changeDeposit}
          />

          <p className="input-label">Select a currency</p>
          <Selector
            options={currs}
            selected={currency}
            onChange={this.changeCurrency}
          />

          <p className="input-label">Frequency of interest payments</p>
          <Selector
            options={frequencies}
            selected={interestAnnFreq}
            onChange={this.changeInterestFreq}
          />

          <p className="input-label">
            How much interest will you earn per year?
          </p>
          <SliderInput
            value={interestRatePct}
            onChange={this.changeInterestRate}
          />
        </div>
        <div className="financial-display">
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
  currency: PropTypes.string,
  interestAnnFreq: PropTypes.number,

  changePrincipal: PropTypes.func,
  changeDeposit: PropTypes.func,
  changeInterestRate: PropTypes.func,
  changeInterestFreq: PropTypes.func,
  changeCurrency: PropTypes.func,
  onChange: PropTypes.func
};

export default App;
