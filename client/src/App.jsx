import React, { Component } from "react";
import CurrencyInput from "./components/CurrencyInput";
import SliderInput from "./components/SliderInput";
import DisplayGraph from "./components/DisplayGraph";
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
    onChange();
  }

  changeDeposit(deposit) {
    const { changeDeposit, onChange } = this.props;
    changeDeposit(deposit);
    onChange();
  }

  changeInterestRate(interestRatePct) {
    const { changeInterestRate, onChange } = this.props;
    changeInterestRate(interestRatePct);
    onChange();
  }

  changeInterestFreq(interestAnnFreq) {
    const { changeInterestFreq, onChange } = this.props;
    changeInterestFreq(interestAnnFreq);
    onChange();
  }

  changeCurrency(currency) {
    const { changeCurrency, onChange } = this.props;
    changeCurrency(currency);
    onChange();
  }

  render() {
    const {
      // Values
      principal,
      monthlyDeposit,
      interestRatePct,
      data
      // Functions
      // onChange
      // changePrincipal,
      // changeDeposit,
      // changeInterestRate,
      // changeInterestFreq,
      // changeCurrency
    } = this.props;
    console.log(this.props, data);
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

          <p className="input-label">
            How much interest will you earn per year?
          </p>
          <SliderInput
            value={interestRatePct}
            onChange={this.changeInterestRate}
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

  changePrincipal: PropTypes.func,
  changeDeposit: PropTypes.func,
  changeInterestRate: PropTypes.func,
  changeInterestFreq: PropTypes.func,
  changeCurrency: PropTypes.func,
  onChange: PropTypes.func
};

export default App;
