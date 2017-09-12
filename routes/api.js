const express = require("express");
const router = express.Router();
const { calculateSavings } = require("../helpers/savings");

router.post("/savings", (req, res) => {
  const {
    principal,
    interestRate,
    interestAnnFreq,
    monthlyDeposit,
    monthsNum,
    currency
  } = req.body;

  const paramsArray = [
    principal,
    interestRate,
    interestAnnFreq,
    monthlyDeposit,
    monthsNum
  ];

  if (paramsArray.includes(undefined)) {
    res.send({ error: "all parameters should be present" });
  } else {
    const savings = calculateSavings(...paramsArray);
    res.send({ savings });
  }
});

module.exports = router;
