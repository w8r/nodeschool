// http://blog.carbonfive.com/2015/01/14/gettin-freaky-functional-wcurried-javascript/
module.exports = function curry(fn) {
  var arity = arguments[1] || fn.length;

  return function accum() {
    var args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return fn.apply(null, args);
    } else {
      return function() {
        var args2 = Array.prototype.slice.call(arguments, 0);
        return accum.apply(null, args.concat(args2)); 
      }
    }
  };
};
