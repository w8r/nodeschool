function repeat(operation, num) {
  while (--num) {
    repeat(operation, num);
  }
}
    
// Do not remove the line below
module.exports = repeat
