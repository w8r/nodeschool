var inputs = process.argv.slice(2);
var result = inputs
  .map((s) => s.substring(0, 1))
  .reduce((prev, cur) => prev + cur);

console.log(`[${inputs}] becomes "${result}"`);
