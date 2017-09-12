const monthsPerAnn = 12;
const { pow } = Math;

/**
 * 
 * @param {number} principal 
 * @param {number} interestRate 
 * @param {number} interestAnnFreq 
 * @param {number} monthlyDeposit 
 * @param {number} monthsNum 
 */

function calculateSavings(
  principal,
  interestRate,
  interestAnnFreq,
  monthlyDeposit,
  monthsNum
) {
  const array = new Array(monthsNum).fill(null);
  const months = array.map((_, i) => {
    return futureValue(
      principal,
      interestRate,
      interestAnnFreq,
      monthlyDeposit,
      i + 1
    );
  });

  return months;
}

/**
 * 
 * @param {number} principal 
 * @param {number} interestRate 
 * @param {number} interestAnnFreq 
 * @param {number} monthlyDeposit 
 * @param {number} monthsNum 
 */

function futureValue(
  principal,
  interestRate,
  interestAnnFreq,
  monthlyDeposit,
  monthsNum
) {
  const r = interestRate;
  const n = interestAnnFreq;
  const pmt = monthlyDeposit;

  const toReduce = new Array(monthsNum).fill(null);

  const total = toReduce.reduce((total, _, i) => {
    const isInterestMonth = (i + 1) % (monthsPerAnn / n) === 0; // checks whether this month is one where interest is calculated

    const interest = total * (r / n);
    const newTotal = total + (isInterestMonth ? interest : 0) + pmt;
    return +newTotal.toFixed(2); // round to the nearest penny, as a bank would do
  }, principal);

  return total;
}

module.exports = { futureValue, calculateSavings };
