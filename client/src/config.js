const dev = process.env.NODE_ENV !== "production";
export const serverRoot = dev ? "http://localhost:3001/" : "/";

const years = 50;
const monthsPerYear = 12;
export const monthsNum = years * monthsPerYear;
export const frequencies = [
  { name: "Monthly", value: 12 },
  { name: "Quarterly", value: 4 },
  { name: "Annually", value: 1 }
];
export const currencies = [
  "AUD",
  "BGN",
  "BRL",
  "CAD",
  "CHF",
  "CNY",
  "CZK",
  "DKK",
  "EUR",
  "GBP",
  "HKD",
  "HRK",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "JPY",
  "KRW",
  "MXN",
  "MYR",
  "NOK",
  "NZD",
  "PHP",
  "PLN",
  "RON",
  "RUB",
  "SEK",
  "SGD",
  "THB",
  "TRY",
  "USD",
  "ZAR"
];
