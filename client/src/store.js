import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import queryString from "query-string";
import { serverRoot, monthsNum } from "./config";

const getNullsArray = () => new Array(monthsNum).fill(0);

const initialState = {
  fetching: false,
  principal: 0,
  monthlyDeposit: 0,
  interestRatePct: 4, // percentage! convert to fraction before sending to server
  interestAnnFreq: 1,
  currency: "GBP",
  data: getNullsArray() // will be returned from server API
};

// Action type enums
const REQUEST_CALC = "REQUEST_CALC";
const GET_CALC = "GET_CALC";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CALC:
      return { ...state, fetching: true };

    case GET_CALC:
      return {
        ...state,
        fetching: false,
        data: action.payload
      };

    default:
      return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

function requestCalculation() {
  return { type: REQUEST_CALC };
}

function getCalculation(calcResult) {
  return {
    type: GET_CALC,
    payload: calcResult
  };
}

export function fetchCalculation(
  principal,
  monthlyDeposit,
  interestRatePct,
  interestAnnFreq,
  currency
) {
  return dispatch => {
    dispatch(requestCalculation());
    const body = {
      principal,
      monthlyDeposit,
      interestRate: interestRatePct / 100,
      interestAnnFreq,
      currency,
      monthsNum
    };
    const q = queryString.stringify(body);
    const url = serverRoot + "api/savings?" + q;
    axios
      .get(url)
      .then(response => {
        const { error, savings } = response.data;
        if (!error && savings) {
          dispatch(getCalculation(savings));
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
}
