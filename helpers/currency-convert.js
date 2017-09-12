const axios = require("axios");
const { map } = require("lodash");

async function getConversionRate(currency) {
  const curr = currency.toUpperCase();

  const url = "https://api.fixer.io/latest?base=GBP";
  const response = await axios.get(url);
  const { rates } = response.data;
  const rate = rates[curr];
  if (!rate) {
    const currencyList = map(rates, (value, key) => key);
    const currStr = currencyList.join("\n");
    throw `Currency not in list. Please try one of these currencies: \n${currStr}`;
  } else {
    return rate;
  }
}

module.exports = { getConversionRate };
