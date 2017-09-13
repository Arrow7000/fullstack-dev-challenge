const express = require("express");
const router = express.Router();
const { calculateSavings } = require("../helpers/savings");
const { getConversionRate } = require("../helpers/currency-convert");

const defaultCurrency = "GBP";

router.get("/savings", (req, res) => {
  const {
    principal,
    interestRate,
    interestAnnFreq,
    monthlyDeposit,
    monthsNum,
    currency,
    reqNonce
  } = req.query;

  const paramsArray = [
    +principal,
    +interestRate,
    +interestAnnFreq,
    +monthlyDeposit,
    +monthsNum
  ];

  if (paramsArray.some(item => item === undefined || item === null)) {
    res.send({ error: "all parameters should be present" });
  } else {
    const savings = calculateSavings(...paramsArray);

    if (currency && currency !== "" && currency !== defaultCurrency) {
      (async () => {
        try {
          const rate = await getConversionRate(currency);
          const converted = savings.map(
            monthFigure => +(monthFigure * rate).toFixed(2)
          );
          res.send({
            savings: converted,
            currency: currency.toUpperCase(),
            reqNonce
          });
        } catch (error) {
          res.send({ error });
        }
      })();
    } else {
      res.send({
        savings,
        currency: defaultCurrency,
        reqNonce
      });
    }
  }
});

module.exports = router;
