function reduce(arr, fn, initial, i) {
	i = i || 0;
	if (i === arr.length) {
		return initial;
	} else {
    initial = fn(initial, arr[i], i, arr);
    return reduce(arr, fn, initial, i + 1);
  }
}
    
module.exports = reduce;
