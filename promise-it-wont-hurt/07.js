// initial promise
// var firstPromise = first();
//
// // returns second promise based on value of first
// var secondPromise = firstPromise.then(function (val) {
//   return second(val);
// });
//
// // resolve
// secondPromise.then(console.log);

first().then(second).then(console.log);
