const monthsPerAnn = 12;
const { pow } = Math;

/**
 * 
 * @param {number} principal 
 * @param {number} interestRate 
 * @param {number} monthlyDeposit 
 * @param {number} monthsNum 
 * @param {number} interestAnnFreq 
 */

function calculateSavings(
  principal,
  interestRate,
  monthlyDeposit,
  monthsNum,
  interestAnnFreq
) {
  const array = new Array(monthsNum).fill(null);
  const months = array.map((_, i) => {
    return futureValue(principal, interestRate, interestAnnFreq, i + 1);
  });

  return months;
}

/**
 * 
 * @param {number} principal 
 * @param {number} interestRate 
 * @param {number} monthlyDeposit 
 * @param {number} interestAnnFreq 
 * @param {number} monthsNum 
 */

function futureValue(
  principal,
  interestRate,
  monthlyDeposit,
  interestAnnFreq,
  monthsNum
) {
  const r = interestRate;
  const n = interestAnnFreq;
  const t = monthsNum / monthsPerAnn;
  const pmt = monthlyDeposit;

  const interestOnPrincipal = principal * pow(1 + r / n, n * t);

  const seriesFutureValue = pmt * (pow(1 + r / n, n * t) - 1) / (r / n);

  console.log({ seriesFutureValue, interestOnPrincipal });
  return +(seriesFutureValue + interestOnPrincipal).toFixed(2);
}

module.exports = { futureValue, calculateSavings };
