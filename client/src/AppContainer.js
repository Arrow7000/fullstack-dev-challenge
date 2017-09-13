import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCalculation } from "./store";
import App from "./App.jsx";

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCalculation }, dispatch);
}

function mergeProps(stateProps, dispatchProps) {
  const {
    principal,
    monthlyDeposit,
    interestRatePct,
    interestAnnFreq,
    currency
  } = stateProps;
  const { fetchCalculation } = dispatchProps;
  const onChange = () => {
    console.log("fetching");
    fetchCalculation(
      principal,
      monthlyDeposit,
      interestRatePct,
      interestAnnFreq,
      currency
    );
  };
  return { onChange };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
