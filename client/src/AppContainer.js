import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchCalculation,
  changePrincipal,
  changeDeposit,
  changeInterestRate,
  changeInterestFreq,
  changeCurrency
} from "./store";
import App from "./App.jsx";

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchCalculation,
      changePrincipal,
      changeDeposit,
      changeInterestRate,
      changeInterestFreq,
      changeCurrency
    },
    dispatch
  );
}

function mergeProps(stateProps, dispatchProps) {
  const {
    principal,
    monthlyDeposit,
    interestRatePct,
    interestAnnFreq,
    currency,
    data
  } = stateProps;

  const {
    fetchCalculation,
    changePrincipal,
    changeDeposit,
    changeInterestRate,
    changeInterestFreq,
    changeCurrency
  } = dispatchProps;

  const onChange = () => {
    fetchCalculation(
      principal,
      monthlyDeposit,
      interestRatePct,
      interestAnnFreq,
      currency
    );
  };
  return {
    principal,
    monthlyDeposit,
    interestRatePct,
    interestAnnFreq,
    currency,
    data,
    // functions
    onChange,
    changePrincipal,
    changeDeposit,
    changeInterestRate,
    changeInterestFreq,
    changeCurrency
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
