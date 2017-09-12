const { futureValue, calculateSavings } = require("../helpers/savings");

const yr = 12;

test("Test correct interest calculations", () => {
  expect(futureValue(5000, 0.05, 0, 12, 10 * yr)).toBe(8235.05);
  expect(futureValue(2500, 0.12, 0, 1, 15 * yr)).toBe(13683.91);
  expect(futureValue(200, 0.02, 0, 4, 25 * yr)).toBe(329.33);
  expect(futureValue(3333, 0.09, 0, 12, 6 * yr)).toBe(5707.94);
  expect(futureValue(1200, 0.05, 0, 12, 20)).toBe(1304.06);

  // With contributions
  expect(futureValue(5000, 0.05, 100, 12, 10 * yr)).toBe(23763.28);
  expect(futureValue(1111, 0.03, 230, 4, 10 * yr)).toBe(33706.19);
  expect(futureValue(1200, 0.05, 20, 12, 20)).toBe(1722.03);
  expect(futureValue(4800, 0.08, 100, 1, 14 * yr)).toBe(44400.81);

  //   expect(calculateSavings()).toEqual([]);
});
