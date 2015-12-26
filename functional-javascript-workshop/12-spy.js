module.exports = function Spy(target, method) {
	var res = { count: 0 };
	var m = target[method];

	target[method] = function() {
		res.count++;
		return m.apply(target, arguments);
	};

	return res;
};
