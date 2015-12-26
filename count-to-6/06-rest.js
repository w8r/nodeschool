module.exports = (...args) => {
  return args.reduce((prev, curr) => prev + curr) / args.length;
};
