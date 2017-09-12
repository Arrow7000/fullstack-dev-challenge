const { futureValue, calculateSavings } = require("../helpers/savings");

const yr = 12;

/**
 * NOTE:
 * These tests are currently not passing. I got these values from an online calculator but I think they may not have been rounding to one penny every month like I am, which would give inconsistent values.
 * Plus I am getting especially inconsistent values for `futureValue(4800, 0.08, 100, 1, 14 * yr)`, ranging from 44400.81 to 44680.64, so I don't think my math is uniquely wrong.
 */

test("Test correct interest calculations", () => {
  expect(futureValue(5000, 0.05, 12, 0, 10 * yr)).toBe(8235.05);
  expect(futureValue(2500, 0.12, 1, 0, 15 * yr)).toBe(13683.91);
  expect(futureValue(200, 0.02, 4, 0, 25 * yr)).toBe(329.33);
  expect(futureValue(3333, 0.09, 12, 0, 6 * yr)).toBe(5707.94);
  expect(futureValue(1200, 0.05, 12, 0, 20)).toBe(1304.06);

  // With contributions
  expect(futureValue(5000, 0.05, 12, 100, 10 * yr)).toBe(23763.28);
  expect(futureValue(4800, 0.08, 1, 100, 14 * yr)).toBe(44400.81);
  expect(futureValue(1111, 0.03, 4, 230, 10 * yr)).toBe(33706.19);
  expect(futureValue(1200, 0.05, 12, 20, 20)).toBe(1722.03);

  expect(calculateSavings(5000, 0.05, 4, 100, 5 * yr)).toEqual([]);
});
