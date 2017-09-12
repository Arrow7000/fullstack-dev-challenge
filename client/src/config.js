const dev = process.env.NODE_ENV !== "production";
export const serverRoot = dev ? "http://localhost:3001/" : "/";

const years = 50;
const monthsPerYear = 12;
export const monthsNum = years * monthsPerYear;
