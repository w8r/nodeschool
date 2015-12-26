module.exports = function arrayMap(arr, fn, thisArg) {
	function collect(prev, curr, index, arr) {
		prev.push(fn.call(thisArg, arr[index], index, arr));
		return prev;
	}
  return arr.reduce(collect, []);
};
