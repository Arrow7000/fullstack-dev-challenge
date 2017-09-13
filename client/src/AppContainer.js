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

export default connect(mapStateToProps, mapDispatchToProps)(App);
